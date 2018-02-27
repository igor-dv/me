import React from 'react';
import BrandLink from './BrandLink';
import twitter from '../assets/twitter-square.svg';
import github from '../assets/github-square.svg';
import medium from '../assets/medium.svg';
import linkedin from '../assets/linkedin.svg';
import styles from './LinksList.module.css';

const LinksList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <BrandLink src={github} alt="github" url="https://github.com/igor-dv" />
      </li>
      <li className={styles.listItem}>
        <BrandLink
          src={medium}
          alt="medium"
          url="https://medium.com/@davydkin.igor"
        />
      </li>
      <li className={styles.listItem}>
        <BrandLink
          src={twitter}
          alt="twitter"
          url="https://twitter.com/@IgorDavydkin"
        />
      </li>
      <li className={styles.listItem}>
        <BrandLink
          src={linkedin}
          alt="linkedin"
          url="https://www.linkedin.com/in/igordavydkin/"
        />
      </li>
    </ul>
  );
};

export default LinksList;
