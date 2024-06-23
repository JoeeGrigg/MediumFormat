// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import JS
import macyFeed from "./macy";
import infiniteScroll from "./infiniteScroll";
import lightbox from "./lightbox";
import mobileMenu from "./mobileMenu";

let macy = macyFeed();
infiniteScroll(macy);
lightbox();
mobileMenu();
