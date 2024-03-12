<script>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiClockFill, HiSolidLocationMarker, RiComputerLine } from 'oh-vue-icons/icons'
addIcons(BiClockFill, HiSolidLocationMarker, RiComputerLine)

export default {
  components: {
    'v-icon': OhVueIcon
  }
}
</script>

<template>
  <div id="view-container">
    <h1>What's new @ Fellowship Church</h1>
    <div id="view-intro">
      <div>
        <p>Fellowship Church Streetsville welcomes you!</p>
        <p>
          Whatever background or situation, come as you are as Jesus said. Let's fellowship
          together, get to know one another and build one another up in Christ.
        </p>
        <p>Check <b>Plan a Visit</b> at top to see how you can reach us.</p>
        <p>Here is what's going on at Fellowship Church lately:</p>
      </div>
      <img src="../assets/images/planavisit/roomview1.jpg" />
    </div>
    <div class="divider"></div>
    <div class="icon-row">
      <v-icon
        class="icon"
        name="bi-clock-fill"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>Sunday service starts at around 11 AM every week. Both in person and online.</p>
        <p>People usually arrive/join online 15 mins before to chat about their week.</p>
      </div>
    </div>
    <div class="divider"></div>
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
