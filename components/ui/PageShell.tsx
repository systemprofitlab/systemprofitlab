import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="mesh" />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
