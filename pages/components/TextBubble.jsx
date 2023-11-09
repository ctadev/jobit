import React from 'react';

const TextBubble = ({ text, icon }) => (
    <div className="text-[#92929D] dark:bg-[#21212B] bg-[#FAFAFB]  px-2 py-1 rounded-lg flex items-center gap-2">{icon}{text}</div>
);

export default TextBubble;
