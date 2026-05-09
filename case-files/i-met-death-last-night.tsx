// case-files/i-met-death-last-night.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'i-met-death-last-night',
  title: 'I MET DEATH LAST NIGHT',
  subtitle: 'A Dream Narrative. First Person. One Night. She Was Breathtaking.',
  classificationCode: 'MR-DN-001',
  department: 'Dept. of Nocturnal Incident Documentation',
  threatLevel: 'CRITICAL',
  tags: ['dream narrative', 'personal account', 'she had a scythe'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Mono:wght@400&display=swap');

  .lit * { box-sizing: border-box; margin: 0; padding: 0; }

  .lit {
    font-family: 'EB Garamond', serif;
    background: #0C0C0A;
    min-height: 100vh;
    color: #D8D0C0;
  }

  .mast {
    border-bottom: 1px solid #1e1e18;
    padding: 16px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .mast-name {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #3a3a2a;
  }

  .mast-meta {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    color: #2a2a1e;
    text-align: right;
    line-height: 1.8;
  }

  .title-block {
    padding: 64px 48px 48px;
    border-bottom: 1px solid #1a1a12;
    max-width: 720px;
    margin: 0 auto;
  }

  .genre-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #3a3a28;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .genre-tag::after {
    content: '';
    width: 28px;
    height: 1px;
    background: #2a2a1a;
    display: inline-block;
  }

  .story-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(42px, 9vw, 72px);
    font-weight: 300;
    font-style: italic;
    color: #e8dfc8;
    line-height: 1.05;
    letter-spacing: -0.5px;
    margin-bottom: 28px;
  }

  .title-rule {
    width: 32px;
    height: 1px;
    background: #3a3a28;
  }

  .prose {
    padding: 48px 48px 72px;
    max-width: 720px;
    margin: 0 auto;
  }

  .p {
    font-size: 18px;
    line-height: 1.9;
    color: #c8c0a8;
    margin-bottom: 28px;
    font-weight: 400;
  }

  .p.first::first-letter {
    font-family: 'Cormorant Garamond', serif;
    font-size: 72px;
    font-weight: 300;
    float: left;
    line-height: 0.78;
    margin-right: 8px;
    margin-top: 10px;
    color: #e8dfc8;
  }

  .break {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin: 36px 0;
    color: #2a2a1a;
    font-size: 9px;
    letter-spacing: 8px;
  }

  .p.dread {
    color: #b0a888;
  }

  .voice {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px;
    font-style: italic;
    color: #6a6040;
    font-weight: 300;
  }

  .p.reveal {
    color: #ddd4b8;
  }

  .p.ending {
    color: #8a8270;
    font-style: italic;
  }

  .p.ending em {
    font-style: normal;
    color: #a09880;
  }

  .foot {
    border-top: 1px solid #141410;
    padding: 14px 48px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .foot-text {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    color: #1e1e14;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    .title-block, .prose { padding-left: 24px; padding-right: 24px; }
    .mast, .foot { padding-left: 24px; padding-right: 24px; }
    .p { font-size: 17px; }
  }
`

export default function IMetDeathLastNight() {
  return (
    <>
      <style>{styles}</style>
      <div className="lit">

        <div className="mast">
          <div className="mast-name">The Meridian</div>
          <div className="mast-meta">Prose &nbsp;/&nbsp; Dream Narrative</div>
        </div>

        <div className="title-block">
          <div className="genre-tag">Personal account</div>
          <div className="story-title">I Met Death<br />Last Night</div>
          <div className="title-rule" />
        </div>

        <div className="prose">

          <p className="p first">
            As the sun set, life felt normal. Just another night. Or so I thought.
            The weather was warm, the temperature has been slowly climbing these past few days.
            There were many complaints about the temperature, but I know temperature this high
            only means the rains are closing in.
          </p>

          <p className="p">
            I could smell the rain before I went to bed. I stuck my head out the window.
            The sight above was one to behold. Line after line of soft white ridges. No star in sight.
            There was no moon either, save for the eerie silver glow behind a suspiciously luminous
            patch of white fluff. The patterns in the sky were quite something.
            The unnerving similarity to the farm back home.
            At that moment, a warm gust blew into my face, carrying with it tales of distant lands
            in the form of fine grains which it proceeded to rudely affix between my lips,
            sprinkle on my hair, and jab into other facial crevices.
          </p>

          <p className="p">
            I chuckled at the impertinence and closed the window. The AC was on full blast at 15°C,
            the difference between the temperature in my room and that outside felt to me like
            the difference between an electron and WiFi. I burst into laughter thinking of my little
            comparison. &ldquo;Who does that?&rdquo; I said to no one in particular.
            &ldquo;What on earth do electrons have in common with WiFi?&rdquo; &ldquo;I guess that&apos;s the joke,&rdquo;
            I said as I took off my shirt and crawled under the sheets.
            The entire room felt chilly, but the contrast between my warm sheets and the cold room
            was so stark I couldn&apos;t help drifting off. There was always something about these contrasts
            that got to me. The thought of being secure on a warm sunny island as black raging storms
            from hades crashed around lulled me deeper. Lemon. Lemon. Lemon.
            Why am I thinking lemon? Oh. I have a lemon scented air freshener.
            It was intentional, the scent calmed me.
          </p>

          <p className="p dread">
            As my eyes closed, the storms took form. Pitch black save for threads of pure white
            that forked like jagged spears across the clouds of despair. Before each white streak,
            a loud rending crack split the heavens and shook the earth. In the wake of the crack,
            the universe went silent as if in respect of the authority behind the sound.
            I was sure at that point that there was nothing more terrifying than nature.
          </p>

          <div className="break">✦ &nbsp; ✦ &nbsp; ✦</div>

          <p className="p">
            On my little beach, the smell of freshly cut grass mingled with honey, lemon, and coconut.
            The sun shone warmly, the rays not too bright and not particularly dim.
            It was refreshingly calm. So warm and comforting I felt like sleeping.
            Curling up in a ball right on my hammock and going to sleep.
            Maybe that isn&apos;t such a bad idea. I headed up to the hammock,
            the fine grains of sand beneath my feet squished between my toes,
            each grain comfortably warm like heated floors. As I walked further,
            I pressed each foot into the ground feeling the grit of the sand.
            A cool breeze blew in from the west carrying a strong scent of honey.
            &ldquo;So that&apos;s where the bees are,&rdquo; I thought to myself. I should check it out sometime.
            I reached my hammock, climbed in. Took a sip of my lemonade,
            got greedy and gulped down the entire thing.
            I fished out the ice cubes and crunched on them as I tossed the coconut shell
            I used as a cup into the bushes. I closed my eyes and went to sleep.
          </p>

          <div className="break">✦ &nbsp; ✦ &nbsp; ✦</div>

          <p className="p dread">
            Time moved differently. An odd nagging sensation yanked me.
            I opened my eyes. The beach was still there.
            But there was no sun, no warmth, no hope.
            I felt dread resonate from my bones, it seeped out of me in waves.
            Every cell in my body felt dread. So much dread I felt weak,
            completely drained of the will to move.
          </p>

          <p className="p dread">
            Above me stood a hooded figure. A tall figure in pitch black garb.
            So black it sucked what little light was left.
            Looking up at this figure, I realized this was the source of the chill.
            At that instance, an odd image came to mind.
            It seemed this being drew in light and warmth then emitted cold and darkness.
            I can&apos;t explain why but I felt like it was recycling hopes and dreams,
            turning them into nightmares and despair.
            Why? Why would anyone steal hope?
          </p>

          <p className="p dread">
            In its right hand, its skeletal bony hand, it held a scythe.
            A large scythe with a wooden handle. The blade of which screamed unnatural.
            Shiny, polished silver, with astonishingly rusted patches.
            It seemed impossible for something so sharp and new to harbor
            such level of rust and decay.
          </p>

          <p className="p dread">
            The skies turned black, the sun ran for dear life.
            The moon rose in its stead, a sinister smirk on its face
            as it awaited its casual midnight entertainment.
            The silver light from the moon glinted off the blade.
            The polished portion shone silver white, the rusted portion shone red.
            &ldquo;How exactly does rust glint?&rdquo; the thought flashed across my mind
            as I felt a lump form slowly in my throat.
          </p>

          <p className="p dread">
            The figure under the cowl came closer. No footprint in the sand, no footsteps.
            It hovered as though gravity were a mere suggestion, not a law of nature.
            At that point I knew it. Death has come for me.
            Of course it&apos;s death. Who else could so brazenly disobey nature but itself?
          </p>

          <p className="p dread">
            The very air I breathed became heavy. I felt trapped.
            As the creature got closer, every breath got strained.
            I rolled out of the hammock, fell into the sand gasping for air.
            So weak was I that I could barely lift my head off the ground.
            I inhaled my fair share of dirt. The feeling of intense discomfort
            as clumps of dirt lodged in my nostrils was immediately suppressed
            by my fight or flight instincts.
            At that exact moment, it felt purely like flight or flight.
          </p>

          <div className="break">✦ &nbsp; ✦ &nbsp; ✦</div>

          <p className="p">
            Finally, the figure was above me.
            &ldquo;Is this how I go?&rdquo; The question flashed across my mind.
            &ldquo;Did we fight to gain power, did we fight for autonomy
            only to be taken by a malnourished concept?&rdquo;
            I haven&apos;t referred to myself as we in a while.
            Something was waking up.
          </p>

          <p className="p">
            The fear poured out from my bones, filling me up to my peak and spilling over in waves.
            Fear so strong it felt tangible.
          </p>

          <p className="p">
            The dread felt unreal. But I refused to be directed by misplaced fears.
            I smiled at the terror. I laughed to myself. What the hell, I thought,
            if I&apos;m going anyway, I better put up a fight.
            &ldquo;I?&rdquo; I chuckled. &ldquo;We better put up a fight.&rdquo;
            Laughter echoed in my head as voices rose from the depths of slumber.
            <span className="voice"> &ldquo;Your sanity is slipping, boy,&rdquo; </span>
            a senile voice piqued from within the recess of my mind.
          </p>

          <p className="p">
            Finally above me, the figure looked down at me.
            I launched myself up with all the strength I could muster,
            grabbed it by both its bony wrists, twisted until it dropped the scythe.
            Everything blurred.
            <span className="voice"> &ldquo;We are intrigued.&rdquo; &ldquo;We are awake.&rdquo; &ldquo;Trust him to pull a cosmic.&rdquo; </span>
            A blood-curdling screech brought me back.
            Thud. I felt myself fall on the figure.
            Up close I was at least a foot taller than it was.
            It fell to the ground and I fell with it. Gravity seemed to have woken up.
          </p>

          <p className="p">
            I wrestled both arms above its head, used my left hand to pin them
            as I attempted taking off the hood to see the face for the first time.
            If I&apos;m going to be taken, I should at least see the face of death before I go.
            I knew this was pure luck and the being could overpower me in an instant.
            With no second to lose, I pulled the hood over its head.
          </p>

          <div className="break">✦ &nbsp; ✦ &nbsp; ✦</div>

          <p className="p reveal">
            My breath caught in my throat. This time not from fear
            but from unadulterated admiration. Beneath me lay a beauty personified.
            Skin so supple it made babies jealous,
            finely carved eyebrows nestled above shimmering eyelids,
            flowing gold hair that cascaded down her head
            forming an impossibly enchanting pool.
            She was breathtaking.
            Her lips were deep purple, with a slight luminous quality that screamed cosmic.
            Her eyes. Dear God, her eyes.
            I felt as though I had seen God.
          </p>

          <p className="p reveal">
            Those shimmering eyes changed color perpetually, they danced between
            every color of the rainbow and then some.
            Seamlessly blending and shifting.
            She smiled at me and my heart stopped.
            I grabbed my chest, not in pain but in euphoria so absolute
            nothing made sense anymore.
            At that moment I realized I was staring at life.
          </p>

          <div className="break">✦ &nbsp; ✦ &nbsp; ✦</div>

          <p className="p ending">
            I woke with a jolt. The air conditioning was still on full blast,
            the room was still chilly. Beneath me, my bed was drenched in sweat.
            I placed my hand over the left side of my chest.
            My skin felt cold.
            I stood up and walked to the window.
            I felt different. Strangely disconnected.
            I felt like I was in a shell, watching actions without participation.
            A nagging feeling crept from the back of my mind.
            <em>&ldquo;I would never smile again.&rdquo;</em>
            I opened the window once more and gazed out at the pitch blackness.
            &ldquo;What are we all doing?&rdquo; I whispered.
            &ldquo;She&apos;s death.&rdquo;
          </p>

          <p className="p ending">
            I gazed upon the mother of all and she gazed back.
            I was seen, stripped of all pretense.
            Nothing mattered anymore,
            not even the fact that she is the darkness that creeps behind the light.
            The promise of eternal silence.
          </p>

        </div>

        <div className="foot">
          <div className="foot-text">Dream narrative &nbsp;◆&nbsp; First person</div>
          <div className="foot-text">The Meridian</div>
        </div>

      </div>
    </>
  )
}