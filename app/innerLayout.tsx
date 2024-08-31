import Header from "./components/header/header";

// separate export of testable content
const InnerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full w-full flex-col bg-base-100 text-base-content">
      <Header />
      <div className="w-full">
        <main className="mx-auto max-w-8xl p-4 sm:px-6 md:px-8">{children}</main>
      </div>
    </div>
  );
};

export default InnerLayout;
