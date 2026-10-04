import { useState } from 'react'
import './style.css'
import ImgLixo from '../assets/excluir.png'

function Home() {
  const usuarios = [
    {
      id:'1',
      nome: 'gabriel',
      idede: '54',
      email: 'gabriel@email.com'
    },
    {
      id:'2',
      nome: 'luiza',
      idade: '34',
      email: 'luiza@email.com'
    }
  ]

  return (
    <>
      <div className='conteiner'>
        <form action="post">
          <h1>Cadastro de usuario</h1>
          <input placeholder='Nome' type="text" name='nome'/>
          <input placeholder='Idade' type="text" name='idede'/>
          <input placeholder='Email' type="email" name='email'/>
          <button type='button' >Cadastrar</button>
        </form>

        <div>
          {usuarios.map(usuario => (
          <div className='card' key={usuario.id}>
            <div>
              <p>Nome:  <span>{usuario.nome} </span></p>
              <p>Idade: <span>{usuario.idade}</span></p>
              <p>Email: <span>{usuario.email}</span></p>
            </div>
            <button>
              <img src={ImgLixo} alt="Imagem de excluir" />
            </button>
          </div>
          ))}
        </div>
        
      </div>
    </>
  )
}

export default Home
