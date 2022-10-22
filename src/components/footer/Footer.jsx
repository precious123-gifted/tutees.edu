import React, { Component } from 'react'
import { FOoter } from './Footer.styled.jsx'
import logo from '../../assets/logo1.png'
import { useContext } from 'react'
import { AppContext } from '../../App.jsx'
import { useRef,useEffect } from 'react'




export default function Footer() {


  const { header } = useContext(AppContext)
  const { foot } = useContext(AppContext)


  const functionToScrollToTop = () => {
    let logo = foot.current.querySelector('.name-logo')
    let Header = header.current


    logo.addEventListener('click', () => {
      Header.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest", duration: 1.5 })

    })

  }


  useEffect(() => {
    functionToScrollToTop()
    return () => {
      
    };
  }, []);

  return (
    <FOoter ref={foot}>
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





  


