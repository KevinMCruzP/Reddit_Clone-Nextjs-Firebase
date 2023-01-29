import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
    </>
  );
}
