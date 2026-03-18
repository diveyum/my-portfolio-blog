export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose max-w-2xl mx-auto">
      {children}
    </article>
  );
}
