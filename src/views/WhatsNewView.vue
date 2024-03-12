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
      <h2>2024 Summer: <br />IGNITION SUMMER CAMP</h2>
      <p>
        Ignition Camps are where Student Athletes will be able to engage in multiple sports like
        basketball, soccer, frisbee, and European Handball. If your student athlete can't decide
        what sport they want to try or they want a little of everything, this camp is for you!
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
        <p>Century City 933 Focal Rd, Mississauga, ON</p>
      </div>
    </div>
    <div class="icon-row">
      <v-icon class="icon" name="bi-calendar" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <div>
        <p>July 8th to 12th. Daily schedule: Drop off at 9AM, pickup at 4PM.</p>
      </div>
    </div>
    <div class="icon-row">
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
    <a href="https://fcacanada.goalline.ca/register.php?reg_form_id=43447">Sign up today</a>
    <div class="divider"></div>
    <img
      src="../assets/images/whatsnew/2024_ignition_camp_poster.webp"
      alt="ignite summer camp poster"
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
