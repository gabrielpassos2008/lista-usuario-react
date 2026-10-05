import { useEffect, useState, useRef } from 'react'
import './style.css'
import ImgLixo from '../assets/excluir.png'
import api from '../services/api'

function Home() {

  useEffect(() => {
    getUsuario()
  }, [])

  // criando o useStates pora atualizar os dados do front
  const [usuarios, setUsuario] = useState([])

  async function getUsuario() {
    // async: se comunicando com fora do react, com a api externa
    const usuariosApi = await api.get('/usuario/listar')

    // pegando so o valor que dos usuario da api.
    setUsuario(usuariosApi.data)
  }
  // pegando os valores do input do form a baixo
  const inputNome = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()
  async function cadastrarUsuario() {


    await api.post('/usuario/cadastrar', {
      nome: inputNome.current.value,
      email: inputEmail.current.value,
      idade: inputIdade.current.value
    })
    getUsuario()
  }

  async function deletarUsuario(id) {
    await api.delete('/usuario/deletar', {
      params: {
        id: id
      }
    })
    getUsuario()
  }

  return (
    <>
      <div className='conteiner'>
        <form action="post">
          <h1>Cadastro de usuario</h1>
          <input placeholder='Nome' type="text" name='nome' ref={inputNome} />
          <input placeholder='Idade' type="text" name='idede' ref={inputIdade} />
          <input placeholder='Email' type="email" name='email' ref={inputEmail} />
          <button type='button' onClick={cadastrarUsuario}>Cadastrar</button>
        </form>

        <div>
          {usuarios.map(usuario => (
            <div className='card' key={usuario.id}>
              <div>
                <p>Nome:  <span>{usuario.nome} </span></p>
                <p>Idade: <span>{usuario.idade}</span></p>
                <p>Email: <span>{usuario.email}</span></p>
              </div>
              <button onClick={() => deletarUsuario(usuario.id)}>
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
