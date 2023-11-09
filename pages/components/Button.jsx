import React from 'react';

const Button = ({ title, bgColor, textColor, borderColor, px, py }) => (
    <button type="button" className={`border ${px || 'px-3'} ${py || 'py-1'} rounded-lg ${borderColor} ${bgColor} ${textColor}`}>{title}</button>
);

export default Button;
