import React from 'react';

const emojis = [
  '🤖',
  '😈',
  '😴',
  '😎',
  '🤔',
  '😜',
  '😵',
  '🍻',
  '🎮',
];

const randomEmoji = () => {
  const index = parseInt(Math.random() * (emojis.length - 1));
  return emojis[index];
};

const Greeting = () => {
  return (
    <h1>
      Hi, my name is Igor
      {randomEmoji()}
    </h1>
  )
};

export default Greeting;