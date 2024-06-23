import Macy from 'macy';

let container = document.querySelector('.gh-postfeed');

export default function macyFeed() {

    if (!container) { return; }

    const macy = new Macy({
      container: container,
      trueOrder: false,
      waitForImages: false,
      margin: 16,
      columns: 3,
      breakAt: {
        1300: 2,
        700: 1
      }
    });

    return macy;
}
