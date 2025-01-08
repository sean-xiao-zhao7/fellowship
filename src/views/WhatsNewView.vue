<script>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiCalendar, HiSolidLocationMarker, BiPersonCircle } from 'oh-vue-icons/icons'
addIcons(BiCalendar, HiSolidLocationMarker, BiPersonCircle)

export default {
  components: {
    'v-icon': OhVueIcon
  }
}
</script>

<template>
  <div id="view-container">
    <h1>What's new @ Fellowship Church</h1>
    <div>
      <p>
        Fellowship Church Streetsville welcomes you! Here is what's going on at Fellowship Church
        lately.
      </p>
    </div>
    <div class="divider"></div>
    <div>
      <h2>10th Anniversary Celebration</h2>
      <p>Celebrate with us with a dinner on Saturday Feb. 22nd, 2025.</p>
      <p>
        Everyone is invited! We will watch a small documentary about the history of the church. Also
        we will have guest speakers and testimonies about God's work in the past 10 years.
      </p>
    </div>
    <div class="icon-row">
      <v-icon
        class="icon"
        name="hi-solid-location-marker"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>River Grove CC.</p>
      </div>
    </div>
    <div class="icon-row">
      <v-icon class="icon" name="bi-calendar" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <div>
        <p>Feb. 22nd, Saturday, 6PM.</p>
      </div>
    </div>
    <!-- <div class="icon-row">
      <v-icon
        class="icon"
        name="bi-person-circle"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>Age range: 5 to 14.</p>
      </div>
    </div>
    <a href="https://fcacanada.goalline.ca/register.php?reg_form_id=43447">Sign up today</a> -->
    <div class="divider"></div>
    <img
      src="../assets/images/events/10th_anniversary.jpg"
      alt="10th anniversary poster"
      class="full-width-image"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/dimensions.scss';

#view-intro {
  display: grid;
  grid-template-columns: 1fr 30%;
  grid-column-gap: 0.5rem;
  place-items: center;

  @media only screen and (max-width: dimensions.$tablet-width) {
    grid-template-columns: 1fr 20%;
  }

  @media only screen and (max-width: dimensions.$mobile-width) {
    display: block;
  }

  img {
    width: 15rem;
    height: 10rem;

    @media only screen and (max-width: dimensions.$tablet-width) {
      width: 10rem;
      height: 15rem;
    }

    @media only screen and (max-width: dimensions.$mobile-width) {
      width: 100%;
      margin-top: 1rem;
    }
  }

  & > div {
    @media only screen and (max-width: dimensions.$tablet-width) {
      padding-right: 2rem;
    }
  }
}

.full-width-container {
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    height: 15rem;

    @media only screen and (max-width: dimensions.$tablet-width) {
      width: 100%;
    }
  }
}
</style>
