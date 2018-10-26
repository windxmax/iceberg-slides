import React,{Component} from 'react'
import contentTwo from '.././img/more_copy_3_2_content.png'
import iceberg from '.././img/more_copy_3_2.png'
import header from '.././img/more_copy_3_2_head.png'

export default class Two extends Component{
  render(){
    return(
      <div className='slide'>
        <div className='Third_page_two'>
          <img src={header} className='Third_page_two_header'></img>
          <img src={contentTwo} className='Third_page_two_content'></img>
          <img src={iceberg} className='Third_page_two_iceberg'></img>

        </div>
      </div>
    )
  }
}
