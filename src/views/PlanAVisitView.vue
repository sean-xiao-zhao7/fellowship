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
    <h1>Plan a visit to Fellowship Church Streetsville</h1>
    <div id="view-intro">
      <div>
        <p>Fellowship Church Streetsville welcomes you!</p>
        <p>
          Whatever background or situation, come as you are as Jesus said. Let's fellowship
          together, get to know one another and build one another up in Christ.
        </p>
        <p>
          We gather in person every Sunday, as well as stream the service on Zoom for people calling
          in on their computer.
        </p>
      </div>
      <img src="../assets/images/planavisit/roomview1.jpg" />
    </div>
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
        <p>River Grove Community Center.</p>
        <p>
          5800 River Grove Ave. Mississauga, Ontario. -
          <a href="https://goo.gl/maps/KUdqaeY1iRCyBEms9" target="_blank">See on Google Maps</a>
        </p>
        <p>
          Nearest intersection is Bristol &#x26; Creditview. If you are coming from Britannia, turn
          south unto River Grove Ave.. If you are coming from Queen St., follow Bristol Rd. W, turn
          North unto River Grove Ave.
        </p>
        <p>Carpooling is available by church members, please contact us.</p>
      </div>
    </div>
    <div class="icon-row">
      <v-icon
        class="icon"
        name="ri-computer-line"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>Connect with us online!</p>
        <p>WhatsApp group is available. Zoom links will be sent here.</p>
        <p>
          Join our Facebook page
          <a href="https://www.facebook.com/FellowshipGTA" target="_blank">here</a>.
        </p>
      </div>
    </div>
    <div class="full-width-container">
      <img src="../assets/images/planavisit/roomview2.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/dimensions.scss';

#view-intro {
  display: grid;
  grid-template-columns: 1fr 30%;
  grid-column-gap: 0.5rem;
  place-items: center;

  @media only screen and (max-width: dimensions.$mobile-width) {
    display: block;
  }

  @media only screen and (max-width: dimensions.$tablet-width) {
    grid-template-columns: 1fr 20%;
  }

  img {
    width: 15rem;
    height: 10rem;

    @media only screen and (max-width: dimensions.$mobile-width) {
      width: 100%;
      margin-top: 1rem;
    }

    @media only screen and (max-width: dimensions.$tablet-width) {
      width: 10rem;
      height: 15rem;
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
