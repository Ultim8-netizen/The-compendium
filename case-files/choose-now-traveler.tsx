// case-files/choose-now-traveler.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'choose-now-traveler',
  title: 'Choose Now, Traveler',
  subtitle: 'A philosophical verse in two voices. Death and Life. One question.',
  classificationCode: 'MR-PV-001',
  department: 'Dept. of Nocturnal Incident Documentation',
  threatLevel: 'TERMINAL',
  tags: ['philosophical verse', 'two voices', 'choose carefully'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=DM+Mono:wght@400;500&display=swap');

  .poem * { box-sizing: border-box; margin: 0; padding: 0; }

  .poem {
    font-family: 'Cormorant Garamond', serif;
    background: #0C0C0A;
    min-height: 100vh;
  }

  .mast {
    padding: 14px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #181812;
    flex-wrap: wrap;
    gap: 8px;
  }

  .mast-name {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #2a2a1a;
  }

  .mast-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    color: #1e1e12;
    text-transform: uppercase;
  }

  .title-block {
    padding: 56px 48px 40px;
    max-width: 680px;
    margin: 0 auto;
    border-bottom: 1px solid #181812;
  }

  .poem-genre {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #3a3020;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .poem-genre::after {
    content: '';
    width: 24px;
    height: 1px;
    background: #2a2010;
    display: inline-block;
  }

  .poem-title {
    font-size: clamp(40px, 8vw, 66px);
    font-weight: 300;
    font-style: italic;
    color: #D8D0B8;
    line-height: 1.05;
    letter-spacing: -0.5px;
    margin-bottom: 6px;
  }

  .poem-sub {
    font-size: 15px;
    font-style: italic;
    font-weight: 300;
    color: #3a3020;
    margin-top: 18px;
  }

  .title-rule { width: 24px; height: 1px; background: #2a2010; margin-top: 20px; }

  .body { max-width: 680px; margin: 0 auto; }

  .death-block {
    padding: 48px 48px 40px;
    background: #0C0C0A;
    border-bottom: 1px solid #141410;
  }

  .voice-tag {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .voice-tag.death-tag { color: #2a2a1e; }
  .voice-tag.life-tag  { color: #8a7030; }
  .voice-tag.narr-tag  { color: #7a5a30; }

  .voice-tag::after {
    content: '';
    flex: 1;
    max-width: 32px;
    height: 1px;
    display: inline-block;
  }

  .voice-tag.death-tag::after { background: #2a2a1e; }
  .voice-tag.life-tag::after  { background: #8a7030; }
  .voice-tag.narr-tag::after  { background: #7a5a30; }

  .death-lines {
    font-size: 19px;
    line-height: 2.0;
    color: #6a6050;
    font-weight: 400;
    font-style: italic;
  }

  .death-lines .negation { color: #3a3828; }

  .death-reveal {
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid #1a1a12;
  }

  .death-reveal p {
    font-size: 22px;
    line-height: 1.85;
    color: #A09880;
    font-style: italic;
    font-weight: 300;
  }

  .death-reveal strong {
    font-style: normal;
    font-weight: 500;
    color: #C8C0A8;
  }

  .life-block {
    padding: 48px 48px 40px;
    background: #F5EDD8;
    border-bottom: 1px solid #D4C090;
  }

  .life-preamble {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    color: #9a8040;
    font-style: italic;
    margin-bottom: 20px;
  }

  .life-lines {
    font-size: 19px;
    line-height: 2.0;
    color: #2a1808;
    font-style: italic;
    font-weight: 400;
  }

  .life-lines .glow {
    color: #8a5820;
    font-weight: 500;
  }

  .life-reveal {
    margin-top: 24px;
    font-size: 20px;
    line-height: 1.85;
    font-style: italic;
    color: #3a2008;
    font-weight: 300;
    padding-top: 20px;
    border-top: 1px solid rgba(0,0,0,0.08);
  }

  .narrator-block {
    padding: 48px 48px 40px;
    background: #F5EDD8;
    border-bottom: 1px solid #D4C090;
  }

  .narr-text {
    font-size: 18px;
    line-height: 1.95;
    color: #2a1808;
    margin-bottom: 24px;
    font-weight: 400;
  }

  .narr-text em { font-style: italic; color: #7a4020; }
  .narr-text .cruel { color: #1a0a04; font-weight: 500; }
  .narr-text .horror { font-style: italic; color: #5a1808; }

  .narr-brutal {
    font-size: 19px;
    line-height: 2.0;
    color: #1a0a04;
    font-style: italic;
    margin: 8px 0 24px;
    padding-left: 20px;
    border-left: 2px solid #C09050;
  }

  .death-return {
    padding: 48px 48px 40px;
    background: #0C0C0A;
    border-bottom: 1px solid #141410;
  }

  .dr-text {
    font-size: 19px;
    line-height: 2.0;
    font-style: italic;
    color: #7a7260;
    font-weight: 300;
  }

  .dr-text strong {
    font-style: normal;
    color: #A09878;
    font-weight: 500;
  }

  .challenge {
    padding: 48px 48px 64px;
    background: #0C0C0A;
    text-align: center;
  }

  .challenge-question {
    font-size: clamp(18px, 4vw, 28px);
    font-weight: 300;
    font-style: italic;
    color: #7a7260;
    line-height: 1.7;
    margin-bottom: 32px;
  }

  .challenge-question em {
    font-style: normal;
    color: #A09878;
  }

  .challenge-call {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #3a3828;
  }

  @media (max-width: 600px) {
    .mast, .title-block { padding-left: 24px; padding-right: 24px; }
    .death-block, .life-block, .narrator-block, .death-return, .challenge { padding-left: 24px; padding-right: 24px; }
    .death-lines, .life-lines, .dr-text, .narr-text, .narr-brutal { font-size: 17px; }
    .poem-title { font-size: clamp(36px, 10vw, 60px); }
  }
`

export default function ChooseNowTraveler() {
  return (
    <>
      <style>{styles}</style>
      <div className="poem">

        <div className="mast">
          <div className="mast-name">The Meridian</div>
          <div className="mast-tag">Philosophical Verse</div>
        </div>

        <div className="title-block">
          <div className="poem-genre">Verse in two voices</div>
          <div className="poem-title">Choose Now,<br />Traveler</div>
          <div className="title-rule" />
        </div>

        <div className="body">

          <div className="death-block">
            <div className="voice-tag death-tag">Death</div>
            <div className="death-lines">
              <span className="negation">I bring not light, fragrance, or beauty.</span><br />
              <span className="negation">I bring no glory, honor, or fame.</span><br />
              <span className="negation">I bring no fortune, wealth, or power.</span><br />
              <span className="negation">I bring not pain, judgement, or torment.</span><br />
            </div>
            <div className="death-reveal">
              <p>
                Who am I?<br /><br />
                I am truth. I am peace.<br />
                <strong>I am death.</strong><br />
                I am inevitable.
              </p>
            </div>
          </div>

          <div className="life-block">
            <div className="voice-tag life-tag">Life</div>
            <div className="life-preamble">[ the chirpy bubbly voice of life piques ]</div>
            <div className="life-lines">
              Listen not to death&rsquo;s bleak tune.<br />
              Turn your eyes to <span className="glow">my lovely hue,</span><br />
              my pleasant smile, my gentle gaze.<br /><br />
              Can something this pure,<br />
              this pleasing, this good,<br />
              ever do wrong?<br />
              Ever hold grudge?<br />
              Ever cause pain?<br />
            </div>
            <div className="life-reveal">
              I am life.<br />
              I give. I love. I hold. I smile.<br /><br />
              As the soft rays of light drop upon your feeble cold skin, think of me.<br /><br />
              The progenitor of hope.<br />
              The whisper of potential.<br />
              The promise of a tomorrow.
            </div>
          </div>

          <div className="narrator-block">
            <div className="voice-tag narr-tag">And so through time these voices carry. A debate with no end in sight.</div>
            <p className="narr-text">
              The curse of life presents you with gifts.
              The gift of light, sound and feel, the gift of touch, warmth and care.
              The gift of affection, beauty and pleasure.
            </p>
            <div className="narr-brutal">
              &ldquo;The gift of life.&rdquo; Such an insidious, vile phrase.
            </div>
            <p className="narr-text">
              You claim life is a gift, wave flags that scream peace and love.
              You cherish connections and value bonds.
              But what are these if not <span className="horror">shackles. Subtle bonds. Nuanced grips.</span>
              Chains to make sure you move no more,
              blindfolds to make sure you dream no more.
            </p>
            <p className="narr-text">
              Plunged into this vile charade, each being degraded and forced to march,
              shackles and bonds thrust upon all, stakes piercing throats.
              <span className="horror"> Life gouges out eyes with a gentle loving smile,
              the sweet scent of roses trailing in her wake.</span>
            </p>
            <p className="narr-text">
              Everything living marches on roads of red coal and rusting spikes.
              With each step a pact is made. A pact with pain, horror, and despair.
              Your reasoning, exchanged for the journey.
              Logic bled for promises.
              The promise of beauty, of freedom, of joy, of pleasure.
            </p>
            <p className="narr-text">
              <em>The promise is real,</em> you all claim.
              There&rsquo;s proof in the sight ahead.
              The sight of paradise, a land of light and beauty.
              All can see but none can touch.
              The promise of beauty keeps you marching.
              Through the pain, through the torment, through it all.
            </p>
            <p className="narr-text">
              A petal falls, grazing your sore bleeding shoulder.
              You grab on. Inhale deeply.
              Scented air filling your scarred, bruised lungs.
              Each breath labored.
              <span className="cruel"> &ldquo;Worth it,&rdquo;</span> you whisper,
              taking the fragrance and texture as achievement, as fulfillment.
              Life sees you. Smiles.
              <span className="horror"> And rips through your nostrils.</span>
              You scream in pain but smile, remembering the fragrance.
              <span className="cruel"> &ldquo;It was worth it,&rdquo;</span> she whispers.
              <span className="cruel"> &ldquo;It was worth it,&rdquo;</span> you echo,
              slowly choking as blood fills your nostrils.
            </p>
          </div>

          <div className="death-return">
            <div className="voice-tag death-tag">Death, from afar</div>
            <div className="dr-text">
              The gentle silent wisp.<br />
              <strong>Promises nothing. But grants peace.</strong><br /><br />
              Who is your true friend?<br /><br />
              The silent calm of death, without a promise.<br />
              Or life, with beauty masking pain.
            </div>
          </div>

          <div className="challenge">
            <div className="challenge-question">
              <em>Choose now,</em> traveler.
            </div>
            <div className="challenge-call">&mdash; ✦ &mdash;</div>
          </div>

        </div>

      </div>
    </>
  )
}