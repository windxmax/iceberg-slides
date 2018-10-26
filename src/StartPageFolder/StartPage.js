import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import textHeadline from '.././img/Txt_headline.png'
import './Point.css'


export default class StartPage extends Component{
  render(){
    return(
      <div className = 'Start_page'>
        <img src={textHeadline} className='Txt_headline'/>
        <div className='Start_page_point_1'>
          <div className='Start_page_point_2_0'></div>
          <div className='Start_page_point_2_1'></div>
          <div className='Start_page_point_2_2'></div>
        </div>
        <div className='Start_page_point_2'>
          <div className='Start_page_point_2_2_0'></div>
          <div className='Start_page_point_2_2_1'></div>
          <div className='Start_page_point_2_2_2'></div>
        </div>
        <div className='Start_page_point_3'>
          <div className='Start_page_point_2_3_0'></div>
          <div className='Start_page_point_2_3_1'></div>
          <div className='Start_page_point_2_3_2'></div>
        </div>
        <div className='Start_page_point_4'>
          <div className='Start_page_point_2_4_0'></div>
          <div className='Start_page_point_2_4_1'></div>
          <div className='Start_page_point_2_4_2'></div>
        </div>
      </div>
    )
  }
}
