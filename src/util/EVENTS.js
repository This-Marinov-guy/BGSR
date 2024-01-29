// add ticket_link : '*link for the tickets' for outside ticket purchase
export const OPEN_SOCIETY_EVENTS = [
   {
    visible: true,
    subEvent: {
      description: 'If you buy this ticket you can enter our Belot Tournament with a prize',
      link: '/event-details/Belot Tournament'
    },
    title: "Game Night",
    description: "🌟 Kickstart the new year with a bang! 🌟 ",
    bgImage: "3",
    date: "7th February",
    time: "20:00",
    ticketTimer: '2024-02-07T01:59:00',
    ticketLimit: 50,
    // Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
    correctedDate: "",
    correctedTime: "",
    where: `Stadhuisplein 30, 3012 AS Rotterdam`,
    entry: 4,
    memberEntry: 0,
    including: ['', `it's free`],
    price_id: 'price_1OdzZMIOw5UGbAo1kWPHqAJP',
    memberPrice_id: 'price_1OdzZMIOw5UGbAo1kWPHqAJP',
    activeMemberPrice_id: 'price_1OdzZMIOw5UGbAo1kWPHqAJP',
    discountPass: [
      
    ],
    freePass: ["vlady1002@abv.bg"],
    text: [
      `Get ready for an epic evening of friendly competition and gaming at our upcoming Game Night and Belot Tournament event! Whether you're a belot strategist, FIFA pro, or a table tennis enthusiast, there's something for everyone. We're not just playing for glory—there are cash prizes for the top belot champions! The date is February 7th, and the location is Stadhuisplein 30, 3012 AS Rotterdam. Doors open at 20:00, and the belot tournament kicks off at 20:30.  
      `,
      `Admission is FREE for BGSR members, so seize the opportunity to join our community! Non-members can get in on the action for just 4 euros, and if you're up for the belot challenge, a separate ticket is available with all proceeds going to the prize fund.
      `,
      `Don't miss out on the fun—secure your spot now for a night you won't forget!`,
     
    ],
    ticket_img: '/assets/images/tickets/ticket-2.jpg',
    images: ["/assets/images/portfolio/portfolio-2"],
    thumbnail: "/assets/images/portfolio/portfolio-2",
  },
  {
    visible: true,
    subEvent: {
      description: 'You need to first purchase ticket for the Game Night to enter the tournament',
      link: '/event-details/Game Night'
    },
    title: "Belot Tournament",
    description: "For the competitive ones",
    bgImage: "23",
    date: "7th February",
    time: "20:00",
    ticketTimer: '2024-02-07T01:59:00',
    ticketLimit: 50,
    // Use the corrected date and time for changes in the date or time. Do not change the initial ones as it will make a new event in the DB
    correctedDate: "",
    correctedTime: "",
    where: `Stadhuisplein 30, 3012 AS Rotterdam`,
    entry: 6,
    memberEntry: 6,
    externalPayment: true,
    including: ['or 10 euro for teams', 'or 10 euro for teams'],
    price_id: 'price_1OVyivIOw5UGbAo1Yuob9lhb',
    memberPrice_id: 'price_1OVyivIOw5UGbAo1Yuob9lhb',
    activeMemberPrice_id: 'price_1OWBaCIOw5UGbAo1fi6OwKrL',
    discountPass: [
     
    ],
    freePass: ["vlady1002@abv.bg"],
    extraInputs: true,
    text: [
      `You need to first buy a ticket for the game night (link can be found below). Admission is free for BGSR members, so seize the opportunity to join our community! Non-members can get in on the action for just 4 euros, and i  
      `,
      `Up for the belot challenge, a this ticket is available with all proceeds going to the prize fund. Flying solo? Sign up for 6 euros, and we'll pair you with a teammate. Prefer to sign up as a team of two? Grab a collective ticket for 10 euros.
      `,
      `WARNING!!! Tickets need to be paid prior to the event - please check the links below so you do not have to pay them on the spot!`,
      'Link for a single entry: https://bunq.me/o/t3VIJ9kU5XNHVkqytaazx',
      'Link for a team entry (only one has to pay for it): https://bunq.me/o/1YfReBEjMIWnR0RG3x6diU',
    ],
    ticket_img: '/assets/images/tickets/ticket-3.jpg',
    images: ["/assets/images/portfolio/portfolio-3"],
    thumbnail: "/assets/images/portfolio/portfolio-3",
  },
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
