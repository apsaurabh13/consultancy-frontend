import ConsultantLayout from "../../components/layouts/ConsultantLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConsultantLayout>
      {children}
    </ConsultantLayout>
  );
}