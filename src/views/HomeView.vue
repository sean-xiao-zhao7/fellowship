<script>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import {
  BiClockFill,
  GiBookCover,
  LaUserFriendsSolid,
  HiSolidLocationMarker,
  FaBible,
  BiYoutube,
  GiChurch,
  FaCanadianMapleLeaf,
  FcSportsMode
} from 'oh-vue-icons/icons'
addIcons(
  BiClockFill,
  GiChurch,
  HiSolidLocationMarker,
  LaUserFriendsSolid,
  FaBible,
  GiBookCover,
  BiYoutube,
  FaCanadianMapleLeaf,
  FcSportsMode
)

export default {
  components: {
    'v-icon': OhVueIcon
  }
}
</script>

<template>
  <div id="news-container">
    <img src="../assets/images/fcacamp2023_first.jpg" class="news-container-image" />
    <img src="../assets/images/fcacamp2023.png" class="news-container-image" />
  </div>
  <img src="../assets/images/hero_background3.jpg" class="home-intro-image" />
  <section id="hero">
    <h1>Fellowship Church Streetsville</h1>
    <h1>Serving Mississauga, the GTA and southern Ontario</h1>
    <p>
      Practical truth for everyday life. We are a church with a focus on practical teaching from the
      Bible and applying it to our lives in a friendly family like atmosphere. Everyone is welcome,
      we'd love to see you some day.
    </p>
  </section>
  <img src="../assets/images/hero_background.jpg" class="float-right" />
  <section>
    <h2>Visit us - everyone welcome!</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="bi-clock-fill"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>Every Sunday 11AM - In person and on Zoom</p>
      </div>
    </div>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="hi-solid-location-marker"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>River Grove Community Center - Bristol & Creditview.</p>
        <p>5800 River Grove Ave. Mississauga, Ontario.</p>
        <a href="https://goo.gl/maps/KUdqaeY1iRCyBEms9" target="_blank">See on Google Maps</a>
      </div>
    </div>
  </section>
  <section>
    <h2>Fun activities for kids!</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="la-user-friends-solid"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>
          Fun for family and kids, preschool and nursery provided children’s program during service
          every Sunday.
        </p>
        <p>Activities include arts & crafts, games, books, etc.</p>
      </div>
    </div>
  </section>
  <section>
    <h2>Current sermon series</h2>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="fa-bible" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <p>
        The Law, The Covenant and The Spirit. Learn how to apply Old Testament laws and concepts in
        the modern context. Avoid the pitfall of misinterpretating the Old Testament and falling
        into legalism.
      </p>
    </div>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="bi-youtube" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <p>
        <a href="https://www.youtube.com/@fellowshipchurchrivergrove5221" target="_blank"
          >Listen to sermons on YouTube</a
        >
      </p>
    </div>
  </section>
  <div class="divider"></div>
  <section class="flex-center-section">
    <div class="logo-row">
      <a href="https://www.canadafca.ca/about#1388821689" target="_blank"
        ><img src="../assets/images/fca_canada_logo.png" id="fca-canada-logo"
      /></a>
      <a href="https://my.fca.org/davidtrenado" target="_blank"
        ><img src="../assets/images/fca_logo_small.png"
      /></a>
    </div>
    <h2>Fellowship of Christian Athletes Canada (FCA Canada)</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="fc-sports-mode"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>
          FCA is an interdenominational Christian sports ministry impacting the world for Jesus
          Christ through the influence of Christian athletes and coaches.
        </p>
        <p>
          Fellowship Church works closely with FCA Canada, and pastor David is the National Director
          of FCA Sports.
        </p>
        <p>
          FCA have summer camps for kids in various sports like soccer, basketball, volleyball and
          more every year!
        </p>
        <p>
          Please contact us if you want to enroll your kid in FCA summer camps or other activities.
        </p>
      </div>
    </div>
  </section>
  <div class="divider"></div>
  <img src="../assets/images/hero_background2.jpg" class="float-left" />
  <section>
    <h2>Thursday Night Bible Study</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="gi-book-cover"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>Every Thursday at 8PM on Zoom. See WhatsApp for link.</p>
        <p>Current study: the Book of Acts.</p>
      </div>
    </div>
  </section>
  <section>
    <h2>Life Groups</h2>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="gi-church" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <p>We have groups for young adults, women, Spanish speakers, etc.</p>
    </div>
  </section>
  <section>
    <h2>Community events</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="fa-canadian-maple-leaf"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <p>
        We run community events such as Easter egg hunt and Friday night boardgame event at Dicey
        Business.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/font.scss';
@use '../styles/colors.scss';
@use '../styles/dimensions.scss';

section {
  margin-top: 1rem;

  .home-section-icon-row {
    display: grid;
    grid-template-columns: 15% 1fr;
    align-items: center;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: dimensions.$mobile-width) {
      grid-template-columns: 20% 1fr;
    }

    .icon {
      justify-self: center;
    }
  }

  h2 {
    @media only screen and (max-width: dimensions.$mobile-width) {
      font-size: font.$font-size-700;
    }
  }

  p,
  a {
    @media only screen and (max-width: dimensions.$tablet-width) {
      font-size: font.$font-size-500;
    }
  }

  & > img {
    max-height: 10rem;
    width: auto;
  }
}

section:not(#hero) {
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: dimensions.$mobile-width) {
    margin-bottom: 1rem;
  }
}

#news-container {
  text-align: center;

  img {
    max-width: 100%;
    padding-bottom: 2rem;
  }
}

#hero {
  h1 {
    text-align: center;
    color: colors.$primary-dark;

    @media only screen and (max-width: dimensions.$tablet-width) {
      font-size: font.$font-size-800;
    }

    @media only screen and (max-width: dimensions.$mobile-width) {
      font-size: font.$font-size-700;
    }
  }

  p {
    padding-bottom: 1rem;
    margin: 2rem 7rem;

    @media only screen and (max-width: dimensions.$tablet-width) {
      margin: 2rem 3rem;
      font-size: font.$font-size-500;
    }

    @media only screen and (max-width: dimensions.$mobile-width) {
      margin: 1rem;
    }
  }
}

img.float-right,
img.float-left {
  height: 35rem;
  width: 16rem;

  @media only screen and (max-width: dimensions.$tablet-width) {
    height: 15rem;
    width: 10rem;
  }

  &.float-right {
    float: right;
    margin-left: 2rem;
    @media only screen and (max-width: dimensions.$mobile-width) {
      display: none;
    }
  }

  &.float-left {
    float: left;
    margin-right: 2rem;
    @media only screen and (max-width: dimensions.$mobile-width) {
      display: none;
    }
  }
}

img.home-intro-image {
  width: 100%;
  height: 17rem;
}

h2 {
  text-align: center;
  margin-bottom: 0.5rem;
  color: colors.$primary-dark;

  @media only screen and (max-width: dimensions.$tablet-width) {
    font-size: font.$font-size-700;
  }
}

.logo-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  place-items: center;

  img {
    height: 10rem;

    @media only screen and (max-width: dimensions.$tablet-width) {
      height: 7rem;
    }

    &#fca-canada-logo {
      background-color: colors.$primary-dark;
      padding: 0.5rem;
    }
  }
}
</style>
