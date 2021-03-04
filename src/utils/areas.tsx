import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'CIVIL', label: 'CIVIL' },
  { value: 'PENAL', label: 'PENAL' },
  { value: 'TRABALHISTA', label: 'TRABALHISTA' }
]

const Areas = () => (
  <Select
    defaultValue={[options[1]]}
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
)

export default Areas