import React, { Component } from 'react'
import Select from 'react-select'
import records from '../data/state.json'

const options = records.map(d => ({
  "value": d.UF,
  "label": d.UF

}))

const States = () => (
  <Select
    options={options}
    defaultValue={[options[0]]}
  />
)

export default States