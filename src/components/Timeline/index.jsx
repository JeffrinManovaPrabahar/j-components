import React from 'react';
import TimelineItem from '../TimelineItem'

const Timeline = ({ data }) => {
  return (
    <>
      {data.map((item, i) => <TimelineItem key={i} {...{ ...item }} />)}
    </>
  )
}

export default Timeline;