import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="top-bar"> Iago Vieira</h1>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h2>Desenvolver Backend 1º Desenvolvedor Frontend 2º
          </h2>
          <p>Linguagens</p>
          <p>
            <code>Java</code> <code>JavaScript</code> <code>Go</code> <code>Python</code> <code>C</code>
          </p>
          <p>
            Tecnologias
          </p>
          <p>
            <code>Spring Boot</code> <code>JPA</code> <code>Fast API</code>
          </p>
        </div>
         <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Projetos</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://github.com/iagodino/Grupo_de_Estudos_Frontend" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Estudos em Frontend
              </a>
            </li>
            <li>
              <a href="https://github.com/iagodino/Trabalho-Ver-Val" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Testes Unitarios em Java
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Conta</h2>
          <ul>
            <li>
              <a href="https://github.com/iagodino" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
          </ul>
          </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
