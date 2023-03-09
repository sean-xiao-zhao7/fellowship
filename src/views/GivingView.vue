<template>
  <div id="view-container">
    <div id="giving-methods-container">
      <div class="giving-child">
        <h1>Give One Time</h1>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />

          <input type="hidden" name="hosted_button_id" value="G6W5VJCCNAFV2" />

          <button type="submit" class="paypal-button">Donate One Time on PayPal</button>
        </form>
      </div>
      <div class="giving-child">
        <h1>Give monthly</h1>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="HK4EF8DCZC4VW" />
          <input type="hidden" name="on0" value="Select Monthly Donation Amount" />
          <input type="hidden" name="currency_code" value="CAD" />
          <select name="os0">
            <option value="Option 10">$50.00 CAD - monthly</option>
            <option value="Option 1">$100.00 CAD - monthly</option>
            <option value="Option 2">$200.00 CAD - monthly</option>
            <option value="Option 3">$250.00 CAD - monthly</option>
          </select>
          <button type="submit" class="paypal-button">Donate monthly on PayPal</button>
        </form>
      </div>
    </div>
    <section class="margin-section">
      <p>
        We are so grateful for all our supporters, in prayer, work and funds. Fellowship Church
        Streetsville would not be possible without you. We thank God for his blessing through all of
        you every day.
      </p>
    </section>
    <p class="quote">
      Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously
      will also reap generously. Each of you should give what you have decided in your heart to
      give, not reluctantly or under compulsion, for God loves a cheerful giver. <br /><br />And God
      is able to bless you abundantly, so that in all things at all times, having all that you need,
      you will abound in every good work. As it is written: "They have freely scattered their gifts
      to the poor; their righteousness endures forever."
      <span class="quote-subtext">- 2 Corinthians 9:6-9</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/colors.scss';
@use '../styles/font.scss';
@use '../styles/dimensions.scss';

#giving-methods-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media only screen and (max-width: dimensions.$mobile-width) {
    flex-direction: column;
  }

  p {
    margin: 1rem 0;
  }

  .giving-child {
    @media only screen and (max-width: dimensions.$mobile-width) {
      margin-bottom: 1rem;
    }
    form {
      display: grid;
      grid-row-gap: 1rem;
    }
  }
}
.paypal-button {
  background-color: colors.$paypal;
  color: black;
  padding: 1rem 2rem;
  border-radius: 15px;
  border: 0;
  cursor: pointer;
  font-size: font.$font-size-500;

  &:hover,
  &:active {
    box-shadow: 1px 2px 2px #e0ab2e inset;
  }
}
</style>
