import './PageHeader.css';
import React from 'react'

function PageHeader(props) {
  const {subheader} = props;

  return (
      <React.Fragment>
        <header className="page__header">What's on your plate?</header>
        <span className="page__subHeader">{subheader}</span>
      </React.Fragment>
  );
}

export default PageHeader;