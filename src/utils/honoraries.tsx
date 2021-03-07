import React, { Component } from 'react'

import styles from './honoraries.module.css'

const Honoraries = () => (

  <div className={styles.container}>

    <div className={styles.row}>
      <div className={styles.col1}>
        <div className={styles.title}>PROCEDIMENTO</div>
      </div>
      <div className={styles.col2}>
        <div className={styles.title}>VALOR</div>
      </div>
      <div className={styles.col3}>
        <div className={styles.title}>%</div>
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.col1}>
        <div className={styles.line}>...</div>
      </div>
      <div className={styles.col2}>
        <div className={styles.line}>...</div>
      </div>
      <div className={styles.col3}>
        <div className={styles.line}>...</div>
      </div>
    </div>

  </div >

)

export default Honoraries