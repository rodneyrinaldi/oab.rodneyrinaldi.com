import { FunctionComponent, useState, useEffect } from "react";
import Image from 'next/image'
import Cookies from "js-cookie";

import styles from './home.module.css'

import States from '../utils/states'
import Areas from '../utils/areas'
import Actions from '../utils/actions'
import Procedures from '../utils/procedures'
import Version from './version'

export const Home: FunctionComponent = ({ children }) => {
  const [ls, setLs] = useState('')
  const [co, setCo] = useState('')

  useEffect(() => {
    setLs(localStorage.getItem('@test-app/userid') || '')
    setCo(Cookies.get('@test-app/userid') || '')
  }, [])

  // const ls = localStorage.getItem('@test-app/userid') || ''
  // const co = Cookies.get('@test-app/userid') || ''

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
        <h1>TABELA DE HONORÁRIOS</h1>
        <div className={styles.oabtext}>
          <div className={styles.states}>
            <States />
          </div>
          <div className={styles.areas}>
            <Areas />
          </div>
        </div>

        <div className={styles.oabtext}>
          <div className={styles.actions}>
            <Actions />
          </div>
        </div>

      </div>

      <div className={styles.tier}>
        <div className={styles.procedures}>
          <Procedures />
        </div>
      </div>

      <div className={styles.tier}>
        <div className={styles.oabtext}>
          <h1>{ls}{' '}{co}</h1>
        </div>
        <Version />
      </div>

    </div>
  )
}
