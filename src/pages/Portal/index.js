import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../config/api-orm'
import Container from './styles.js'


function Portal() {
  const [branchs, setBranchs] = useState(null)

  useEffect(() => {
    async function fetch() {
      const response = await api.get('/branchs')
      const auxBranchs = response.data.branchs.sort((a, b) => {
        if (a.id < b.id) {
          return -1
        }
        if (a.id > b.id) {
          return 1
        }
        if (a.id > b.id) {
          return 0
        }
      })
      setBranchs(auxBranchs)
    }
    fetch()
  }, [])

  return (
    <Container>
      <div className="logo-container">
        <img
          className="logo"
          src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png"
          style={{ background: '#fff', padding: 20, borderRadius: 10 }}
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
