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
import AGMContent from '../components/agm/AGMContent.vue';

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
    'v-icon': OhVueIcon,
    'agm-content': AGMContent
  },
}
</script>

<template>
  <!-- top banner image  -->
  <img src="../assets/images/hero_background3.jpg" class="home-intro-image" />

  <!-- hero / intro with image  -->
  <section id="hero">
    <h1>Fellowship Church Streetsville</h1>
    <h2>Serving Mississauga, the GTA and southern Ontario.</h2>
    <p>
      Practical truth for everyday life.
    </p>
    <p>
      We are a church with a focus on practical teaching from the
      Bible and applying it to our lives in a friendly family like atmosphere. Everyone is welcome,
      we'd love to see you some day.
    </p>
  </section>

  <div class="divider"></div>

  <!-- current news -->
  <section class="news">
    <h2>Counseling Workshop Series #2 - Anxiety</h2>
    <p>
      The second counseling and healing workshop will be on March 29th. The focus will be on anxiety.
      Whether you've battled anxiety for years, feel overwhelmed in this season, or simply want to better support
      someone you love, this workshop is for you.
    </p>
    <p>
      We'll have breakfast together before workshop, as always at 11AM. </p>
    <p>
    </p>
    <p>Thank you all for coming to our 1st workshop on loneliness, the recording can be found in the Past Sermons
      page.
    </p>
    <div class="half-width-image-container">
      <img src="../assets/images/events/counselling.png" alt="Soul Care Workshop Series" class="half-width-image" />
    </div>
  </section>

  <div class="divider"></div>

  <!-- summer camp 2026, news #2 -->
  <section class="news">
    <h2>Multi-sport Summer Camp 2026</h2>
    <p>
      Our annual sports camp for kids and family is back again in July. For one week, engage kids
      in active group program that foster friendship, leadership, character and other skills.
    </p>
    <p>
      FCA
      Canada, Fellowship Church, and other partners will work together again to be a light to the
      community.
    </p>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="hi-solid-location-marker" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <div>
        <p><a href='https://maps.app.goo.gl/G8ZhKy98ZtAkR3em6' target='_blank'>Century City 933 Focal Rd, Mississauga,
            ON.</a></p>
      </div>
    </div>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="bi-calendar" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <div>
        <p>July 13th to 17th. Daily 9AM to 4PM.</p>
      </div>
    </div>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="bi-person-circle" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <div>
        <p>Age range: 5 to 14.</p>
      </div>
    </div>
    <div class="flex-center-section-row">
      <a href="https://app.teamlinkt.com/register/find/fcacanada?cid=63951" target="_blank">Sign up today!</a>
      <a href="https://canadafca.ca/fcasports" target="_blank">More info on the FCA website</a>
    </div>
    <br />
    <div class="half-width-image-container">
      <img src="../assets/images/fca/2026_summer_camp.png" alt="2026 Summer camp" class="half-width-image" />
    </div>
  </section>

  <div class="divider"></div>

  <!-- visit us / church summary -->
  <div class="image-column-container">
    <div>
      <section>
        <h2>Visit us - Everyone is welcome</h2>
        <div class="home-section-icon-row">
          <v-icon class="icon" name="bi-clock-fill" scale="2.5" fill="#4486bf" animation="wrench" hover />
          <div>
            <p>Every Sunday 11AM - In person and on Zoom.</p>
          </div>
        </div>
        <div class="home-section-icon-row">
          <v-icon class="icon" name="hi-solid-location-marker" scale="2.5" fill="#4486bf" animation="wrench" hover />
          <div>
            <p>River Grove Community Center - Bristol & Creditview.</p>
            <p><a href="https://goo.gl/maps/KUdqaeY1iRCyBEms9" target="_blank">5800 River Grove Ave. Mississauga,
                Ontario.</a></p>
          </div>
        </div>
      </section>
      <section>
        <h2>Fun activities for kids</h2>
        <div class="home-section-icon-row">
          <v-icon class="icon" name="la-user-friends-solid" scale="2.5" fill="#4486bf" animation="wrench" hover />
          <div>
            <p>
              Fun for family and kids, preschool and nursery provided children's program during service
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
          <div>
            <p>
              The Law, The Covenant and The Spirit. Learn how to apply Old Testament laws and concepts in
              the modern context.
            </p>
            <p>
              Avoid the pitfall of misinterpretating the Old Testament and falling
              into legalism.
            </p>
          </div>
        </div>
        <div class="home-section-icon-row">
          <v-icon class="icon" name="bi-youtube" scale="2.5" fill="#4486bf" animation="wrench" hover />
          <p>
            <a href="https://www.youtube.com/@fellowshipchurchrivergrove5221" target="_blank">Listen to sermons on
              YouTube</a>
          </p>
        </div>
      </section>
    </div>
    <img src="../assets/images/hero_background.jpg" />
  </div>

  <div class="divider"></div>

  <!-- church ministries -->
  <div class="image-column-container image-left">
    <img src="../assets/images/hero_background2.jpg" />
    <div>
      <section>
        <h2>Thursday Night Bible Study</h2>
        <div class="home-section-icon-row">
          <v-icon class="icon" name="gi-book-cover" scale="2.5" fill="#4486bf" animation="wrench" hover />
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
          <v-icon class="icon" name="fa-canadian-maple-leaf" scale="2.5" fill="#4486bf" animation="wrench" hover />
          <p>
            We run community events such as Easter egg hunt and Friday night boardgame event at Dicey
            Business.
          </p>
        </div>
      </section>
    </div>
  </div>

  <div class="divider"></div>

  <!-- FCA -->
  <section class="flex-center-section">
    <div class="logo-row">
      <a href="https://www.canadafca.ca/about#1388821689" target="_blank"><img
          src="../assets/images/fca_canada_logo.png" id="fca-canada-logo" /></a>
      <a href="https://my.fca.org/davidtrenado" target="_blank"><img src="../assets/images/fca_logo_small.png" /></a>
    </div>
    <h2>FCA - Fellowship of Christian Athletes Canada</h2>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="fc-sports-mode" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <div>
        <p>
          An inter-denominational Christian sports ministry impacting the world for Jesus
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

  <!-- A.G.M. on homepage, accessible with [url]#agm -->
  <agm-content />

