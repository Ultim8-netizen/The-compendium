export type FreeTextQuestion = {
  type: 'freetext'
  key: string
  label: string
  placeholder: string
  observe: (answer: string) => string
}

export type ChoiceQuestion = {
  type: 'choice'
  key: string
  label: string
  options: Array<{ value: string; label: string; observation: string }>
}

export type Question = FreeTextQuestion | ChoiceQuestion

export const QUESTION_POOL: Question[] = [

  // FREE TEXT

  {
    type: 'freetext',
    key: 'dream_name',
    label: 'Your full legal name, including any names you go by in dreams',
    placeholder: 'All of them',
    observe: a =>
      `The name "${a}" was submitted without hesitation. This is either complete self-knowledge or evidence that the subject has rehearsed this specific scenario. Neither possibility is comfortable.`,
  },
  {
    type: 'freetext',
    key: 'never_told',
    label: 'Something you have never told anyone, specifically because no one has ever asked',
    placeholder: 'This stays in the file',
    observe: a =>
      `The subject disclosed that "${a}" exists as knowledge they have been holding, unasked, possibly for years. It is noted that the moment someone asked, they answered immediately. They were ready.`,
  },
  {
    type: 'freetext',
    key: 'mispronounced',
    label: 'A word you mispronounced for years before someone corrected you (or before you looked it up alone at night)',
    placeholder: 'The word',
    observe: a =>
      `For an unspecified period of time, the subject was saying "${a}" in a way that was incorrect. The exact number of people who heard this and said nothing has not been determined. The file assumes it is more than two.`,
  },
  {
    type: 'freetext',
    key: 'receipt_face',
    label: 'Describe, in words, the exact face you make when reading a long receipt',
    placeholder: 'Recreate it',
    observe: a =>
      `The subject described their receipt-reading expression as "${a}." This is a face they make repeatedly in public. No one has mentioned it to them. Everyone has seen it.`,
  },
  {
    type: 'freetext',
    key: 'object_stays',
    label: 'Something you own that has long outlived its welcome but which you cannot remove',
    placeholder: 'It knows what it did',
    observe: a =>
      `"${a}" remains in the subject's possession despite having no active role. It has survived multiple clear-out attempts. The subject cannot explain this. The object has no such difficulty.`,
  },
  {
    type: 'freetext',
    key: 'private_rule',
    label: 'A rule you follow that you invented yourself and have never told anyone about',
    placeholder: 'The system',
    observe: a =>
      `The subject operates under a personal policy of "${a}" which they authored, enforce unilaterally, and have disclosed here for the first time. It is unclear what the penalty for violation would be. The subject would know.`,
  },
  {
    type: 'freetext',
    key: 'two_am',
    label: 'The thought you had most recently at 2am, approximated',
    placeholder: 'It is fine',
    observe: a =>
      `At a recent 2am, the subject's mind produced "${a}." The body was horizontal. The brain had other plans. This is documented without judgment and with moderate concern.`,
  },
  {
    type: 'freetext',
    key: 'strong_opinion_nothing',
    label: 'Something you have strong opinions about that does not matter at all',
    placeholder: 'State your position',
    observe: a =>
      `The subject holds a firm, developed position on "${a}." The stakes are objectively zero. The conviction is not. This energy has been measured and filed under: misallocated but impressive.`,
  },
  {
    type: 'freetext',
    key: 'imagined_skill',
    label: 'A skill that exists primarily in your imagination of yourself',
    placeholder: 'You are very good at this in your head',
    observe: a =>
      `The subject believes, at some level, that they are capable of "${a}." This belief has not been tested under real conditions. The subject is not in a hurry to test it. The belief is comfortable where it is.`,
  },
  {
    type: 'freetext',
    key: 'small_pride',
    label: 'The last time you felt unreasonably proud of something small',
    placeholder: 'You earned it',
    observe: a =>
      `The subject experienced a disproportionate sense of achievement regarding "${a}." The scale of pride versus scale of event has been assessed. The discrepancy is noted. The pride is not invalidated by this.`,
  },
  {
    type: 'freetext',
    key: 'goat_sound',
    label: 'The exact sound you would make if a goat appeared behind you without warning',
    placeholder: 'Spell it out phonetically',
    observe: a =>
      `When asked about unexpected goat contact, the subject produced "${a}" without pausing. This was immediate. It did not come from thought. Whatever "${a}" is, it lives closer to the surface than most things in this file.`,
  },
  {
    type: 'freetext',
    key: 'spirit_vegetable',
    label: 'Your spirit vegetable. You already know which one.',
    placeholder: 'You knew before you finished reading the question',
    observe: a =>
      `The subject answered "${a}" with the speed of prior knowledge. They did not arrive at this through reasoning. They already knew. The vegetable has been logged. The committee will not comment further on this specific entry.`,
  },

  // CHOICE

  {
    type: 'choice',
    key: 'unopened_mail',
    label: 'Your relationship with unopened mail',
    options: [
      {
        value: 'immediate',
        label: 'I open it the moment it arrives',
        observation:
          'The subject opens correspondence immediately upon receipt. This is statistically unusual behavior. A secondary behavioral assessment has been scheduled.',
      },
      {
        value: 'look_leave',
        label: 'I see it, acknowledge it, and leave it there',
        observation:
          'The subject and their mail have reached a visual agreement. Contact has been established. Nothing further has been agreed to.',
      },
      {
        value: 'relocate',
        label: 'I move it to a different surface without opening it',
        observation:
          'The subject does not address mail. They manage its geography. The correspondence is currently in its third location. It has not been opened.',
      },
      {
        value: 'detente',
        label: 'We have reached a mutual understanding. Neither of us looks directly at the other.',
        observation:
          'The subject and their mail have achieved a fragile peace. It has held for an undisclosed number of weeks. Both parties are waiting for the other to act first.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'song_ends',
    label: 'A song you were enjoying has ended. What happens.',
    options: [
      {
        value: 'replay',
        label: 'Immediate replay',
        observation:
          'The subject replays without first allowing the experience to settle. They are reaching for something they just had. The song has noticed.',
      },
      {
        value: 'silence',
        label: 'I sit in the silence for a moment',
        observation:
          'The subject observed a voluntary silence following the song. Duration unknown. This is either emotional depth or the absence of a plan. Possibly both.',
      },
      {
        value: 'leave_early',
        label: 'I move to the next thing before the song actually finishes',
        observation:
          'The subject departs before the final notes. They are already gone. The song ended alone. This is a pattern that extends, the file suspects, beyond music.',
      },
      {
        value: 'ten_seconds',
        label: 'I go back 12 seconds and listen to that one specific part again',
        observation:
          'The subject identified a 12 second window as the entire point of the song. The rest is context. They know which part. They will not tell anyone which part.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'mixed_plate',
    label: 'Foods are touching on your plate',
    options: [
      {
        value: 'fine',
        label: 'Fine with it. Flavors mixing is good.',
        observation:
          'The subject experiences a plate as a unified system. Boundaries between food items are treated as suggestions. The file finds this either very open-minded or structurally unsettling.',
      },
      {
        value: 'separate',
        label: 'I separate everything before starting',
        observation:
          'The subject reorganizes the plate before the first bite. Each item has a designated zone. The plate becomes a territorial map. Eating begins only after order is established.',
      },
      {
        value: 'around',
        label: 'I eat around the contact zone and leave that part',
        observation:
          'The subject has identified a contaminated perimeter and written it off. The contact zone sits untouched at the end of the meal. It knows what it did.',
      },
      {
        value: 'depends',
        label: 'It depends entirely on which specific foods are touching',
        observation:
          'The subject maintains an internal and deeply specific food contact policy that they have never written down but could recite in full from memory at any hour of the night.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'arriving_home',
    label: 'First three minutes after arriving home',
    options: [
      {
        value: 'shoes',
        label: 'Shoes off before anything else. Non-negotiable.',
        observation:
          'The subject performs a ritualized threshold ceremony upon reentry. The shoes represent everything that happened outside. They do not cross the line. Mostly.',
      },
      {
        value: 'phone',
        label: 'Check my phone while still standing at the door',
        observation:
          'The subject cannot complete the act of arriving before auditing what they missed while in transit. They are standing at the door. They are not yet home. They are in the gap between places.',
      },
      {
        value: 'kitchen',
        label: 'Go directly to the kitchen without stopping',
        observation:
          'The subject treats homecoming as a resupply operation. Emotional reintegration is scheduled for after inventory. The kitchen is the first room that matters.',
      },
      {
        value: 'horizontal',
        label: 'Lie down, possibly still in outdoor clothes',
        observation:
          'The subject undergoes immediate horizontal decompression upon return. The coat may or may not be removed. The ceiling is examined. The day is processed from this position.',
      },
      {
        value: 'wander',
        label: 'I drift through the space without a specific route or intention',
        observation:
          'The subject enters their own home and moves through it without a destination. They are mapping a space they already know. They have lived here for years. They still wander.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'low_battery',
    label: 'Your phone is at 5% battery',
    options: [
      {
        value: 'calm',
        label: "Calm. It's fine. I'll find a charger.",
        observation:
          "The subject reported calm at 5% battery. This response was also submitted by several previous visitors. None of them had chargers. The file does not know if the subject has a charger.",
      },
      {
        value: 'panic',
        label: 'Specific, targeted, disproportionate panic',
        observation:
          'The subject experiences a precise anxiety event at the 5% threshold. The phone is functional. It will continue to function. This information does not reach the subject at the relevant moment.',
      },
      {
        value: 'conservation',
        label: 'I close everything and stop responding to people',
        observation:
          'At critical battery levels, the subject enters a social conservation protocol. Communication is suspended. The subject has ranked battery life above active relationships and would make the same decision again.',
      },
      {
        value: 'forget',
        label: "I'll charge it later and then forget, and it dies",
        observation:
          'The subject knows the outcome. The phone will die. This has happened before. The subject will be surprised. This cycle has been documented. There is no indication it will change.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'unread_text',
    label: 'There is a text you have read and not replied to. Current status.',
    options: [
      {
        value: 'instant',
        label: 'I always reply immediately',
        observation:
          'The subject maintains a zero-backlog communication policy. This is either genuine warmth or a specific anxiety about the notification sitting there, visible, judging. The file does not determine which.',
      },
      {
        value: 'hours',
        label: 'A few hours. It is fine.',
        observation:
          'The subject allows a processing window before responding. The window has not been communicated to the sender. The sender is in the window without knowing it is a window.',
      },
      {
        value: 'days',
        label: 'Several days. It is still there.',
        observation:
          'The subject is aware of the text. The text is aware of the subject. Both are aware of each other. Nothing has happened for four days. The situation has reached a specific kind of stillness.',
      },
      {
        value: 'just_remembered',
        label: 'I forgot. I just remembered it while reading this question.',
        observation:
          'This intake form has done more than the original notification could. The subject now remembers a text they have not replied to. A memory has been activated. We accept no responsibility for what happens next.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'mirror',
    label: 'You pass a mirror you were not expecting',
    options: [
      {
        value: 'look_away',
        label: 'Immediate glance away',
        observation:
          'The subject declines eye contact with their own reflection. The nature of this arrangement, specifically who initiated it, remains unclear. An inquiry has been opened.',
      },
      {
        value: 'audit',
        label: 'Quick assessment, 1.5 seconds, then continue',
        observation:
          'The subject conducts a rapid self-audit upon unexpected mirror contact. Duration: approximately 1.5 seconds. Conclusions are drawn regardless. The subject does not share these conclusions.',
      },
      {
        value: 'gaze',
        label: 'I hold eye contact with myself briefly',
        observation:
          'The subject and their reflection entered into a mutual, sustained observation. One of them blinked first. The file does not specify which one. Both parties have moved on.',
      },
      {
        value: 'face',
        label: 'I make a face, register that I made a face, then leave',
        observation:
          'The subject delivers a brief private performance to an audience of one, who is also the performer. The face is made. The face is seen. Both parties continue with their days.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'instructions',
    label: 'Your relationship with instruction manuals',
    options: [
      {
        value: 'read_first',
        label: 'I read them fully before starting',
        observation:
          'The subject reads documentation prior to action. This is rare enough to note. The manual, upon review, appears to have been read. The manual is appreciative.',
      },
      {
        value: 'fail_then_manual',
        label: 'I ignore them until something goes wrong',
        observation:
          'The subject proceeds on instinct and consults the manual only after the first failure. The manual was ready the whole time. The manual has always been ready.',
      },
      {
        value: 'lost_it',
        label: 'I lose them immediately and refuse to search online',
        observation:
          'The subject and the manual separated at an early stage. Both have adjusted. The subject slightly less so. There is something in their home that is assembled incorrectly. The subject knows which thing it is.',
      },
      {
        value: 'accelerates_confusion',
        label: 'Instructions make things worse for me specifically',
        observation:
          'The subject exists in a documented category for whom guidance accelerates disorientation. The manual is contraindicated. An IKEA-related incident is inferred but not confirmed. It is not asked about directly.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'long_queue',
    label: 'You arrive somewhere and discover an unexpected, very long queue',
    options: [
      {
        value: 'join_accept',
        label: 'I join it and accept my situation',
        observation:
          'The subject joins queues with the composure of someone who has made peace with time. They are in the queue. The queue is long. These are simply facts now.',
      },
      {
        value: 'assess_leave',
        label: 'I assess it, calculate how long, then leave if it exceeds my threshold',
        observation:
          'The subject operates with an internal queue tolerance metric that they have never had to articulate because it fires automatically. The threshold exists. It has been crossed before. They left.',
      },
      {
        value: 'join_annoyed',
        label: 'I join it but the entire wait is internally loud',
        observation:
          'The subject joins the queue in body while departing it mentally. The internal commentary during the wait is extensive, specific, and shared with no one. The person in front has no idea.',
      },
      {
        value: 'photograph',
        label: 'I take a photo of it to send to someone as evidence',
        observation:
          'The subject documents the queue immediately. They require a witness to the injustice. Someone in their contacts is about to receive an image of a line of strangers. The recipient will not know what to say.',
      },
    ],
  },
  {
    type: 'choice',
    key: 'subtitles',
    label: 'A film has subtitles available in a language you speak',
    options: [
      {
        value: 'always_on',
        label: 'Subtitles on always, regardless of language',
        observation:
          'The subject does not watch media without subtitles. This is a fixed condition. The audio exists. The subject is also reading. Both channels are running simultaneously. This is normal to them.',
      },
      {
        value: 'only_foreign',
        label: 'Only for foreign language content. I can hear fine.',
        observation:
          'The subject enables subtitles contextually, specifically for linguistic gaps. They can hear. They have mentioned this. The hearing is not the point and yet it was mentioned.',
      },
      {
        value: 'distracted_by',
        label: 'I turn them on and then spend the whole film reading instead of watching',
        observation:
          'The subject activates subtitles and is then overtaken by them. The film exists as a text to be read. The visuals are secondary. The director did not intend this. The subject is not thinking about the director.',
      },
      {
        value: 'never',
        label: 'I find subtitles distracting and disable them',
        observation:
          'The subject removes additional text from their visual field and engages the audio alone. Several lines of dialogue have been missed in this subject\'s lifetime. The subject has filled the gaps with approximations. Some of them were wrong.',
      },
    ],
  },
]

export function getRandomQuestions(n = 7): Question[] {
  const shuffled = [...QUESTION_POOL].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}