import { FunctionComponent } from "react";
import Image from 'next/image'

export const Loading: FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="oab.rodneyrinaldi"
            layout="responsive"
            width={517}
            height={589}
          />
        </div>
        <p>carregando ...</p>
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
      `}</style>
    </>
  );
};
