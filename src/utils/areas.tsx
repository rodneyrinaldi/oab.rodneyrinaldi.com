import React, { Component, useState, useEffect } from 'react'
import Select from 'react-select'
import records from '../data/area.json'

const Area = () => {
  const [selected, setSelected] = useState(null);

  const options = records.map(d => ({
    "value": d.AREA,
    "label": d.AREA

  }))

  useEffect(() => {
  }, [selected]);

  const handleAreaChange = (obj: any) => {
    // setCountry(obj);
    // setLangList(obj.languages);
    // setLang(null);
  };

  return (
    <Select
      placeholder="Area ..."
      options={options}
      onChange={handleAreaChange}
      getOptionLabel={x => x.label}
      getOptionValue={x => x.value}
    />
  )
}

export default Area