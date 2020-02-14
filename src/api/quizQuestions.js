const quizQuestions = [
  {
    id: 1,
    question: 'Pick your wand.',
    image: 'image1.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'Ash with Unicorn tail hairs',
      },
      {
        type: 'Slytherin',
        content: 'Aspen with Dragon heartstring',
      },
      {
        type: 'Ravenclaw',
        content: 'Acacia with Dragon heartstring',
      },
      {
        type: 'Hufflepuff',
        content: 'Alder with Phoenix feathers',
      },
    ],
  },

  {
    id: 2,
    question: "As a quidditch player, what's your favorite position?",
    image: 'image2.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'Seeker',
      },
      {
        type: 'Slytherin',
        content: 'Beater',
      },
      {
        type: 'Ravenclaw',
        content: 'Keeper',
      },
      {
        type: 'Hufflepuff',
        content: 'Chaser',
      },
    ],
  },

  {
    id: 3,
    question: "What's your least favorite lesson?",
    image: 'image3.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'History of Magic',
      },
      {
        type: 'Slytherin',
        content: 'Transfiguration',
      },
      {
        type: 'Ravenclaw',
        content: 'Flying',
      },
      {
        type: 'Hufflepuff',
        content: 'Defense against the Dark Arts',
      },
    ],
  },

  {
    id: 4,
    question: 'What would you do on your first day at Hogwarts?',
    image: 'image4.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'Go to the quidditch stadium and fly on your broom',
      },
      {
        type: 'Slytherin',
        content: 'Find every secret passages hidden in the castle',
      },
      {
        type: 'Ravenclaw',
        content: 'Look through THE magic crystal ball in the divination room',
      },
      {
        type: 'Hufflepuff',
        content:
          'Make your dorm feel like home and get to know your roommates better',
      },
    ],
  },

  {
    id: 5,
    question:
      'A trool escaped the dungeon and you find yourself face to face with him, what do you do?',
    image: 'image5.png',
    answers: [
      {
        type: 'Gryffindor',
        content:
          'Confronts him, ready to battle side by side with your friends',
      },
      {
        type: 'Slytherin',
        content:
          'Freeze him with a spell and leave by a secret path behind the wall',
      },
      {
        type: 'Ravenclaw',
        content:
          "Analyze the situation and see it's best to trap him or to escape",
      },
      {
        type: 'Hufflepuff',
        content: 'Run with your friend and warn everyone about the trool',
      },
    ],
  },

  {
    id: 6,
    question: 'you receive a howler from your parents. What for?',
    image: 'image6.png',
    answers: [
      {
        type: 'Gryffindor',
        content:
          'You sneaked after curfew into the dungeon as a dare with your friends',
      },
      {
        type: 'Slytherin',
        content:
          'You participated in an illegal duel competition to prove yourself',
      },
      {
        type: 'Ravenclaw',
        content: 'You used puking pills before an exam and got caught',
      },
      {
        type: 'Hufflepuff',
        content:
          "you tried to make magic fireworks in your dorm and it didn't go well",
      },
    ],
  },

  {
    id: 7,
    question: "What's your favorite magic object?",
    image: 'image7.png',
    answers: [
      {
        type: 'Gryffindor',
        content:
          'A pair of shoes that makes you run faster than anybody and almost fly when you jump',
      },
      {
        type: 'Slytherin',
        content:
          'Glasses which show the main traits of the person in front of you',
      },
      {
        type: 'Ravenclaw',
        content:
          'A pendulum that can slow time for the owner as long as it swings',
      },
      {
        type: 'Hufflepuff',
        content:
          'A mask that transform your face into any creature you think of',
      },
    ],
  },

  {
    id: 8,
    question: 'What are you looking in a friend?',
    image: 'image8.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'Someone with a strong personality',
      },
      {
        type: 'Slytherin',
        content: 'Someone who pushes you outside your comfort zone',
      },
      {
        type: 'Ravenclaw',
        content: 'Someone with mutual interests',
      },
      {
        type: 'Hufflepuff',
        content: 'Someone you can count on no matter what',
      },
    ],
  },

  {
    id: 9,
    question:
      'You and your friends went on a trip for the day. Your path ends in front of a mountain with no other way than climbing. What do you do?',
    image: 'image9.png',
    answers: [
      {
        type: 'Gryffindor',
        content:
          'You get your wand out of your pocket and wast a spell, creating a path through the mountain',
      },
      {
        type: 'Slytherin',
        content:
          'You check around and see some trees that can be use to access the top of the mountain with the help of a spell',
      },
      {
        type: 'Ravenclaw',
        content:
          "Turn back, you're pretty sure you have seen an other way on the map",
      },
      {
        type: 'Hufflepuff',
        content:
          'No climbing huh? You ask your friends for help and start climbing the side of the mountain',
      },
    ],
  },

  {
    id: 10,
    question:
      "One of your friend has been called a 'Mudblood'. What's your reaction?",
    image: 'image10.png',
    answers: [
      {
        type: 'Gryffindor',
        content:
          'You ask him/her who did this and go ask for reparation by yourself',
      },
      {
        type: 'Slytherin',
        content:
          'You prepare a little something that will be remembered for the person who dares threatening your friend',
      },
      {
        type: 'Ravenclaw',
        content:
          "You tell him/her it's not because he/she's a Mudblood that he/she can't become a great wizard",
      },
      {
        type: 'Hufflepuff',
        content:
          "You comfort him/her and make sure it won't happen again by telling a teacher",
      },
    ],
  },

  {
    id: 11,
    question: 'A big party is organized this week, will you go?',
    image: 'image11.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'Sure, I love to meet new people and have fun',
      },
      {
        type: 'Slytherin',
        content:
          "Depends who's there, and I have to make sure I'm well prepared",
      },
      {
        type: 'Ravenclaw',
        content: "Probably yes, but I won't stay long cause it's on a week day",
      },
      {
        type: 'Hufflepuff',
        content:
          'Of course, I always go to parties as long as my friends are there',
      },
    ],
  },

  {
    id: 12,
    question:
      'You struggle growing Mandragore for your botanic exam, what do you do?',
    image: 'image12.png',
    answers: [
      {
        type: 'Gryffindor',
        content:
          "It's not me, it's this plant. I just need to start over with a new one.",
      },
      {
        type: 'Slytherin',
        content: "I don't struggle, I never struggle",
      },
      {
        type: 'Ravenclaw',
        content:
          'I need to read more about botanic and how to make a plant grow faster with magic',
      },
      {
        type: 'Hufflepuff',
        content: 'Well, seems like I need help',
      },
    ],
  },

  {
    id: 13,
    question: 'Choose one muggle destination you would fly to.',
    image: 'image13.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'American Cordillera',
      },
      {
        type: 'Slytherin',
        content: 'Tokyo, Japan',
      },
      {
        type: 'Ravenclaw',
        content: 'Alexandria, Egypt',
      },
      {
        type: 'Hufflepuff',
        content: 'Tomorrowland, Belgium',
      },
    ],
  },
  {
    id: 14,
    question: 'What do you like the most about Hogwarts?',
    image: 'image14.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'The 1001 things to do in the castle',
      },
      {
        type: 'Slytherin',
        content: 'The power print in its bricks',
      },
      {
        type: 'Ravenclaw',
        content: 'Its ancient mysteries',
      },
      {
        type: 'Hufflepuff',
        content: 'Its Great Hall for the gathering',
      },
    ],
  },

  {
    id: 15,
    question: 'Worst pet peeves in a person for you?',
    image: 'image15.png',
    answers: [
      {
        type: 'Gryffindor',
        content: 'Has no interest in anything',
      },
      {
        type: 'Slytherin',
        content: 'Lack of ambition',
      },
      {
        type: 'Ravenclaw',
        content: 'Bashing everything you like',
      },
      {
        type: 'Hufflepuff',
        content: 'Always grumpy',
      },
    ],
  },
]

export default quizQuestions
