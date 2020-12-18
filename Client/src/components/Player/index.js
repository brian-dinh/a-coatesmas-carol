import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '@components/Button';
import players from '../../configs/players';
import Header from '@components/Header';

import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { Link } from 'react-router-dom';

function Player(props) {
  const player = props.match.params.player;
  const myData = players[player];
  return (
    <>
      <Header
        header={'A Coatesmas <span className="strike">Carol</span> Quarrel'}
      />
      <section className={`${props.className}`}>
        <h2>Hello, {myData.name}</h2>
        <br />
        {myData.instructions &&
          myData.instructions.map((line, i) => {
            return <p key={i}>{line}</p>;
          })}
        <br />
        {myData.secretMission && (
          <div>
            <small>
              <i>Psst!</i> You have a secret mission. DO NOT DISCLOSE OF THIS
              INFORMATION before the end of the game. If you complete your
              mission you'll get bonus points. But you might not be very helpful
              towards solving the crime.
            </small>
            <br />
            <br />
            Secret Mission: {myData.secretMission}
          </div>
        )}
        <br />
        {myData.notes && (
          <div>
            <p>Thoughts:</p>
            {myData.notes.map((line, i) => {
              return <p key={i}>{line}</p>;
            })}
          </div>
        )}

        <br />
        {myData.knows && (
          <div>
            Interesting piece of information about {myData.knows}:{' '}
            {players[myData.knows].motive}
          </div>
        )}
        <br />
        <a href="https://a-coatesmas-carol.herokuapp.com/story" target="_blank">
          <Button> Return to the scene of the crime. </Button>
        </a>
        <a href="https://forms.gle/f2wmnELJLVLv8frp9" target="_blank">
          <Button> I know who did it. </Button>
        </a>
      </section>
    </>
  );
}

const StyledPlayer = styled(Player)`
  font-size: 2em;
  small {
    font-size: 0.7em;
  }
  text-align: left;
  h2 {
    margin: 0px auto;
  }
`;
export default StyledPlayer;
