import { useEffect } from "react";


// Add indicator to page that occupies most of the viewport
export default function vp_indicator() {

  useEffect(() => {
    let windowHeight = window.innerHeight;
    const occupierChecker = (elem) => {
      let elemCoords = elem.getBoundingClientRect();
      if (elemCoords.bottom > windowHeight / 2 && elemCoords.top < windowHeight / 2) {
        return true;
      } else {
        return false;
      }
    };

    const handleScroll = () => {
      let elems = document.querySelectorAll(".occupier");
      for (let elem of elems) {
        if (occupierChecker(elem)) {
          elem.children[1].classList.add("visible-indicator");
          document.querySelector('#nav-' + elem.id).classList.add('nav-indicator');
        } else {
          elem.children[1].classList.remove("visible-indicator");
          document.querySelector('#nav-' + elem.id).classList.remove('nav-indicator');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}