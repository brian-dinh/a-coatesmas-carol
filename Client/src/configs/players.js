module.exports = {
  megan: {
    name: 'Megan',
    instructions: [
      'You were the only one who was at the scene of the crime...',
      'Some might believe that you committed the very offense you reported to throw accusers off your trail.',
      'You started working at 6:00am.',
      'You  made your last Nespresso at 8:00pm.',
    ],
    notes: [
      'I started working at 6:00am.',
      "Can't remember when the crime took place. Too sleepy.",
      'The Nespresso I made last night wasn"t even good',
    ],
    motive: 'The only person to hear the crime. Kind of suspicious, right?',
    secretMission: 'You want everyone to vote for Sam.',
    knows: 'gibrhann',
  },
  sam: {
    name: 'Sam',
    instructions: [
      'You were testing content into the wee hours of the night. Wonder if anyone saw you. You left at 10:00pm - pretty early!',
    ],
    notes: [
      'Megan was the only person to hear the crime. Kind of suspicious, right?',
      'Brian called in "sick" today.',
    ],
    motive:
      'Spoke to Sam last night he said "I was testing content in the show room. White screen issues. Mental."',
    secretMission: 'You want everyone to vote for Megan.',
    knows: 'dan',
  },
  dillon: {
    name: 'Dillon',
    instructions: [
      'You are really hung over this morning.',
      "Can't remember too much from lst night.",
    ],
    notes: [
      'My head is killing me. Too many 40oz.',
      'I could go for an espresso.',
      'Why do i always have coffee stains on my shirt?',
    ],
    motive:
      'Dillon had plans last night... Maybe to steal a Nespesso? What time did his plans end?',
    secretMission:
      'You will get 3 bonus points for every person you convince to vote for Brian. (Not including yourself and it definitely was not him..)',
    knows: 'jeison',
  },
  matthew: {
    name: 'Matthew',
    instructions: [
      'You would never steal anything. But I wonder if anyone knows how much you like coffee.',
    ],
    schedule: [''],
    notes: [
      'I know for a fact that Sam is known to throw office furniture out of frustration.',
      'i think Sam was in the office last night too.',
    ],
    motive:
      'Coffee snob - has like 5 ways of making coffee at his house. Why not one more?',
    secretMission: '',
    knows: 'megan',
  },
  madeline: {
    name: 'Madeline',
    instructions: [''],
    schedule: [''],
    notes: ['You notice that Dillon has a coffee stains on his shirt...'],
    motive: "Doesn't seem like the stealing type. But who knows?",
    secretMission:
      'It definitely was not you who commited the crime. But can you convince everyone to vote for you?',
    knows: 'dillon',
  },
  dan: {
    name: 'Dan',
    instructions: [''],
    schedule: [''],
    notes: [
      'We need more media players.',
      'You, Two people from DP and two people from Software stayed really late.',
    ],
    motive:
      'Even the strongest of will need an endless supply of caffeine to be Director of Software Delivery.',
    secretMission:
      'As the leader of the crew, you want the team to succeed. You need to figure out if there are any moles on the team trying to sway the votes. If every person, except for the perp votes correctly, you alone win the game.',
    knows: 'madeline',
  },
  yamna: {
    name: 'Yamna',
    instructions: [''],
    schedule: [''],
    notes: [
      'There is a major deployment scheduled for today, Friday the 25th.',
      'Both content and software were working late to get everything ready last night.',
    ],
    motive: 'I heard her describe the Nespresso® as "her baby"...',
    secretMission: 'You want everyone to vote for Gibrhann.',
    knows: 'sam',
  },
  gibrhann: {
    name: 'Gibrhann',
    instructions: [''],
    schedule: ['Probably watching a movie.'],
    notes: [
      'You noticed that there are no nespresso packs either. Also taken?',
    ],
    motive: "This guy doesn't seem like the stealing type. But who knows?",
    secretMission:
      'You and Jeison have eachothers backs. Protect him with your life.',
    knows: 'yamna',
  },
  jeison: {
    name: 'Jeison',
    instructions: [''],
    schedule: [
      'Needed to configure media players but lack of devices, meant I had to wait around for a while.',
    ],
    notes: ['The Crime took place on Thursday Night.'],
    motive: 'He was waiting around the office for a while. Looked annoyed.',
    secretMission:
      'You and Gibrhann have eachothers backs. Protect him with your life.',
    knows: 'matthew',
  },
};
