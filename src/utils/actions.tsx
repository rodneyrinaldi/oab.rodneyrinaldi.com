import React, { Component, useState, useEffect } from 'react'
import Select from 'react-select'
import records from '../data/action.json'

const Action = () => {
  const [selected, setSelected] = useState(null);

  const options = records.map(d => ({
    "value": d.ACTION,
    "label": d.ACTION

  }))

  useEffect(() => {
  }, [selected]);

  return (
    <Select
      placeholder="Ação ..."
      options={options}
      // defaultValue={[options[0]]}
      onclick=""
    />
  )
}

export default Action