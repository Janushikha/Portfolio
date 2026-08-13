export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container max-w-5xl blog-post">{children}</div>;
}
