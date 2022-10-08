import styled from "styled-components";

export const ABout = styled.div`

    

@media only screen and (min-width: 600px) and (orientation: landscape) {
   background-color: #E7EFEB;
 color:#00130A;
height:550px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
 opacity: 0;
.content{
    border-left: 2px solid #000A05;
    border-right: 2px solid #000A05;
    width:90%;
    height:54%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
   
    .header{
       font-size: 40px; 
  
       span{
     
       }
    }
    .write-up{
        font-size:larger;
       
        line-height:30px;
        text-align:center;
          span{
     
       }
    }
}
    

   }
   @media only screen and (max-width: 1050px) and (max-height: 3050px) and (orientation: portrait) {
   
      background-color: #E7EFEB;
 color:#00130A;
height:600%;
width:100%;
display:flex;
justify-content:center;
align-items:center;

 opacity: 0;
.content{
    border-left: 2px solid #000A05;
    border-right: 2px solid #000A05;
    width:90%;
    height:54%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    margin-bottom:15vw;
    margin-top:15vw;
    .header{
       font-size: 10vw; 
  
       span{
     
       }
    }
    .write-up{
        font-size:larger;
       
        line-height:5vw;
        text-align:center;
          span{
     
       }
    }
}
   }
    
`