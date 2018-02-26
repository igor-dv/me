import React from 'react';
import Greeting from '../components/Greeting';
import LinksList from '../components/LinksList';

const style = {
  page: {
    position: "absolute",
    width: '100%',
    height: '100%',
    overflow: "hidden",
  },
  inner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const IndexPage = () => (
  <div style={style.page}>
    <div style={style.inner}>
      <Greeting />
      <LinksList />
    </div>
  </div>
);

export default IndexPage;
