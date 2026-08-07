import { StorefrontContentSection } from "./sections/StorefrontContentSection";
import { StorefrontHeroSection } from "./sections/StorefrontHeroSection";

export const Home3 = () => {
  return (
    <main
      className="relative flex flex-col items-center overflow-hidden bg-black"
      data-model-id="407:344"
    >
      <StorefrontHeroSection />
      <StorefrontContentSection />
    </main>
  );
};
