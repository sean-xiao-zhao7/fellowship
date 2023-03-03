<template>
  <header>
    <div id="top-header">
      <div></div>
      <a>Facebook</a>
      <a>YouTube</a>
      <a>Contact Us</a>
      <a>Support Us</a>
      <a>AGM</a>
    </div>
    <div id="nav-container">
      <nav>
        <router-link to="/"><img src="../../assets/images/fellowship_icon.png" /></router-link>
        <router-link to="/planavisit">Plan a visit</router-link>
        <router-link to="/pastsermons">Past sermons</router-link>
        <router-link to="/ourmission">Our mission</router-link>
        <router-link to="/giving">Giving</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
  <main>
    <slot>Page under construction.</slot>
  </main>
  <footer>
    <p>&#xa9; Fellowship Streetsville {{ new Date().getFullYear() }}</p>
    <div id="sponsors">
      <img src="../../assets/images/north_american_mission_board.png" />
      <img src="../../assets/images/cnbc.jpg" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../../styles/font.scss';
@use '../../styles/colors.scss';

#top-header {
  padding: 1.2rem 3rem;
  background: linear-gradient(colors.$primary-light, colors.$primary);
  display: grid;
  grid-template-columns: 45% repeat(5, 1fr);
  grid-column-gap: 1rem;
  place-items: center;
  color: white;
  a {
    border: solid 1px transparent;
    transition: border 0.1s;
    &,
    &:visited {
      font-size: font.$font-size-500;
      color: white;
    }

    &:hover {
      border-bottom: solid 1px white;
    }
  }
}

#nav-container {
  padding: 1rem 8rem;

  img {
    height: 7rem;
  }

  nav {
    height: 8rem;
    font-family: font.$crimson;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;

    a {
      border-bottom: solid 2px transparent;
      transition: border 0.1s;
      &,
      &:visited {
        color: black;
        font-size: font.$font-size-700;
      }

      &:not(:nth-child(1)) {
        &:hover,
        &.router-link-active {
          border-bottom: solid 2px colors.$primary;
        }
      }
    }
  }
}

main {
  padding: 2rem 5rem;
  margin: 0rem 5rem;
  background-color: whitesmoke;
  border-radius: 5px;
  overflow: hidden;
}

footer {
  background-color: colors.$primary-dark;
  color: white;
  padding: 5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: font.$font-size-400;
  }

  #sponsors img {
    height: 4rem;
    border-radius: 5px;
    margin-right: 0.5rem;
  }
}
</style>
