import React from 'react';
import styles from './Greeting.module.css';

const emojis = ['🤖', '😈', '😴', '😎', '🤔', '😜', '😵', '🍻', '🎮'];

const randomEmoji = () => {
  const index = parseInt(Math.random() * (emojis.length - 1));
  return emojis[index];
};

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emoji: randomEmoji(),
      shown: false,
    };
  }

  getEmojiClass() {
    return this.state.shown
      ? `${styles.emoji} ${styles.emojiShown}`
      : styles.emoji;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(prev => ({
        ...prev,
        shown: true,
      }));
    }, 1000);
  }

  render() {
    return (
      <h1>
        Hi, my name is Igor{' '}
        <span className={this.getEmojiClass()}>{this.state.emoji}</span>
      </h1>
    );
  }
}

export default Greeting;
