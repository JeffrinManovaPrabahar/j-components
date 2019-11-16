import React from 'react';
import P from '../P'
import Icon from '../Icon'

const WithIconP = ({ icon, text }) => {
  return (
    <div className="flex">
      <Icon icon={icon} />
      <P text={text} />
    </div>
  )
}

export default WithIconP;
