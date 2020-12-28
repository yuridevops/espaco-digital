import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import axios from 'axios'
import Modal from 'react-modal';
import modalStyles from './modalStyles';
import videoLinks from '../../utils/links'
import { FaPlay } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { GiCorn, GiWheat } from 'react-icons/gi'
import { FaSeedling } from 'react-icons/fa'
import sicrediLogo from '../../assets/sicredi-texto.png'
import copacolLogo from '../../assets/copacol.png'
import cities from '../../utils/woeid'

function App() {

  const [turn, setTurn] = useState([false])
  const [forecast, setForecast] = useState(null)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState(null);
  const [videoChoice, setVideoChoice] = useState(null);
  const [weekSeq, setWeekSeq] = useState([]);
  const [commodities, setCommodities] = useState(null);
  const [mainPage, setMainPage] = useState(false);
  const [timer, setTimer] = useState(-1)


  let { id } = useParams()
  let storeUrl = `${window.location.href}/store`

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
    setVideoChoice(null)
    setIsOpen(false);
  }

  function handleSetVideo(url) {
    setVideoChoice(url)
  }
  function handleSetVideo(url) {
    setVideoChoice(null)
  }

  async function getCommodities() {
    const req = await axios.get('https://sintetizador.rj.r.appspot.com/utils/commodities')
    console.log(req.data)
    return req.data
  }

  async function getWeekWeather() {
    const city = cities.find(city => {
      console.log(city.id, id)
      if (city.id === Number(id)) {
        return city
      }
    })
    const response = await axios.get(`https://sintetizador.rj.r.appspot.com/utils/forecast/${city.woeid}`)
    const { forecast } = response.data
    console.log(forecast)
    return forecast
  }

  function getWeekSequence() {
    let day = new Date().getDay();
    const week = []
    for (let i = 0; i < 7; i++) {
      switch (day) {
        case 0:
          week.push('DOM')
          break;
        case 1:
          week.push('SEG')
          break;
        case 2:
          week.push('TER')
          break;
        case 3:
          week.push('QUA')
          break;
        case 4:
          week.push('QUI')
          break;
        case 5:
          week.push('SEX')
          break;
        case 6:
          week.push('SAB')
          break;
      }
      if (day === 6) {
        day = 0;
      } else {
        day++;
      }
      if (i === 6) {
        return week
      }
    }
  }

  useEffect(() => {
    if (timer === -1) {
      setInterval(() => setTimer(time => time + 1), 1000)
    }
    else if (timer === 600) {
      moveToIntro()
      setTimer(0)
    }
  }, [timer])



  useEffect(() => {
    async function fetch() {
      try {
        setCommodities(await getCommodities())
      } catch (err) {
        console.log(err)
      }
      try {
        setWeekSeq(getWeekSequence())
        setForecast(await getWeekWeather())
        console.log(forecast)
      } catch (err) {
        console.log(err)
      }

    }
    fetch()
  }, [])

  function moveToIntro() {
    setMainPage(false)
  }

  function handleActivity() {
    setTimer(0)
  }


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
    < >
      {
        mainPage ?

          <Container onClick={handleActivity} onClick={handleActivity}>
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
                      choice === 'C1F' &&
                      <div style={{ ...modalStyles.modalContainer, background: '#fff' }}>
                        {
                          videoChoice === null ?
                            videoLinks.map(item => (
                              <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 60,
                                color: '#64c832'
                              }}
                                onClick={() => { setVideoChoice(item.link) }}
                              >
                                <h1>{item.name}</h1>
                                <div style={{ backgroundImage: `url(${item.image})`, ...modalStyles.itemVideo }} >
                                  <FaPlay size={40} />
                                </div>
                              </div>
                            ))
                            :
                            < iframe src={videoChoice} width={'100%'} height={'100%'} />
                        }
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
                      <iframe src={storeUrl} width="100%" height="100%" />
                    }
                  </div>
                }
              </div>
            </Modal>


            <div className="menu">
              <audio autoPlay loop  muted={ videoChoice === null ? false : true}>
                <source src="https://storage.googleapis.com/sicredi/audios/innovation_low.mp3" type="audio/mpeg" />
              </audio>
              <ul>
                <li className={turn[0] ? "large" : "large"} >
                  <div className="the-front" >
                    <div className="content">

                      {
                        commodities === null ?
                          <iframe src="https://drive.google.com/file/d/1VYaefC99bVtmtmQGw1PkLOqI7-7jK1gS/view?usp=sharing" width="640" height="480" frameBorder="0" scrolling="no" />
                          :
                          <div className="commodities-container">
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }}>
                              <div className="commodities-item">
                                <FaSeedling size={40} color="#64c832" />
                                <strong style={{ fontSize: 22, marginLeft: 10 }}>SOJA - Saco de 60kg = <strong style={{ color: '#64c832' }}>R$ {commodities.soja}</strong></strong>
                              </div>
                              <div className="commodities-item">
                                <GiCorn size={40} color="#64c832" />
                                <strong style={{ fontSize: 22, marginLeft: 10 }}>MILHO - Saco 60kg = <strong style={{ color: '#64c832' }}>R$ {commodities.milho}</strong></strong>
                              </div>
                              <div className="commodities-item">
                                <GiWheat size={40} color="#64c832" />
                                <strong style={{ fontSize: 22, marginLeft: 10 }}>TRIGO Pão Ph 78 - Saco 60kg = <strong style={{ color: '#64c832' }}>R$ {commodities.trigo}</strong></strong>
                              </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                              <div>
                                <h3>Ultima atualização: {commodities.data} - 10:20AM </h3>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={copacolLogo} style={{ width: 100, marginLeft: 10, background: '#fff', padding: 2, borderRadius: 4 }} />
                              </div>
                            </div>
                          </div>
                      }
                      <div className="label-content">
                        <h1>Valor das Commodities</h1>
                      </div>
                    </div>
                  </div>
                  <div className="the-back">
                    <div className="content" >
                    </div>
                  </div>
                </li>
                <li className={turn[1] ? "" : ""}>
                  <div className="the-front" onClick={() => { openModal('C1F') }}>
                    <div className="content">
                      <div className="cine-container" />
                      <div className="label-content">
                        <h1>Para Você</h1>
                      </div>
                    </div>
                  </div>
                  <div className="the-back" onClick={() => { openModal('C1B') }}>
                    <div className="content">

                    </div>
                  </div>
                </li>
                <li className={turn[2] ? "medium" : "medium turned"}>
                  <div className="the-front" onClick={() => { openModal('C2F') }}>
                    <div className="content" >
                      <div className="prepare-container" />
                      <div className="label-content">
                        <h1>Calc. de Expectativa de Vida</h1>
                      </div>
                    </div>
                  </div>
                  <div className="the-back" onClick={() => { openModal('C2B') }}>
                    <div className="content">
                      <div className="simulate-container" />
                      <div className="label-content">
                        <h1>Simulador de Previdência</h1>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={turn[3] ? "" : "small turned"}>
                  <div className="the-front" onClick={() => { openModal('C3F') }}>
                    <div className="content">
                      <div className="tinbot-container" />
                      <div className="label-content">
                        <h1>Conheça o Tinbot</h1>
                      </div>
                    </div>
                  </div>
                  <div className="the-back" onClick={() => { openModal('C3B') }}>
                    <div className="content">
                      <div className="oculus-container" />
                      <div className="label-content">
                        <h1>Realidade Virtual</h1>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="large">
                  <div className="the-front" >
                    <div className="content">

                      <div className="forecast-container">
                        {
                          forecast !== null &&
                          forecast.map((item, index) => (
                            item !== null &&
                            <div className="forecast-item">
                              <div className="forecast-component-top">
                                <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                                  <h1 style={{ fontSize: 35 }}>{item.max}</h1>
                                </div>
                                <div style={{ display: "flex", justifyContent: 'flex-start' }}>
                                  <h2 style={{ fontSize: 25, color: "#c0ceda" }}>{item.min}</h2>
                                </div>

                              </div >
                              <div className="forecast-component">
                                <img src={`https://storage.googleapis.com/sicredi/Tela-iterativa/${item.condition}.png`} />
                              </div >
                              <div className={`forecast-component `} style={{ marginRight: 10 }}>
                                <h2 className={` ${(weekSeq[index] === 'DOM' || weekSeq[index] === 'SAB') && `feriado`}`}>
                                  {
                                    weekSeq[index]
                                  }
                                </h2>
                              </div >
                            </div>
                          )

                          )
                        }
                      </div>
                      <div className="forecast-title-container">
                        {
                          forecast !== null &&
                          <h1>Previsão para os próximos {forecast.length} dias</h1>
                        }
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="the-front" onClick={() => { openModal('C5F') }}>
                    <div className="content">
                      <div className="sicredi-store" />
                      <div className="label-content">
                        <h1>Sicredi Store</h1>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </Container >
          :
          <div onClick={() => {
            setMainPage(true)
            handleActivity()
          }}>
            <div className="intro-video-container" style={{
              position: 'absolute',
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              top: '15%',
              textAlign: "center"
            }}>
              <div className="intro-container">
                <img src={sicrediLogo} height="150" style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, boxShadow: "0px 6px 27px -2px rgba(0,0,0,0.75)" }} />
                <h1 style={{ fontSize: '8em', fontWeight: '900', color: '#fff', marginTop: 60, textShadow: "2px 4px 5px rgba(50, 50, 50, 1)" }}>Espaço digital</h1>
                <h3 style={{ fontSize: '2.5em', fontWeight: '900', color: '#fff', marginTop: 30, textShadow: "2px 4px 5px rgba(50, 50, 50, 1)" }}>
                  Fique a vontade para tocar na tela
                </h3>
              </div>
            </div>
            <video width="100%" height="100%" autoPlay loop>
              <source src="https://storage.googleapis.com/sicredi/videos/background.mp4" type="video/mp4" />
            </video>
            <audio autoPlay loop>
              <source src="https://storage.googleapis.com/sicredi/audios/background-music.mp3" type="audio/mpeg" />
            </audio>
          </div>
      }
    </>
  );
}

export default App;
