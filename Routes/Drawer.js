import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import AnimalProducts from "../screens/AnimalProducts";
import CropProducts from "../screens/CropProducts";
import WhyPure from "../screens/WhyPure";
import ContactUs from "../screens/ContactUs";

const Drawer = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  'Animal Products': {
    screen: AnimalProducts,
  },
  'Crop Products': {
    screen: CropProducts,
  },
  'Why Pure': {
    screen: WhyPure,
  },
  'Contact Us': {
    screen: ContactUs,
  },
});

export default createAppContainer(Drawer);
