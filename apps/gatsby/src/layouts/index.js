import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '@me/react-components/src/common.css';

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title="ig0r.me"
      meta={[
        { name: 'description', content: 'ig0r.me' },
        { name: 'keywords', content: 'home, profile' },
      ]}
    />
    {children()}
  </main>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
