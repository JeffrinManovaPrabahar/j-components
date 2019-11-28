
import React from 'react';
import H2 from '../H2'
import P from '../P'
import Label from '../Label'

const TimelineItem = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-1 rounded-lg overflow-hidden px-6 py-3" >
        <div className='flex-col flex-1'>
          <div className="flex">
            <div className="flex-1 truncate">
              <H2 text={title} />
            </div>
          </div>
          <div className="flex pt-1">
            <P text={description} />
          </div>
        </div>
        <div className='flex-col rotate-90 -mt-3 -mb-3'>
          <Label text={"More"} bgColor="#1FAA00" color="#FFF" />
        </div>
      </div>
    </>
  )
}

export default TimelineItem;
