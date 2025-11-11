import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="body flex min-h-screen flex-col lg:ml-[25%]">
        {children}
        <Footer />
      </div>
    </>
  );
}
