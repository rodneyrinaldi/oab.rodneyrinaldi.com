import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'DF', label: 'DF' },
  { value: 'SP', label: 'SP' },
]

const States = () => (
  <Select options={options} />
)

export default States