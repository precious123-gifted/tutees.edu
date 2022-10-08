import React, { Component } from 'react'
import { FOoter } from './Footer.styled.jsx'
import logo from '../../assets/logo1.png'


export class Footer extends Component {
  render() {
    return (
      <FOoter>
        <div className="content">
          <div className="name-logo">
            <span><img src={logo} alt="" srcset="" /></span>
           
          </div>
          <div className="all-rights">
            <span>All Rights Reserved – ©TUTEES Educational Intervention 2022</span>
          </div>
        </div>
      </FOoter>
    )
  }
}

export default Footer
