import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Header from '@components/Header';

function EndPage() {
  return (
    <>
      <Header header={'A Coatesmas Carol'} />
      <StyledEnd />
      <Link to="/story">
        <Button>Home</Button>
      </Link>
    </>
  );
}

function End(props) {
  return <section className={`${props.className} end`}></section>;
}

const StyledEnd = styled(End)`
  font-family: 'Goudy Bookletter 1911', serif;
  font-size: 1.5em;
  line-height: 2;
`;
export default EndPage;
