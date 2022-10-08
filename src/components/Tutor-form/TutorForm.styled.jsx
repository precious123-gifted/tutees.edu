import styled from "styled-components";

export const TutorFormStyled = styled.div`
    
    @media only screen and (min-width: 600px) and (orientation: landscape) {
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
    width:70%;
display:flex;
justify-content:center;
align-items:center;
 padding-top: 5vw;
 padding-bottom: 5vw;

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
                user-select:none;
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
                user-select:none;
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
                user-select:none;
        }
        #classType{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            user-select:none;
        }
        
    }
    .address-studyPlan{
        #study{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            user-select:none;
        }

    }
    .title-gender{
        #title{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            user-select:none;
        }
         #gender{
            border:none; 
            border-radius: 7px;
            font-size: 1.2vw;
            width:20vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            user-select:none;
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
            user-select:none;
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
            user-select:none;
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
    margin-top: 7px;
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
                font-size: 4.5vw;
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
                user-select:none;
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
                user-select:none;
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
                user-select:none;
        }
        #classType{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            user-select:none;
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
            user-select:none;
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
            user-select:none;
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
            user-select:none;
        }
    }
    .title-gender{
        #title{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            user-select:none;
        }
         #gender{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            user-select:none;
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
                width:70vw;
               height:15vw;
               outline: none;
               border: none;
               border-radius: 0.4vw;
               resize: none;
               overflow: auto;
               padding: 4vw 4vw;
               font-size: 4.4vw;
            }
}



    }


.BTN{
    background-color:#283F34;
    color:#f6f6f6;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 6px;
    width:40vw;
    height:40px;
    font-size: 4.2vw;
    transition: ease-in all 0.6s;
    margin-top: 6vw;
    &:hover{
        background-color:#f6f6f6;
    color:#283F34;  
    font-size: 4.5vw;
    }
}

   }
   
  
}}



}


`