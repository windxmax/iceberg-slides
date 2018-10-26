import React, {Component} from 'react'
import next from './img/next.png'

export default class NextSibling extends Component{
  render(){
    return(
      <img
       id='Sibling'
       src={next}
       className='Next_sibling'
       width={document.documentElement.clientWidth}
      />
    )
  }
}
