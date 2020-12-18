import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Gentium Book Basic', serif;
  /* font-family: 'Goudy Bookletter 1911', serif; */
  box-sizing: border-box;
}
body {
  background: white;
  font-size: 1em;
  .header--title {
    font-size: 2em;
    font-family: 'Permanent Marker', cursive;
  }

  i {
    font-style: italic;
  }
  em {
    font-weight: bold;
  }
}


#app {
  padding: 20px;
  max-width: 650px;
  min-width: 650px;

  margin: 0 auto;
}
  `;
