import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import NewsTicker from "@/components/NewsTicker";
import ContentSection from "@/components/ContentSection";
import TournamentSection from "@/components/TournamentSection";
import AdBanner from "@/components/AdBanner";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";
import FloatingDownload from "@/components/FloatingDownload";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <NewsTicker />
        <ContentSection />
        <TournamentSection />
        <AdBanner />
        <ArticleSection />
      </main>
      <Footer />
      <FloatingDownload />
    </>
  );
}
