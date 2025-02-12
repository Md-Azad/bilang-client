import Banner from "./Banner";
import BundleOffer from "./BundleOffer/BundleOffer";
import Group from "./Group";
import Guarantee from "./Guarantee";
import LanguageCategory from "./LanguageCategory";
import Stats from "./Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <LanguageCategory></LanguageCategory>
      <Guarantee></Guarantee>
      <Group></Group>

      <BundleOffer />
    </div>
  );
};

export default Home;
