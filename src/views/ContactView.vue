<script>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { HiMail, BiFacebook, HiSolidLocationMarker } from 'oh-vue-icons/icons'
addIcons(HiMail, BiFacebook, HiSolidLocationMarker)
export default {
  components: {
    'v-icon': OhVueIcon
  }
}
</script>
<template>
  <div id="view-container">
    <h1>Contact Fellowship Church Streetsville</h1>
    <p>
      If you love our ministry and want to know more info for an event or service please use the
      contact info below to do so. Feel free to email either pastor and ask any question you have.
    </p>
    <p>You can also message us on Facebook.</p>
    <section class="margin-section">
      <div class="section-icon-row">
        <v-icon class="icon" name="hi-mail" scale="2.5" fill="#4486bf" animation="wrench" hover />
        <a href="mailto:d_trenado@hotmail.com">d_trenado[at]hotmail.com</a>
      </div>
      <div class="section-icon-row">
        <v-icon class="icon" name="hi-mail" scale="2.5" fill="#4486bf" animation="wrench" hover />
        <a
          href="mailto:jamey.baird@gmail.com
        "
          >jamey.baird[at]gmail.com
        </a>
      </div>
      <div class="section-icon-row">
        <v-icon
          class="icon"
          name="bi-facebook"
          scale="2.5"
          fill="#4486bf"
          animation="wrench"
          hover
        />
        <a
          href="https://www.facebook.com/FellowshipGTA
        "
          target="_blank"
          >www.facebook.com/FellowshipGTA
        </a>
      </div>
      <div class="section-icon-row">
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
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/font.scss';
@use '../styles/dimensions.scss';

.section-icon-row {
  a {
    @media only screen and (max-width: dimensions.$mobile-width) {
      display: block;
      overflow: scroll;
      padding-left: 0.5rem;
    }
  }
}
</style>
