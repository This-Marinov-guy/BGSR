import React from "react";
import Breadcrumb from "../../elements/common/Breadcrumb";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import WindowShift from "../../elements/ui/WindowShift";
import TeamTwo from "../../elements/TeamTwo";

const COMMITTEES = {
  CULTURE: [
    {
      id: 1,
      name: "Paolina |",
      title: " Chair",
      description: '20 | Liberal Arts and Science, Major Economics and Political Science',
      interests: 'Basketball, Traveling, Cooking',
      instagram: 'https://instagram.com/paolinagocheva',
      linkedin: 'https://www.linkedin.com/in/paolina-gocheva-6b0711245'
    },
    {
      id: 2,
      name: "Lora |",
      title: " PR",
      description: '20 | BSc International Communication and Media',
      interests: 'Poetry, Fashion, Media, Journalism',
      instagram: 'https://www.instagram.com/loratsv/',
    },
    {
      id: 3,
      name: "Gergana |",
      title: " Secretary",
      description: '22 | MSc Business Information Management',
      interests: 'Dancing, Traveling',
      instagram: 'https://www.instagram.com/geristoyancheva/',
      linkedin: 'https://www.linkedin.com/in/gergana-s-50812a134/'
    },
    {
      id: 4,
      name: "Denis |",
      title: " Culture Ambassador",
      description: '20 | BSc International Business Administration',
      interests: 'Entrepreneurship, Motocross, Hiking, Skiing, Traveling',
      instagram: 'https://www.instagram.com/denkata_dh/',
      linkedin: 'https://www.linkedin.com/in/denis-dimitrov-60b120243/'
    }
  ],
  PR: [
    {
      id: 1,
      name: "Aleksandra |",
      title: " PR Team Representative",
      description: '22 | MSc Marketing Management',
      interests: 'Fashion, Traveling, Marketing',
      instagram: 'https://www.instagram.com/alexandra.sg/',
      linkedin: 'www.linkedin.com/in/aleksandra-garcheva-a7a9231b2'
    },
    {
      id: 2,
      name: "Viktoria |",
      title: " Account Manager",
      description: '20 | BSc International Economics & Business Economics',
      interests: 'Kitesurfing, Traveling, Partying ',
      instagram: 'https://instagram.com/victoria_alex.sgrv',
      linkedin: 'https://www.linkedin.com/in/viktoriya-alex-sugareva-622494278'
    },
    {
      id: 3,
      name: "Lora |",
      title: " PR of Social and Culture",
      description: '20 | BSc International Communication and Media',
      interests: 'Poetry, Fashion, Media, Journalism',
      instagram: 'https://www.instagram.com/loratsv/',
    },
  ]
}

const Committees = React.memo(() => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Committees" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Meet the Committees"} />
      {/* End Breadcrump Area */}

      {/* Start Team Area  */}
      <div className=" ptb--120 bg_color--5">
        <WindowShift
          main="Social and Culture"
          secondary="Press Release"
          mainContent={
            <div>
              <h2 className="center_text mb--20">
              Social and Culture Team
              </h2>
              <br />
              <TeamTwo folder='culture' target={COMMITTEES.CULTURE} />
            </div>
          }
          secondaryContent={
            <div>
              <h2 className="center_text mb--20">Press Release Team</h2>
              <br />
              <TeamTwo folder='pr' target={COMMITTEES.PR} />
            </div>
          }
        />
      </div>
      {/* End Team Area  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
});

export default Committees;
