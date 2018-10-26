import React,{Component} from 'react'
import contentThree from '.././img/more_copy_3_3_content.png'
import iceberg from '.././img/more_copy_3_3.png'
import header from '.././img/more_copy_3_3_head.png'

export default class Three extends Component{
  render(){
    return(
      <div className='slide'>
        <div className='Third_page_three'>
          <img src={header} className='Third_page_three_header'></img>
          <img src={contentThree} className='Third_page_three_content'></img>
          <img src={iceberg} className='Third_page_three_iceberg'></img>

        </div>
      </div>
    )
  }
}
