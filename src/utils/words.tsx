import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'palavra 1', label: 'palavra 1' },
  { value: 'palavra 2', label: 'palavra 2' },
]

const Words = () => (
  <Select
    // defaultValue={[options[1]]}
    isMulti
    name="areas"
    options={options}
  // className="multi-selected"
  // classNamePrefix="select"
  />
)

export default Words