import { NextSeo } from 'next-seo';
import Page from '@home/components/page';
import Header from '@home/components/header';
import CasesSection from '@home/components/cases-section';
import FeatureSection from '@home/components/feature-section';
import Footer from '@home/components/footer';
import ListSection from '@home/components/list-section';
import PricingTable from '@home/components/pricing-table';
import SocialProof from '@home/components/social-proof';
import VideoSection from '@home/components/video-section';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}