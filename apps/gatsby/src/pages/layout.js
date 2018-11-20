import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './layout.css';

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title="ig0r.me"
      meta={[
        { name: 'description', content: 'ig0r.me with gatsby' },
        { name: 'keywords', content: 'home, profile' },
      ]}
    />
    {children}
  </main>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
