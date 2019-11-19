import React from 'react';

const Label = ({ text, color, bgColor }) => {
  return (
    <div className="inline-flex px-4 font text-base leading-relaxed" style={{ backgroundColor: bgColor, color }}>
      {text}
    </div>
  )
}

export default Label;
