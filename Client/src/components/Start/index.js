import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '@components/Button';
import Header from '@components/Header';
import players from '../../configs/players';
import { Link } from 'react-router-dom';

function Start(props) {
  return (
    <>
      <Header
        header={'A Coatesmas <span className="strike">Carol</span> Quarrel'}
      />

      <section className={`${props.className}`}>
        <section className="rules">
          <h2>Rules of the Game</h2>
          <p>
            In order to win, you must work together to successfully identify the
            person who snatched the Nespresso®.
          </p>
          <br />
          <p>
            Oh, unless you believe that you are in fact the one who commmited
            the foul act.
          </p>
          <p>
            Your goal is to identify yourself while the rest of the group
            accuses an innocent victim.
          </p>
          <br />
          <p>Can you piece together what happened on this dastardly night?</p>
          <br />
          <p>Click on your name below to proceed.</p>
          <p>
            You will receive special information that is unique to you. You can
            choose what to share and what to keep to yourself...
          </p>
        </section>
        {players &&
          Object.keys(players).map((player, i) => {
            return (
              <Link key={i} to={`/player/${player.toLowerCase()}`}>
                <Button>{player}</Button>
              </Link>
            );
          })}
      </section>
    </>
  );
}

const StyledStart = styled(Start)`
  font-size: 2em;
  text-align: center;
  h1 {
    margin: 30px auto;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 30px;
  }
`;
export default StyledStart;
