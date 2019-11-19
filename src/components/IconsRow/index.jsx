import React from 'react';
import Icon from '../Icon'

const IconsRow = ({ icons, size = 'base' }) => {
  let margin = ''
  if (size === 'lg') margin = 'mr-3'
  if (size === 'base') margin = 'mr-2'
  return (
    <div className="flex mt-5 relative overflow-hidden">
      {
        icons.map((icon, i) => (
          <div key={i} className={`${margin} flex-shrink-0`}>
            <Icon icon={icon} size={size} />
          </div>
        ))
      }
      <div className="ml-auto absolute w-8 h-full right-0 justify-end" style={{ background: "linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)" }}>
      </div>
    </div>
  )
}

export default IconsRow;
