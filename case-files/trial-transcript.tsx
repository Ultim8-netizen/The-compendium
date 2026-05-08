// case-files/trial-transcript.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'trial-transcript',
  title: 'THE STATE v. DEFENDANT [REDACTED]',
  subtitle: 'Organ Trafficking Charge Arising From Voluntary Acceptance of a Human Heart',
  classificationCode: 'HC/2024/0091-T47',
  department: 'Dept. of Romantic Jurisprudence',
  threatLevel: 'TERMINAL',
  tags: ['court transcript', 'organ trafficking', 'evidence speaks for itself'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');

  .trial * { box-sizing: border-box; margin: 0; padding: 0; }

  .trial {
    font-family: 'Courier Prime', 'Courier New', monospace;
    background: #f0ece0;
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 16px;
    background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='100' font-size='120' opacity='0.03' font-family='serif'%3E⚖%3C/text%3E%3C/svg%3E");
  }

  .trial .page {
    max-width: 640px;
    width: 100%;
    background: #fafaf5;
    box-shadow: 0 2px 24px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06);
    position: relative;
  }

  .trial .page-lines {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: repeating-linear-gradient(
      transparent, transparent 27px, rgba(0,0,0,0.055) 27px, rgba(0,0,0,0.055) 28px
    );
    pointer-events: none;
    z-index: 0;
  }

  .trial .left-margin {
    position: absolute;
    top: 0; bottom: 0;
    left: 64px;
    width: 1px;
    background: rgba(200,100,80,0.25);
    pointer-events: none;
    z-index: 1;
  }

  .trial .page > *:not(.page-lines):not(.left-margin) {
    position: relative;
    z-index: 2;
  }

  .trial .page-header {
    padding: 36px 48px 20px 80px;
    border-bottom: 2px solid #1a1a1a;
  }

  .trial .court-name {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    color: #1a1a1a;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .trial .court-sub {
    font-size: 11px;
    text-align: center;
    color: #555;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .trial .case-block {
    display: grid;
    grid-template-columns: 1fr 140px;
    gap: 16px;
    align-items: start;
  }

  .trial .case-title {
    font-size: 12px;
    line-height: 1.7;
    color: #1a1a1a;
  }

  .trial .case-title strong { font-weight: 700; }

  .trial .case-meta {
    text-align: right;
    font-size: 10px;
    line-height: 1.9;
    color: #555;
  }

  .trial .doc-label {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    color: #888;
    padding: 10px 0 6px;
    font-weight: 700;
    border-bottom: 1px solid #ddd;
    margin: 0 48px 0 80px;
  }

  .trial .transcript-body {
    padding: 20px 48px 40px 80px;
  }

  .trial .proceeding-note {
    font-size: 11px;
    color: #888;
    font-style: italic;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
  }

  .trial .line-block {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 0;
    margin-bottom: 0;
  }

  .trial .line-num {
    font-size: 10px;
    color: #bbb;
    padding-top: 3px;
    text-align: right;
    padding-right: 8px;
    user-select: none;
  }

  .trial .line-content {
    padding: 3px 0;
    min-height: 28px;
  }

  .trial .speaker {
    font-size: 12px;
    font-weight: 700;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .trial .speech {
    font-size: 13.5px;
    color: #1a1a1a;
    line-height: 1.6;
    padding-left: 16px;
    white-space: pre-wrap;
  }

  .trial .action {
    font-size: 12px;
    color: #777;
    font-style: italic;
    text-align: center;
    padding: 4px 0;
  }

  .trial .exhibit-bar {
    background: #f5f0e0;
    border: 1px solid #d4c898;
    border-left: 4px solid #8b6a00;
    padding: 8px 16px;
    margin: 16px 0;
    font-size: 11px;
    color: #5a4400;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .trial .gap { height: 10px; }

  .trial .verdict-block {
    margin-top: 28px;
    border-top: 3px double #1a1a1a;
    padding-top: 20px;
  }

  .trial .verdict-note {
    font-size: 11px;
    color: #888;
    text-align: center;
    font-style: italic;
    margin-bottom: 16px;
  }

  .trial .final-charge {
    background: #1a1a1a;
    padding: 20px 24px;
    margin-top: 8px;
  }

  .trial .charge-label {
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 8px;
  }

  .trial .charge-text {
    font-size: 16px;
    color: #f5f0e0;
    line-height: 1.5;
    font-style: italic;
  }

  .trial .charge-text strong {
    font-style: normal;
    color: #fff;
    font-size: 18px;
    display: block;
    margin-top: 6px;
    letter-spacing: 1px;
  }

  .trial .page-footer {
    border-top: 1px solid #ddd;
    padding: 10px 48px 10px 80px;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #bbb;
    letter-spacing: 1px;
  }

  .trial .seal {
    text-align: center;
    font-size: 28px;
    margin-bottom: 8px;
    opacity: 0.6;
  }
`

const lines: Array<{ num: number; type: string; text: string }> = [
  { num: 1,  type: 'action',   text: '[COURT IN SESSION. ALL RISE.]' },
  { num: 2,  type: 'gap',      text: '' },
  { num: 3,  type: 'speaker',  text: 'THE COURT' },
  { num: 4,  type: 'speech',   text: '  Be seated. Counsel, you may proceed.' },
  { num: 5,  type: 'gap',      text: '' },
  { num: 6,  type: 'speaker',  text: 'PROSECUTION' },
  { num: 7,  type: 'speech',   text: '  Thank you, Your Honor.' },
  { num: 8,  type: 'gap',      text: '' },
  { num: 9,  type: 'action',   text: '[Approaches the witness stand]' },
  { num: 10, type: 'gap',      text: '' },
  { num: 11, type: 'speaker',  text: 'PROSECUTION' },
  { num: 12, type: 'speech',   text: '  Sir.' },
  { num: 13, type: 'speech',   text: '  Did you make the following statement\n  on the 13th of June, 2024:' },
  { num: 14, type: 'gap',      text: '' },
  { num: 15, type: 'exhibit',  text: 'EXHIBIT A — Statement of Record, 13 June 2024' },
  { num: 16, type: 'gap',      text: '' },
  { num: 17, type: 'speech-q', text: '  "My heart will always belong to you."' },
  { num: 18, type: 'gap',      text: '' },
  { num: 19, type: 'speaker',  text: 'WITNESS (MR. ADEYEMI)' },
  { num: 20, type: 'speech',   text: '  Yes. I did.' },
  { num: 21, type: 'gap',      text: '' },
  { num: 22, type: 'speaker',  text: 'PROSECUTION' },
  { num: 23, type: 'speech',   text: '  I have no further questions.' },
  { num: 24, type: 'gap',      text: '' },
  { num: 25, type: 'action',   text: '[Witness steps down. Counsel approaches second witness.]' },
  { num: 26, type: 'gap',      text: '' },
  { num: 27, type: 'speaker',  text: 'PROSECUTION' },
  { num: 28, type: 'speech',   text: "  Ma'am." },
  { num: 29, type: 'gap',      text: '' },
  { num: 30, type: 'speech',   text: '  I remind you that you are under oath.' },
  { num: 31, type: 'gap',      text: '' },
  { num: 32, type: 'speech',   text: '  Did you, at any point, disprove\n  or disapprove of this statement?' },
  { num: 33, type: 'gap',      text: '' },
  { num: 34, type: 'speaker',  text: 'DEFENDANT' },
  { num: 35, type: 'speech',   text: '  No. I did not.' },
  { num: 36, type: 'gap',      text: '' },
  { num: 37, type: 'action',   text: '[Long pause. Counsel turns to face the bench.]' },
  { num: 38, type: 'gap',      text: '' },
]

export default function TrialTranscript() {
  return (
    <>
      <style>{styles}</style>
      <div className="trial">
        <div className="page">
          <div className="page-lines" />
          <div className="left-margin" />

          <div className="page-header">
            <div className="seal">⚖</div>
            <div className="court-name">In The High Court of Justice</div>
            <div className="court-sub">Criminal Division, Sitting in Open Session</div>
            <div className="case-block">
              <div className="case-title">
                <strong>THE STATE</strong><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash; versus &mdash;<br />
                <strong>DEFENDANT: [REDACTED]</strong><br />
                <em>Also present: Mr. Adeyemi, witness for the prosecution</em>
              </div>
              <div className="case-meta">
                Case No. HC/2024/0091<br />
                Day 3 of Proceedings<br />
                <strong>Transcript, pg. 47</strong><br />
                Certified Copy
              </div>
            </div>
          </div>

          <div className="doc-label">Official Court Transcript &mdash; Verbatim Record</div>

          <div className="transcript-body">
            <div className="proceeding-note">Examination of witnesses &mdash; Prosecution&apos;s closing argument</div>

            {lines.map((line) => {
              if (line.type === 'gap') return <div key={line.num} className="gap" />
              if (line.type === 'action') return (
                <div key={line.num} className="line-block">
                  <div className="line-num">{line.num}</div>
                  <div className="line-content"><div className="action">{line.text}</div></div>
                </div>
              )
              if (line.type === 'exhibit') return (
                <div key={line.num} className="line-block">
                  <div className="line-num">{line.num}</div>
                  <div className="line-content"><div className="exhibit-bar">{line.text}</div></div>
                </div>
              )
              if (line.type === 'speaker') return (
                <div key={line.num} className="line-block">
                  <div className="line-num">{line.num}</div>
                  <div className="line-content"><div className="speaker">{line.text}:</div></div>
                </div>
              )
              if (line.type === 'speech-q') return (
                <div key={line.num} className="line-block">
                  <div className="line-num">{line.num}</div>
                  <div className="line-content">
                    <div className="speech" style={{ fontStyle: 'italic', fontSize: '15px', color: '#1a1a1a', fontWeight: '700' }}>
                      {line.text}
                    </div>
                  </div>
                </div>
              )
              return (
                <div key={line.num} className="line-block">
                  <div className="line-num">{line.num}</div>
                  <div className="line-content"><div className="speech">{line.text}</div></div>
                </div>
              )
            })}

            <div className="verdict-block">
              <div className="verdict-note">[Counsel addresses the bench]</div>

              <div className="line-block">
                <div className="line-num">39</div>
                <div className="line-content"><div className="speaker">PROSECUTION:</div></div>
              </div>
              <div className="line-block">
                <div className="line-num">40</div>
                <div className="line-content"><div className="speech">  Your Honor.</div></div>
              </div>
              <div className="gap" />
              <div className="line-block">
                <div className="line-num">41</div>
                <div className="line-content"><div className="speech">  The evidence speaks for itself.</div></div>
              </div>
              <div className="gap" />
              <div className="line-block">
                <div className="line-num">42</div>
                <div className="line-content">
                  <div className="speech">  This woman accepted possession<br />  of a human heart.</div>
                </div>
              </div>
              <div className="gap" />
              <div className="line-block">
                <div className="line-num">43</div>
                <div className="line-content">
                  <div className="speech">  Voluntarily. With full knowledge.<br />  Under oath.</div>
                </div>
              </div>

              <div className="final-charge">
                <div className="charge-label">Formal Charge, Count I</div>
                <div className="charge-text">
                  Your Honor, this woman is hereby charged with
                  <strong>ORGAN TRAFFICKING.</strong>
                </div>
              </div>

              <div className="action" style={{ marginTop: '16px', fontSize: '11px' }}>
                [The defense has no words. The court has no words. The transcript ends here because the stenographer also needed a moment.]
              </div>
            </div>
          </div>

          <div className="page-footer">
            <span>CERTIFIED VERBATIM TRANSCRIPT</span>
            <span>PAGE 47</span>
            <span>HC/2024/0091</span>
          </div>
        </div>
      </div>
    </>
  )
}