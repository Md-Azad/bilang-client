import Banner from "./Banner";
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
      <Group></Group>
      <Guarantee></Guarantee>
    </div>
  );
};

export default Home;
