<template>
  <div id="view-container">
    <div id="giving-methods-container">
      <div class="giving-child">
        <h1>Give One Time</h1>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />

          <input type="hidden" name="hosted_button_id" value="G6W5VJCCNAFV2" />

          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />

          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
            a77wdefq3=""
          />
        </form>
      </div>
      <div class="giving-child">
        <h1>Give monthly</h1>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />

          <input type="hidden" name="hosted_button_id" value="HK4EF8DCZC4VW" />

          <table>
            <tbody>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="Select Monthly Donation Amount" />Select
                  Monthly Donation Amount
                </td>
              </tr>
              <tr>
                <td>
                  <select name="os0">
                    <option value="Option 10">Option 10 : $50.00 CAD - monthly</option>
                    <option value="Option 9">Option 9 : $75.00 CAD - monthly</option>

                    <option value="Option 1">Option 1 : $100.00 CAD - monthly</option>

                    <option value="Option 2">Option 2 : $200.00 CAD - monthly</option>

                    <option value="Option 3">Option 3 : $250.00 CAD - monthly</option>

                    <option value="Option 4">Option 4 : $300.00 CAD - monthly</option>

                    <option value="Option 5">Option 5 : $400.00 CAD - monthly</option>

                    <option value="Option 6">Option 6 : $500.00 CAD - monthly</option>

                    <option value="Option 7">Option 7 : $750.00 CAD - monthly</option>

                    <option value="Option 8">Option 8 : $1,000.00 CAD - monthly</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <input type="hidden" name="currency_code" value="CAD" />

          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />

          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
            a77wdefq3=""
          />
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
#giving-methods-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  p {
    margin: 1rem 0;
  }
}
</style>
