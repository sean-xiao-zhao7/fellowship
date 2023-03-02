<template>
  <header>
    <div id="top-header">
      <div></div>
      <a>Facebook</a>
      <a>YouTube</a>
      <a>Contact Us</a>
      <a>Support Us</a>
    </div>
    <div id="nav-container">
      <nav>
        <img src="../../assets/images/fellowship_icon.png" />
        <a>Plan a visit</a>
        <a>Our mission</a>
        <a>Past sermons</a>
        <a>Giving</a>
        <a>Contact</a>
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
  padding: 1.2rem 7rem;
  background: linear-gradient(colors.$primary-light, colors.$primary);
  display: grid;
  grid-template-columns: 55% repeat(4, 1fr);
  grid-column-gap: 1rem;
  place-items: center;
  color: white;
  a {
    font-size: font.$font-size-500;
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
    font-size: font.$font-size-800;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
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