</template>

<style lang="scss" scoped>
@use '../styles/font.scss';
@use '../styles/colors.scss';
@use '../styles/dimensions.scss';

section {

  &#news,
  &.news {
    a {
      text-align: center;
    }

    h2 {
      text-align: start;
      margin-bottom: 1rem;
    }
  }

  .home-section-icon-row {
    display: grid;
    grid-template-columns: 15% 1fr;
    align-items: center;
    margin-bottom: 0.5rem;
    grid-gap: 1rem;

    @media only screen and (max-width: dimensions.$mobile-width) {
      grid-template-columns: 10% 1fr;
    }

    .icon {
      justify-self: center;
    }
  }

  &>img {
    max-height: 10rem;
    width: auto;
  }
}

section:not(#hero) {
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: dimensions.$mobile-width) {
    margin-bottom: 1rem;
  }
}

#hero {
  margin-top: 1rem;
  padding: 2rem 10rem;

  @media only screen and (max-width: dimensions.$mobile-width) {
    padding: 1rem;
    margin-top: 0;
  }

  h1 {
    color: colors.$primary-dark;

    @media only screen and (max-width: dimensions.$tablet-width) {
      font-size: font.$font-size-800;
    }

    @media only screen and (max-width: dimensions.$mobile-width) {
      font-size: font.$font-size-700;
      margin-bottom: 1rem;
    }
  }

  h2 {
    margin-bottom: 2rem;
    text-align: start;

    @media only screen and (max-width: dimensions.$mobile-width) {
      margin-bottom: 1rem;
      font-size: font.$font-size-600;
    }
  }

  p {
    padding-bottom: 1rem;

    &:last-child {
      padding-bottom: 0;
    }

    @media only screen and (max-width: dimensions.$tablet-width) {
      margin: 2rem 3rem;
    }

    @media only screen and (max-width: dimensions.$mobile-width) {
      margin: 0;
    }
  }
}

// images
img.home-intro-image {
  width: 100%;
  height: 17rem;

  @media only screen and (max-width: dimensions.$mobile-width) {
    height: 12rem;
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

h2 {
  text-align: center;
  margin-bottom: 0.5rem;
  color: colors.$primary-dark;
  font-size: 2rem;

  @media only screen and (max-width: dimensions.$tablet-width) {
    font-size: font.$font-size-600;
    margin-bottom: 1rem;
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
