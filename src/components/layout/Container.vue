<script>
import { Transition } from 'vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiFacebook, BiYoutube, HiMail, GiHamburgerMenu } from 'oh-vue-icons/icons'
addIcons(HiMail, BiFacebook, BiYoutube, GiHamburgerMenu)

export default {
  components: {
    'v-icon': OhVueIcon,
    Transition: Transition
  },
  data() {
    return {
      showTopHeaderMobile: false
    }
  },
  methods: {
    toggleTopHeaderMobile() {
      this.showTopHeaderMobile = !this.showTopHeaderMobile
    }
  }
}
</script>
<template>
  <header>
    <div id="top-header-mobile-hamburger" @click="toggleTopHeaderMobile">
      <v-icon class="icon" name="gi-hamburger-menu" scale="1.5" fill="white" />
      <span>Fellowship Church Streetsville</span>
    </div>
    <div id="top-header">
      <div></div>
      <a href="https://www.facebook.com/FellowshipGTA" target="_blank"
        ><v-icon class="icon" name="bi-facebook" scale="1.5" animation="wrench" hover />Facebook</a
      >
      <a href="https://www.youtube.com/@fellowshipchurchrivergrove5221" target="_blank"
        ><v-icon class="icon" name="bi-youtube" scale="1.5" animation="wrench" hover />YouTube</a
      >
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/giving">Support Us</router-link>
      <router-link to="/agm">AGM</router-link>
    </div>
    <Transition>
      <div id="top-header-mobile" v-if="showTopHeaderMobile">
        <div></div>
        <a href="https://www.facebook.com/FellowshipGTA" target="_blank"
          ><v-icon
            class="icon"
            name="bi-facebook"
            scale="1.5"
            animation="wrench"
            hover
          />Facebook</a
        >
        <a href="https://www.youtube.com/@fellowshipchurchrivergrove5221" target="_blank"
          ><v-icon class="icon" name="bi-youtube" scale="1.5" animation="wrench" hover />YouTube</a
        >
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/giving">Support Us</router-link>
        <router-link to="/agm">AGM</router-link>
      </div>
    </Transition>
    <div id="nav-container">
      <nav>
        <router-link to="/"><img src="../../assets/images/fellowship_icon.png" /></router-link>
        <router-link to="/whatsnew">What's new</router-link>
        <router-link to="/planavisit">Plan a visit</router-link>
        <router-link to="/pastsermons">Past sermons</router-link>
        <router-link to="/aboutus">About us</router-link>
        <router-link to="/giving">Giving</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
    <Transition>
      <div id="nav-container-mobile" v-if="showTopHeaderMobile">
        <nav>
          <router-link to="/"><img src="../../assets/images/fellowship_icon.png" /></router-link>
          <router-link to="/planavisit">Plan a visit</router-link>
          <router-link to="/pastsermons">Past sermons</router-link>
          <router-link to="/aboutus">About us</router-link>
          <router-link to="/giving">Giving</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
    </Transition>
  </header>
  <main>
    <slot>Page under construction.</slot>
  </main>
  <footer>
    <p>&#xa9; Fellowship Church Streetsville {{ new Date().getFullYear() }}</p>
    <div id="sponsors">
      <img src="../../assets/images/fca_canada_logo.png" />
      <img src="../../assets/images/north_american_mission_board.png" />
      <img src="../../assets/images/cnbc.jpg" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../../styles/font.scss';
@use '../../styles/colors.scss';
@use '../../styles/dimensions.scss';

#top-header,
#top-header-mobile {
  padding: 1.2rem 3rem;
  background: linear-gradient(colors.$primary-light, colors.$primary);
  display: grid;
  grid-template-columns: 45% repeat(6, 1fr);
  grid-column-gap: 1rem;
  place-items: center;
  color: white;

  @media only screen and (max-width: dimensions.$tablet-width) {
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: dimensions.$mobile-width) {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    &#top-header {
      display: none;
    }
  }

  a {
    border: solid 1px transparent;
    transition: border 0.1s;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 0.2rem;
    align-items: center;
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

#top-header-mobile-hamburger {
  display: none;
  padding: 1rem;
  background: linear-gradient(colors.$primary-light, colors.$primary);
  color: white;

  @media only screen and (max-width: dimensions.$mobile-width) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-20rem);
}

#nav-container,
#nav-container-mobile {
  padding: 1rem 8rem;

  @media only screen and (max-width: dimensions.$tablet-width) {
    padding: 1rem;
  }
  @media only screen and (max-width: dimensions.$mobile-width) {
    padding: 1rem;
    &#nav-container {
      display: none;
    }
  }

  img {
    height: 7rem;
  }

  nav {
    height: 8rem;
    font-family: font.$crimson;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;

    @media only screen and (max-width: dimensions.$tablet-width) {
      grid-column-gap: 1rem;
    }
    @media only screen and (max-width: dimensions.$mobile-width) {
      display: flex;
      flex-direction: column;
      height: auto;
    }

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
  background-color: #fbfbfb;
  border-radius: 5px;
  overflow: hidden;

  @media only screen and (max-width: dimensions.$tablet-width) {
    padding: 2rem;
    margin: 0rem 2rem;
  }
  @media only screen and (max-width: dimensions.$mobile-width) {
    margin: 0;
    padding: 1rem;
  }
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

  @media only screen and (max-width: dimensions.$tablet-width) {
    margin-top: 2rem;
  }
  @media only screen and (max-width: dimensions.$mobile-width) {
    padding: 1rem;
    margin: 0;
  }

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
