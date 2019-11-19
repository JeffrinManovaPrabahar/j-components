import React from 'react';
import H2 from '../H2'
import P from '../P'
import Label from '../Label'
import IconsRow from '../IconsRow'

const Fieldset = ({
  title, description, icons
}) => {
  return (
    <>
      <div className="flex-wrap flex-1 rounded-lg overflow-hidden px-6 py-3" style={{ border: '1px solid #1FAA00', backgroundColor: '#FFF' }}>
        <div className="flex">
          <div className="flex-1 truncate">
            <H2 text={title} />
          </div>
          <div className="-mr-6">
            <Label text={"More"} bgColor="#1FAA00" color="#FFF" />
          </div>
        </div>
        <div className="flex pt-3">
          <P text={description} />
        </div>
        <IconsRow icons={icons} />
        <div className="pt-2"></div>
      </div>
    </>
  )
}

export default Fieldset;
