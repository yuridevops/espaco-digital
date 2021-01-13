import styled from 'styled-components'
import bg from '../../assets/background.png';

const Container = styled.div`

display: flex;
background-image: url(${bg});
background-size: contain;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 40px;
min-height: 900px;

h1{
    margin-top: 20px;
    font-size: 120px;
    font-weight: 800;
    color: #fff;

}

h4{
    font-weight: 400;
}
h3{
    font-size: 25px;
    color: #31363c;
    font-weight: 600;
}

.logo-container{
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo{
    width: 200px;
}


.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rebeccapurple;
  }


.item-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80vw;
    justify-content: center;

}

.item{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    text-decoration: none;  
    list-style: none;
    color: #fff;
    border: 2px solid #fafafa;
    align-items: center;
    width: 300px;
    height: 500px;
    margin: 20px;
    border-radius: 5px;
    transition: 0.5s ;
    -webkit-box-shadow: 0px 0px 28px -5px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 28px -5px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 28px -5px rgba(0,0,0,0.5);
}

.disabled{
    opacity: 0.7;
}

.post-qr{
    position: fixed ;
    left: 0;
    bottom: 0;
    margin-bottom: 100px;
    background-color: #fff; 
    padding: 5px 10px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    -webkit-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.42);
    -moz-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.42);
    box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.42);
}

.image-container{
    width: 100%;
    padding:3px;
}


.image-container img{
    height: 250px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

}

.text-item-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0px 20px;

}

.text-item-container h2{
    color: #1e9b32;
    margin: 10px 0px;
    font-weight: 800;
}

.text-information{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    text-align: center;
    color: #31363c;

}
.value-container{
    width: 100%;
    display: flex;
    justify-content: space-evenly;

}
.value-item-container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}



`

export default Container