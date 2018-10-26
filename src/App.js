import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StartPage from './StartPageFolder/StartPage'
import SecondPage from './SecondPageFolder/SecondPage'
import ThirdPage from './ThirdPageFolder/ThirdPage'
import NextSibling from './NextSibling'

import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';


const Fullpage = (fullpageProps) => (
  <ReactFullpage
    {...fullpageProps}
    render={() => {
      return (
        <ReactFullpage.Wrapper >
          <div className="section active" >
            <StartPage/>
          </div>
          <div className="section" >
            <SecondPage/>
          </div>
          <div className="section" >
            <ThirdPage/>
          </div>
          <NextSibling id='Sibling'/>
        </ReactFullpage.Wrapper>

      );
    }}
  />
);

export default Fullpage
