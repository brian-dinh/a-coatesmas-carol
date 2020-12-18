import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Header from '@components/Header';

import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

function StoryPage() {
  return (
    <>
      <Header header={'A Coatesmas Carol'} />
      <StyledStory />
      <Link to="/start/">
        <Button>Start</Button>
      </Link>
    </>
  );
}

function Story(props) {
  const onClickClue = () => {
    console.log('clicked!');
    setActive(true);
  };
  const onRighClick = () => {
    console.log('clicked!');
    setFound('found');
  };

  const onLeaveClue = () => {
    setActive(false);
    setFound('not-found');
  };
  const [active, setActive] = useState(false);
  const [found, setFound] = useState('not-found');

  return (
    <section className={`${props.className} story`}>
      <div
        id={`${active}`}
        onClick={onClickClue}
        onMouseLeave={onLeaveClue}
        onContextMenu={onRighClick}
        className="clue"
      >
        <p></p>
      </div>
      <p className={`clue-text ${active}`}>
        As you peer in the dumpster, you're saddened to see,
        <br /> Someone destroyed the nespresso and left it to bleed.
        <br /> <br />
        I wonder how the perp got away. <br />
        An Uber or Lyft? There was no delay.
      </p>

      <img src={require('../../assets/page1.png')} />
      <p>
        Twas the night before Coatesmas, when all through the office,
        <br />
        <i>No burgers on screens, nor Chick-fil-A® sauces.</i>
      </p>
      <p>
        <i>Most people</i> had left their desks and their chairs.
        <br />
        But who could have guessed that Megan's still there.
      </p>
      <div className="time-secret-button">
        <div className="time-secret-container">
          <div className="time-secret">
            <p className="secret">
              8PM was when she made her drink.
              <br />
              How much more time 'til the crime, do you think?
            </p>
          </div>
        </div>
      </div>
      <img src={require('../../assets/page2.png')} />
      <p>
        She sipped her Nespresso® and started to type,
        <br />
        ‘Gotta submit these hours ‘fore i turn in for the night.’
      </p>
      <p>
        One hour, two hours, three hours had past,
        <br />
        When Megan was startled by a loud-sounding{' '}
        <a href="https://rage-room.com/" target="_blank">
          <i>crash</i>
        </a>
        .
      </p>
      <img src={require('../../assets/page3.png')} />
      <p>
        Perhaps it was Santa or maybe an elf,
        <br />
        because Megan knew she was there by herself..
      </p>
      <p>
        The kitchen was where the sound had come from,
        <br />
        She grabbed her bat, ready to fuck up someone.
      </p>
      <p>
        As she turned ‘round the corner, bat ready to swing,
        <br />
        Nobody was there, but something was missing…
      </p>
      <Draggable>
        <div>
          <img
            className="draggable-img"
            src={require('../../assets/page4.png')}
          />
        </div>
      </Draggable>
      <div className="secret2">
        <p className="secret2">
          As you inspect the scene of the crime,
          <br />
          you notice small bits got left behind.
          <br />
          Small shards of plastic lead out toward the street.
          <br />
          Perhaps the Nespresso® did not leave in one piece.
        </p>
      </div>
      <p>
        The Nespresso® was gone! Footsteps fled from the scene.
        <br />
        “Hey Asshole,” she yelled. “I need my caffeine!”
      </p>
      <p>
        I thought everyone left, so who could that be?
        <br />
        The last people who're here were Software ‘n DP.
      </p>
      <img src={require('../../assets/page5.png')} />
      <p>
        I guess that narrows down who committed the crime,
        <br />
        maybe Matthew or Dillon; Brian, Sam, Madeline.
      </p>
      <p>
        Perhaps Jeison or Dan maybe Yamna or G.
        <br />I hope that nobody thinks it was me…
      </p>
      <p>
        So gather around, as accusations echo,
        <br />
        while we figure out which Grinch stole the Nespresso®.
      </p>
    </section>
  );
}

const StyledStory = styled(Story)`
  font-family: 'Goudy Bookletter 1911', serif;
  font-size: 1.5em;
  line-height: 2;
  img {
    width: 100%;
    padding: 20px;
  }
  p {
    margin-bottom: 30px;
  }

  div.secret2 {
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  p.secret2 {
    top: -400px;
    width: 50%;
    margin: 0 auto;
    font-size: 0.5em;
    text-align: center;
  }

  .draggable-img {
    z-index: 100;
    pointer-events: none;
  }
  .react-draggable {
    z-index: 100;
  }
  a {
    color: inherit;
    text-decoration: none; /* no underline */
  }
  .time-secret-button {
    height: 50px;
    width: 50px;
    border-radius: 100px;
    position: absolute;
    top: 838px;
    left: 185px;
    z-index: 1000;
    overflow: visible;
    border: none;
    box-shadow: none;
    &:hover {
      .time-secret-container {
        transition: 0.5s;
        border: 4px solid #9ecaed;
        box-shadow: 0 0 10px #9ecaed;
        p {
          opacity: 1;
        }
      }
    }
    .time-secret-container {
      height: 130px;
      width: 130px;
      border-radius: 100px;
      left: -40px;
      top: -33px;
      z-index: 1000;
      overflow: visible;
      border: none;
      box-shadow: none;
      pointer-events: none;

      p {
        opacity: 0;
        left: -220%;
        pointer-events: none;
        width: 275px;
        font-size: 0.75em;
      }
    }
  }
  .clue {
    z-index: 10000;
    position: absolute;
    top: 280px;
    left: 88px;
    height: 90px;
    width: 70px;

    p {
      height: 90px;
      width: 70px;
    }
  }
  p.clue-text,
  p.clue-final {
    z-index: 10;
    font-size: 0.75em;
    pointer-events: none;
    width: 300px;
    background: white;
    padding: 10px;
    position: absolute;
    top: 280px;
    left: 88px;
    opacity: 0;
    &.true {
      opacity: 1;
    }
    &.found {
      opacity: 1;
    }
  }

  .react-contextmenu-wrapper {
    z-index: 1000;
    position: absolute;
    top: 280px;
    left: 88px;
    height: 90px;
    width: 70px;
  }
`;
export default StoryPage;
