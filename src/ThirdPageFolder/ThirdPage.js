import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import fYear from '.././img/1988.png'
import sYear from '.././img/2009.png'
import tYear from '.././img/2016.png'
import One from './Third_page_one'
import Two from './Third_page_two'
import Three from './Third_page_three'

import fullpage_api from '@fullpage/react-fullpage'

export default class ThirdPage extends Component{
  state = {
    rangeValue: 0
  }
  changeRange = (e) =>{
    let last = this.state.rangeValue
    let newRange = e.target.value
    this.setState({rangeValue : newRange});
    if(newRange < 25 && last < 25){
      //ничего не делаем
    }
    if(newRange > 25 && last < 25){
      if(newRange < 75){
        window.fullpage_api.moveSlideRight();
      }
      if(newRange > 75){
        for (let i=0; i<2; i++ ){
          setTimeout(window.fullpage_api.moveSlideRight(), 1000);
        }
      }
    }
    if(newRange > 25 && last > 25){
      if(newRange > last && newRange > 75){
        window.fullpage_api.moveSlideRight();
      }
    }

    if(newRange > 75 && last > 75){}

    if(newRange < 75 && last > 75){
      if(newRange > 25){
        window.fullpage_api.moveSlideLeft();
      }
      if(newRange < 25){
        for(let i=0; i<2; i++){
          setTimeout(window.fullpage_api.moveSlideLeft(), 1000);

        }
      }
    }
    if(newRange < 75 && last < 75){
      if(newRange < 25){
        window.fullpage_api.moveSlideLeft();
      }
    }

  }
  componentDidMount() {
    window.fullpage_api.setAllowScrolling(false, 'left, right');
  }
  render(){
    window.fullpage_api.setAllowScrolling(false, 'left, right');
    return(
      <div className='Third_page'>
          <One/>
          <Two/>
          <Three/>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={this.state.rangeValue}
          onChange={this.changeRange}
          className='Third_page_input_ranges'>
        </input>
        <div className='Third_page_range_date'>
          <img src={fYear}/>
          <img src={sYear}/>
          <img src={tYear}/>
        </div>
      </div>
    )
  }
}
