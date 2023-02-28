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
        <a>Home</a>
        <a>Mission</a>
        <a>Events</a>
        <a>Support Us</a>
        <a>AGM</a>
      </nav>
    </div>
  </header>
  <main>
    <slot> Nothing! </slot>
  </main>
  <footer>&#xa9; Fellowship Streetsville {{ new Date().getFullYear() }}</footer>
</template>

<style lang="scss" scoped>
@use '../../styles/font.scss';
@use '../../styles/colors.scss';

#top-header {
  padding: 1.2rem 7rem;
  background-color: colors.$primary;
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
  margin: 1rem 5rem;
  background-color: whitesmoke;
  border-radius: 5px;
}

footer {
  background-color: colors.$primary-dark;
  color: white;
  padding: 5rem;
  margin-top: 3rem;
}
</style>
