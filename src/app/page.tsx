import { FamilyPacks } from "@/components/FamilyPacks";
import { FishBuilder } from "@/components/FishBuilder";
import { Footer } from "@/components/Footer";
import { FullMenu } from "@/components/FullMenu";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RestaurantJsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { Signatures } from "@/components/Signatures";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FishBuilder />
        <Signatures />
        <FullMenu />
        <FamilyPacks />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <RestaurantJsonLd />
    </>
  );
}
