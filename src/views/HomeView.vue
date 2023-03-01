<script>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { IoTimeOutline } from 'oh-vue-icons/icons'
addIcons(IoTimeOutline)

export default {
  components: {
    'v-icon': OhVueIcon
  }
}
</script>

<template>
  <section id="hero">
    <h1>Community Church in Mississauga</h1>
    <h1>Serving the GTA and southern Ontario</h1>
    <p>
      Practical truth for everyday life. We are a church with a focus on practical teaching from the
      Bible and applying it to our lives in a friendly family like atmosphere. Everyone is welcome,
      we'd love to see you some day.
    </p>
  </section>
  <img src="../assets/images/hero_background.jpg" />
  <section>
    <h2>Visit us - everyone welcome!</h2>
    <div class="home-section-icon-row">
      <v-icon name="io-time-outline" scale="2.5" fill="blue" animation="wrench" hover="true" />
      <p>
        EVERY SUNDAY @ 11AM (RAIN OR SHINE OR SNOWSTORM) RIVER GROVE COMMUNITY CENTER (BRISTOL &
        CREDITVIEW) 5800 River Grove Avenue, Mississauga ON.
      </p>
    </div>
  </section>
  <section>
    <h2>What we can do for you and your family</h2>
    <p>
      Join us every Sunday morning from 11-12:30PM at River Grove Community Centre for worship,
      fellowship, and Bible teaching. Also, we have activities for children and infants (ages 0-12)
    </p>
  </section>
  <section>
    <h2>Current activities</h2>
    <p>SERMON SERIES – TRUTHS IN THE GOSPELS</p>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/font.scss';
@use '../styles/colors.scss';

section {
  margin-top: 1rem;

  .home-section-icon-row {
    display: grid;
    grid-template-columns: 10% 1fr;
    place-items: center;

    .icon {
      width: 50%;
      height: 100%;
    }
  }
}

#hero {
  h1 {
    text-align: center;
  }

  p {
    padding: 2rem 7rem;
  }
}

img {
  height: 30rem;
  width: 20rem;
  object-fit: cover;
  border-radius: 5px;
  float: right;
  margin-left: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
