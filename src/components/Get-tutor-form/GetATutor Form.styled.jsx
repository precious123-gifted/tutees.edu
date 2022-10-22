import styled from "styled-components"

export const GAT = styled.div `
  @media only screen and (min-width: 600px) and (orientation: landscape) {
 color:#00130A;  
margin-top: 4vw;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
padding-bottom: 5vw;
form{width:100vw;
display:flex;
justify-content:center;
align-items:center;
}
.form{
    background-color:#0e5d3734; 
    border-radius: 20px;
    width:70%;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
 padding-top: 5vw;
 padding-bottom: 5vw;

 img{
align-self:flex-start;}

.content{
   width:90%;
   display:flex;
   flex-direction: column;
   justify-content:space-around;
   align-items:center;

   .header{
    font-size: 2vw;
    margin-bottom: 7vw;
   }
      .learners-header{font-size: 1.8vw; 
    text-decoration:underline;
}
   .inputs-field{
    height:fit-content;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;

    .input-container{
        width:90%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom: 2vw;
        .input{
            display:flex;
            flex-direction: column;
            align-items:flex-start;
            width:19vw;
            label{
                font-size: 1.5vw;
            }

            input{
                border:none;
                background-color: #9B9B9B;
                color:#F6F6F6;
                outline:none;
                width:19vw;
                height:32px;
                border-radius: 7px;
                padding-left: 12px;
                font-size: 1.2vw;
                
            }
            #relationship{
                border:none;
                background-color: #9B9B9B;
                color:#F6F6F6;
                outline:none;
                width:20vw;
                height:32px;
                border-radius: 7px;
                padding-left: 12px;
                font-size: 1.2vw;
                
            }
            
        }
    }


    .sex-classType{
        #sex{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
                color:#F6F6F6;
                
        }
        #classType{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }
        
    }left
    .address-studyPlan{
        #study{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }

    }

    .date-hear{
        #hear-about{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }
    }

    .guardian-firstName{
        #guardian{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }
    }
    
    .comment-section{

        width:90%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom: 2vw;

div{
width:100%;
    display:flex;
            flex-direction: column;
            align-items:flex-start;

            textarea{ 
                background-color: #9B9B9B;
                color:#F6F6F6;
                width:97%;
               height:15vw;
               outline: none;
               border: none;
               border-radius: 0.4vw;
               resize: none;
               overflow: auto;
               padding: 1vw 1vw;
               font-size: 1.4vw;
            }
}



    }


.BTN{
    background-color:#283F34;
    color:#f6f6f6;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 6px;
    width:15vw;
    height:40px;
    font-size: 1.2vw;
    transition: ease-in all 0.6s;
    &:hover{
        background-color:#f6f6f6;
    color:#283F34;  
    font-size: 1.5vw;
    }
}

   }
   
  
}}}

@media only screen and (max-width: 1050px) and (max-height: 3050px) and (orientation: portrait) {


    color:#00130A;  
margin-top: 4vw;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
padding-bottom: 5vw;
.form{
    background-color:#0e5d3734; 
    border-radius: 20px;
    width:100%;
display:flex;
justify-content:center;
align-items:center;
 padding-top: 5vw;
 padding-bottom: 5vw;
.company-head{
visibility:hidden;
position:absolute;
}
.content{
   width:90%;
   display:flex;
   flex-direction: column;
   justify-content:space-around;
   align-items:center;

   .header{
    font-size: 6vw;
    margin-bottom: 7vw;
   }
   .learners-header{font-size: 5vw; 
    text-decoration:underline;
}
   .inputs-field{
    height:fit-content;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;

    .input-container{
        width:90%;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
        margin-bottom: 6vw;
        .input{
            display:flex;
            flex-direction: column;
            align-items:flex-start;
            
            label{
              
            }

            input{
                border:none;
                background-color: #9B9B9B;
                color:#F6F6F6;
                outline:none;
                width:70vw;
                height:32px;
                border-radius: 7px;
                padding-left: 12px;
                font-size: 4.2vw;
                
            }
            #relationship{
                border:none;
                background-color: #9B9B9B;
                color:#F6F6F6;
                outline:none;
                width:75vw;
                height:32px;
                border-radius: 7px;
                padding-left: 12px;
                font-size: 4.2vw;
                
            }
            
        }
    }


    .sex-classType{
        #sex{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
                color:#F6F6F6;
                
        }
        #classType{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }
        
    }
    .address-studyPlan{
        #study{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }

    }

    .date-hear{
        #hear-about{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }
    }
    .guardian-firstName{
        #guardian{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }
    }
    
    .comment-section{
div{
display:flex;
flex-direction: column;
align-items:center;

textarea{
background-color: #9B9B9B;
color: #F6F6F6;
width: 97%;
height: 15vw;
outline: none;
border: none;
border-radius: 0.4vw;
resize: none;
overflow: auto;
padding: 1vw 1vw;
font-size: 3.4vw;
}

}
   }


.BTN{
    font-size: 4.7vw;
margin-bottom: 6vw;
    cursor:pointer;
    justify-content:center;
    align-items:center;
    margin-top: 6vw;
    button{font-size: 4.7vw;
width: 50vw;
height: 60px;
color: rgb(89,200,200);
border-radius: 1vw;
border:none;
margin-bottom: 6vw;
    background-color:#283F34;
    color:#f6f6f6;
     transition: ease-in all 0.6s;
     
   &:hover{
        background-color:#f6f6f6;
    color:#283F34;  
    font-size: 4.5vw;
    }  
}
   
}

   }
   
  
}}



}

`