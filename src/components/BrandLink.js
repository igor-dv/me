import React from 'react';
import PropTypes from 'prop-types';

import './BrandLink.css';

const BrandLink = props => {
  const { url, src, alt } = props;

  return (
    <a href={url} target="_blank">
      <img src={src} className="icon" alt={alt} />
    </a>
  );
};

BrandLink.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BrandLink;
