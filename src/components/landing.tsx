import { FunctionComponent } from "react";
import Link from 'next/link'
import Image from 'next/image'

import styles from './landing.module.css'

export const Landing: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tier}>
        <div className={styles.oablogo}>
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
        <div className={styles.rrlogo}>
          <Image
            src="/images/rr-logo.png"
            alt="oab.rodneyrinaldi"
            layout="responsive"
            width={460}
            height={460}
          />
        </div>
      </div>

      <div className={styles.tier}>
        <div className={styles.oabtext}>
          <h1>TABELA DE HONORÁRIOS</h1>
          <h1>ADVOGATÍCIOS</h1>
        </div>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="oab.rodneyrinaldi"
            layout="responsive"
            width={517}
            height={589}
          />
        </div>
      </div>

      <div className={styles.tier}>
        <div className={styles.button}>
          <Link href="/home">
            <a>
              ENTRAR
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.tier}>
      </div>
    </div>
  )
}
