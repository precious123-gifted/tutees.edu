import styled from "styled-components";

export const ContactStyle = styled.div `

@media only screen and (min-width: 600px) and (orientation: landscape) {
width:100vw;
display:flex;
justify-content:center;
align-items:center;

.content{
    width:80vw;
    height:30%;
    color:rgb(0, 19, 10);
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    padding-top: 5vw;
    padding-bottom:5vw;

.contact{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    width:40vw;
    .header{
        font-size: 2vw;
        font-weight: bold;
    }

    .whatsapp{
        display:flex;
        font-size: 1.5vw;
        justify-content: space-between;
        align-items: center;
    }
    .email{
        display:flex;
        font-size: 1.5vw;
        justify-content: space-between;
        align-items: center;
    }
}  


.follow-div{ 
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    width:40vw;
.header{
    font-size: 2vw;
        font-weight: bold;  
}
.socials{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

}


.message-div{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-end;
    width:40vw;
    
.header{
    font-size: 2vw;
        font-weight: bold; 
        align-self: center;
}
.inputs{
    label{
        font-size: 1.5vw;  
    }
input{
background-color: #9B9B9B;
color:#F3F3F3;
width:20vw;
height:3vw;
border:none;
border-radius:10px; 


}
.name{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    
    input{
        font-size: 1.4vw;
        &:focus{
        outline:2px solid #00130A;

    }
    }
   
}

.email{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    
    input{font-size: 1.4vw;
        &:focus{
        outline:2px solid #00130A;

    }
    }  
}

.message{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    margin-bottom: 30px;

    input{
        &:focus{
            font-size: 1.9vw;
        outline:2px solid #00130A;

    }
    }
}
.BTN{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    input{
        font-size: 1.5vw;
        background-color: #0E5E37;
        transition: 0.2s ease-in all;
        &:hover{
            width:20vw;
            font-size: 1.9vw;
        }  
          &:focus{
            width:20vw;
            font-size: 1.9vw;
            background-color: #0a2c1c;
        }&:hover{
            width:20vw;
            font-size: 1.9vw;
        }
    }
}
}

}

}


}

@media only screen and (max-width: 1050px) and (max-height: 3050px) and (orientation: portrait) {

    width:100vw;
display:flex;
justify-content:center;
align-items:center;

.content{
    width:80vw;
    height:30%;
    color:rgb(0, 19, 10);
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding-top: 5vw;
    padding-bottom:5vw;

.contact{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    margin-bottom: 10vw;
    width: 80vw;
    .header{
        font-size: 5vw;
        font-weight: bold;
    }

    .whatsapp{
        display:flex;
        font-size: 3.5vw;
        justify-content: space-between;
        align-items: center;
    }
    .email{
        display:flex;
        font-size: 3.5vw;
        justify-content: space-between;
        align-items: center;
    }
}  


.follow-div{ 
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    width: 80vw;
    margin-bottom: 10vw;
.header{
    font-size: 5vw;
        font-weight: bold;  
}
.socials{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
}

}


.message-div{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    width:100%;
   margin-bottom: 10vw;
    
.header{
    font-size: 5vw;
        font-weight: bold; 
       
}
.inputs{
    label{
        font-size: 4.5vw;  
    }
input{
background-color: #9B9B9B;
color:#F3F3F3;
width:80vw;
height:10vw;
border:none;
border-radius:10px; 


}
.name{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    
    input{
        font-size: 4.5vw;
        &:focus{
        outline:2px solid #00130A;

    }
    }
   
}

.email{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    
    input{font-size: 4.5vw;
        &:focus{
        outline:2px solid #00130A;

    }
    }  
}

.message{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;
    margin-bottom: 30px;
    font-size: 3.5vw;
    input{
        &:focus{
        outline:2px solid #00130A;

    }
    }
}
.BTN{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    input{
        font-size: 5.5vw;
        background-color: #0E5E37;
        transition: 0.2s ease-in all;
        &:focus{
            width:20vw;
            font-size: 5.9vw;
        }
    }
}
}

}

}


}
`