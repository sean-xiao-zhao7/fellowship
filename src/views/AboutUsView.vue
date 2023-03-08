<template>
  <div id="view-container">
    <div class="about-section">
      <h1>About Fellowship Church Streetsville</h1>
      <div class="about-paragraphs">
        <p>
          We started in 2014 when a group of men and women got together who all had a shared vision
          of planting churches in the GTA. We are a church who believes in servant leadership from
          all members and our desire is to make the members successful at what they are doing.
        </p>
        <p>
          Our church is non-denominational in flavour, with high values in family, wisdom,
          friendship and love. We believe our greatest calling is to develop a deep and meaningful
          relationship with God and to understand Him in His fullness.
        </p>
        <img src="../assets/images/aboutus/thursdaybiblestudy.jpg" />
        <p>
          We are an open and honest church. We encourage questions. Curious on what to wear? Wear
          whatever you are comfortable in. We are more interested in you rather than what you wear.
        </p>
        <p>
          If you have a curious mind, come check us out. Pastors are available after church and if
          you would like to meet with a pastor outside of church, you can click here to
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBQa9Esqt-VtiqVgkOJl7aQpYTJI3mTybBWjfE0_M94L3OIw/viewform"
            target="_blank"
            >request a pastoral visit.</a
          >
        </p>
        <p class="quote">
          “And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to
          equip the saints for the work of ministry, for building up the body of Christ.”
          <span class="quote-subtext"> – Ephesians 4:11-12 </span>
        </p>
      </div>
    </div>
    <div class="about-section">
      <h1>Our Pastors</h1>
      <div class="about-paragraphs">
        <h2>Jamey Baird</h2>
        <h3>Pastor</h3>
        <img src="../assets/images/aboutus/jamey.png" class="portrait" />
        <p>
          Jamey Baird is a graduate of Ontario Bible College and of Tyndale Theological Seminary. He
          has been working with church planting and has done youth work for over 30 years within the
          GTA.
        </p>
        <p>
          Jamey is married to his lovely wife Sonja, who is also involved in church planting and
          youth work, and they are currently living in Milton. Jamey is bi-vocational, is on the
          chaplain staff at Sheridan Villa Long Term Care facility and works with Solid Rock Chapel
          in Clarkson.
        </p>
        <p>
          Jamey loves nothing more than to answer your questions about Jesus. He understands that
          sometimes we can get caught up with misinformation about who Jesus was, what the church is
          or what the Bible says.
        </p>
        <p>
          He wants to help others understand more about Christ. Jamey would love to meet you at a
          coffee shop, for lunch after church, or even in your home to answer all your questions and
          give a clear presentation of all that Jesus came to do for us.
        </p>
      </div>
      <div class="about-paragraphs">
        <h2>David Trenado</h2>
        <h3>Pastor</h3>
        <img src="../assets/images/aboutus/trenados.jpg" class="portrait" />
        <p>
          David grew up in Arganda del Rey, Madrid in Spain. From the beginning of his life he knew
          that there was something in his inner that needed to be fulfilled. At the age of 12, he
          surrendered his life to Christ and got baptized. From adolescence and because of his
          parent’s example, David met the gospel in a very practical way.
        </p>
        <p>
          Helping his parents in their ministry and being a witness of their love for people in
          social exclusion gave him a perfect match of what the gospel is, a perfect example of how
          to live sacrificially and seeking the good of others.
        </p>
        <p>
          David and his family came to Canada in April 2015, leaving everything behind and without
          knowing anyone in Canada, taking a step of faith and obedience. God was the connector
          between David’s family and Fellowship Church. Basketball is one of David’s passions and it
          was because of that, Fellowship Church and David’s family were connected.
        </p>
        <p>
          David is responsible for helping the congregation bring people to Christ, develop
          disciples and live lives of compassion, mercy, and justice. He preaches, teaches, works
          with leaders and tries to meet with people as much as possible. David is married to Miriam
          and they have 2 children, Marcos and Sofia. Marcos loves basketball & Sofia loves arts and
          crafts. David is also serving in the ministry Upward Sports Canada as an Operations &
          Training Director, trying to connect the community with the local church through sports
          and the gospel. He is a basketball coach and you will find him practicing and teaching
          basketball very often.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/colors.scss';

.about-section {
  margin-bottom: 2rem;
}

.about-paragraphs {
  display: grid;
  grid-row-gap: 1rem;
  margin-bottom: 2rem;

  img {
    margin: 1rem 0;
    object-fit: cover;
    height: 20rem;
    width: 100%;

    &.portrait {
      width: 10rem;
      height: 10rem;
      border-radius: 10rem !important;
    }
  }
}

.quote {
  background-color: white;
  padding: 3rem;
  border-radius: 15px;
  color: colors.$primary;

  .quote-subtext {
    display: block;
    text-align: right;
  }
}
</style>
