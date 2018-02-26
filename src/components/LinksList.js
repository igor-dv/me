import React from 'react';
import twitter from '../icons/twitter-square.svg';
import github from '../icons/github-square.svg';
import medium from '../icons/medium.svg';
import linkedin from '../icons/linkedin.svg';

const style = {
  icons: {
    width: "30px",
    display: "block",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
  },
  listItem: {
    margin: "10px",
    padding: 0,
  },
};

const LinksList = () => {
  return (
    <ul style={style.list}>
      <li style={style.listItem}>
        <a href="https://github.com/igor-dv" target="_blank">
          <img src={github} style={style.icons} alt="github" />
        </a>
      </li>
      <li style={style.listItem}>
        <a href="https://medium.com/@davydkin.igor" target="_blank">
          <img src={medium} style={style.icons} alt="medium" />
        </a>
      </li>
      <li style={style.listItem}>
        <a href="https://twitter.com/@IgorDavydkin" target="_blank">
          <img src={twitter} style={style.icons} alt="twitter" />
        </a>
      </li>
      <li style={style.listItem}>
        <a href="https://www.linkedin.com/in/igordavydkin/" target="_blank">
          <img src={linkedin} style={style.icons} alt="linkedin" />
        </a>
      </li>
    </ul>
  )
};

export default LinksList;