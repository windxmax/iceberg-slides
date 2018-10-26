import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Fullpage from './App.js'


const FullpageOptions = {
  navigation: true,
  navigationPosition: 'right',
  controlArrows: false,
  loopHorizontal: false,
  dragAndMove: false,
  onLeave: function(origin, destination, direction){
		if(origin.index == 0 && direction == 'down'){
      let Sibling = document.getElementById('Sibling')
      Sibling.style.visibility = 'hidden'
		}
    if(destination.index == 0 && direction == 'up'){
      let Sibling = document.getElementById('Sibling')
      Sibling.style.visibility = 'visible'
    }
  }
}

ReactDOM.render(<Fullpage {...FullpageOptions}/>, document.getElementById('root'));

serviceWorker.unregister();
