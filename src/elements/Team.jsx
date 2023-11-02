import React, { Component } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ImageFb from "./ui/ImageFb";

let TeamContent = [
  {
    id: 1,
    images: "1",
    name: "Ivan",
    title: "| President",
    designation: [
      "Study: BSc International Business Administration",
      "Age: 19",
      "Interests: Fitness, Cryptocurrencies, Entrepreneurship",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://instagram.com/ivankkol?igshid=OGQ5ZDc2ODk2ZA==",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/ivan-kolev-06635021a",
      },
    ],
  },
  {
    id: 2,
    images: "2",
    name: "Hristiyan",
    title: "| Vice President",
    designation: [
      "Study: BSc International Business Administration",
      "Age: 19",
      "Interests: Travel, Entrepreneurship, Leadership, Golf, Skiing",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/hristiandanchev/",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/hristiyan-danchev/",
      },
    ],
  },
  {
    id: 3,
    images: "3",
    name: "Aleksandra",
    title: "| PR Manager",
    designation: [
      "Study: MSc Marketing Management",
      "Age: 22",
      "Interests: Fashion, Traveling, Marketing",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/alexandra.sg/",
      },
      {
        icon: <FaLinkedinIn />,
        url: "www.linkedin.com/in/aleksandra-garcheva-a7a9231b2",
      },
    ],
  },
  {
    id: 4,
    images: "4",
    name: "Viktoria",
    title: "| Secretary",
    designation: [
      "Study: BSc International Economics & Business Economics",
      "Age: 20",
      "Interests: Make-up, Reading, History",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://instagram.com/vikki_sugareva",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/viktoria-sugareva-b762b824a",
      },
    ],
  },
  {
    id: 5,
    images: "5",
    name: "Kalina",
    title: "| Internal Relations",
    designation: [
      "Study: BSc International Communication and Media",
      "Age: 21",
      "Interests: Gym, Reading, Travel",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://instagram.com/kalii_832",
      },
    ],
  },
  {
    id: 6,
    images: "6",
    name: "Pavel",
    title: "| External Relations",
    designation: [
      "Study: BSc International Business Administration",
      "Age: 20",
      "Interests: Business, Automobiles, Travel, Martial Arts, Tennis",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/7_p_7_a_7/",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/pavel-angelov-822041213/",
      },
    ],
  },
  {
    id: 7,
    images: "7",
    name: "Boris",
    title: "| Treasurer",
    designation: [
      "Study: BSc International Economics & Business Economics",
      "Age: 20",
      "Interests: Gym, Playing cards, Hanging out",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/borispetrov003/",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/boris-petrov-59a720246/",
      },
    ],
  },
];

class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container team_info">
          <div className="column">
            {TeamContent.map((value) => (
              <div
                className={
                  value.id % 2 !== 0
                    ? "team_member_container flex_left"
                    : "team_member_container flex_right"
                }
                key={value.id}
              >
                <ImageFb
                  className="team_img"
                  src={`/assets/images/team/board/${value.images}.webp`}
                  fallback={`/assets/images/team/board/${value.images}.jpg`}
                  alt="Team Images"
                />
                <div
                  className={
                    value.id % 2 !== 0
                      ? "team_member_border-1"
                      : "team_member_border-2"
                  }
                >
                  <h2 className="title">{value.name}</h2>
                  <h3 className="title">{value.title}</h3>
                  {value.designation.map((value, index) => (
                    <p key={index} className="designation">
                      {value}
                    </p>
                  ))}

                  {value.socialNetwork.map((social, index) => (
                    <a
                      style={{ margin: "20px" }}
                      key={index}
                      href={`${social.url}`}
                      target="_blank"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
