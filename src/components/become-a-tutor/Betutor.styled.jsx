import styled from "styled-components";
import Tutorimg from '../../assets/tutorbg.png'


export const BeTutor = styled.div`

@media only screen and (min-width: 600px) and (orientation: landscape) {
    background-image: url(${Tutorimg});
    background-attachment: fixed;
 color:white;
height:500px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
.content{
    
    width:90%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    .header{
       font-size: 40px; 
   
    }
    .write-up{
        font-size:larger;
        text-align:center;
        line-height:30px;
     
    }
    .btn{
        border-radius: 10px;
        border:2px solid #00130A;
    
        color:#00130A;
        cursor: pointer;
        font-size: 23px;
        width:170px;
        height:60px;
        background-color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        transition:0.6s all ease-in;
        &:hover{
            background-color:#00130A;
            color:white;
            transition:0.6s all ease-in;
        }
    }
}
    
}
@media only screen and (max-width: 1050px) and (max-height: 3050px) and (orientation: portrait) {
    
    background-image: url(${Tutorimg});
    background-attachment: fixed;
 color:white;
height:500%;
width:100%;
display:flex;
justify-content:center;
align-items:center;

.content{
    
    width:90%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 15vw;
    margin-top: 15vw;
    .header{
       font-size: 10vw; 
   
    }
    .write-up{
        font-size:5vw;
        text-align:center;
        line-height:5vw;
     margin-bottom: 5vw;
    }
    .btn{
        border-radius: 10px;
        border:2px solid #00130A;
    
        color:#00130A;
        cursor: pointer;
        font-size: 23px;
        width:170px;
        height:60px;
        background-color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        transition:0.6s all ease-in;
        &:hover{
            background-color:#00130A;
            color:white;
            transition:0.6s all ease-in;
        }

    }
}


}
    
`