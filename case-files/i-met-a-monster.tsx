// case-files/i-met-a-monster.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'i-met-a-monster',
  title: 'I Met a Monster',
  subtitle: 'A first person account. She stretched out her hands. He bit her throat.',
  classificationCode: 'MR-HF-001',
  department: 'Dept. of Nocturnal Incident Documentation',
  threatLevel: 'CRITICAL',
  tags: ['flash fiction', 'horror', 'first person account'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Mono:wght@400;500&display=swap');

  .horror * { box-sizing: border-box; margin: 0; padding: 0; }

  .horror {
    font-family: 'Cormorant Garamond', serif;
    background: #080806;
    min-height: 100vh;
    color: #C0B898;
  }

  .mast {
    padding: 14px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #141410;
    flex-wrap: wrap;
    gap: 8px;
  }

  .mast-name {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #222218;
  }

  .mast-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    color: #1a1a12;
    text-transform: uppercase;
  }

  .title-block {
    padding: 56px 48px 44px;
    border-bottom: 1px solid #141410;
    max-width: 680px;
    margin: 0 auto;
  }

  .genre-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #2e2a1a;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .genre-tag::after {
    content: '';
    width: 24px;
    height: 1px;
    background: #2a2418;
  }

  .story-title {
    font-size: clamp(42px, 9vw, 70px);
    font-weight: 300;
    font-style: italic;
    color: #D8CEB0;
    line-height: 1.05;
    letter-spacing: -0.5px;
  }

  .title-rule { width: 24px; height: 1px; background: #2a2418; margin-top: 22px; }

  .prose {
    padding: 48px 48px 0;
    max-width: 680px;
    margin: 0 auto;
  }

  .p {
    font-size: 18px;
    line-height: 1.95;
    color: #A09878;
    margin-bottom: 26px;
    font-weight: 400;
  }

  .p.first::first-letter {
    font-size: 72px;
    font-weight: 500;
    float: left;
    line-height: 0.78;
    margin-right: 8px;
    margin-top: 10px;
    color: #D8CEB0;
  }

  .p.enchanted {
    color: #B0A888;
    font-style: italic;
  }

  .p.reveal { color: #888070; }

  .p.reveal .visceral {
    color: #C0A870;
    font-style: italic;
  }

  .p.turn { color: #C0B898; }
  .p.turn em { font-style: italic; color: #D8CEB0; }

  .break {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin: 32px 0;
    color: #1e1c12;
    font-size: 9px;
    letter-spacing: 10px;
  }

  .pivot {
    background: #0C0C08;
    margin: 8px -48px;
    padding: 36px 48px;
    border-top: 1px solid #181810;
    border-bottom: 1px solid #181810;
  }

  .pivot-tag {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #2a2418;
    margin-bottom: 18px;
  }

  .pivot-text {
    font-size: 19px;
    font-style: italic;
    font-weight: 300;
    line-height: 1.9;
    color: #8a8068;
  }

  .pivot-text strong {
    font-style: normal;
    font-weight: 500;
    color: #C0B090;
  }

  .monologue {
    padding: 40px 48px 64px;
    max-width: 680px;
    margin: 0 auto;
  }

  .mono-text {
    font-size: 19px;
    font-style: italic;
    font-weight: 300;
    line-height: 1.95;
    color: #9a9278;
    margin-bottom: 26px;
  }

  .mono-text strong {
    font-style: normal;
    font-weight: 500;
    color: #D8CEB0;
  }

  .last-line {
    font-size: 18px;
    line-height: 1.9;
    color: #6a6250;
    font-style: italic;
    margin-bottom: 0;
    padding-top: 28px;
    border-top: 1px solid #181810;
  }

  .last-line .scold {
    font-style: normal;
    color: #A09070;
  }

  @media (max-width: 600px) {
    .mast { padding-left: 24px; padding-right: 24px; }
    .title-block, .prose, .monologue { padding-left: 24px; padding-right: 24px; }
    .pivot { margin-left: -24px; margin-right: -24px; padding-left: 24px; padding-right: 24px; }
    .p, .pivot-text, .mono-text { font-size: 17px; }
  }
`

export default function IMetAMonster() {
  return (
    <>
      <style>{styles}</style>
      <div className="horror">

        <div className="mast">
          <div className="mast-name">The Meridian</div>
          <div className="mast-tag">Flash Fiction &nbsp;◆&nbsp; Horror</div>
        </div>

        <div className="title-block">
          <div className="genre-tag">First person account</div>
          <div className="story-title">I Met a Monster</div>
          <div className="title-rule" />
        </div>

        <div className="prose">

          <p className="p first enchanted">
            I looked out my window and saw an odd reflection.
            A beautiful sight. A young woman with skin so clear it sang perfection without blemish,
            iris with a faint tint of red. The darkness seemed to bend around her.
          </p>

          <p className="p enchanted">
            I was held in awe. Stood staring, enchanted by the spectre before me.
            Finally breaking out, I wandered to the window, my movements not mine.
            Each step orchestrated by the phantom beauty.
          </p>

          <p className="p enchanted">
            The night was dark, the moon hidden.
            I opened the window. A chill wafted in, creeping like a thief on tippy toes.
            She stretched out her hands and smiled. A smile that promised warmth on this cold night.
            A smile of volumes. A smile that melts bone, softens hearts.
          </p>

          <p className="p enchanted">
            I stepped into her hands, letting them surround me,
            holding me tightly like a friendly vice.
          </p>

          <p className="p enchanted">Then she turned.</p>

          <div className="break">✦ &nbsp; ✦ &nbsp; ✦</div>

          <p className="p reveal">
            Right before my eyes, horror unfolded.
            She shed her clear skin, revealing
            <span className="visceral"> slimy grey flesh, stretched unevenly over a bony crude frame.</span>
            Her lips shriveled and cracked, blackened with a coating of drying blood.
            She had rows and rows of teeth. The teeth seemed to go back to her very throat.
            Her warm arms became cold and clawed, uneven bulges crawling beneath the skin.
            Her eyeballs fell out,
            <span className="visceral"> decaying to dust and worms right before my eyes.</span>
          </p>

          <p className="p reveal">
            She smiled. A smile that touched her eyeless sockets.
            Her breath stank of death, telling tales of rot and decay.
            An infernal brew exuding toxic stench in a noxious cloud of throat-scratching puffs.
            Her grip tightened uncomfortably. She pulled me towards her and bit into my neck.
          </p>

        </div>

        <div className="pivot">
          <div className="pivot-tag">The narrator, without pause</div>
          <div className="pivot-text">
            I smiled. And bit her throat. <strong>Ripping it out and spitting it away.</strong>
            It was slimy and corrosive, burning my tongue like a ball of slimy uranium.
            Shock was scrawled across her face.
            <br /><br />
            She released me, grasping the gaping hole in her neck.
            I stood and smiled, watching her gasp desperately for air.
            I stretched my hand and grabbed her behind the neck,
            pulling her close, and whispered:
            <br /><br />
            <strong>&ldquo;An eye for an eye.&rdquo;</strong>
          </div>
        </div>

        <div className="monologue">

          <p className="mono-text">
            I will never be haunted.
            The bogeyman lives in my house. He lurks in the dark.
            He doesn&rsquo;t go bump at night. He doesn&rsquo;t scratch.
            <strong>He lives in terror, dreading his host. Me.</strong>
            My monsters fear me. Their lives are horror stories of my making.
          </p>

          <p className="last-line">
            I squeeze and crush her neck.
            <br /><br />
            <span className="scold">
              &ldquo;You didn&rsquo;t clean my room before dying, you ingrate.
              Look how much goo you splattered.
              Don&rsquo;t think death can save you from me.
              I will wake you.
              You clean up this room.
              Then I&rsquo;ll send you back.&rdquo;
            </span>
          </p>

        </div>

      </div>
    </>
  )
}