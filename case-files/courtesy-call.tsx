// case-files/courtesy-call.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'courtesy-call',
  title: 'A COURTESY CALL',
  subtitle: 'In Which a Young Professional Makes a House Call, and Both Parties Conduct Themselves With Great Dignity',
  classificationCode: 'OCR-1A-CIVIL',
  department: 'Dept. of Professional Conduct & Etiquette',
  threatLevel: 'TERMINAL',
  tags: ['one-act play', 'client relations', 'sanitised tools'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Mono:wght@400;500&display=swap');

  .play * { box-sizing: border-box; margin: 0; padding: 0; }

  .play {
    font-family: 'EB Garamond', serif;
    background: #F2EDE3;
    min-height: 100vh;
    padding: 0 0 64px;
    background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='120' font-size='160' opacity='0.018' font-family='serif'%3E✒%3C/text%3E%3C/svg%3E");
  }

  .cover {
    background: #1a2412;
    padding: 56px 48px 48px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .cover::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #8aaa60, transparent);
  }

  .cover-ornament {
    font-size: 22px;
    color: #4a6a30;
    letter-spacing: 12px;
    margin-bottom: 28px;
    opacity: 0.7;
  }

  .cover-genre {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #4a6a30;
    margin-bottom: 20px;
  }

  .cover-title {
    font-size: clamp(42px, 9vw, 76px);
    font-weight: 500;
    color: #f2ede3;
    line-height: 1.0;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }

  .cover-title em {
    font-style: italic;
    color: #8aaa60;
  }

  .cover-rule {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 24px 0;
  }

  .rule-line {
    flex: 1;
    max-width: 80px;
    height: 1px;
    background: #2a3a1a;
  }

  .rule-diamond { color: #4a6a30; font-size: 10px; }

  .cover-subtitle {
    font-size: 15px;
    font-style: italic;
    color: #666;
    margin-bottom: 32px;
    letter-spacing: 0.3px;
  }

  .cast-block {
    display: inline-grid;
    grid-template-columns: auto auto;
    gap: 4px 24px;
    text-align: left;
    border-top: 1px solid #2a3a1a;
    border-bottom: 1px solid #2a3a1a;
    padding: 16px 32px;
  }

  .cast-role {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 1px;
    color: #4a6a30;
    text-transform: uppercase;
    padding: 3px 0;
  }

  .cast-name {
    font-size: 13px;
    font-style: italic;
    color: #888;
    padding: 3px 0;
  }

  .cover-footer {
    margin-top: 28px;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    color: #2a3a1a;
    text-transform: uppercase;
  }

  .play-body {
    max-width: 660px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .act-head {
    text-align: center;
    padding: 40px 0 12px;
  }

  .act-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #7a6a40;
    margin-bottom: 6px;
  }

  .act-title {
    font-size: 20px;
    font-style: italic;
    color: #3a2a10;
    font-weight: 400;
  }

  .act-rule {
    width: 32px;
    height: 1px;
    background: #c8b888;
    margin: 14px auto 0;
  }

  .setting {
    font-size: 13px;
    font-style: italic;
    color: #7a6a50;
    text-align: center;
    padding: 20px 0 28px;
    line-height: 1.6;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    margin-bottom: 8px;
  }

  .stage-dir {
    font-size: 13.5px;
    font-style: italic;
    color: #7a6a50;
    padding: 14px 0 4px;
    line-height: 1.7;
  }

  .stage-dir::before { content: '[ '; }
  .stage-dir::after  { content: ' ]'; }

  .speech {
    padding: 10px 0 4px;
    display: grid;
    grid-template-columns: 148px 1fr;
    gap: 0;
    align-items: baseline;
  }

  .speaker {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #3a2a10;
    font-weight: 500;
    padding-right: 16px;
    padding-top: 3px;
    flex-shrink: 0;
  }

  .speaker.assassin { color: #1a2a3a; }
  .speaker.mark     { color: #3a2010; }

  .lines {
    font-size: 16px;
    line-height: 1.75;
    color: #1a1208;
    font-weight: 400;
  }

  .lines em {
    font-style: italic;
    color: #5a4a28;
  }

  .beat {
    text-align: center;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    color: #c0b090;
    padding: 12px 0;
    text-transform: uppercase;
  }

  .scene-break {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 28px 0;
  }

  .sb-line { flex: 1; height: 1px; background: rgba(0,0,0,0.08); }
  .sb-text {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    color: #c0b090;
    text-transform: uppercase;
  }

  .curtain {
    background: #1a2412;
    margin: 40px -32px 0;
    padding: 36px 48px;
    text-align: center;
  }

  .curtain-text {
    font-size: 13px;
    font-style: italic;
    color: #4a6a30;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .curtain-line {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 4px;
    color: #2a3a1a;
    text-transform: uppercase;
  }

  .curtain-ornament {
    font-size: 20px;
    color: #2a3a1a;
    letter-spacing: 16px;
    margin-top: 16px;
  }

  @media (max-width: 520px) {
    .speech { grid-template-columns: 1fr; gap: 4px; }
    .speaker { font-size: 9px; padding-right: 0; }
    .cast-block { padding: 12px 16px; gap: 4px 16px; }
    .cover { padding: 40px 24px 36px; }
    .play-body { padding: 0 20px; }
    .curtain { margin: 40px -20px 0; padding: 28px 24px; }
  }
`

const D = ({ children }: { children: React.ReactNode }) => (
  <div className="stage-dir">{children}</div>
)

const S = ({ who, label, children }: { who: string; label: string; children: React.ReactNode }) => (
  <div className="speech">
    <div className={`speaker ${who}`}>{label}</div>
    <div className="lines">{children}</div>
  </div>
)

export default function CourtesyCall() {
  return (
    <>
      <style>{styles}</style>
      <div className="play">

        <div className="cover">
          <div className="cover-ornament">&mdash; ✦ &mdash;</div>
          <div className="cover-genre">A One-Act Play</div>
          <div className="cover-title">A <em>Courtesy</em><br />Call</div>
          <div className="cover-rule">
            <div className="rule-line" />
            <div className="rule-diamond">◆</div>
            <div className="rule-line" />
          </div>
          <div className="cover-subtitle">
            &ldquo;In which a young professional makes a house call,<br />
            and both parties conduct themselves with great dignity.&rdquo;
          </div>
          <div className="cast-block">
            <div className="cast-role">The Mark</div>
            <div className="cast-name">A middle-aged man. White afro. White beard. Unhurried.</div>
            <div className="cast-role">The Assassin</div>
            <div className="cast-name">A young man in his early twenties. All black. Well-pressed. Lost.</div>
          </div>
          <div className="cover-footer">One scene &nbsp;◆&nbsp; One afternoon &nbsp;◆&nbsp; Camomile provided</div>
        </div>

        <div className="play-body">

          <div className="act-head">
            <div className="act-label">Scene One</div>
            <div className="act-title">The Arrival</div>
            <div className="act-rule" />
          </div>

          <div className="setting">
            The front door of a comfortable house. Afternoon light. A knock, measured and polite.
            The kind of knock that apologises for itself.
          </div>

          <D>The door opens a crack. The young man in black stands in the frame, looking precisely as lost as someone in his profession should never look.</D>

          <S who="mark" label="The Mark">Hello. Can I help you?</S>

          <D>A pause. The young man straightens.</D>

          <S who="assassin" label="The Assassin">Good afternoon, sir. Yes, you can. You see, I&apos;m an assassin, and you&apos;re my mark.</S>

          <D>The middle-aged man considers this. He rubs his chin. He smiles the smile of a man who has heard a great many things in his time and found most of them interesting.</D>

          <S who="mark" label="The Mark">Oh, of course. Come in. Have a seat. Make yourself at home.</S>

          <D>The young man in all black shuffles in. Awkwardly. The door closes behind him.</D>

          <S who="assassin" label="The Assassin">Thank you, sir. I really don&apos;t mean to intrude.</S>

          <S who="mark" label="The Mark">Don&apos;t mention it. No trouble at all.</S>

          <D>The young man bows. Very low. The kind of bow that suggests rigorous training in something entirely unrelated to what he is here to do.</D>

          <S who="assassin" label="The Assassin">That&apos;s very kind of you, sir. Considering my mission here.</S>

          <S who="mark" label="The Mark">It&apos;s neither here nor there. I like you, kid. You&apos;re quite polite.
            <em> On that note, would you like some tea? How does camomile sound? A spot of mint, perhaps?</em>
          </S>

          <S who="assassin" label="The Assassin">That would be very nice. Thank you, sir.</S>

          <div className="scene-break">
            <div className="sb-line" />
            <div className="sb-text">Some time passes. Tea is made. Tea is taken.</div>
            <div className="sb-line" />
          </div>

          <D>They sit across from one another. The cups are warm. The banter is friendly. By any reasonable measure, the afternoon is going well.</D>

          <S who="mark" label="The Mark">If I may ask, who is your employer?</S>

          <D>He rubs his white stubble. Curious, not anxious.</D>

          <S who="assassin" label="The Assassin">I&apos;m sorry, sir, but I&apos;m not at liberty to disclose that information.</S>

          <S who="mark" label="The Mark">Of course. Employer-client privilege. Say no more.</S>

          <S who="assassin" label="The Assassin">Thank you for understanding.</S>

          <D>A small silence. Companionable. The young man sets down his cup with both hands.</D>

          <S who="assassin" label="The Assassin">If it isn&apos;t too much trouble, sir, would you mind leaving a five-star review? I&apos;m trying to build my rating. From both target and employer, you see. It creates a fuller picture.</S>

          <S who="mark" label="The Mark">Of course. Totally understand.</S>

          <D>The white-haired man leans back. Something fond crosses his face.</D>

          <S who="mark" label="The Mark">You know, in my day there was no such thing as a star review. All these new-age gizmos would be the death of me.</S>

          <D>He stops. He realises what he has just said. A beat. Then he bursts out laughing. A proper laugh. The full chest variety.</D>

          <div className="beat">&mdash; laughter &mdash;</div>

          <D>The young man in black permits himself a small smile. Professional, but genuine.</D>

          <div className="scene-break">
            <div className="sb-line" />
            <div className="sb-text">The matter turns to craft</div>
            <div className="sb-line" />
          </div>

          <S who="assassin" label="The Assassin">Let me cut to the chase, sir. My tools are sterilised. All clean and neat. That way, you needn&apos;t fear any infection.</S>

          <D>The older man sits forward. His expression is that of someone hearing a genuinely good business idea for the first time.</D>

          <S who="mark" label="The Mark">Absolute genius. Sanitised tools. <em>That&apos;s</em> your hook. That&apos;s what makes you stand out. Well done, kid. I see a brilliant career ahead of you.</S>

          <S who="assassin" label="The Assassin">Thank you very much, sir.</S>

          <D>He rises. Straightens his jacket. Sets down his cup precisely in the centre of the saucer. Opens his case with the care of someone who takes their work seriously.</D>

          <S who="assassin" label="The Assassin">Now, if you&apos;ll just lie down here. And please do take off your shirt. Laundry wouldn&apos;t be cheap, I imagine.</S>

          <D>A small pause.</D>

          <S who="assassin" label="The Assassin">And when I&apos;m finished, I&apos;ll lock your door on my way out. There have been reports of thieves on this street. It would be remiss of me not to mention it.</S>

          <D>The older man regards him for a long moment. Then nods once, slowly, with the quiet approval of someone who has found the whole thing perfectly satisfactory.</D>

          <D>He takes off his shirt. He lies down. Outside, the afternoon continues without incident.</D>

          <div className="scene-break">
            <div className="sb-line" />
            <div className="sb-text">End of scene</div>
            <div className="sb-line" />
          </div>

        </div>

        <div className="curtain">
          <div className="curtain-text">
            The door was locked on the way out.<br />
            The five-star review was submitted that same evening.<br />
            The rating is now 5.0.
          </div>
          <div className="curtain-line">&mdash; End of Play &mdash;</div>
          <div className="curtain-ornament">✦ ✦ ✦</div>
        </div>

      </div>
    </>
  )
}