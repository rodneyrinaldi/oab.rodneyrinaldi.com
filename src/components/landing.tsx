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
            <p>São Paulo</p>
            <p>2021</p>
          </div>
        </div>
        <div className="tier">
          <div>
            <p>Tabela</p>
            <p>honorários</p>
            <p>advocatícios</p>
            <p>Ordem dos</p>
            <p>Advogados</p>
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
          <div>
            <Link href="/">
              <a>
                CONSULTAR
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
          color: #e6ecf0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .tier {
          width: 100%;
          color: #e6ecf0;
          display: flex;
          flex-direction: row;
          align-items: space-between;
          justify-content: center;
        }

        a {
          border-radius:4px;
          display:inline-block;
          cursor:pointer;
          color:#1C1C1C;
          background: #FFA500;
          font-size:18px;
          font-weight:600;
          padding:10px 40px;
          margin:20px 20px;
          text-decoration:none;
        }
        a a:hover {
          opacity: 0.8; 
        }
        
        p {
          color: black;
        }

        .oablogo {
          width: 90px;
        }

        .logo {
          width: 240px;
        }
      `}</style>
    </>
  );
};
