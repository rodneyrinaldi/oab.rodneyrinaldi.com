import React, { Component } from 'react'
import Select from 'react-select'
import records from '../data/area.json'

const options = records.map(d => ({
  "value": d.AREA,
  "label": d.AREA

}))

const Area = () => (
  <Select
    options={options}
    defaultValue={[options[0]]}
  />
)

export default Area