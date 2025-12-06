<script>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import {
  BiClockFill,
  GiBookCover,
  LaUserFriendsSolid,
  HiSolidLocationMarker,
  FaBible,
  BiYoutube,
  GiChurch,
  FaCanadianMapleLeaf,
  FcSportsMode
} from 'oh-vue-icons/icons'
addIcons(
  BiClockFill,
  GiChurch,
  HiSolidLocationMarker,
  LaUserFriendsSolid,
  FaBible,
  GiBookCover,
  BiYoutube,
  FaCanadianMapleLeaf,
  FcSportsMode
)

export default {
  components: {
    'v-icon': OhVueIcon
  },
  data() {
    return {
      currentYear: '2025' //`${new Date().getFullYear() - 1}`
    }
  }
}
</script>

<template>
  <img src="../assets/images/hero_background3.jpg" class="home-intro-image" />
  <section id="hero">
    <h1>Fellowship Church Streetsville</h1>
    <h1>Serving Mississauga, the GTA and southern Ontario</h1>
    <p>
      Practical truth for everyday life. We are a church with a focus on practical teaching from the
      Bible and applying it to our lives in a friendly family like atmosphere. Everyone is welcome,
      we'd love to see you some day.
    </p>
  </section>
  <div class="divider"></div>
  <section id="news">
    <section>
      <h2>Christmas Series 2025</h2>
      <h2>LIGHT HAS COME</h2>
      <div class="half-width-image-container">
        <img
          src="../assets/images/events/christmas_2025.png"
          alt="Easter event poster"
          class="half-width-image"
        />
      </div>
    </section>
  </section>
  <div class="divider"></div>
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
        hover
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
        hover
      />
      <div>
        <p>River Grove Community Center - Bristol & Creditview.</p>
        <p>5800 River Grove Ave. Mississauga, Ontario.</p>
        <a href="https://goo.gl/maps/KUdqaeY1iRCyBEms9" target="_blank">See on Google Maps</a>
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
        hover
      />
      <div>
        <p>
          Fun for family and kids, preschool and nursery provided children’s program during service
          every Sunday.
        </p>
        <p>Activities include arts & crafts, games, books, etc.</p>
      </div>
    </div>
  </section>
  <section>
    <h2>Current sermon series</h2>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="fa-bible" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <p>
        The Law, The Covenant and The Spirit. Learn how to apply Old Testament laws and concepts in
        the modern context. Avoid the pitfall of misinterpretating the Old Testament and falling
        into legalism.
      </p>
    </div>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="bi-youtube" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <p>
        <a href="https://www.youtube.com/@fellowshipchurchrivergrove5221" target="_blank"
          >Listen to sermons on YouTube</a
        >
      </p>
    </div>
  </section>
  <div class="divider"></div>
  <section class="flex-center-section">
    <div class="logo-row">
      <a href="https://www.canadafca.ca/about#1388821689" target="_blank"
        ><img src="../assets/images/fca_canada_logo.png" id="fca-canada-logo"
      /></a>
      <a href="https://my.fca.org/davidtrenado" target="_blank"
        ><img src="../assets/images/fca_logo_small.png"
      /></a>
    </div>
    <h2>Fellowship of Christian Athletes Canada (FCA Canada)</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="fc-sports-mode"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <div>
        <p>
          FCA is an interdenominational Christian sports ministry impacting the world for Jesus
          Christ through the influence of Christian athletes and coaches.
        </p>
        <p>
          Fellowship Church works closely with FCA Canada, and pastor David is the National Director
          of FCA Sports.
        </p>
        <p>
          FCA have summer camps for kids in various sports like soccer, basketball, volleyball and
          more every year!
        </p>
        <p>
          Please contact us if you want to enroll your kid in FCA summer camps or other activities.
        </p>
      </div>
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
        hover
      />
      <div>
        <p>Every Thursday at 8PM on Zoom. See WhatsApp for link.</p>
        <p>Current study: the Book of Acts.</p>
      </div>
    </div>
  </section>
  <section>
    <h2>Life Groups</h2>
    <div class="home-section-icon-row">
      <v-icon class="icon" name="gi-church" scale="2.5" fill="#4486bf" animation="wrench" hover />
      <p>We have groups for young adults, women, Spanish speakers, etc.</p>
    </div>
  </section>
  <section>
    <h2>Community events</h2>
    <div class="home-section-icon-row">
      <v-icon
        class="icon"
        name="fa-canadian-maple-leaf"
        scale="2.5"
        fill="#4486bf"
        animation="wrench"
        hover
      />
      <p>
        We run community events such as Easter egg hunt and Friday night boardgame event at Dicey
        Business.
      </p>
    </div>
  </section>
  <div id="agm">
    <div id="view-container">
      <h1>Annual General Meeting Minutes</h1>
      <p>Here are the minutes from past annual general meetings. They are sorted by year.</p>
      <select v-model="currentYear">
        <option value="2025">Year 2025</option>
        <option value="2024">Year 2024</option>
        <option value="2023">Year 2023</option>
        <option value="2022">Year 2022</option>
        <option value="2021">Year 2021</option>
        <option value="2020">Year 2020</option>
        <option value="2019">Year 2019</option>
        <option value="2018">Year 2018</option>
      </select>
      <section class="margin-section" v-if="currentYear === '2025'">
        <p>FELLOWSHIP CHURCH GTA NOVEMBER 16TH, 2025.</p>
        <p>
          Our AGM is held online via Zoom and at River Grove Community Center. Starting Time 12:07
          pm.
        </p>
        <p>Agenda:</p>
        <ul class="agenda">
          <li>Call to the Meeting</li>
          <li>Prayer</li>
          <li>Quorum verification</li>
          <li>Previous AGM Minute reading and approval</li>
          <li>Financial Statements and Budget 2025</li>
          <li>New business</li>
          <li>Adjournment</li>
        </ul>
        <ol>
          <li>
            Pastor James will preside the Meeting as Chair of the Board and call the meeting to
            order. Balfour presents a motion to start the meeting.
          </li>
          <li>David starts the meeting with a prayer.</li>
          <li>
            Quorum verification. 6 Proxy votes 10 attendees, 0 online. Quorum needed is 14+1. We
            have quorum to go ahead with the meeting as planned.
            <ul>
              Attendance:
              <li>
                PROXY VOTES: Sharon Batchelor, David Gilpin, Joe Binford, Susan Binford, Liam
                Ramsey, Josue Amaranto
              </li>
              <li>
                REGULAR ATTENDANCE: David Trenado, James and Sonja Baird, Balfour Batchelor, Sean
                Xiao, Karen Bijai, Ruth Ann Ursino, Yvonne Hodge, Michael Ramsey, Giovanna Andrea
                Chaves, Marcos Trenado.
              </li>
            </ul>
          </li>
          <li>
            The minute of the previous AGM was read by Giovanna Andrea Chaves. No questions, A
            motion is presented by Balfour to approve it. Seconded by Sonja. Approved.
          </li>
          <li>
            Financial Statements:
            <ul>
              <li>
                Giovanna Andrea Chaves presents the Financial Statements until October 31st, 2025.
                For a third we are operating with basic budget and we have been able to cover our
                main expenses. Pastor James presents a motion to consider within the budget an
                annual increase of 10% for David. Seconded by Balfour and Sean. Approved. No more
                questions o discussion. David presents a motion to receive the financial reports,
                seconded by Yvonne. Accepted.
              </li>
              <li>
                Budget: The 2025 Budget is presented to the church for consideration. No additional
                considerations or questions. Motion to approve it by Sean. Seconded by Balfour.
                Approved.
              </li>
            </ul>
          </li>
          <li>
            New business: Pastor Jamey brings to the church the initiative of having monthly
            meetings with specific subjects to attract different audiences. The church in general
            agrees we can make more use of the rental facilities and have different activities. The
            Pastoral Team will work on a schedule and bring it to the church. Motion by Karen,
            seconded by Sonja. Approved.
          </li>
          <li>
            A motion is presented by Balfour to adjourn the meeting at 12:41 pm. Seconded by Sonja.
            Approved. Meeting ended.
          </li>
        </ol>
      </section>
      <section class="margin-section" v-if="currentYear === '2024'">
        <p>FELLOWSHIP CHURCH GTA NOVEMBER 17TH, 2024</p>
        <p>
          Our AGM is held online via Zoom and at River Grove Community Center. Starting Time 12:09
          pm.
        </p>
        <p>Agenda:</p>
        <ul class="agenda">
          <li>Call to the Meeting</li>
          <li>Prayer</li>
          <li>Quorum verification</li>
          <li>Previous AGM Minute reading and approval</li>
          <li>Financial Statements and Budget 2025</li>
          <li>New business</li>
          <li>Adjournment</li>
        </ul>
        <ol>
          <li>
            Pastor James will preside the Meeting as Chair of the Board and call the meeting to
            order. Sonja presents a motion to start the meeting.
          </li>
          <li>David starts the meeting with a prayer.</li>
          <li>
            Quorum verification. 5 Proxy votes 10 attendees, 1 online. Quorum needed is 14+1. We
            have quorum to go ahead with the meeting as planned.
            <ul>
              Attendance:
              <li>
                PROXY VOTES: Sharon Batchelor, David Gilpin, Joe Binford, Susan Binford, Liam Ramsey
              </li>
              <li>
                REGULAR ATTENDANCE: David Trenado, James and Sonja Baird, Balfour Batchelor, Sean
                Xiao, Karen Bijai, Ruth Ann Ursino, Yvonne Hodge, Michael Ramsey, Giovanna Andrea
                Chaves.
              </li>
              <li>ONLINE ATTENDANCE: Marcos Trenado</li>
            </ul>
          </li>
          <li>
            The minute of the previous AGM was read by Giovanna Andrea Chaves. No questions, A
            motion is presented by Sonja to approve it. Seconded by Balfour and Yvonne. Approved.
          </li>
          <li>
            Financial Statements:
            <ul>
              <li>
                Giovanna Andrea Chaves presents the Financial Statements until October 31st, 2024.
                Very similar as the past year, we are just covering basic expenses like rental of
                facilities, insurance and meeting and administrative expenses. Balfour as a question
                regarding subscriptions and the expense of the PO Box. It is explained, this expense
                was processed in November and it will show on the December 2024 reports. Pastor
                James brings to the assembly the request of a new laptop for the church's secretary,
                and asks if we can buy one. In order to be able to perform the duties of the
                assigned work she is in need of one. Balfour commits to take care of this since he
                can get good price through his company, and this will include one for Ruth Ann as
                well. We continue explaining the church’s finances. We will continue to renew the
                rental contracts with the city, since we want and need to keep the place. Sean
                presents a motion to receive the financial reports, seconded by Yvonne, Mike and
                Balfour. Accepted.
              </li>
              <li>
                Budget: The 2025 Budget is presented to the church for consideration. Additions,
                David’s salary, even if he is tithing back, should show. As well as there is
                correction of the total amounts of Activities expenses from $1100 to $1200. The
                corrections will be made and added to the final 2025 Budget and presented
                accordingly. A motion is presented to accept the budget with the noted corrections
                and considerations, by Yvonne. Seconded by David. Approved.
              </li>
            </ul>
          </li>
          <li>
            ELECTION OF BOARD OF DIRECTORS: Secretary Giovanna Andrea Chaves reports to the church
            that we are in need of one more director since the place that brother Tom Abbott holds,
            should be covered. Tom Abbott as of now is an inactive member until we receive news of
            him. Pastor James explains that since we need to consider all positions of the Board
            being an election year, we will proceed with these two next steps: One, the church can
            elect for another period the Board if the member accept to continue plus adding the new
            director, or Two, elect a new Board. Yvonne presents a motion to confirm the current
            Board for another period and add one director. Seconded by Sean, Sonja and Karen.
            Current Active members go for another two year period until end of 2026. Approved by
            all. New Director: Our member Yvonne volunteer to be a Director for the Board. Motion
            presented by Sonja, seconded by Karen. All voted in favor of Yvonne Hodge as new
            Director for the Board. Our brother Balfour, reminds us the bylaws and community
            standards of the Board composition having to meet the criteria of at least three members
            residing in the City of Mississauga. Criteria met.
          </li>
          <li>
            New business: Pastor David brings to the church the need of planning for our 10th
            anniversary next February 2025. Will be in charge of talking to the city and get the
            place for a date in February on Saturday. David Balfour seconded it, all approved it.
          </li>
          <li>
            A motion is presented by David to adjourn the meeting at 1:01 pm. Seconded by Sonja.
            Approved.
          </li>
        </ol>
      </section>
      <section class="margin-section" v-if="currentYear === '2023'">
        <p>FELLOWSHIP CHURCH GTA DECEMBER 3rd, 2023</p>
        <p>
          This year our AGM is held online via Zoom and at River Grove community Center. Time 12:17
          pm.
        </p>
        <p>Agenda:</p>
        <ul class="agenda">
          <li>Prayer</li>
          <li>Call to the Meeting</li>
          <li>Quorum verification</li>
          <li>Previous AGM Minute reading and approval</li>
          <li>Financial Statements</li>
          <li>New business</li>
          <li>Adjournment</li>
        </ul>
        <ol>
          <li>
            Pastor James will preside the Meeting as Chair of the Board and call the meeting to
            order. Balfour presents a motion to start the meeting.
          </li>
          <li>Sonja opens the meeting in prayer.</li>
          <li>
            Quorum verification. 5 Proxy votes 7 attendees, 3 online. Quorum needed is 14+1. Quorum
            met.
            <ul>
              Attendance:
              <li>
                PROXY VOTES: Ivan Amaranto, Sharon Batchelor, Miriam Zimmerman, Denise Tull, Ruth
                Ann Ursino.
              </li>
              <li>
                REGULAR ATTENDANCE: David Trenado, Marcos Trenado, James and Sonja Baird, Balfour
                Batchelor, Sean Xiao, Karen Bijai, Michael Ramsey, Giovanna Andrea Chaves.
              </li>
            </ul>
          </li>
          <li>
            Reading of the minutes on the last AGM by Giovanna Andrea Chaves. No questions, A motion
            is presented by Sean to approve it. Seconded by David. Approved.
          </li>
          <li>
            Financial Statements:
            <ul>
              <li>
                Giovanna Andrea Chaves gives the members an overall explanation of the Financial
                Statements until October 31st, 2023.
              </li>
              <li>
                We have a very basic budget to cover just necessary expenses as Rent, Insurances,
                Admin and support for some activities like the Summer Camp.
              </li>
              <li>This year the main Admin expense was the purchase of a printer.</li>
              <li>
                Mike asks about the fluctuation on the rent fess, it is explained that it varies per
                month as per number of Sundays, or Community Center closures.
              </li>
              <li>
                Davis proposes to approve the Statements as presented. Balfour seconded. Approved.
              </li>
            </ul>
          </li>
          <li>
            New business: Activity report. Attached to the minute. Pastor James read it and gives
            the ministry Coordinator time to address the church the main activities in 2023.
          </li>
          <li>
            Pastor James makes a special mention to Charles Donaldson who has taken the Accounting
            Task of Fellowship Church without charging the church fees for his services.
          </li>
          <li>
            2024 Activities, we continue to have our regular activities, but we’ll make time to plan
            additional for 2024.
          </li>
          <li>
            Adjournment. A motion is presented by David to finish the meeting at 12:55 pm. Seconded
            by Balfour. Approved.
          </li>
        </ol>
      </section>
      <section class="margin-section" v-if="currentYear === '2022'">
        <p>Fellowship Church Streetsville AGM 2022</p>
        <p>Agenda:</p>
        <ul class="agenda">
          <li>Prayer</li>
          <li>Call to the Meeting</li>
          <li>Quorum verification</li>
          <li>Previous AGM Minute reading and approval</li>
          <li>Pastoral Team Organization</li>
          <li>Financial Statements</li>
          <li>New business</li>
          <li>Adjournment</li>
        </ul>
        <ol>
          <li>Prayer</li>
          <li>
            Pastor James will preside the Meeting as Chair of the Board and call the meeting to
            order.
          </li>
          <li>Pastor David will open in Prayer.</li>
          <li>
            Quorum verification. 6 Proxy votes 10 attendees. Quorum needed is 14+1. Quorum met.
            <ul>
              <li>
                Attendance: PROXY VOTES: Nicole Carvalho, Sarah Khan, Sharon Batchelor, Joe Binford,
                Susan Binford, Ruth Ann.
              </li>
              <li>
                REGULAR ATTENDANCE: David Trenado, James and Sonja Baird, Balfour Batchelor, Sean
                Xiao, Karen Bijai, Tom Abbott, David Gilpin, Michael Ramsey, Giovanna Andrea Chaves.
              </li>
            </ul>
          </li>
          <li>
            Reading of the minutes on the last AGM by Giovanna Andrea Chaves. No questions, A motion
            is presented to approve it by David G. Approved.
          </li>
          <li>
            Pastoral Team Re-organization.
            <ul>
              <li>
                Pastor James informs the membership that Pastor David has resigned his title of
                Senior Pastor to be an Associated Pastor. This is just a nominal change as the
                Pastoral Team continues to work essentially the same.
              </li>
            </ul>
          </li>
          <li>
            Financial Statements: Giovanna Andrea Chaves explains the members an overall explanation
            of the Financial Statements until September 30th , 2022, thanking the church first for
            the support during the first half of the year where extra contributions were needed to
            cover regular expenses.
            <ul>
              <li>
                It was emphasized that starting May there is no more responsibility for Salary
                payments, which have led us to be able to cover operational expenses like rent,
                insurance and would be room for other activities. We look forward to closing the
                year with no deficit. Pastor James explains that the new situation, will allows us
                to think and promote more programs leading to the church growth.
              </li>
              <li>
                There was a question from David G, referring to the scope for outreach of the local
                church in the area where we located. Pastor James answers that the outreach goes
                beyond the area the local church is located as many current members are in
                Georgetown, Milton, Oakville, etc. Pastor David presents a motion to approve the
                financial statements, seconded by Balfour. Approved.
              </li>
            </ul>
          </li>
          <li>
            New business:
            <ul>
              <li>
                Thinking about the need of Outreach we take this time to think in ideas of
                activities to structure our outreach program. As follows:
                <ul>
                  <li>Sports Camps</li>
                  <li>Christmas Service on December 18th, 2022</li>
                  <li>Christmas Eve Service at the Baird’s House 6 pm</li>
                  <li>Easter Egg Hunt in 2023</li>
                  <li>Summer Camps 2023</li>
                  <li>Thanksgiving Service October 8th, 2023.</li>
                </ul>
              </li>
              <li>
                Sean presents a motion to accept these activities as a plan for 2023, seconded by
                Tom. Approved.
              </li>
              <li>
                Other aspect to consider in 2023 are Baptisms, pastor James suggests this is a topic
                to be discussed within the Board of Directors meeting, in January 2023.
              </li>
              <li>
                A motion is presented by pastor James to discuss with pastor David a financial
                arrangement.
              </li>
              <li>Seconded by David G. Approved.</li>
            </ul>
          </li>
          <li>
            Adjournment. A motion is presented by Balfour to end the meeting. Seconded by David G.
            Approved. Closing prayer by Pastor James.
          </li>
          <li>Meeting ends at 12:48 pm.</li>
        </ol>
      </section>
      <section class="margin-section" v-if="currentYear === '2021'">
        <p>FELLOWSHIP CHURCH GTA NOVEMBER 7th, 2021</p>
        <p>
          This year our AGM is held online via Zoom and at River Grove community Center. Time
          12:23PM.
        </p>
        <p>Agenda:</p>
        <ul class="agenda">
          <li>Prayer</li>
          <li>Call to the Meeting</li>
          <li>Quorum verification</li>
          <li>Previous AGM Minute reading and approval</li>
          <li>BOD Election</li>
          <li>Financial Statements</li>
          <li>New business</li>
          <li>Adjournment</li>
        </ul>
        <ol>
          <li>Prayer</li>
          <li>
            Pastor James will preside the Meeting as Chair of the Board and call the meeting to
            order.
          </li>
          <li>Pastor David will open in Prayer.</li>
          <li>
            Quorum verification. 6 Proxy votes 10 attendees. Quorum needed is 14+1. Quorum met.
            Attendance:
            <ul>
              <li>
                PROXY VOTES: Miriam del Arbol, Sharon Batchelor, Michael Ramsey, Joe Binford, Susan
                Binford, Nicole Carvalho.
              </li>
              <li>
                REGULAR ATTENDANCE: David Trenado, James and Sonja Baird, Balfour Batchelor, Sean
                Xiao, Ruth Ann Ursino, Karen Bijai, Tom Abbott, Yvonne Hodge, Giovanna Andrea
                Chaves.
              </li>
            </ul>
          </li>
          <li>
            Reading of the minutes on the last AGM by Giovanna Andrea Chaves. No questions, A motion
            is presented to approve it by David G. Approved.
          </li>
          <li>
            Board of Directors Elections. This year the position of Secretary of the Board of
            Directors is to be filled out or going to an additional term. Pastor Jamey explains that
            there are two ways to consider fulfilling the position: 1. Elect a new member or that
            the current member be ratified. There were no new nominees. A motion is presented to
            re-elect the current Secretary, seconded by Sean and Tom. Approved.
          </li>
          <li>
            Financial Statements: Pastor David presents the Financial Statements to October 2021,
            attached to this minute. As an overall, our expenses are still the same: Salary,
            Accounting Services, Online subscriptions. Our income is stable, compared to the
            previous two years. Balfour asks if we are filing the HST form to CRA, David confirms
            this is done every year. A motion is presented to approve the report, Seconded by Yvonne
            and Tom. Approved.
          </li>
          <li>New business: No new business.</li>
          <li>Closing prayer by Pastor James.</li>
          <li>Meeting ends at 12:57 pm</li>
        </ol>
      </section>
      <section class="margin-section" v-if="currentYear === '2020'">
        <p>FELLOWSHIP CHURCH GTA NOVEMBER 15th, 2020</p>
        <p>This year our AGM is held online via Zoom. Time 12:25pm.</p>
        <p>Agenda:</p>
        <ul class="agenda">
          <li>Prayer</li>
          <li>Call to the Meeting</li>
          <li>Quorum verification</li>
          <li>Previous AGM Minute reading and approval</li>
          <li>BOD Election</li>
          <li>Acceptance of new members</li>
          <li>Financial Statements</li>
          <li>New business</li>
          <li>Adjournment</li>
        </ul>
        <ol>
          <li>Prayer</li>
          <li>
            Pastor James will preside the Meeting as Chair of the Board and call the meeting to
            order.
          </li>
          <li>Vice President Balfour Batchelor will open in Prayer.</li>
          <li>
            Quorum verification. 9 Proxy votes 9 attendees. Quorum needed is 13+1. Quorum met.
            Attendance:
            <ul>
              <li>
                PROXY VOTES: Miriam del Arbol, Sharon Batchelor, Miriam Zimmermann, Nicole Carvalho,
                Denise Tull, Ivan Amaranto, Paula Small, Susan and Joe Binford.
              </li>
              <li>
                REGULAR ATTENDANCE: David Trenado, James and Sonja Baird, Michael Ramsey, Balfour
                Batchelor, Sean Xiao, Ruth Ann Ursino, Tom Abbott, Giovanna Andrea Chaves
              </li>
            </ul>
          </li>
          <li>
            Reading of the minutes on the last AGM by Giovanna Andrea Chaves. No questions, A motion
            is presented to approve it. Approved.
          </li>
          <li>
            Acceptance of new members: Karen Bijai and Asif Sajid. James explains to Karen and Asif
            that it is good to become a member of the church, as well as it is good for us as well.
            A motion is presented to accept them as members. Seconded. Approved.
          </li>
          <li>
            Board of Directors elections. This year three positions are to be filled out or going to
            a second term: Tom, Sean, James. Davis is taking over while the voting takes place.
            There are no new candidates to fill out the position. A motion is presented to give Tom,
            Sean, and James continuity for another two years. Seconded. Approved. Pastor James
            indicate to everyone that all Board meetings are open to the members and always they are
            welcome to participate or be part of it.
          </li>
          <li>
            Financial Statements: Pastor David presents the Financial Statements to September 2020
            and are attached to this minute. As an overall, our income has dropped 25%, but at the
            same time, costs related to rental of the Community Center, does not reflect that drop
            down as a loss. Balfour proposes that the surplus of cash in the bank accounts can be
            located in an investment fund. Giovanna Andrea explains we have tried to do that last
            year with GIC’s but the interest rates were very low. Balfour suggests to contact the
            bank and find information on other type of funds with a good portfolio investment to
            invest 10.000 in it. Giovanna Andrea commits to present to the Board the results of the
            investment options on the future BOD Meeting.
          </li>
          <li>
            New business: Next meetings: BOD week of December 14th, 2020. Next Members meeting to
            present and approve budget: January 24th, 2020 after the Worship Service.
          </li>
          <li>Closing prayer by Sean.</li>
          <li>Meeting ends at 1:07 pm</li>
        </ol>
      </section>
      <section class="margin-section" v-if="currentYear === '2019'">
        <p>FELLOWSHIP CHURCH GTA 2019 AGM OCTOBER 27, 2019 FRANK MCKECHNIE COMMUNITY CENTER</p>
        <p>Starting time 11:55 am .</p>
        <p>Agenda:</p>
        <ul class="agenda">
          <li>Call the meeting to order</li>
          <li>Welcome and address – Pastor David</li>
          <li>Quorum verification</li>
          <li>Previous AGM Minute reading and approval</li>
          <li>Financial Statements</li>
          <li>Other business</li>
          <li>Next meeting</li>
          <li>Adjournment</li>
        </ul>
        <ol>
          <li>Prayer</li>
          <li>
            This year our AGM was held at Frank McKechnie Community Center as River Grove Community
            Center is under renovations. The main purpose of this meeting is to provide the Church
            and its members, with a current financial report (attached to the minute). FC GTA sent a
            previous invitation on September 20th, announcing and inviting to the meeting. The
            agenda was sent as well.
          </li>
          <li>
            We receive 4 proxy votes from members who cannot attend. 11 members attending members.
            We need 12+1 members to guarantee quorum and proceed. There is quorum to continue with
            the meeting.
            <ul>
              <li>PROXY VOTES: Joseph Binford, Susan Binford, Tess Prado, Jun Prado</li>
              <li>
                Members attending: Jamey Baird, Sonja Baird, Tom Abbott, Jermaine, Sean Zhao, David
                Trenado, Michael Ramsey, Liam Ramsey, Nicole Carvalho, Balfour Batchelor, Andrea
                Chaves
              </li>
            </ul>
          </li>
          <li>
            Andrea reads the previous AGM minute. No questions. A motion is presented by to approve
            it. Approved.
          </li>
          <li>
            Acceptance of new members: Karen Bijai and Asif Sajid. James explains to Karen and Asif
            that it is good to become a member of the church, as well as it is good for us as well.
            A motion is presented to accept them as members. Seconded. Approved.
          </li>
          <li>
            Pastor David is presiding and presents the financial report. The Accounting is being
            managed by a company called UNPAPER and Joby Belen handle all our affairs. We are paying
            a monthly fee for their services, as we do not have a member of the church to take care
            of the Accounting. Pastor David explains is the best option for now. Balfour asks about
            a payment made to Joby for the services charged on filling out and process before CRA
            the HST reports from 2016 to 2018. In an email sent by him, he stated he will charge Fc
            GTA 50%. Unfortunately, the Board was not consulted on this matter and it was given to
            him the go ahead. Pastor David apologizes for the mistake in approving this high expense
            without consulting the Board of Directors first. The income and expenses have been
            presented as well as a motion to accept the financial report. Accepted. Reports attached
            to this minute. As a summary, Balfour asks pastor Davis to explain in detail the context
            in which the 50% Fee for the HST rebate was discussed with Joby. Pastor David explains
            in detail and apologizes again for the error.
          </li>
          <li>
            A motion to schedule our next meeting is presented by Andrea Chaves, suggesting Jan 19
            th , 2020. Seconded and approved. New business: No new businesses.
          </li>
          <li>Closing prayer by Sean.</li>
          <li>Meeting finishes at 12:55 pm</li>
        </ol>
      </section>
      <section class="margin-section" v-if="currentYear === '2018'">
        <p>FELLOWSHIP CHURCH GTA 2018 AGM</p>
        <ol>
          <li>
            The main purpose of this meeting is to provide the Church and its members, with a
            current financial report (attached to the minute), and look for the members approval on
            three new board members. FC GTA sent a previous invitation on September 17, announcing
            the meeting and the possibility for members who might not attend to send their proxy
            vote.
          </li>
          <li>
            We need a quorum of twelve plus one. We have 16 voters present/proxy.
            <ul>
              <li>
                PROXY VOTES: Miriam Zimmermann, Paula Small, Balfour Batchelor, Sharon Batchelor ,
                Nicole Carvalho , Miriam Del Arbol, Joseph Binford, Susan Binford
              </li>
              <li>
                Members attending: Jamey Baird, Sonja Baird, Tom Abbott, Jermaine, Sean Zhao, David
                Trenado, Denise Tull, Andrea Chaves
              </li>
            </ul>
          </li>
          <li>
            Andrea reads the previous AGM minute. No questions. A motion is presented by to approve
            it. Approved.
          </li>
          <li>
            Pastor David is presiding, and presents the financial report as Treasurer is absent. It
            is explained, Sharon feels a little bit overwhelmed with the responsibility. David goes
            through the report and explain the main expenses. Also, that the church is pending to
            receive the payment from the Government on the Canada Summer Jobs program, around
            $7.000. time for questions is given before voting for the approval. Approved.
          </li>
          <li>
            David explains the Church the need to vote for three Directors as the previous elected
            ones resigned. Stephen Dekuyper and Esther Song. The candidates are: Jamey Baird, Sean
            Xiao Zhao, Tom Abbott. As their names were proposed since the announcement for the AGM
            was sent, all proxy voters voted in favor (emails/text messages with their vote are
            attached to this minute). Attending members today are invited to vote. Members of the
            church have voted on favor to the three candidates and they are now Members of the
            Board.
          </li>
          <li>
            Pastor Jamey announces this is time for new businesses, in case members of the church
            would like to make a remark on some situation or have a proposal, feedback / idea they
            would like to share, that this is the time to do it. Also, Pastor Jamey addresses that
            we should apply the rules for this type of meetings. No new businesses.
          </li>
          <li>Closing prayer by Sean.</li>
          <li>Meeting finishes at 1:10 pm.</li>
        </ol>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/font.scss';
