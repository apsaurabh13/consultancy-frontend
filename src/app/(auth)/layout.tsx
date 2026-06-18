import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | ConsultEdge",
  description: "Sign in or create your ConsultEdge account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {children}
    </div>
  );
}
