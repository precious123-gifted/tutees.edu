import styled from "styled-components";

export const TutorFormStyled = styled.div `
    
    @media only screen and (min-width: 600px) and (orientation: landscape) {
 color:#00130A;  
width:100%;
display:flex;
flex-direction: column;
align-items:center;
padding-bottom: 5vw;


.forms{
width:100%;
display:flex;
flex-direction: column;
align-items:center;
.form1-header{
font-size:1.5vw;
}
.form1{
    background-color:#0e5d3734; 
    border-radius: 20px;
    width:100%;
display:flex;
flex-direction:column;
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
            
        }
         #gender{
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
    
    font-size: 1.2vw;
    transition: ease-in all 0.6s;
    margin-top: 7px;
    &:hover{
        background-color:#f6f6f6;
    color:#283F34;  
    font-size: 1.5vw;
    }
}


.nextButtonToForm2{
font-size: 20px;
border-radius: 15px;
display: flex;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
transition: all 0.6s ease-in 0s;
cursor: pointer;
background-color: rgb(0, 10, 5);
color: white;
padding-left: 7px;
padding-right: 7px;
height: 3vw;
width:10vw;
&:hover{background-color: white;
    color:rgb(0, 10, 5);
}
}
   }
   
  
}}


.form2{
    visibility:hidden;
     position:absolute;
       background-color:#0e5d3734; 
    border-radius: 20px;
    width:100%;
   
display:flex;
flex-direction:column ;
justify-content:center;
align-items:center;
 padding-top: 5vw;
 padding-bottom: 5vw;
label{font-size: 1.5vw;}
input{
border: none;
background-color: #9B9B9B;
color: #F6F6F6;
outline: none;
width: 20vw;
height: 32px;
border-radius: 7px;
padding-left: 12px;
font-size: 1.2vw;
}
select{
border: none;
border-radius: 7px;
font-size: 1.2vw;
width: 25vw;
height: 32px;
background-color: #9B9B9B;
color: #F6F6F6;
}
    
display: flex;
justify-content: center;
align-items: center;
 .form2-header{
font-size:1.5vw;
}
.header{
   
font-size: 2.4vw;
margin-bottom: 7vw;}

.content{
    height: fit-content;
    width:90%;
    display:flex;
    flex-direction:column ;
    justify-content:space-between ;
  


.input-container{

 display:flex;
    flex-direction:column ;
    justify-content:space-between ;
    align-items:flex-start;
.input{
    margin-bottom:6vw ;
    display:flex;
    flex-direction:column ;
    align-items:flex-start;
    justify-content:space-between;
}
}


.biography-section{
width:100%;
display:flex;
align-items:center;
margin-bottom: 4vw;
display:flex;
div{
display:flex;
flex-direction: column;
align-items:center;
label{
align-self:flex-start;}
textarea{

background-color: #9B9B9B;
color: #F6F6F6;
width: 97%;
height: 4vw;
outline: none;
border: none;
border-radius: 0.4vw;
resize: none;
overflow: auto;
padding: 1vw 1vw;
font-size: 1vw;}
}


}


.nextButtonToForm3{
font-size: 20px;
border-radius: 15px;
display: flex;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
transition: all 0.6s ease-in 0s;
cursor: pointer;
background-color: rgb(0, 10, 5);
color: white;
padding-left: 7px;
padding-right: 7px;
height: 3vw;
width:10vw;
&:hover{background-color: white;
    color:rgb(0, 10, 5);
}
}
  }
}


.form3{
     visibility:hidden;
     position:absolute;
display:flex;
justify-content:center;
align-items:center;
      background-color:#0e5d3734; 
    border-radius: 20px;
    width:100%;
display:flex;
justify-content:center;
align-items:center;
 padding-top: 5vw;
 padding-bottom: 5vw;
 margin-bottom: 13vw;

.content{
     height: fit-content;
width:90%;
display:flex;
flex-direction:column ;
align-items:center;

.header{
font-size: 3vw;
margin-bottom: 7vw;
display:flex;
justify-content:center;}

.days-time{
    width:80%;
    
.days{margin-bottom: 3vw;
label{

}}
}
.BTN{
button{
    width:20vw;height:60px;background-color:grey;
    color:rgb(89, 200, 200);border-radius:1vw;
    margin-bottom:6vw;display:flex;
    justify-content:center;align-items:center;
}
}

}

}}
}

@media only screen and (max-width: 1050px) and (max-height: 3050px) and (orientation: portrait) {

background-color:#0e5d3734; 
    border-radius: 20px;
    color:#00130A;  
margin-top: 4vw;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
padding-bottom: 5vw;
.form1-header{
font-size:5vw;
}
.form1{
    
    width:100%;
display:flex;
flex-direction:column ;
align-items:center;
 padding-top: 5vw;
 padding-bottom: 5vw;

.content{
   width:100%;
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
    .title-gender{
        #title{
            border:none; 
            border-radius: 7px;
            font-size: 4.2vw;
            width:75vw;
            height:32px;
            background-color: #9B9B9B;
            color:#F6F6F6; 
            
        }
         #gender{
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
   
  
}




}



.form2{
label{font-size: 4.5vw;}
input{
border: none;
background-color: #9B9B9B;
color: #F6F6F6;
outline: none;
width: 70vw;
height: 32px;
border-radius: 7px;
padding-left: 12px;
font-size: 4.2vw;
}
select{
border: none;
border-radius: 7px;
font-size: 4.2vw;
width: 75vw;
height: 32px;
background-color: #9B9B9B;
color: #F6F6F6;
}
    width: 100%;
display: flex;
justify-content: center;
align-items: center;
 
.header{
    width:100vw;
font-size: 6vw;
margin-bottom: 7vw;
display:flex;
justify-content:center;}

.content{
    width:70%;
    display:flex;
    flex-direction:column ;
    justify-content:space-between ;
    align-items:center;


.input-container{

width: 100%;
display: flex;
flex-direction:column ;
justify-content:space-between ;
align-items: center;
.input{
    margin-bottom:6vw ;
    display:flex;
    flex-direction:column ;
    align-items:flex-start;
    justify-content:space-between;
    
}
}

  }
}


.form3{
display:flex;
justify-content:center;
align-items:center;

.content{
width:80%;
display:flex;
flex-direction:column ;
align-items:center;

.header{
width: 100vw;
font-size: 6vw;
margin-bottom: 7vw;
display:flex;
justify-content:center;}

.days-time{
    width:80%;
.days{
label{

}}
}
.BTN{
    
button{font-size: 4.7vw;
    width:50vw;height:60px;background-color:grey;
    color:rgb(89, 200, 200);border-radius:1vw;
    margin-bottom:6vw;display:flex;
    justify-content:center;align-items:center;
}
}

}

}
}






`