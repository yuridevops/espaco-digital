import styled from 'styled-components'
import bg from '../../assets/bg.jpeg'
import machine from '../../assets/maquina-tempo.jpg'
import prepare from '../../assets/prepare-se.jpg'
import store from '../../assets/sicredi-store-blur.png'
import oculus from '../../assets/oculus.jpg'
import tinbot from '../../assets/tinbot.png'
import cine from '../../assets/cine.jpeg'
import copacol from '../../assets/copacol.png'

export const Container = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background: url(${bg});
    //background-image: radial-gradient( circle 757px at 14.6% 44.8%,  rgba(60,77,115,1) 27.7%, rgba(0,194,209,1) 95.9% );
    background-image: linear-gradient( 180.3deg,  rgba(221,221,221,1) 5.5%, rgba(110,136,161,1) 90.2% );
    //background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249,0.67) 0.1%, rgba(239,249,251,0.63) 90.1% );
    background-size: contain;
    height: 100vh;
    
 
    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        width: 100%;
        overflow: hidden;
    }

    .header h1{
        font-size: 200%;
        color: #fff;
        font-weight: 900;
    }

    .footer{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5vh;
        width: 100%;
        overflow: hidden;
    }

    .footer img{
        height: 90%;
    }


    .menu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 95%;

    ul{ 
        display: flex;
        justify-content: center;
        text-decoration: none;
        flex-wrap: wrap;
        list-style: none;
        width: 99%;
        height: 100%;
        column-gap: 0.5%;
        row-gap: 1%;

    }

    li{
        position: relative;
        align-items: center;
        flex: 1;
        min-width: 20%;
        height: 50%;
        transform-style: preserve-3d;
        transition: all 1s ease;
        -webkit-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.48);
        -moz-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.48);
        box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.48);  
    }

    .turned{
        transform: rotateY(180deg);
    }
    .the-front{
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
    }

/* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
    .the-back{
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        transform: rotateY(180deg);

    }

    .title-container{
        margin-bottom: 40px;
        font-size: 32px;
    }

    .large{
        width: 45%;
        flex: none;
    }
    .medium{
        width: 30%;
        flex: none;
    }

    .small{
        width: 20%;
        flex: none;
    }
  
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 100%;
        color: #fff;
        text-shadow: 2px 1px 3px rgba(100, 100, 100, 1);
            
    }

    .label-content{
        width: 100%; 
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;  
        background-color: #64c832;
    }

   
    .content h1{
        font-family: 'Exo 2', sans-serif;
        font-weight:900;
    }

    .forecast-container{
        display: flex;
        height: 100%;        
        width: 100%;        
        align-items: center;
        justify-content: center;
        overflow: hidden;
        column-gap: 5px;
    }
    .forecast-item {
        height: 100%;
        position: unset;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        color: #fff;
        font-family: 'Kanit', sans-serif;
        text-shadow: none;
        background-color: #8BC6EC;
        background-image: linear-gradient(154deg, #5795bd 0%, #4986a7 42%, #044f74 100%);
        font-weight: 500;
    }

    .forecast-title-container{
        width: 100%; 
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;  
        border-radius: 2px;
        background-color: #64c832;
}
    

    .forecast-component{
        height: 22%;
        width: 100%;
        display: flex;
        justify-content: center;  
        align-items: center; 
        
    }
    .forecast-component-top{
        margin: 5px;     
        height: 25%;  
        line-height: 24px;
    }
    .forecast-component-top h1, h2{
        margin: 0;
        padding: 0;
        font-weight: 500;
    }



    .forecast-component img{
        width: 100%;
        height: 100%;
        padding-right: 10%;
        padding-left: 10%;
    }

    .feriado{
        background-color: #fff;
        padding: 5px 10px;
        color: #215f8f;
        border-radius: 5px;
    }
    .prepare-container{
        background-image: url(${prepare});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 0;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .simulate-container{
        background-image: url(${machine});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 0;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .sicredi-store{
        background-image: url(${store});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 0;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    


    .sicredi-text{
        z-index: 2;
    }

    .tinbot-container{
        background-image: url(${tinbot});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: #fff;
        padding: 0;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .oculus-container{
        background-image: url(${oculus});
        background-size: cover;

        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .cine-container{
        background-image: url(${cine});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .content-modal{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: #111;
    }

    .commodities-container{
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(69,86,102,1) 0%, rgba(34,34,34,1) 90% );
        background-size: contain;
        background-position-y: center;
        background-position-x: center;
        background-repeat: no-repeat;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-shadow: none;
        align-items: flex-start;
        padding: 20px;
        height: 100%;
        width: 100%;
    }

    .commodities-item{
        display: flex;
        align-items: center;
        margin: 5px 0px;
    }
}

`