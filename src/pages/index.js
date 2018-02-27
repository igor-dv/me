import React from 'react';
import Greeting from '../components/Greeting';
import LinksList from '../components/LinksList';

import './index.css';

const IndexPage = () => (
  <div className="page page-style">
    <section className="inner inner-style">
      <Greeting />
      <LinksList />
    </section>
  </div>
);

export default IndexPage;
