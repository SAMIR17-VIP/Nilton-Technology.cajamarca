import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SoftwareGrid } from "./components/SoftwareGrid";
import { EngineeringSection } from "./components/EngineeringSection";
import { CreativeSuite } from "./components/CreativeSuite";
import { SecuritySection } from "./components/SecuritySection";
import { ProductsSection } from "./components/ProductsSection";
import { RemoteSupport } from "./components/RemoteSupport";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SoftwareGrid />
        <EngineeringSection />
        <CreativeSuite />
        <SecuritySection />
        <ProductsSection />
        <RemoteSupport />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
