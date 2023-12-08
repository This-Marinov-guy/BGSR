// add ticket_link : '*link for the tickets' for outside ticket purchase
export const OPEN_SOCIETY_EVENTS = [
  // {
  //   visible: true,
  //   // subEvent: {
  //   //   description: 'You can purchase ONLY the dinner from this event separately - just click below!',
  //   //   link: '/event-details/Introduction%20Week%20(DINNER%20ONLY)'
  //   // },
  //   title: "Bulgarian Dinner",
  //   description: "Join us for our first ever Bulgarian Dinner!",
  //   bgImage: "23",
  //   date: "2nd December",
  //   time: "20:00",
  //   ticketTimer: '2023-12-01T00:59:00',
  //   ticketLimit: 100,
  //   //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
  //   correctedDate: "",
  //   correctedTime: "",
  //   where: `Stadhuisplein 30`,
  //   entry: 10,
  //   memberEntry: 8,
  //   including: ['menu', 'menu'],
  //   price_id: 'price_1OFhmnIOw5UGbAo1DRdcQMJd',
  //   memberPrice_id: 'price_1OFhnTIOw5UGbAo1jD2b2Eo5',
  //   activeMemberPrice_id: 'price_1OFhnTIOw5UGbAo14E6eyjfE',
  //   freePass: ['vlady1002@abv.bg'],
  //   extraInputs: true,
  //   text: [
  //     `We have prepared for you a delicious home-cooked meal, including Shopska salad, 2 main course options (Wine kebab or Stuffed peppers), a dessert (Biscuit cake), and many different surprise appetizers! 
  //     `,
  //     `The menu also includes vegetarian options, so that everyone can enjoy the delights that Bulgarian cuisine has to offer. Grab your friends and get ready for a night of rich flavors and warm company!
  //     `,
  //     'The doors will open at 20:00 at Stadhuisplein 30 (Milestone Student Apartments).',
  //     `The spots are limited, so mark your calendar and buy your ticket through our website NOW: €8 for members and €10 for non-members.`,
  //   ],
  //   ticket_img: '/assets/images/tickets/ticket-1.jpg',
  //   images: ["/assets/images/portfolio/portfolio-1"],
  //   thumbnail: "/assets/images/portfolio/portfolio-1",
  // },
  // {
  //   visible: false,
  //   title: "Introduction Week (DINNER ONLY)",
  //   newTitle: 'Bulgarian Dinner',
  //   description: "Welcome to the new term",
  //   bgImage: "22",
  //   date: "16th September",
  //   time: "19:00",
  //   ticketTimer: '2023-09-16T04:59:00',
  //   ticketLimit: 70,
  //   //Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
  //   correctedDate: "",
  //   correctedTime: "",
  //   where: `Wijkrestaurant De Duindoorn | Duindoornstraat 91, 9741 NP`,
  //   entry: 12,
  //   memberEntry: 10,
  //   including: ['(discounted including menu)', '(including menu)'],
  //   price_id: 'price_1Nmc1rIOw5UGbAo15v1W2Lt8',
  //   memberPrice_id: 'price_1Nmc00IOw5UGbAo1ZfaT6m4X',
  //   activeMemberPrice_id: 'price_1Nmc00IOw5UGbAo1AqDIkHKa',
  //   freePass: ["elenamateva@abv.bg", "vladislavmarinov3142@gmail.com", "z.tsenovska@gmail.com", "mnanova6@gmail.com", "tsvetina.arabadzhieva@gmail.com", 'mariakristi.radeva@gmail.com'],
  //   extraInputs: false,
  //   text: [
  //     `Calling all the veterans!`,
  //     `At the dinner, you will have the opportunity to meet the new additions to the town and catch up with the old ones after the summer!`,
  //     `In addition, you can enjoy our delicious Bulgarian cuisine!`,
  //     '...',
  //     `До всички ветерани!`,
  //     `На вечерята ще можете да се запознаете с новите попълнения в града и да наваксате след лятото със старите!`,
  //     `Освен това, може да се насладите на вкусната ни българска кухня!`,
  //   ],
  //   ticket_img: '/assets/images/tickets/ticket-6.jpg',
  //   images: ["/assets/images/events/intro-week/3"],
  //   thumbnail: "/assets/images/portfolio/portfolio-13",
  // },
];

export const OPEN_NON_SOCIETY_EVENTS = [
  // {
  //   title: "Barista Course",
  //   description: "Master the profession of a barista",
  //   bgImage: "2",
  //   when: "TBD",
  //   //Use the corrected when for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
  //   correctedWhen: "",
  //   where: "TBD",
  //   entry: 30,
  //   memberEntry: 5,
  //   text: [
  //     "Join our Barista Course led by Henry Daniels, owner of Revista Coffee and become a pro barista in no time!",
  //     "As a member of the Bulgarian Society Rotterdam, you'll get a special discount. The original price of 30 euros is now only 20 euros for members. You will be contacted by Henry to find a suitable date for the course. The course is usually held Tuesday and Wednesday mornings from 10-12. After finishing the course you will be able to receive a reference letter for a future employer. You will pay for the course in person!",
  //   ],
  //   images: ["/assets/images/portfolio/portfolio-7"],
  //   thumbnail: "/assets/images/portfolio/portfolio-7",
  // },
];

export const EVENT_REFLECTION_DETAILS = [
  {
    title: "Bulgarian Dinner",
    bgImage: "23",
    date: "2nd December",
    attendance: "100",
    comments: "80",
    text: [
      `Our first event - a traditional Bulgarian Dinner consisting of 3 courses. The starter was a Shopska Salad, the main course was musaka and we finished with biscuit cake for dessert. A vegan menu was also an option. We want to thank our Groningen friends from BGSG for visiting us and supporting the whole event - we want to welcome everyone warmly to join our community and dive into the Bulgarian culture from abroad!`,
    ],
    images: [
      { id: "1", image: "dinner23/1", text: "" },
      { id: "2", image: "dinner23/2", text: "" },
      { id: "3", image: "dinner23/3", text: "" },
    ],
  },
];
