const users = [
  {
    name: "John",
    id: 1,
    events: [
      {
        id: 1,
        month: 11,
        day: 13,
        time: "15:20",
        eventType: "Sport",
        eventName: "Football",
        location: "Field near John's house",
        details: "It's gonna be fun!"
      },
      {
        id: 2,
        month: 9,
        day: 9,
        time: "15:15",
        eventType: "Social",
        eventName: "Party",
        location: "Rachel's house",
        details: "Don't get pissed!"
      },
      {
        id: 3,
        month: 9,
        day: 10,
        time: "09:00",
        eventType: "Outdoors",
        eventName: "Hiking",
        location: "Rocky mountain",
        details: "Heard the views there are stunning!"
      }
    ]
  },
  {
    name: "Rachel",
    id: 2
  }
];

module.exports = users;
