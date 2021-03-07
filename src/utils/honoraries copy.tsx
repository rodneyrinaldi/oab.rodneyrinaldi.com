import React, { Component } from 'react'

import styles from './honoraries.module.css'

const Honoraries = () => (

  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.teste}>col</div>
      </div>
    </div>

    <div className={styles.row}>
      {/* <div className="col col-2"> */}
      <div className={styles.col2}>
        <div className={styles.teste}>col col-2</div>
      </div>
      <div className={styles.col2}>
        <div className={styles.teste}>col col-2</div>
      </div>
    </div>


    <div className={styles.row}>
      {/* <div className="col col-3"> */}
      <div className={styles.col3}>
        <div className={styles.teste}>col col-3</div>
      </div>
      <div className={styles.col3}>
        <div className={styles.teste}>col col-3</div>
      </div>
      <div className={styles.col3}>
        <div className={styles.teste}>col col-3</div>
      </div>
    </div>

    <div className={styles.row}>
      {/* <div className="col col-content"> */}
      <div className={styles.col}>
        <div className={styles.teste}>col conteudo</div>
      </div>
      {/* <div className="col col-sidebar"> */}
      <div className={styles.col}>
        <div className={styles.teste}>col sidebar</div>
      </div>
    </div>
  </div >

)

export default Honoraries