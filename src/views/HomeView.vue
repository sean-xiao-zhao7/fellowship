<template>
  <section id="hero">
    <h1>Community Church in Mississauga</h1>
    <h1>Serving the GTA and southern Ontario</h1>
    <p>
      We are a church with a focus on practical teaching from the Bible and applying it to our lives
      in a friendly family like atmosphere. Everyone is welcome! We'd love to see you some day.
    </p>
  </section>
  <section>
    <h2>Visit us - everyone welcome!</h2>
    <p>
      EVERY SUNDAY @ 11AM (RAIN OR SHINE OR SNOWSTORM) RIVER GROVE COMMUNITY CENTER (BRISTOL &
      CREDITVIEW) 5800 River Grove Avenue, Mississauga ON.
    </p>
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
  margin-bottom: 2rem;
}

#hero {
  padding: 1rem 4rem;
  h1 {
    text-align: center;
  }

  p:nth-child(3) {
    margin-top: 1rem;
  }
}
</style>
