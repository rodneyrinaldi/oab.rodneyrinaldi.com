import { FunctionComponent } from "react";
import Image from 'next/image'

export const Container: FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <Image
            src="/images/oab-logo.gif"
            alt="oab.rodneyrinaldi"
            layout="responsive"
            width={803}
            height={332}
          />
        </div>
        <p>Tabela de honorários OAB</p>
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
        p {
          color: black;
        }

        .logo {
          width: 115px;
        }
        
        .diviframe {
          width: 100vw;
          height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .iframe {
          width: 100vw;
          height: 50vh;
        }

        .goForward {
          align-self:center;
          padding: 8px 14px 6px;
          color: aliceblue;
          background: rgb(60, 94, 110);
          border-radius: 5px;
          text-decoration: none; 
          margin-bottom: 20px;
        }
        .goForward:hover {
          background: rgb(88, 128, 146);
        }
      `}</style>
    </>
  );
};
