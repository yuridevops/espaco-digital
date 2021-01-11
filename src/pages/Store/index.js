import React, { useEffect, useState } from 'react'
import api from '../../config/api'
import { useParams } from 'react-router-dom'
import Container from './styles.js'
import { IoBarChartOutline } from 'react-icons/io5'
import { IoCashOutline, IoCloseCircle } from 'react-icons/io5'
import Modal from 'react-modal';



Modal.setAppElement(document.getElementById('root'));

function Main() {
  const [products, setProducts] = useState(null)
  let { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleClickItem(item) {
    const image = item.image.substring(0, item.image.length - 4) + "_high.png"
    setModalImage(image)
    openModal()
  }


  useEffect(() => {
    async function fetch() {
      const demo = await api.post('/authenticate', {
        email: "demo@sicredi.com.br",
        password: "Saporei1"
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
      <div className="logo-container">
        <img
          className="logo"
          src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png"
          style={{ background: '#fff', padding: 15, borderRadius: 5 }}
        />
        <h1>Sicredi Store</h1>
      </div>
      {
        products !== null ?
          <ul className="item-container">
            {
              products.map(item =>
                <li key={item.id} className={item.quantity > 0 ? "item" : "disabled item"} onClick={() => { handleClickItem(item) }}>
                  <div className="image-container">
                    <img src={item.image.substring(0, item.image.length - 4) + "_high.png"} />
                  </div>
                  <div className="text-item-container">
                    <div className="text-information">
                      <h2 className="h2">{item.name}</h2>
                      <h4>{item.description}</h4>
                    </div>
                    <div className="value-container">
                      {
                        item.quantity > 0 ?
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
                            <h3>ESGOTADO</h3>
            
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
