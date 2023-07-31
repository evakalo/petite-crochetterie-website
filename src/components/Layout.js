import ResponsiveNavigation from "./ResponsiveNavigation";
import Header from "./Header";

import layoutStyles from "../styles/Layout.module.css";
import Socials from "./Socials";
export default function Layout() {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <ResponsiveNavigation />
      <Socials />
    </div>
  );
}
