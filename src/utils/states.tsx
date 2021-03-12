import React, { Component, useContext, useEffect } from 'react'
import Select from 'react-select'

import { SelectionContext, SelectionProvider } from '../contexts/selection'
import records from '../data/state.json'

const States = () => {
  const { } = useContext(SelectionContext);

  const options = records.map(d => ({
    "value": d.UF,
    "label": d.UF
  }))

  useEffect(() => {
  }, []);

  const handleStateChange = (obj: any) => {
    //setState(obj);
  };

  return (
    <Select
      placeholder="Estado"
      defaultValue={[options[0]]}
      options={options}
      onChange={handleStateChange}
      getOptionLabel={x => x.label}
      getOptionValue={x => x.value}
    />
  )
}

export default States