import styled from "styled-components";

export const FOoter = styled.div`
   

    @media only screen and (min-width: 600px) and (orientation: landscape) {
        background-color:#000201;
    width:100%;
    height:80px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    .content{
        width:90%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .name-logo{
            width:30%;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
    }
      
}
@media only screen and (max-width: 1050px) and (max-height: 3050px) and (orientation: portrait) {

    background-color:#000201;
    width:100%;
    height:50%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    .content{
        width:90%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        margin-top:5vw;
        margin-bottom: 5vw;

        .name-logo{
            width:30%;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .all-rights{
            font-size:3vw;
        }
    }
}
    
`