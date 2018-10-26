import React,{Component} from 'react'
import contentOne from '.././img/more_copy_3_1_content.png'
import iceberg from '.././img/more_copy_3_1.png'
import header from '.././img/more_copy_3_1and3_head.png'

export default class One extends Component{
  render(){
    return(
      <div className='slide active'>
        <div className='Third_page_one'>
          <img src={header} className='Third_page_one_header'></img>
          <img src={contentOne} className='Third_page_one_content'></img>
          <img src={iceberg} className='Third_page_one_iceberg'></img>
        </div>
      </div>
    )
  }
}
