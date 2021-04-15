import styled from 'styled-components'
import genioBg from '../../assets/genio_bg.jpg'
import egypt from '../../assets/egypt.jpg'
import manuscrito from '../../assets/manuscrito.png'

export const Container = styled.div`
    flex: 1;
    background: url(${egypt});
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const Title = styled.h1`
    margin-bottom: 30px;
    color: #2e2e2e;
    align-self: center;
    font-size: 64px;
    text-shadow:  3px 3px 5px rgba(0,0,0,0.3);
`

export const ContentContainer = styled.div`
    width: 60%;
    height: 85%;
    margin-left: 10px;
    border-radius: 10px;
    background-image: url(${manuscrito});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`
export const LoadingText = styled.h2`
    font-family:  cursive;
    color: #4d453e;

    font-size: 30px;
`

export const Section = styled.section`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    padding: 20px;
`

export const IntroText = styled.h2`
    text-align: center;
    font-family:  cursive;
    color: #4d453e;
    font-size: 30px;
    width:55%;
`

export const IntroStrong = styled.strong`
    line-height: 3; 
    font-family:  cursive;
    color: #4d453e;

    font-size: 40px;
`
export const Button = styled.button`
    height: 70px;
    border-radius: 10px;
    outline: 0;
    border-width: 0;
    padding: 0px 15px;
    font-size: 40px;
    margin-bottom: 30px;
    color: #4d453e;
    background-color: #f0ceb1;
    font-family:  cursive;

    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.44);

`

export const LoadingContainer = styled.div`
    justify-content: center;
    align-items: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const QuestionText = styled.h3`
    text-align: center;
    font-family:  cursive;
    margin-bottom: 30px;
    color: #4d453e;
    width: 50%;
    font-size: 26px;

`

export const AnswersContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    cursor: pointer;
`

export const Answer = styled.li`
    width: 40%;
    height: 50px;
    background-color: #FFF;
    text-decoration: none;
    display: flex;
    justify-content: center;
    font-family:  cursive;
    color: #4d453e;
    font-size: 25px;
    background-color: #f5e6da;
    align-items: center;
    border-radius: 10px;
    outline: 0;
    border-width: 0;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.44);
`
export const ResultText = styled.h3`
    text-align: center;
    font-family:  cursive;
    color: #4d453e;
    font-size: 30px;
`

export const ResultImage = styled.img`
    max-height: 300px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.44);

`