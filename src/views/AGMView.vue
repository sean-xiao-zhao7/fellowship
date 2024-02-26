<script>
export default {
  data() {
    return {
      currentYear: `${new Date().getFullYear() - 1}`
    }
  }
}
</script>
<template>
  <div id="view-container">
    <h1>Annual General Meeting Minutes</h1>
    <p>Here are the minutes from past annual general meetings. They are sorted by year.</p>
    <select v-model="currentYear">
      <option value="2023">Year 2023</option>
      <option value="2022">Year 2022</option>
      <option value="2021">Year 2021</option>
      <option value="2020">Year 2020</option>
      <option value="2019">Year 2019</option>
      <option value="2018">Year 2018</option>
    </select>
    <section class="margin-section" v-if="currentYear === '2023'">
      <h2>FELLOWSHIP CHURCH GTA DECEMBER 3rd, 2023</h2>
      <h2>
        This year our AGM is held online via Zoom and at River Grove community Center. Time 12:17
        pm.
      </h2>
      <h2>Agenda:</h2>
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
          Pastor James will preside the Meeting as Chair of the Board and call the meeting to order.
          Balfour presents a motion to start the meeting.
        </li>
        <li>Sonja opens the meeting in prayer.</li>
        <li>
          Quorum verification. 5 Proxy votes 7 attendees, 3 online. Quorum needed is 14+1. Quorum
          met.
          <ul>
            Attendance:
            <li>
              PROXY VOTES: Ivan Amaranto, Sharon Batchelor, Miriam Zimmerman, Denise Tull, Ruth Ann
              Ursino.
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
          New business: Activity report. Attached to the minute. Pastor James read it and gives the
          ministry Coordinator time to address the church the main activities in 2023.
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
          Adjournment. A motion is presented by David to finish the meeting at 12:55 pm. Seconded by
          Balfour. Approved.
        </li>
      </ol>
    </section>
    <section class="margin-section" v-if="currentYear === '2022'">
      <h2>Fellowship Church Streetsville AGM 2022</h2>
      <h2>Agenda:</h2>
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
          Pastor James will preside the Meeting as Chair of the Board and call the meeting to order.
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
              Pastor James informs the membership that Pastor David has resigned his title of Senior
              Pastor to be an Associated Pastor. This is just a nominal change as the Pastoral Team
              continues to work essentially the same.
            </li>
          </ul>
        </li>
        <li>
          Financial Statements: Giovanna Andrea Chaves explains the members an overall explanation
          of the Financial Statements until September 30th , 2022, thanking the church first for the
          support during the first half of the year where extra contributions were needed to cover
          regular expenses.
          <ul>
            <li>
              It was emphasized that starting May there is no more responsibility for Salary
              payments, which have led us to be able to cover operational expenses like rent,
              insurance and would be room for other activities. We look forward to closing the year
              with no deficit. Pastor James explains that the new situation, will allows us to think
              and promote more programs leading to the church growth.
            </li>
            <li>
              There was a question from David G, referring to the scope for outreach of the local
              church in the area where we located. Pastor James answers that the outreach goes
              beyond the area the local church is located as many current members are in Georgetown,
              Milton, Oakville, etc. Pastor David presents a motion to approve the financial
              statements, seconded by Balfour. Approved.
            </li>
          </ul>
        </li>
        <li>
          New business:
          <ul>
            <li>
              Thinking about the need of Outreach we take this time to think in ideas of activities
              to structure our outreach program. As follows:
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
              Sean presents a motion to accept these activities as a plan for 2023, seconded by Tom.
              Approved.
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
      <h2>FELLOWSHIP CHURCH GTA NOVEMBER 7th, 2021</h2>
      <p>
        This year our AGM is held online via Zoom and at River Grove community Center. Time 12:23PM.
      </p>
      <h2>Agenda:</h2>
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
          Pastor James will preside the Meeting as Chair of the Board and call the meeting to order.
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
              Xiao, Ruth Ann Ursino, Karen Bijai, Tom Abbott, Yvonne Hodge, Giovanna Andrea Chaves.
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
          there are two ways to consider fulfilling the position: 1. Elect a new member or that the
          current member be ratified. There were no new nominees. A motion is presented to re-elect
          the current Secretary, seconded by Sean and Tom. Approved.
        </li>
        <li>
          Financial Statements: Pastor David presents the Financial Statements to October 2021,
          attached to this minute. As an overall, our expenses are still the same: Salary,
          Accounting Services, Online subscriptions. Our income is stable, compared to the previous
          two years. Balfour asks if we are filing the HST form to CRA, David confirms this is done
          every year. A motion is presented to approve the report, Seconded by Yvonne and Tom.
          Approved.
        </li>
        <li>New business: No new business.</li>
        <li>Closing prayer by Pastor James.</li>
        <li>Meeting ends at 12:57 pm</li>
      </ol>
    </section>
    <section class="margin-section" v-if="currentYear === '2020'">
      <h2>FELLOWSHIP CHURCH GTA NOVEMBER 15th, 2020</h2>
      <p>This year our AGM is held online via Zoom. Time 12:25pm.</p>
      <h2>Agenda:</h2>
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
          Pastor James will preside the Meeting as Chair of the Board and call the meeting to order.
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
          that it is good to become a member of the church, as well as it is good for us as well. A
          motion is presented to accept them as members. Seconded. Approved.
        </li>
        <li>
          Board of Directors elections. This year three positions are to be filled out or going to a
          second term: Tom, Sean, James. Davis is taking over while the voting takes place. There
          are no new candidates to fill out the position. A motion is presented to give Tom, Sean,
          and James continuity for another two years. Seconded. Approved. Pastor James indicate to
          everyone that all Board meetings are open to the members and always they are welcome to
          participate or be part of it.
        </li>
        <li>
          Financial Statements: Pastor David presents the Financial Statements to September 2020 and
          are attached to this minute. As an overall, our income has dropped 25%, but at the same
          time, costs related to rental of the Community Center, does not reflect that drop down as
          a loss. Balfour proposes that the surplus of cash in the bank accounts can be located in
          an investment fund. Giovanna Andrea explains we have tried to do that last year with GIC’s
          but the interest rates were very low. Balfour suggests to contact the bank and find
          information on other type of funds with a good portfolio investment to invest 10.000 in
          it. Giovanna Andrea commits to present to the Board the results of the investment options
          on the future BOD Meeting.
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
      <h2>FELLOWSHIP CHURCH GTA 2019 AGM OCTOBER 27, 2019 FRANK MCKECHNIE COMMUNITY CENTER</h2>
      <p>Starting time 11:55 am .</p>
      <h2>Agenda:</h2>
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
          Center is under renovations. The main purpose of this meeting is to provide the Church and
          its members, with a current financial report (attached to the minute). FC GTA sent a
          previous invitation on September 20th, announcing and inviting to the meeting. The agenda
          was sent as well.
        </li>
        <li>
          We receive 4 proxy votes from members who cannot attend. 11 members attending members. We
          need 12+1 members to guarantee quorum and proceed. There is quorum to continue with the
          meeting.
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
          that it is good to become a member of the church, as well as it is good for us as well. A
          motion is presented to accept them as members. Seconded. Approved.
        </li>
        <li>
          Pastor David is presiding and presents the financial report. The Accounting is being
          managed by a company called UNPAPER and Joby Belen handle all our affairs. We are paying a
          monthly fee for their services, as we do not have a member of the church to take care of
          the Accounting. Pastor David explains is the best option for now. Balfour asks about a
          payment made to Joby for the services charged on filling out and process before CRA the
          HST reports from 2016 to 2018. In an email sent by him, he stated he will charge Fc GTA
          50%. Unfortunately, the Board was not consulted on this matter and it was given to him the
          go ahead. Pastor David apologizes for the mistake in approving this high expense without
          consulting the Board of Directors first. The income and expenses have been presented as
          well as a motion to accept the financial report. Accepted. Reports attached to this
          minute. As a summary, Balfour asks pastor Davis to explain in detail the context in which
          the 50% Fee for the HST rebate was discussed with Joby. Pastor David explains in detail
          and apologizes again for the error.
        </li>
        <li>
          A motion to schedule our next meeting is presented by Andrea Chaves, suggesting Jan 19 th
          , 2020. Seconded and approved. New business: No new businesses.
        </li>
        <li>Closing prayer by Sean.</li>
        <li>Meeting finishes at 12:55 pm</li>
      </ol>
    </section>
    <section class="margin-section" v-if="currentYear === '2018'">
      <h2>FELLOWSHIP CHURCH GTA 2018 AGM</h2>
      <ol>
        <li>
          The main purpose of this meeting is to provide the Church and its members, with a current
          financial report (attached to the minute), and look for the members approval on three new
          board members. FC GTA sent a previous invitation on September 17, announcing the meeting
          and the possibility for members who might not attend to send their proxy vote.
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
          Pastor David is presiding, and presents the financial report as Treasurer is absent. It is
          explained, Sharon feels a little bit overwhelmed with the responsibility. David goes
          through the report and explain the main expenses. Also, that the church is pending to
          receive the payment from the Government on the Canada Summer Jobs program, around $7.000.
          time for questions is given before voting for the approval. Approved.
        </li>
        <li>
          David explains the Church the need to vote for three Directors as the previous elected
          ones resigned. Stephen Dekuyper and Esther Song. The candidates are: Jamey Baird, Sean
          Xiao Zhao, Tom Abbott. As their names were proposed since the announcement for the AGM was
          sent, all proxy voters voted in favor (emails/text messages with their vote are attached
          to this minute). Attending members today are invited to vote. Members of the church have
          voted on favor to the three candidates and they are now Members of the Board.
        </li>
        <li>
          Pastor Jamey announces this is time for new businesses, in case members of the church
          would like to make a remark on some situation or have a proposal, feedback / idea they
          would like to share, that this is the time to do it. Also, Pastor Jamey addresses that we
          should apply the rules for this type of meetings. No new businesses.
        </li>
        <li>Closing prayer by Sean.</li>
        <li>Meeting finishes at 1:10 pm.</li>
      </ol>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/font.scss';
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
