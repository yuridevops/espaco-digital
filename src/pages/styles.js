import styled from 'styled-components'
import bg from '../assets/bg.jpeg'
import machine from '../assets/maquina-tempo.jpg'
import prepare from '../assets/prepare-se.jpg'
import store from '../assets/sicredi-store-blur.png'
import oculus from '../assets/oculus.jpg'
import tinbot from '../assets/tinbot.png'
import previdencia from '../assets/previdencia.jpg'
import cine from '../assets/cine.jpeg'

export const Container = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${bg});
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
    height: 85vh;
    width: 90%;

    ul{ 
        display: flex;
        justify-content: center;
        text-decoration: none;
        flex-wrap: wrap;
        list-style: none;
        width: 99%;
        height: 99vh;
        overflow: hidden;
        column-gap: 1%;
        row-gap: 2%;
    }

    li{
        position: relative;
        align-items: center;
        flex: 1;
        min-width: 20%;
        height: 50%;
        transform-style: preserve-3d;
        transition: all 1s ease;
    }

    .turned{
        transform: rotateY(180deg);
    }
    .the-front{
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        background: #fafafa;
    }

/* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
    .the-back{
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        background: #fafafa;
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
        color: #64c832;
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(215,223,252,1) 0%, rgba(255,255,255,1) 0%, rgba(215,223,252,1) 84% );
        color: #fff;
        text-shadow: 2px 1px 3px rgba(100, 100, 100, 1);
            
    }

    .content h2{
        margin-left: 10px;
    }
    .content h1{
        font-weight:900;
    }

    .forecast-container{
        display: flex;
        height: 100%;        
        width: 100%;        
        align-items: center;
        justify-content: space-around;
        background-color: #2e2e2e;
        overflow: hidden;
    }
    .forecast-item{
        flex: 1;
        height: 100%;
        display:flex;
        flex-direction: column;
        background-color: #fff;
        border: 1px solid #f2f2f2;
        justify-content: center;
        color: #fff;
        border-top-width: 0;
        font-weight: 800;
        padding-top: 20px;
        padding-bottom: 20px;       
    }

    .rain{
        background-image: url('https://uploads.spiritfanfiction.com/fanfics/historias/202006/rain-days-jeonglix-19562759-090620200637.gif');
        background-size: cover;
        background-position: center;

    }

    .storm{
        background-image: url('https://thumbs.gfycat.com/GrossLimpHerring-size_restricted.gif');
        background-size: cover;
        background-position: center;

    }

    .cloud{
        background-image: url('https://i.pinimg.com/originals/b3/dd/4b/b3dd4bcca0e606f0142617d45fc37ef7.gif');
        background-position: center;

    }
    .clear_day{
        background-image: url('https://i.pinimg.com/originals/20/e6/03/20e60377fb5710a7335be9bec1884877.gif');
        background-position: center;
        background-size: 310%;
        color: #2e2e2e;
    }

    .cloudly_day{
        background-image: url('https://miro.medium.com/max/840/1*iDWN50JcFY_r85K8aG8pWg.gif');
        background-position: center

    }

    .forecast-component{
        height: 25%;
        display: flex;
        justify-content: center;       
    }

    .forecast-component h5{
        font-weight: 800;
        font-size: 20px;
    }

    .forecast-component img{
        width: 100%;
        height: 100%;
        padding-right: 15%;
        padding-left: 15%;
        background-color: #8ce6ff;
        opacity: 0.85;
    }

    .prepare-container{
        background-image: url(${prepare});
        background-size: cover;
        padding-top: 10px;
        justify-content: center;
    }

    .simulate-container{
        background-image: url(${machine});
        background-size: cover;
        padding-top: 10px;
        justify-content: center;
    }

    .sicredi-store{
        background-image: url(${store});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

    }

    .sicredi-text{
        z-index: 2;
    }

    .tinbot-container{
        background-image: url(${tinbot});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
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

    .previdencia-container{
        background-image: url(${previdencia});
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
}

`