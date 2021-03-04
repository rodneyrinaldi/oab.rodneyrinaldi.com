import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'Administrativo', label: 'Administrativo' },
  { value: 'Advogado Corespondente', label: 'Advogado Corespondente' },
  { value: 'Ambiental', label: 'Ambiental' },
  { value: 'Atendimento Virtual Eletrônico', label: 'Atendimento Virtual Eletrônico' },
  { value: 'Cívil', label: 'Cívil' },
  { value: 'Comum', label: 'Comum' },
  { value: 'Desportiva', label: 'Desportiva' },
  { value: 'Eleitoral', label: 'Eleitoral' },
  { value: 'Militar', label: 'Militar' },
  { value: 'Penal', label: 'Penal' },
  { value: 'Previdenciário', label: 'Previdenciário' },
  { value: 'Trabalhista', label: 'Trabalhista' },
  { value: 'Tribunais e Conselhos', label: 'Tribunais e Conselhos' },
  { value: 'Tributário', label: 'Tributário' },
]

const Areas = () => (
  <Select
    // defaultValue={[options[1]]}
    isMulti
    name="areas"
    options={options}
  // className="basic-multi-select"
  // classNamePrefix="select"
  />
)

export default Areas