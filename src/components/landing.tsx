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
          <div className="oabtext">
            <Image
              src="/images/logotexto.png"
              alt="oab.rodneyrinaldi"
              layout="responsive"
              width={293}
              height={204}
            />
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
            <Link href="/">
              <a>
                CÍVIL
            </a>
            </Link>
          </div>
          <div className="button">
            <Link href="/">
              <a>
                PENAL
            </a>
            </Link>
          </div>
          <div className="button">
            <Link href="/">
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
          padding: 5vh 5vw;
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
          flex-wrap: wrap;
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
          

          // width: 100%;
          // border-radius:4px;
          // display:inline-block;
          // cursor:pointer;
          // color:#ffffff;
          // background: #c96c15;
          // font-size:18px;
          // font-weight:600;
          // padding:10px 40px;
          // margin:20px 20px;
          // text-decoration:none;
        }
        
        p {
          color: #2e1702;
          font-size:22px;
          font-weight:600;
        }
        
        .oabtext {
          width: 200Px;
        }
        
        .oablogo {
          width: 74Px;
        }

        .logo {
          width: 240px;
        }
      `}</style>
    </>
  );
};
