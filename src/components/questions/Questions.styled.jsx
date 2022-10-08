import styled from "styled-components";

export const QUestions = styled.div`


@media only screen and (min-width: 600px) and (orientation: landscape) {
    background-color:#00130A;
    color:white;
height:200px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
.content{
    border-left: 2px solid #ffffff; 
    border-right: 2px solid #ffffff;
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
        display:flex;
        flex-direction: column;
        align-items:center;
        font-size:larger;
        line-height:30px;
        .email-number{
            width:70%;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
    }
}

}
@media only screen and (max-width: 1050px) and (max-height: 3050px) and (orientation: portrait) {

    background-color:#00130A;
    color:white;
height:500%;
width:100%;
display:flex;
justify-content:center;
align-items:center;

.content{
    border-left: 2px solid #ffffff; 
    border-right: 2px solid #ffffff;
    width:90%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
     margin-top: 15vw;
     margin-bottom: 15vw;
    .header{
       
        margin-bottom: 10vw;
       font-size: 10vw; 
    }
    .write-up{
        display:flex;
        flex-direction: column;
        align-items:center;
        font-size:4vw;
        line-height:5vw;
        .email-number{
            width:70%;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
    }


}
}  
   
`