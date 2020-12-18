import React, { Component } from 'react';
import styled from 'styled-components';

function Header(props) {
  //'A Coatesmas <span className="strike">Carol</span> Quarrel'
  return (
    <section className={`${props.className} header`}>
      <h1
        className="header--title"
        dangerouslySetInnerHTML={{ __html: props.header }}
      />
      <h2>By Brian Dinh</h2>
    </section>
  );
}

const StyledHeader = styled(Header)`
  font-size: 1.5em;
  text-align: center;
  h1 {
    margin: 30px auto;
  }
  h2 {
    font-size: 1em;
    margin: 30px auto;
  }
  span {
    text-decoration: line-through;
    text-decoration-style: double;
  }
`;
export default StyledHeader;
