/**
 * Model Distillation Interactive Guide - Core Logic
 * 
 * This module handles all interactive visualizations, math rendering,
 * and state management for the distillation guide.
 */

const DistillationApp = (() => {
  // --- Constants & Configuration ---
  const TEACHER_LOGITS = [4.5, 2.1, 0.3, 1.8, -0.5];
  const STUDENT_LOGITS = [1.8, 1.2, 0.4, 1.0, -0.2];
  const CLASS_NAMES = ['cat', 'dog', 'car', 'bird', 'fish'];
  const BRAND_COLORS = ['#0e7490', '#0891b2', '#0d9488', '#06b6d4', '#94a3b8'];
  
  const TEACHER_LAYER_COLORS = ['#083344','#0a3d50','#0c475c','#0e5168','#105b74','#126580','#146f8c','#167998','#1883a4','#1a8db0','#1c97bc','#1ea1c8'];
  const STUDENT_LAYER_COLORS = ['#0e7490','#0f849f','#1094ae','#11a4bd','#22b4cc','#33c4db'];

  // --- State Management ---
  const state = {
    temperature: 3.0,
    alpha: 0.3,
    pipelineStep: 1,
    mathRenderAttempts: 0
  };

  // --- Mathematical Utilities ---
  
  /**
   * Softmax with Temperature Scaling
   * @param {number[]} logits - Raw input scores
   * @param {number} T - Temperature factor
   * @returns {number[]} Probability distribution
   */
  const calculateSoftmax = (logits, T) => {
    const scaled = logits.map(v => v / T);
    const maxVal = Math.max(...scaled);
    const exponents = scaled.map(v => Math.exp(v - maxVal));
    const total = exponents.reduce((a, b) => a + b);
    return exponents.map(v => v / total);
  };

  // --- UI Rendering Engines ---

  /**
   * Renders a bar chart into a specific container
   */
  const renderBarChart = (containerId, probabilities) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    const maxProbability = Math.max(...probabilities, 0.01);
    
    probabilities.forEach((prob, index) => {
      const column = document.createElement('div');
      column.className = 'bar-col';
      
      const valueLabel = document.createElement('div');
      valueLabel.className = 'bar-val';
      valueLabel.textContent = prob.toFixed(3);
      
      const barFill = document.createElement('div');
      barFill.className = 'bar-fill';
      barFill.style.height = Math.max(2, (prob / maxProbability) * 170) + 'px';
      barFill.style.background = BRAND_COLORS[index];
      
      const label = document.createElement('div');
      label.className = 'bar-lbl';
      label.textContent = CLASS_NAMES[index];
      
      column.append(valueLabel, barFill, label);
      container.appendChild(column);
    });
  };

  /**
   * Renders a simplified output bar chart (used in pipeline)
   */
  const renderOutputBars = (containerId, probabilities, colors) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    const maxProbability = Math.max(...probabilities, 0.01);
    
    probabilities.forEach((prob, index) => {
      const column = document.createElement('div');
      column.className = 'output-bar-col';
      
      const valueLabel = document.createElement('div');
      valueLabel.className = 'output-bar-val';
      valueLabel.textContent = prob.toFixed(2);
      
      const bar = document.createElement('div');
      bar.className = 'output-bar';
      bar.style.height = Math.max(4, (prob / maxProbability) * 85) + 'px';
      bar.style.background = colors[index] || BRAND_COLORS[index];
      
      const label = document.createElement('div');
      label.className = 'output-bar-lbl';
      label.textContent = CLASS_NAMES[index];
      
      column.append(valueLabel, bar, label);
      container.appendChild(column);
    });
  };

  /**
   * Renders a stack of layers for the model visualization
   */
  const renderLayerStack = (containerId, numLayers, colors) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    for (let i = 0; i < numLayers; i++) {
      const layer = document.createElement('div');
      layer.className = 'layer';
      layer.style.background = colors[i % colors.length];
      layer.style.opacity = 0.4 + (i / numLayers) * 0.6;
      container.appendChild(layer);
    }
  };

  // --- Module Logic Controllers ---

  /**
   * Logic for the Temperature viz section
   */
  const updateTemperatureVisuals = () => {
    const slider = document.getElementById('ts');
    if (!slider) return;

    state.temperature = parseFloat(slider.value);
    
    // Update numeric readouts
    const displays = ['tv', 'th'];
    displays.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = state.temperature.toFixed(1);
    });

    // Update charts
    renderBarChart('hb', calculateSoftmax(TEACHER_LOGITS, 1.0));
    renderBarChart('sb', calculateSoftmax(TEACHER_LOGITS, state.temperature));
  };

  /**
   * Logic for the Alpha/Loss visualization
   */
  const updateAlphaVisuals = () => {
    const slider = document.getElementById('asl');
    if (!slider) return;

    state.alpha = parseFloat(slider.value);
    
    const hardPct = (state.alpha * 100).toFixed(0);
    const softPct = ((1 - state.alpha) * 100).toFixed(0);
    
    // Update readout
    const readout = document.getElementById('av');
    if (readout) readout.textContent = state.alpha.toFixed(2);
    
    // Update track segments
    const hardSeg = document.getElementById('a-hard');
    const softSeg = document.getElementById('a-soft');
    if (hardSeg) hardSeg.style.width = Math.max(hardPct, 5) + '%';
    if (softSeg) softSeg.style.width = Math.max(softPct, 5) + '%';
    
    // Update inner text
    const hardText = document.getElementById('a-ht');
    const softText = document.getElementById('a-st');
    if (hardText) hardText.textContent = hardPct > 8 ? `ℒ hard · ${hardPct}%` : '';
    if (softText) softText.textContent = softPct > 8 ? `T²·ℒ soft · ${softPct}%` : '';
    
    // Update formula
    const formulaEl = document.getElementById('a-formula');
    if (formulaEl && typeof katex !== 'undefined') {
      katex.render(
        `\\mathcal{L} = ${state.alpha.toFixed(2)} \\cdot \\mathcal{L}_{\\text{hard}} + ${(1 - state.alpha).toFixed(2)} \\cdot T^2 \\cdot \\mathcal{L}_{\\text{soft}}`,
        formulaEl,
        { displayMode: true, throwOnError: false }
      );
    }
  };

  /**
   * Logic for the Capacity Gap section
   */
  const updateCapacityGapVisuals = () => {
    const slider = document.getElementById('cap-sl');
    if (!slider) return;

    const n = parseInt(slider.value);
    const ratio = (12 / n).toFixed(1).replace('.0', '');
    
    // Update labels
    document.getElementById('cap-v').textContent = n;
    document.getElementById('cap-n').textContent = n;
    document.getElementById('cap-ratio').textContent = `${ratio}:1`;
    
    // Define quality metrics (schematic)
    const qualityMap = {12:100, 11:99.5, 10:99, 9:98.5, 8:98, 7:97.5, 6:97, 5:95, 4:92, 3:85, 2:72, 1:48};
    const q = qualityMap[n] || 50;
    
    // Render dynamic bar chart
    const vis = document.getElementById('cap-vis');
    vis.innerHTML = '';
    
    const datasets = [
      [100, 'var(--dark)', 'Teacher (12L)', '100%'],
      [q, q < 90 ? 'var(--warn)' : 'var(--c2)', `Student (${n}L)`, `${q.toFixed(1)}%`],
      [(100 - q), 'rgba(185,28,28,0.15)', 'Gap', `${(100 - q).toFixed(1)}%`]
    ];

    datasets.forEach(([val, col, lbl, txt]) => {
      const colEl = document.createElement('div');
      colEl.className = 'cap-col';
      
      const valEl = document.createElement('div');
      valEl.className = 'cap-val';
      valEl.textContent = txt;
      valEl.style.color = (val < 90 && lbl !== 'Gap') ? 'var(--warn)' : 'var(--ink2)';
      
      const bar = document.createElement('div');
      bar.className = 'cap-fill';
      bar.style.height = (val / 100 * 150) + 'px';
      bar.style.background = col;
      
      const labelEl = document.createElement('div');
      labelEl.className = 'cap-lbl';
      labelEl.textContent = lbl;
      
      colEl.append(valEl, bar, labelEl);
      vis.appendChild(colEl);
    });

    // Update narrative note
    const note = document.getElementById('cap-note');
    let msg = `<strong>Figure 9.</strong> Illustrative schematic: `;
    if (n === 12) msg += `at 12 layers (1:1), the student matches the teacher exactly. This is the no-compression baseline.`;
    else if (n >= 9) msg += `at ${n} layers (${ratio}:1), about ${q.toFixed(1)}% is retained. Compression is light and risk is low.`;
    else if (n >= 7) msg += `at ${n} layers (${ratio}:1), about ${q.toFixed(1)}% is retained. This is a comfortable middle ground.`;
    else if (n === 6) msg += `6 layers (2:1) lands in the DistilBERT regime at about ${q.toFixed(1)}% retained. A strong practical tradeoff.`;
    else if (n >= 4) msg += `${n} layers (${ratio}:1) drops to about ${q.toFixed(1)}%. TinyBERT-style transfer is recommended at this level.`;
    else if (n === 3) msg += `3 layers (4:1) retains only about ${q.toFixed(1)}%. Aggressive compression can leave the student too weak.`;
    else msg += `at ${n} layer, only about ${q.toFixed(1)}% is retained. This is the capacity cliff.`;
    
    note.innerHTML = msg;
  };

  /**
   * Pipeline Step Controller
   */
  const updatePipelineStep = () => {
    // 1. Toggle content visibility
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    const currentPanel = document.getElementById('step' + state.pipelineStep);
    if (currentPanel) currentPanel.classList.add('active');
    
    // 2. Update navigation dots
    document.querySelectorAll('.step-dot').forEach((dot, i) => {
      dot.classList.remove('active', 'completed');
      dot.removeAttribute('aria-current');
      if (i + 1 === state.pipelineStep) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'step');
      } else if (i + 1 < state.pipelineStep) {
        dot.classList.add('completed');
      }
    });
    
    // 3. Update progress bar
    const progress = document.getElementById('progressFill');
    if (progress) progress.style.width = (state.pipelineStep * 25) + '%';
    
    // 4. Update buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.disabled = (state.pipelineStep === 1);
    if (nextBtn) nextBtn.disabled = (state.pipelineStep === 4);
    
    // 5. Context-specific rendering
    const step = state.pipelineStep;
    if (step === 1) {
      renderLayerStack('teacher-layers-1', 12, TEACHER_LAYER_COLORS);
      renderLayerStack('student-layers-1', 6, STUDENT_LAYER_COLORS);
    } else if (step === 2) {
      const teacherProbs = calculateSoftmax(TEACHER_LOGITS, state.temperature);
      renderOutputBars('teacher-output-bars', teacherProbs, BRAND_COLORS);
      
      // Update pipeline temperature readouts
      const valReadout = document.getElementById('temp-value');
      const dispReadout = document.getElementById('temp-display-2');
      if (valReadout) valReadout.textContent = state.temperature.toFixed(1);
      if (dispReadout) dispReadout.textContent = state.temperature.toFixed(1);
    } else if (step === 3) {
      const teacherProbs = calculateSoftmax(TEACHER_LOGITS, state.temperature);
      const studentProbs = calculateSoftmax(STUDENT_LOGITS, state.temperature);
      renderOutputBars('teacher-bars-compare', teacherProbs, BRAND_COLORS);
      renderOutputBars('student-bars-compare', studentProbs, BRAND_COLORS);
      
      const klEl = document.getElementById('kl-formula');
      if (klEl && typeof katex !== 'undefined') {
        katex.render('D_{\\text{KL}}(P_{\\text{teacher}} \\| P_{\\text{student}}) = \\sum_i P_T(i) \\cdot \\log \\frac{P_T(i)}{P_S(i)}', klEl, {displayMode: true, throwOnError: false});
      }
    } else if (step === 4) {
      const lfEl = document.getElementById('loss-formula-display');
      if (lfEl && typeof katex !== 'undefined') {
        katex.render('\\mathcal{L} = \\alpha \\cdot \\mathcal{L}_{\\text{hard}} + (1 - \\alpha) \\cdot T^2 \\cdot \\mathcal{L}_{\\text{soft}}', lfEl, {displayMode: true, throwOnError: false});
      }
      // Sync alpha display in step 4
      document.getElementById('alpha-value').textContent = state.alpha.toFixed(2);
      document.getElementById('hard-loss-val').textContent = (state.alpha * 100).toFixed(0) + '%';
      document.getElementById('soft-loss-val').textContent = ((1 - state.alpha) * 100).toFixed(0) + '%';
      document.getElementById('hard-loss-bar').style.height = (state.alpha * 80) + 'px';
      document.getElementById('soft-loss-bar').style.height = ((1 - state.alpha) * 80) + 'px';
    }
  };

  // --- External Event Interfaces ---

  window.goToStep = (n) => { state.pipelineStep = n; updatePipelineStep(); };
  window.nextStep = () => { if (state.pipelineStep < 4) { state.pipelineStep++; updatePipelineStep(); } };
  window.prevStep = () => { if (state.pipelineStep > 1) { state.pipelineStep--; updatePipelineStep(); } };
  
  window.updateTemp = (val) => {
    state.temperature = parseFloat(val);
    // Sync the other temperature slider if it exists
    const mainSlider = document.getElementById('ts');
    if (mainSlider) mainSlider.value = val;
    updateTemperatureVisuals();
    updatePipelineStep(); // Refresh current view
  };

  window.updateAlpha = (val) => {
    state.alpha = parseFloat(val);
    const mainAlphaSlider = document.getElementById('asl');
    if (mainAlphaSlider) mainAlphaSlider.value = val;
    updateAlphaVisuals();
    if (state.pipelineStep === 4) updatePipelineStep();
  };

  window.cfg = (s) => {
    document.querySelectorAll('.cb').forEach(b => b.classList.remove('pk'));
    const btn = document.querySelector(`[data-s="${s}"]`);
    if (btn) btn.classList.add('pk');
    document.querySelectorAll('.co').forEach(r => r.classList.remove('sh'));
    const co = document.getElementById('r-' + s);
    if (co) co.classList.add('sh');
  };

  window.kTab = (b) => {
    document.querySelectorAll('#kt .tab').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.tp').forEach(p => p.classList.remove('on'));
    b.classList.add('on');
    const panel = document.getElementById('tp-' + b.dataset.k);
    if (panel) panel.classList.add('on');
  };

  /**
   * Initializes the KaTeX rendering loop
   */
  const renderAllMath = () => {
    if (typeof katex === 'undefined') {
      if (state.mathRenderAttempts < 25) {
        state.mathRenderAttempts++;
        return setTimeout(renderAllMath, 200);
      }
      return;
    }

    // Static formulas
    const formulas = [
      ['softmax-formula', 'p_i = \\frac{\\exp(z_i / T)}{\\displaystyle\\sum_j \\exp(z_j / T)}'],
      ['loss-formula', '\\mathcal{L} = \\alpha \\cdot \\mathcal{L}_{\\text{hard}} + (1-\\alpha) \\cdot T^2 \\cdot \\mathcal{L}_{\\text{soft}}']
    ];

    formulas.forEach(([id, tex]) => {
      const el = document.getElementById(id);
      if (el) katex.render(tex, el, { displayMode: true, throwOnError: false });
    });

    // Auto-render everything else
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }

    // Dynamic updates
    updateAlphaVisuals();
  };

  /**
   * Setup IntersectionObservers for scroll animations
   */
  const setupObservers = () => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.rv').forEach(el => el.classList.add('s'));
      return;
    }

    // Standard reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('s');
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

    // Count-up animation
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.to);
        const decimals = parseInt(el.dataset.d || '0');
        const duration = 1100;
        const start = performance.now();

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
          el.textContent = (ease * target).toFixed(decimals);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.cu').forEach(el => countObserver.observe(el));

    // DeepSeek animation sequence
    const dsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.dsi, .dsa').forEach(el => {
          setTimeout(() => el.classList.add('v'), parseInt(el.dataset.d || '0'));
        });
        dsObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('#dsfig').forEach(el => dsObserver.observe(el));
  };

  /**
   * Bootstrap the Application
   */
  const init = () => {
    console.log('Distillation Portfolio App Initializing...');
    
    // Bind core event listeners
    const tempSlider = document.getElementById('ts');
    if (tempSlider) tempSlider.addEventListener('input', updateTemperatureVisuals);

    const alphaSlider = document.getElementById('asl');
    if (alphaSlider) alphaSlider.addEventListener('input', updateAlphaVisuals);

    const capSlider = document.getElementById('cap-sl');
    if (capSlider) capSlider.addEventListener('input', updateCapacityGapVisuals);

    // Initial Renders
    renderAllMath();
    setupObservers();
    updateTemperatureVisuals();
    updateCapacityGapVisuals();
    updatePipelineStep();
    
    // Default config
    cfg('mob');
    
    console.log('Distillation Portfolio App Ready.');
  };

  return { init };
})();

// Launch when DOM is ready
document.addEventListener('DOMContentLoaded', DistillationApp.init);
