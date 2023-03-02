<script>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import {
  BiClockFill,
  GiBookCover,
  LaUserFriendsSolid,
  HiSolidLocationMarker,
  FaBible
} from 'oh-vue-icons/icons'
addIcons(BiClockFill, HiSolidLocationMarker, LaUserFriendsSolid, FaBible, GiBookCover)

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
        hover="true"
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
        hover="true"
      />
      <div>
        <p>River Grove Community Center - Bristol & Creditview.</p>
        <p>5800 River Grove Ave. Mississauga, Ontario.</p>
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
        hover="true"
      />
      <div>
        <p>
          Fun for family and kids, preschool and nursery provided children’s program during service.
        </p>
        <p>Activities include arts & crafts, games, books, etc.</p>
      </div>
    </div>
  </section>
  <section>
    <h2>Current sermon series</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="fa-bible"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover="true"
      />
      <p>
        The Law, The Covenant and The Spirit. Learn how to apply Old Testament laws and concepts in
        the modern context. Avoid the pitfall of misinterpretating the Old Testament and falling
        into legalism.
      </p>
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
        hover="true"
      />
      <p>The Book of Acts.</p>
    </div>
  </section>
  <section>
    <h2>Current sermon series</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="fa-bible"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover="true"
      />
      <p>
        The Law, The Covenant and The Spirit. Learn how to apply Old Testament laws and concepts in
        the modern context. Avoid the pitfall of misinterpretating the Old Testament and falling
        into legalism.
      </p>
    </div>
  </section>
  <section>
    <h2>Current sermon series</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="fa-bible"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover="true"
      />
      <p>
        The Law, The Covenant and The Spirit. Learn how to apply Old Testament laws and concepts in
        the modern context. Avoid the pitfall of misinterpretating the Old Testament and falling
        into legalism.
      </p>
    </div>
  </section>
  <section>
    <h2>Current sermon series</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="fa-bible"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover="true"
      />
      <p>
        The Law, The Covenant and The Spirit. Learn how to apply Old Testament laws and concepts in
        the modern context. Avoid the pitfall of misinterpretating the Old Testament and falling
        into legalism.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/font.scss';
@use '../styles/colors.scss';

section {
  margin-top: 1rem;

  .home-section-icon-row {
    display: grid;
    grid-template-columns: 15% 1fr;
    align-items: center;
    margin-bottom: 0.5rem;

    .icon {
      justify-self: center;
    }
  }
}

section:not(#hero) {
  margin-bottom: 3rem;
}

#hero {
  h1 {
    text-align: center;
    color: colors.$primary-dark;
  }

  p {
    padding-bottom: 1rem;
    margin: 2rem 7rem;
  }
}

img {
  height: 30rem;
  width: 16rem;
  object-fit: cover;
  border-radius: 5px;

  &.float-right {
    float: right;
    margin-left: 2rem;
  }

  &.float-left {
    float: left;
    margin-right: 2rem;
  }
}

h2 {
  text-align: center;
  margin-bottom: 0.5rem;
  color: colors.$primary-dark;
}
</style>
