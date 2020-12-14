import styled from 'styled-components'
import bg from '../../assets/background.png';

const Container = styled.div`

display: flex;
background-image: url(${bg});
background-size: contain;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;


.logo-container{
    margin-bottom: 80px;
}

.logo{
    width: 600px;
}


.item-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
}

.item{
    display: flex;
    background-color: rgba(0,0,0,0.19);
    justify-content: center;
    text-decoration: none;
    list-style: none;
    align-items: center;
    font-weight: 600;
    width: 200px;
    height: 80px;
    margin: 10px;
    border: solid 1px #fff;
    border-radius: 5px;
    color: #fff;
    transition: 0.5s ;
    -webkit-box-shadow: -1px 0px 20px 1px rgba(0,0,0,0.19);
    -moz-box-shadow: -1px 0px 20px 1px rgba(0,0,0,0.19);
    box-shadow: -1px 0px 20px 1px rgba(0,0,0,0.19);
}

.item:hover{
    border: none;
    background-color: #3e3e3e;
}



`

export default Container