import React from 'react';
import PropTypes from 'prop-types';
import styles from './BrandLink.module.css';

const BrandLink = props => {
  const { url, src, alt } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
      <img src={src} className={styles.icon} alt={alt} />
    </a>
  );
};

BrandLink.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BrandLink;
