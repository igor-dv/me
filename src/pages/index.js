import React from 'react';
import Greeting from '../components/Greeting';
import LinksList from '../components/LinksList';
import styles from './index.module.css';

const IndexPage = () => (
  <div className={`${styles.page} ${styles.pageStyle}`}>
    <section className={`${styles.inner} ${styles.innerStyle}`}>
      <Greeting />
      <LinksList />
    </section>
  </div>
);

export default IndexPage;
