export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   console.log("LoginLayout rendered");
  return (
  <>
        {children}
  </>
  );
}