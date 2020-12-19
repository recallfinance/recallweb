import React, { useState } from 'react';
import './navbar.css';
import NavLogo from '../assets/navlogo.png'
import { Link } from 'react-router-dom';

const Example = (props) => {

  return (
<div className="top">

  <a href="/"><img src={NavLogo} className="nav-logo" /></a>
  <nav class="site-nav">
    <ul>
      <li><a href="https://app.uniswap.org/#/swap?inputCurrency=0x02614aeb11cfbffdb68bbee50a498ae947181dae">$Buy Recall</a></li>
      <li><a href="https://www.dextools.io/app/uniswap/pair-explorer/0xcf0c7670e2c7d3eb8edea0b252603f22380f41a1" target="_blank" rel="noopener noreferrer">DexTools</a></li>
      <li><a href="https://recallfinance.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a></li>
      <li><a href="https://t.me/recallfinance" target="_blank" rel="noopener noreferrer">Telegram</a></li>
      <li><a href="https://github.com/recallfinance" target="_blank" rel="noopener noreferrer">Github</a></li>
      <li><a href="https://twitter.com/recallfinance" target="_blank" rel="noopener noreferrer">Twitter</a></li>
    </ul>
  </nav>
    </div>
  );
}

export default Example;