@use '../styles/colors.scss';
@use '../styles/dimensions.scss';

section {
  margin-top: 1rem;

  &#news {
    margin: 0 5rem;

    a {
      text-align: center;
    }
  }

  .home-section-icon-row {
    display: grid;
    grid-template-columns: 15% 1fr;
    align-items: center;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: dimensions.$mobile-width) {
      grid-template-columns: 20% 1fr;
    }

    .icon {
      justify-self: center;
    }
  }

  h2 {
    @media only screen and (max-width: dimensions.$mobile-width) {
      font-size: font.$font-size-700;
    }
  }

  p,
  a {
    @media only screen and (max-width: dimensions.$tablet-width) {
      font-size: font.$font-size-500;
    }
  }

  & > img {
    max-height: 10rem;
    width: auto;
  }
}

section:not(#hero) {
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: dimensions.$mobile-width) {
    margin-bottom: 1rem;
  }
}

#hero {
  h1 {
    text-align: center;
    color: colors.$primary-dark;

    @media only screen and (max-width: dimensions.$tablet-width) {
      font-size: font.$font-size-800;
    }

    @media only screen and (max-width: dimensions.$mobile-width) {
      font-size: font.$font-size-700;
    }
  }

  p {
    padding-bottom: 1rem;
    margin: 2rem 7rem;

    @media only screen and (max-width: dimensions.$tablet-width) {
      margin: 2rem 3rem;
      font-size: font.$font-size-500;
    }

    @media only screen and (max-width: dimensions.$mobile-width) {
      margin: 1rem;
    }
  }
}

