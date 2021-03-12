import React, { Component } from 'react'
import Select from 'react-select'
import records from '../data/action.json'

const options = records.map(d => ({
  "value": d.ACTION,
  "label": d.ACTION

}))

const Action = () => (
  <Select
    options={options}
    defaultValue={[options[0]]}
  />
)

export default Action