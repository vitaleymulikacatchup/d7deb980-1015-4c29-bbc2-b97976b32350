"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingOverlay
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={100}
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'Roadmap', id: 'roadmap' },
          { name: 'How To Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
        buttonText="Join the Pack"
        onButtonClick={() => { /* Handle click */ }}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to DogMemeCoin" subtitle="The meme coin that brings joy!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout title="Join our community" descriptions={["Follow us on social media!", "Get involved in the fun!"]} />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline items={[{ year: '2023', title: 'Launch', description: 'Official launch of DogMemeCoin' }, { year: '2024', title: 'Expansion', description: 'Expanding our community and use cases' }]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{ title: 'Step 1', description: 'Visit our website', image: "/images/placeholder1.avif", position: 'left', isCenter: false }, { title: 'Step 2', description: 'Set up a wallet', image: "/images/placeholder2.avif", position: 'center', isCenter: true }, { title: 'Step 3', description: 'Purchase DogMemeCoin', image: "/images/placeholder3.avif", position: 'right', isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics" description="Learn about our token distribution and uses." tokenData={[{ value: '100M', description: 'Total Supply' }, { value: '10%', description: 'Charity' }, { value: '15%', description: 'Development' }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="DogMemeCoin" logoText="DogMemeCoin" items={[{ label: 'Privacy Policy', onClick: () => { /* Handle click */ } }, { label: 'Terms of Service', onClick: () => { /* Handle click */ } }, { label: 'Contact', onClick: () => { /* Handle click */ } }]} />
      </div>
    </SiteThemeProvider>
  );
}
