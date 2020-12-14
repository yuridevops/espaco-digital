import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../config/api'
import Container from './styles.js'


function Portal() {
  const [branchs, setBranchs] = useState(null)

  useEffect(() => {
    async function fetch() {
      const response = await api.get('/list')
      setBranchs(response.data)
    }
    fetch()
  }, [])

  return (
    <Container>
      <div className="logo-container">
        <img
          className="logo"
          src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png"
        />
      </div>
      {
        branchs !== null ?
          <ul className="item-container">
            {
              branchs.map(item =>
                <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}>
                  <li key={item.id} className="item">
                    {item.description}
                  </li>
                </Link>
              )
            }
          </ul>
          :
          <h1>Aguarde enquanto o conteúdo é carregado</h1>
      }
    </Container>
  );
}

export default Portal;
