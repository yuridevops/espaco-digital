import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import axios from 'axios'
import Modal from 'react-modal';
import modalStyles from './modalStyles';
import videoLinks from '../utils/links'
import { FaPlay } from 'react-icons/fa'

function App() {

  const [turn, setTurn] = useState([false])
  const [forecast, setForecast] = useState(null)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState(null);
  const [videoChoice, setVideoChoice] = useState(null);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    }
  }

  function openModal(value) {
    setIsOpen(true);
    setChoice(value)
  }

  function closeModal() {
    setIsOpen(false);
  }



  async function getWeekWeather() {
    const response = await axios.get('https://sintetizador.rj.r.appspot.com/utils/forecast/455853')
    const { forecast } = response.data
    return forecast
  }

  useEffect(() => {
    async function fetch() {
      const results = await getWeekWeather()
      setForecast(results)
    }
    fetch()
  }, [])

  useEffect(() => {
    setInterval(() => {
      const auxTurn = turn
      auxTurn[0] = !auxTurn[0]
      setTurn([...auxTurn])
    }, 30000)
  }, [])
  useEffect(() => {
    setInterval(() => {
      const auxTurn = turn
      auxTurn[1] = !auxTurn[1]
      setTurn([...auxTurn])
    }, 20000)
  }, [])
  useEffect(() => {
    setInterval(() => {
      const auxTurn = turn
      auxTurn[2] = !auxTurn[2]
      setTurn([...auxTurn])
    }, 24000)
  }, [])
  useEffect(() => {
    setInterval(() => {
      const auxTurn = turn
      auxTurn[3] = !auxTurn[3]
      setTurn([...auxTurn])
    }, 20000)
  }, [])
  useEffect(() => {
    setInterval(() => {
      const auxTurn = turn
      auxTurn[4] = !auxTurn[4]
      setTurn([...auxTurn])
    }, 20000)
  }, [])
  useEffect(() => {
    setInterval(() => {
      const auxTurn = turn
      auxTurn[5] = !auxTurn[5]
      setTurn([...auxTurn])
    }, 40000)
  }, [])

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ width: '80vw', height: '80vh' }}>
          {
            <div style={modalStyles.modalContainer}>
              {
                choice === 'C0F' &&
                <iframe src="https://google.com.br/" width="100%" height="100%" />
              }
              {
                choice === 'C1F' &&
                  true ?

                  <div style={{backgroundColor: '#2e2e2e',...modalStyles.modalContainer}}>
                    {
                      videoLinks.map(item => (
                        <div style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center',
                          color: '#64c832'
                        }}>
                          <h4>{item.name}</h4>
                          <div style={{ backgroundImage: `url(${item.image})`, ...modalStyles.itemVideo }} >
                            <FaPlay size={40} />
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  :
                  <div >

                  </div>
              }
              {
                choice === 'C1B' &&
                <iframe src="http://previdencia.sicredi.com.br/simulacao/comeco" width="100%" height="100%" />
              }
              {
                choice === 'C2F' &&
                <iframe src="https://www.icatuweb.com.br/" width="100%" height="100%" />
              }{
                choice === 'C2B' &&
                <iframe src="https://www.oficinadofuturosicredi.com.br/home" width="100%" height="100%" />
              }
              {
                choice === 'C3F' &&
                <div style={modalStyles.modalContainer}>
                  <div style={modalStyles.info}>
                    <h1 style={modalStyles.infoTitle}>UM ROBÔ, MÚLTIPLAS FUNCIONALIDADES!</h1>
                    <br />
                    <h3>O Tinbot permite reconhecimento de fala, reconhecimento facial e reconhecimento de imagens, além de outras funcionalidades focadas em criar experiências diferenciadas.</h3>
                  </div>
                  <div style={modalStyles.video}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9tXDslYaGjE?controls=0" />
                  </div>
                </div>
              }{
                choice === 'C3B' &&
                <div style={modalStyles.modalContainer}>
                  <div style={modalStyles.info}>
                    <h1 style={modalStyles.infoTitle}>EXPERIÊNCIAS IMPRESSIONANTES COM LIBERDADE INAGUALÁVEL!</h1>
                    <br />
                    <h3>Cada detalhe foi projetado para fazer os mundos virtuais se adaptarem aos seus movimentos, permitindo que você explore jogos e experiências inspiradores com liberdade incomparável.

                    Não requer PC ou console. Obtenha o máximo de cada momento com desempenho extremamente rápido e gráficos de última geração.

                    Mantenha o foco com uma tela impressionante que apresenta 50% mais pixels do que a Quest original.
Ou faça uma pausa na ação e pegue assentos na primeira fila para shows ao vivo, eventos exclusivos e muito mais.</h3>
                  </div>
                  <div style={modalStyles.video}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/c1nZfUDqV7U?controls=0" />
                  </div>
                </div>
              }
              {
                choice === 'C5F' &&
                <iframe src="https://sicredi-store.netlify.app/1" width="100%" height="100%" />
              }
            </div>
          }
        </div>
      </Modal>


      <div className="header">
        <h1>ESPAÇO DIGITAL</h1>
      </div>
      <div className="menu">
        <ul>
          <li className={turn[0] ? "large" : "large turned"} >
            <div className="the-front" onClick={() => { openModal('C0F') }}>
              <div className="content">
                <h2>Container 0 front</h2>
              </div>
            </div>
            <div className="the-back">
              <div className="content" onClick={() => { openModal('C0B') }}>
                <h2>Container 0 back</h2>
              </div>
            </div>
          </li>
          <li className={turn[1] ? "medium" : "medium"}>
            <div className="the-front" onClick={() => { openModal('C1F') }}>
              <div className="content">
                <div className="cine-container">
                  <h1>Para você</h1>
                </div>
              </div>
            </div>
            <div className="the-back" onClick={() => { openModal('C1B') }}>
              <div className="content">
                <div className="previdencia-container">
                  <h1>Simulador de previdência</h1>
                </div>
              </div>
            </div>
          </li>
          <li className={turn[2] ? "" : "turned"}>
            <div className="the-front" onClick={() => { openModal('C2F') }}>
              <div className="content prepare-container" >
                <h1>Rumo aos 100</h1>
              </div>
            </div>
            <div className="the-back" onClick={() => { openModal('C2B') }}>
              <div className="content simulate-container">
                <h1>Oficina do futuro</h1>
              </div>
            </div>
          </li>
          <li className={turn[3] ? "" : "small turned"}>
            <div className="the-front" onClick={() => { openModal('C3F') }}>
              <div className="content">
                <div className="tinbot-container">
                  <h1>Conheça o Tinbot</h1>
                </div>
              </div>
            </div>
            <div className="the-back" onClick={() => { openModal('C3B') }}>
              <div className="content">
                <div className="oculus-container">
                  <h1>Realidade Virtual</h1>
                </div>
              </div>
            </div>
          </li>
          <li className="large">
            <div className="the-front" >
              <div className="content">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: 10, paddingLeft: 10, color: '#111' }}>
                  <h3>Previsão do tempo</h3>
                  <h3>Formosa do Oeste, PR</h3>
                </div>
                <div className="forecast-container">
                  {
                    forecast !== null &&
                    forecast.map(item =>
                      <div className={`forecast-item ${item.condition}`} >
                        <div className="forecast-component">
                          <h3>{item.date}</h3>
                        </div >
                        <div className="forecast-component">
                          <h3>{item.max}º</h3>
                        </div >
                        <div className="forecast-component">
                          <h3>{item.min}º</h3>
                        </div >
                        <div className="forecast-component">
                          <img src={`https://storage.googleapis.com/sicredi/Tela-iterativa/${item.condition}.png`} />
                        </div >
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="the-front" onClick={() => { openModal('C5F') }}>
              <div className="content sicredi-store">
                <div className="sicredi-text">
                  <h1>Sicredi Store</h1>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer">
        <img src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png" />
      </div>
    </Container >
  );
}

export default App;
