import React from 'react';

// Import header navigation for various viewports
import HeaderNavMobile from './components/header-nav-mobile';
import HeaderNavDesktop from './components/header-nav-desktop';

/* 
  Component Description:
    This is the area displayed within the top header bar
    which includes navigation elements.

  Incoming Props:
    - toggleSandwichMenu ... a callback function which opens or closes the sandwich menu
*/

export default function HeaderNav(props) {

  return (
    <header className="HeaderNav">
      <HeaderNavMobile toggleSandwichMenu={props.toggleSandwichMenu} />
      <HeaderNavDesktop />
    </header>
  );

}
