import styled from "styled-components";
import Tutor from '../../assets/tutor.jpg'
import Flower from '../../assets/flower-background.png'


export const LandingPageStyled = styled.div `
  @media only screen and (min-width: 600px) and (orientation: landscape) {
display:flex;
justify-content: center;
align-items: center;

.content{
width:100vw;

display:flex;
flex-direction: column;
align-items:center;

.nav{
           display:flex;
justify-content: center;
align-items: center; 

height:70px;
width:100%;
background-color: #00130A;
margin-bottom: 60px;
&__content{
    width: 90%;
    display:flex;
justify-content: space-between;
align-items: center;

.logo{
    display:flex;
justify-content: center;
align-items: center;
}
.steps{
    width: 90%;
display:flex;
justify-content: space-between;
align-items: center;
.step{
    color: #ffff;
    width: 10%;
    display:flex;
justify-content: space-between;
align-items: center;
}
}
}

}


.header{
    width: 100%;
display:flex;
justify-content: center;
align-items: center;
  background-image:url(${Flower});
   background-size: cover;
   background-position:left;
&__content{
   width: 90%;
    display:flex;
justify-content: space-between;
align-items: center;

.IMG-div{
    border: 7px solid #00130A;
    border-radius:20px;
   width:30%;
   height: 45vw;
   background-image:url(${Tutor});
 background-repeat: no-repeat;
}
.writeup-div{
    font-size: 1.5vw;
 width:50%;
 height:fit-content;
 background-color:#ffff;
&__header{
margin-bottom: 3vw;
font-size: 3vw;
}

 &__write-up{
line-height:2vw;
word-spacing: 0.8vw;
}.btn{
border: 2px solid #0c693b;
font-size: 20px;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
transition: 0.6s all ease-in;
cursor: pointer;
background-color: #000A05;
color: white;
padding-left: 7px;
padding-right: 7px;
width:10vw;
height: 3vw;
margin-top: 20px;
&:hover{
background-color: white;
color:#000A05 ;
}
}
 
 
 
}

}
}

}


  }



@media only screen and (max-width: 1050px) and (max-height: 3050px) and (orientation: portrait) {



}

`