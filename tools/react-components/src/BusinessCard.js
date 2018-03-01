import React from 'react';
import Greeting from './Greeting';
import LinksList from './LinksList';
import styles from './BusinessCard.module.css';

const BusinessCard = () => (
  <div className={`${styles.page} ${styles.pageStyle}`}>
    <section className={`${styles.inner} ${styles.innerStyle}`}>
      <Greeting />
      <LinksList />
    </section>
  </div>
);

export default BusinessCard;
