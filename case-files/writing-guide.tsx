// case-files/writing-guide.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'writing-guide',
  title: 'KEYS TO EFFECTIVE WRITING',
  subtitle: 'Five Principles for Serious Writers, and One Final Disclosure',
  classificationCode: 'LIT-5K-ED1',
  department: 'Dept. of Literary Instruction & Controlled Demolition',
  threatLevel: 'CRITICAL',
  tags: ['writing', 'self-help', 'fraud confirmed'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap');

  .guide * { box-sizing: border-box; margin: 0; padding: 0; }

  .guide {
    font-family: 'Inter', sans-serif;
    background: #F7F3ED;
    min-height: 100vh;
  }

  .cover {
    background: #1C2B1A;
    padding: 64px 40px 56px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .cover::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(120,180,80,0.12) 0%, transparent 70%);
  }

  .cover-ornament {
    font-size: 28px;
    margin-bottom: 20px;
    opacity: 0.6;
  }

  .cover-eyebrow {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #8aaa60;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
  }

  .cover-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 8vw, 64px);
    font-weight: 900;
    color: #f5f0e8;
    line-height: 1.05;
    letter-spacing: -1px;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
  }

  .cover-title em {
    font-style: italic;
    color: #a8cc70;
  }

  .cover-author {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #556644;
    margin-top: 20px;
    position: relative;
    z-index: 1;
  }

  .cover-rule {
    width: 48px;
    height: 2px;
    background: #8aaa60;
    margin: 20px auto;
  }

  .guide-body {
    max-width: 620px;
    margin: 0 auto;
    padding: 0 24px 48px;
  }

  .section {
    padding: 40px 0;
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }

  .section:last-of-type { border-bottom: none; }

  .section-number {
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    font-weight: 900;
    color: rgba(0,0,0,0.06);
    line-height: 1;
    margin-bottom: -12px;
    letter-spacing: -2px;
  }

  .section-head {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .section-body {
    font-size: 15px;
    line-height: 1.85;
    color: #3a3530;
    font-weight: 300;
  }

  .section-body strong {
    font-weight: 600;
    color: #1a1a1a;
  }

  .pull-quote {
    border-left: 3px solid #8aaa60;
    padding: 10px 20px;
    margin: 20px 0;
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-style: italic;
    color: #2a4a18;
    line-height: 1.6;
    background: rgba(138,170,96,0.06);
  }

  .breakdown {
    background: #111;
    margin: 0 -24px;
    padding: 48px 24px 56px;
    position: relative;
    overflow: hidden;
  }

  .breakdown::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      -45deg, transparent, transparent 40px,
      rgba(255,255,255,0.01) 40px, rgba(255,255,255,0.01) 41px
    );
  }

  .breakdown > * { position: relative; z-index: 1; }

  .bd-tag {
    font-size: 9px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 28px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  .bd-opener {
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    font-style: italic;
    color: #666;
    margin-bottom: 20px;
  }

  .bd-line {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    line-height: 1.8;
    color: #aaa;
    font-weight: 300;
    margin-bottom: 16px;
  }

  .bd-line strong {
    color: #fff;
    font-weight: 600;
  }

  .bd-line em {
    font-style: normal;
    color: #8aaa60;
    font-weight: 600;
  }

  .bd-break {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 5vw, 36px);
    font-weight: 900;
    font-style: italic;
    color: #fff;
    line-height: 1.2;
    margin: 28px 0;
    letter-spacing: -0.5px;
  }

  .bd-break span { color: #8aaa60; }

  .bd-rule {
    height: 1px;
    background: #2a2a2a;
    margin: 28px 0;
  }

  .bd-final {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.9;
    color: #888;
    font-weight: 300;
  }

  .bd-final strong {
    color: #ddd;
    font-weight: 600;
  }

  .bd-closer {
    margin-top: 32px;
    padding: 20px;
    border: 1px solid #2a2a2a;
    border-left: 3px solid #8aaa60;
  }

  .bd-closer-text {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    font-style: italic;
    color: #8aaa60;
    line-height: 1.65;
  }

  .guide-footer {
    background: #1C2B1A;
    padding: 20px 24px;
    text-align: center;
    font-size: 9px;
    letter-spacing: 3px;
    color: #3a5030;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
  }
`

const sections = [
  {
    num: '01',
    head: 'Eliminate the word can\'t.',
    body: (
      <>
        <p>Once you claim you can&apos;t, you really can&apos;t. The first step to creating something is believing you can. <strong>Doubt is not a feeling. It is architecture.</strong> Feed it once and it builds itself into every wall, every ceiling, every locked door in the space where your work should live.</p>
        <div className="pull-quote">&ldquo;With doubt eliminated, the possibilities are not just open. They are endless.&rdquo;</div>
        <p>The mind does not distinguish between the barrier you imagined and the one you built. Remove the word. Remove the ceiling.</p>
      </>
    ),
  },
  {
    num: '02',
    head: 'Choose a topic that belongs to you.',
    body: (
      <>
        <p>This is vital. Not important. <strong>Vital.</strong> Select a topic that resonates with you because the depth and impact of your writing is directly tied to your emotional ownership of the subject.</p>
        <p style={{ marginTop: 14 }}>With the right topic, with genuine feeling behind every sentence, you can make killers weep. Not metaphorically. Not almost. You can reach into a stranger&apos;s chest through words alone and move something that has not moved in years.</p>
        <div className="pull-quote">&ldquo;The right topic doesn&apos;t just inspire the writing. It becomes the writing.&rdquo;</div>
      </>
    ),
  },
  {
    num: '03',
    head: 'Pace yourself.',
    body: (
      <>
        <p>Ideas driven by raw emotion arrive fast, loud, and in no particular order. That is not a problem. That is the material. The problem is presenting them in the order they arrived and expecting your reader to follow.</p>
        <p style={{ marginTop: 14 }}><strong>Your reader does not live inside your head.</strong> What feels like a logical leap to you may feel like a missing staircase to them. Structure your thoughts not to constrain them, but to make them navigable.</p>
        <p style={{ marginTop: 14 }}>No matter how good your work is, if it is misunderstood, it is meaningless. Palatable does not mean diluted. It means accessible.</p>
      </>
    ),
  },
  {
    num: '04',
    head: 'Check your work.',
    body: (
      <>
        <p>As trivial as it sounds, this is non-negotiable. The human brain is wired to flag errors. Once a reader finds one, they find a reason. A reason to stop. A reason to doubt everything before it.</p>
        <div className="pull-quote">&ldquo;One error unchecked does not just break a sentence. It breaks the reader&apos;s trust in you.&rdquo;</div>
        <p>You will be labeled incompetent. The label does not need to be spoken. It is applied silently and it sticks. Check your work.</p>
      </>
    ),
  },
  {
    num: '05',
    head: 'Have fun. This is the most important.',
    body: (
      <>
        <p>If writing feels like a chore, it will read like one. <strong>If it feels like an adventure, it will read like one.</strong> Your perspective is not invisible to your reader. It comes through the line breaks, the word choices, the rhythm of how you think on the page.</p>
        <p style={{ marginTop: 14 }}>Writing done in joy becomes eternal. Writing done in obligation becomes shallow and quickly forgotten. Your reader will detect which one they are holding. Give them the adventure.</p>
        <div className="pull-quote">&ldquo;See it as fun and exciting escapades. Your work will outlive you. See it as stress, and it will barely survive the week.&rdquo;</div>
      </>
    ),
  },
]

export default function WritingGuide() {
  return (
    <>
      <style>{styles}</style>
      <div className="guide">

        <div className="cover">
          <div className="cover-ornament">✦</div>
          <div className="cover-eyebrow">A Complete Framework</div>
          <div className="cover-title">Keys to <em>Effective</em><br />Writing</div>
          <div className="cover-rule" />
          <div className="cover-author">Five Principles for Serious Writers</div>
        </div>

        <div className="guide-body">

          {sections.map((s) => (
            <div className="section" key={s.num}>
              <div className="section-number">{s.num}</div>
              <div className="section-head">{s.head}</div>
              <div className="section-body">{s.body}</div>
            </div>
          ))}

          <div className="breakdown">
            <div className="bd-tag">One last thing.</div>

            <div className="bd-opener">Before you close this and start taking notes...</div>

            <div className="bd-line">
              If you actually read guides like this. If you save them. If you highlight them.
              If you let someone else&apos;s five steps become your creed,
              then <strong>you are never going to make it.</strong>
            </div>

            <div className="bd-break">
              Only an idiot walks in<br />another man&apos;s shadow<br />and expects <span>to be seen.</span>
            </div>

            <div className="bd-line">
              What nobody tells you is that <em>this is utter nonsense.</em> All of it.
              Including the parts that sounded profound. Especially those.
            </div>

            <div className="bd-line">
              I am getting paid writing things like this.
              And people like you are putting the bills in my pocket.
            </div>

            <div className="bd-rule" />

            <div className="bd-final">
              Nobody taught me any of this. <strong>It is common sense.</strong>
              The kind of sense you already have and are choosing not to use
              because someone handed you a numbered list and it felt like a shortcut.
              <br /><br />
              There is no shortcut. There is just you, thinking for yourself,
              which is the one thing no guide can give you
              and the one thing every great writer already had
              <strong> before they ever read a word of advice.</strong>
            </div>

            <div className="bd-closer">
              <div className="bd-closer-text">
                What the world needs is a lunatic. Not another yes-man
                nodding along to someone else&apos;s five steps.
                Get off your ass and think for yourself.
                That&apos;s the only key that was ever worth having.
              </div>
            </div>
          </div>

        </div>

        <div className="guide-footer">
          Keys to Effective Writing &nbsp;◆&nbsp; All five steps are yours to ignore
        </div>

      </div>
    </>
  )
}