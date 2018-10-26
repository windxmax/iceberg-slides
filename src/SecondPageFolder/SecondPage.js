import React, {Component} from 'react'
import headerTxt from '.././img/more_copy_2_text.png'

export default class SecondPage extends Component{
  render(){
    return(
      <div className = 'Second_page'>
        <div className='Second_page_header_block'>
          <img src={headerTxt} className='Second_page_header_text'/>
        </div>
      </div>
    )
  }
}