img.float-right,
img.float-left {
  height: 35rem;
  width: 16rem;

  @media only screen and (max-width: dimensions.$tablet-width) {
    height: 15rem;
    width: 10rem;
  }

  &.float-right {
    float: right;
    margin-left: 2rem;
    @media only screen and (max-width: dimensions.$mobile-width) {
      display: none;
    }
  }

  &.float-left {
    float: left;
    margin-right: 2rem;
    @media only screen and (max-width: dimensions.$mobile-width) {
      display: none;
    }
  }
}

img.home-intro-image {
  width: 100%;
  height: 17rem;
}

h2 {
  text-align: center;
  margin-bottom: 0.5rem;
  color: colors.$primary-dark;
  font-size: 2rem;

  @media only screen and (max-width: dimensions.$tablet-width) {
    font-size: font.$font-size-700;
  }
}

.logo-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  place-items: center;

  img {
    height: 10rem;

    @media only screen and (max-width: dimensions.$tablet-width) {
      height: 7rem;
    }

    &#fca-canada-logo {
      background-color: colors.$primary-dark;
      padding: 0.5rem;
    }
  }
}

// AGM styles

#agm {
  clear: both;
  margin-top: 12rem;
  padding-top: 2rem;
  border-top: 1px solid #4486bf;
}

ul {
  padding: 1rem;
  background-color: white;
  margin: 1rem 0;
  border-radius: 5px;
}

ol,
ul {
  li {
    margin: 1rem 0;
    font-size: font.$font-size-500;
  }
}

select {
  display: block;
  width: 20rem;
  margin: 0 auto;
  margin-top: 1rem;
}
</style>
