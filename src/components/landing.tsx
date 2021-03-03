import { FunctionComponent } from "react";
import Link from 'next/link'
import Image from 'next/image'

export const Landing: FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="tier">
          <div className="oablogo">
            <Image
              src="/images/oab-logo.gif"
              alt="oab.rodneyrinaldi"
              layout="responsive"
              width={803}
              height={332}
            />
          </div>
          <div>
            <h2>2021</h2>
          </div>
        </div>
        <div className="tier">
          <div className="oabtext">
            <h1>TABELA DE HONORÁRIOS</h1>
            <h1>ADVOGATÍCIOS</h1>
          </div>
          <div className="logo">
            <Image
              src="/images/logo.png"
              alt="oab.rodneyrinaldi"
              layout="responsive"
              width={517}
              height={589}
            />
          </div>
        </div>
        <div className="tier">
          <div className="button">
            <Link href="/home">
              <a>
                CÍVIL
            </a>
            </Link>
          </div>
          <div className="button">
            <Link href="/home">
              <a>
                PENAL
            </a>
            </Link>
          </div>
          <div className="button">
            <Link href="/home">
              <a>
                OUTROS
            </a>
            </Link>
          </div>
        </div>
        <div className="tier"></div>
      </div>

      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          padding: 2vh 1vw;
          color: #e6ecf0;
          display: flex;
          flex-direction: column;
          margin-top: 5vh;
        }

        .tier {
          width: 100%;
          color: #e6ecf0;
          display: flex;
          flex-direction: row;
          align-itens: center;
          justify-content: center;
          flex-wrap: wrap;
        }   
        .tier div h2 {
          widt: 100%;
          margin: 0;
          padding: 0;
          color: #2e1702;
          font-size:30px;
          font-weight:600;
        }

        .button {
          cursor:pointer;
          width: 20%;
          max-width: 100px;
          display: flex;
          justify-content: center;
          border-radius:4px;
          color:#ffffff;
          background: #c96c15;
          margin:0px 5px;
          padding:4px 14px;
        }
        .button:hover {
          background: #c96c15d9;
        }

        a {
          text-decoration:none;
          color:#ffffff;
        }
        
        .oabtext {
          width: 100%;
          text-align: center;
          margin-top:6vh;
        }        
        .oabtext h1 {
          widt: 100%;
          margin: 0;
          padding: 0;
          color: #2e1702;
          font-size:24px;
          font-weight:600;
        }
        
        .oablogo {
          width: 66px;
          margin-right: 1rem;
        }

        .logo {
          width: 240px;
          margin: 6vh 0 6vh;
        }
      `}</style>
    </>
  );
};
