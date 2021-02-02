import React, { useEffect, useState } from 'react'
import api from '../../config/api'
import { useParams } from 'react-router-dom'
import Container from './styles.js'
import { IoBarChartOutline } from 'react-icons/io5'
import { IoCashOutline, IoCloseCircle } from 'react-icons/io5'
import Modal from 'react-modal';
import { ReactSVG } from 'react-svg'
import qrcode from '../../assets/qr_pix_store.svg'
import qrmini from '../../assets/qr_mini.png'

Modal.setAppElement(document.getElementById('root'));

function Main() {
  const [products, setProducts] = useState(null)
  let { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalQRIsOpen, setQRIsOpen] = useState(false);

  const [modalImage, setModalImage] = useState("");

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }
  };

  const customStylesQR = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeModalQR() {
    setQRIsOpen(false);
  }

  function handleClickItem(item) {
    
    setModalImage(item.image)
    openModal()
  }

  function handleClickQr() {
    setQRIsOpen(true)
  }


  useEffect(() => {
    async function fetch() {
      const demo = await api.post('/authenticate', {
        email: "marcos_yuri@sicredi.com.br",
        password: "123456"
      })
      const response = await api.get('/stocks', {
        params: {
          branch: id
        },
        headers: {
          Authorization: `Bearer ${demo.data.token}`
        },

      })
      setProducts(response.data)

    }
    fetch()
  }, [])

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <div className="modal-content">
          <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <IoCloseCircle size={30} onClick={closeModal} />
          </div>
          <img src={modalImage} style={{ width: 600, maxHeight: 800 }} />
        </div>
      </Modal>

      <Modal
        isOpen={modalQRIsOpen}
        onRequestClose={closeModalQR}
        style={customStylesQR}
        contentLabel="Example Modal"
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>

          <div style={{ display: "flex", justifyContent: 'flex-end', width: '100%' }}>
            <IoCloseCircle size={30} onClick={closeModalQR} />
          </div>
          <h1 style={{ color: '#64c832' }}>QR Code para os Fãs</h1>

          <ReactSVG src={qrcode} style={{ margin: 20 }} />
          <div>
            <h3 style={{ color: '#64c832' }}>Antes de realizar o pagamento, entre em contato com algum de nossos colaboradores.</h3>
          </div>

        </div>
      </Modal>


      <div className="logo-container">
        <img
          className="logo"
          src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png"
          style={{ background: '#fff', padding: 15, borderRadius: 5 }}
        />
        <h1>Sicredi Store</h1>

        <div className="post-qr" onClick={handleClickQr}>
          <img src={qrmini} width="50" />
        </div>

      </div>
      {
        products !== null ?
          <ul className="item-container">
            {
              products.map(item =>
                <li key={item.id} className={true ? "item" : "disabled item"} onClick={() => { handleClickItem(item) }}>
                  <div className="image-container">
                    <img src={item.image} />
                  </div>
                  <div className="text-item-container">
                    <div className="text-information">
                      <h2 className="h2">{item.name}</h2>
                      <h4>{item.description}</h4>
                    </div>
                    <div className="value-container">
                      {
                        true ?
                          <>
                            <div className="value-item-container">
                              <h3>R$ {item.value}</h3>
                              <h3 style={{ color: '#1e9b32' }}>R$ {item.value * 2}.00</h3>
                            </div>
                            <div className="value-item-container">
                              <IoCashOutline size={34} color="#31363c" />
                              <IoBarChartOutline size={34} color="#1e9b32" />
                            </div>
                          </>
                          :
                          <div className="value-item-container">
                            <h3 style={{ color: '#ff0000' }}>ESGOTADO</h3>
                          </div>
                      }

                    </div>
                  </div>
                </li>
              )
            }
          </ul>
          :
          <h1>Aguarde enquanto o conteúdo é carregado</h1>
      }
    </Container>
  );
}

export default Main;
