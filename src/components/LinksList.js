import React from 'react';
import BrandLink from './BrandLink';
import twitter from '../assets/twitter-square.svg';
import github from '../assets/github-square.svg';
import medium from '../assets/medium.svg';
import linkedin from '../assets/linkedin.svg';

import './LinksList.css';

const LinksList = () => {
  return (
    <ul className="list">
      <li className="list-item">
        <BrandLink src={github} alt="github" url="https://github.com/igor-dv" />
      </li>
      <li className="list-item">
        <BrandLink
          src={medium}
          alt="medium"
          url="https://medium.com/@davydkin.igor"
        />
      </li>
      <li className="list-item">
        <BrandLink
          src={twitter}
          alt="twitter"
          url="https://twitter.com/@IgorDavydkin"
        />
      </li>
      <li className="list-item">
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
