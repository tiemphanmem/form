
import HeroBanner from '@/components/HeroBanner';
import FeaturedProducts from './FeaturedProducts';
import AboutSection from './AboutSection'
import Contact from './Contact'
import CategoryMenu from '@/components/CategoryMenu';
// import ArtSlider from './slide/ArtSlider'
import FullWidthSlider from './slide/FullWidthSlider';
import CertificationAndPartners from './CertificationAndPartners';
import SteelIdentification from './SteelIdentification';
import SteelHover from './SteelHover';
import SteelBrand from './SteelBrand';
import Forum from './Forum';

export default function Home() {
  return (
    <>
      {/* <CategoryMenu /> */}
      {/* <HeroBanner /> */}
      <FullWidthSlider />
      <AboutSection />
      <CertificationAndPartners />
      {/* <SteelIdentification /> */}
      <SteelBrand />
      {/* <SteelHover /> */}
      <FeaturedProducts />
      <Forum />
      <Contact />
    </>
  );
}
