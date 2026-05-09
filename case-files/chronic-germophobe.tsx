// case-files/chronic-germophobe.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'chronic-germophobe',
  title: 'Chronic Germophobe',
  subtitle: 'She had been warned. She was sure it would be nothing.',
  classificationCode: 'MR-CR-001',
  department: 'Dept. of Romantic Threat Assessment',
  threatLevel: 'TERMINAL',
  tags: ['short fiction', 'contemporary romance', 'hazmat'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Mono:wght@400;500&display=swap');

  .story * { box-sizing: border-box; margin: 0; padding: 0; }

  .story {
    font-family: 'Cormorant Garamond', serif;
    background: #F7F0E8;
    min-height: 100vh;
    color: #1a1008;
  }

  .cover-band {
    background: #1a1008;
    padding: 14px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pub-name {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #3a2a18;
  }

  .issue-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    color: #2a1e10;
    text-transform: uppercase;
  }

  .hero {
    padding: 56px 48px 40px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    max-width: 720px;
    margin: 0 auto;
  }

  .section-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #b09060;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section-tag::after {
    content: '';
    width: 28px;
    height: 1px;
    background: #d4b880;
    display: inline-block;
  }

  .story-title {
    font-size: clamp(40px, 8vw, 68px);
    font-weight: 300;
    font-style: italic;
    line-height: 1.05;
    letter-spacing: -0.5px;
    color: #1a1008;
    margin-bottom: 10px;
  }

  .story-deck {
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    color: #9a8060;
    line-height: 1.5;
    max-width: 460px;
    margin-top: 18px;
  }

  .hero-rule { width: 32px; height: 1px; background: #d4b880; margin-top: 24px; }

  .prose {
    padding: 48px 48px 80px;
    max-width: 720px;
    margin: 0 auto;
  }

  .p {
    font-size: 18px;
    line-height: 1.9;
    color: #2a1a08;
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
    color: #1a1008;
  }

  .p em { font-style: italic; color: #3a2010; }

  .thought { font-style: italic; color: #7a5a30; }

  .break {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin: 32px 0;
    color: #d4b880;
    font-size: 9px;
    letter-spacing: 10px;
  }

  .pivot-wrap {
    background: #1a1008;
    margin: 40px -48px;
    padding: 36px 48px;
  }

  .pivot-tag {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #3a2a18;
    margin-bottom: 14px;
  }

  .pivot-text {
    font-size: 19px;
    line-height: 1.85;
    color: #8a7050;
    font-style: italic;
    font-weight: 300;
  }

  .pivot-text strong {
    font-style: normal;
    color: #c8a870;
    font-weight: 500;
  }

  .dialogue {
    font-size: 18px;
    line-height: 1.85;
    color: #2a1a08;
    margin-bottom: 26px;
    padding-left: 24px;
    border-left: 2px solid #d4b880;
    font-style: italic;
  }

  .dialogue.hazmat {
    border-left-color: #5a8a60;
    color: #3a5a3a;
  }

  .dialogue.hazmat strong {
    font-style: normal;
    font-weight: 600;
    display: block;
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #5a8a60;
    margin-bottom: 4px;
  }

  .dialogue.scream strong {
    font-style: normal;
    font-weight: 600;
    display: block;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #b08040;
    margin-bottom: 4px;
  }

  .foot {
    border-top: 1px solid rgba(0,0,0,0.07);
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
    color: #c8b890;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    .hero, .prose { padding-left: 24px; padding-right: 24px; }
    .cover-band, .foot { padding-left: 24px; padding-right: 24px; }
    .pivot-wrap { margin-left: -24px; margin-right: -24px; padding-left: 24px; padding-right: 24px; }
    .p, .dialogue { font-size: 17px; }
  }
`

export default function ChronicGermophobe() {
  return (
    <>
      <style>{styles}</style>
      <div className="story">

        <div className="cover-band">
          <div className="pub-name">The Meridian</div>
          <div className="issue-tag">Short Fiction &nbsp;◆&nbsp; Contemporary Romance</div>
        </div>

        <div className="hero">
          <div className="section-tag">Fiction</div>
          <div className="story-title">Chronic<br />Germophobe</div>
          <div className="hero-rule" />
          <div className="story-deck">
            She had been warned. She was sure it would be nothing.
          </div>
        </div>

        <div className="prose">

          <p className="p first">
            She felt his breath on her neck. His warm breath.
            As his lips clasped gently on the slope of her neck,
            showering her with adoring kisses, she inhaled deeply.
            He smelled like aftershave and lemons.
            Something about the scent drove her wild.
          </p>

          <p className="p">
            The way he gently clasped her head, his stance as he leaned over to plant kisses on her,
            his imposing muscular frame. The thoughts wrestled as they flew through her mind.
          </p>

          <p className="p">
            She grabbed his shirt and pulled. A flash of rage crossed her mind briefly.
            <span className="thought"> &lsquo;What has come over me? How can I be angry with a shirt?&rsquo; </span>
            she thought to herself as the buttons popped and flew in multiple directions.
            Her eyes locked on his muscular build. Perfectly toned chest, complemented by evenly shaped abs.
            She ran her fingers over his chest and looked him in the eyes.
            She felt his muscles tense and his heart race beneath his warm skin.
            There was something endearing about his muscular frame and warm feel.
            She felt he was strong yet soft. The contrast muddled her mind.
            She felt small. Comfortably small.
            She felt like sinking into the depths of his imposing build,
            like his warmth could envelope her in perfect safety.
            She wanted to press her bare skin against his,
            to feel the safety of his embrace, and this want was quickly growing to longing.
            Passionate longing.
          </p>

          <p className="p">
            He lifted her up. She chuckled and wrapped her legs around him.
          </p>

          <p className="p">
            Her heart beat faster, blood flowed quickly. She felt heat rising from her core
            and spreading to her extremities. Losing all sense of logic, she gave in to passion.
          </p>

          <p className="p">
            She dug her fingers into his back, pushed his head away from her neck
            and took his lips between hers. Their lips interlocked in a bizarre yet endearing symphony.
            She pushed her tongue gently into his mouth, he responded equally.
            Their lips and tongues collided and separated,
            reminding her of particles in a particle accelerator.
          </p>

          <p className="p">
            Tension rose. He changed from gentle adoration to passionate fervor,
            mirroring her frenzy with perfect synchrony.
            Their breaths melded into each other and she was certain their hearts were in sync.
          </p>

          <p className="p">
            His hands moved up from holding her waist to exploring her body under the thin blouse she wore.
            She felt his right hand around her back, a tingle ran down her spine.
            The sensation left a faint smile on her lips.
            Within seconds, her bra came undone.
            His left hand cupped her breast gently, he softly squeezed and held them,
            carefully framing each breast with his large hand.
            She wondered how someone this large could be so gentle with her.
            The thoughts of being treated with such care made her feel valued.
            A deep sense of worth welled up within her, swirling with the other emotions.
            As his fingers closed around her nipples she knew there was no going back.
            She pulled out of their kiss, took a deep breath, and kissed his neck.
            She squeezed into him as tightly as she could, letting his scent fill her nostrils,
            and gently bit him. Letting the salty taste of his neck hang on the tip of her tongue.
            Her nails dug into his back as a fresh wave of longing washed over her.
          </p>

          <div className="break">✦ &nbsp; ✦ &nbsp; ✦</div>

          <p className="p">
            He gently pulled himself away. They were both nearly out of breath.
            He ran his fingers through her hair and smiled.
            <span className="thought"> &ldquo;I&rsquo;ll be right back.&rdquo; </span>
            She watched his muscular frame disappear through a nearby doorway.
            She looked down at her body, noticing herself for the first time.
            She was shaking.
          </p>

          <p className="p">
            She smiled with excitement, took off her blouse.
            Looking at her bra hanging haphazardly over her shoulders made her laugh out loud.
            She hasn&rsquo;t felt this way in a long time.
            It wasn&rsquo;t just passion, she was excited.
            She could still feel his lips on hers, could still feel and smell him.
            This thought made her long for that touch, long to be held.
            How could she feel so safe? She wanted to let loose, give in completely, go wild.
            She felt he could handle it.
            These thoughts made her smile. A sly smile.
          </p>

          <p className="p">
            She slipped out of her jeans and jumped into the king-sized bed.
          </p>

          <p className="p">
            As she lay there, thoughts of their encounter and subsequent affiliation flew through her head.
            They had been friends for quite some time. He seemed perfect.
            The only fault she could possibly find was his claim to be a chronic germophobe.
            <em> But she was sure it&rsquo;ll be nothing.</em>
          </p>

          <div className="pivot-wrap">
            <div className="pivot-tag">Intermission</div>
            <div className="pivot-text">
              In that moment, as though by practice,<strong> he walked in.</strong>
              What she saw before her made her heart skip a beat.
              Her breath caught in her throat.
            </div>
          </div>

          <p className="p">
            He had on a thick hazmat suit.
            She could see he had a gas mask and gas tanks strapped to his back.
          </p>

          <div className="dialogue hazmat">
            <strong>Him &mdash; [via suit speakers, monotonic]</strong>
            &ldquo;Alright. Let&rsquo;s get this over with.&rdquo;
          </div>

          <div className="dialogue scream">
            <strong>Her</strong>
            &ldquo;Seriously. This is what you meant by germophobe.&rdquo;
          </div>

        </div>

        <div className="foot">
          <div className="foot-text">Short Fiction &nbsp;◆&nbsp; Contemporary Romance</div>
          <div className="foot-text">The Meridian</div>
        </div>

      </div>
    </>
  )
}