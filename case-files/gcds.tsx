// case-files/gcds.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'gcds',
  title: 'Disease Classification Bulletin No. 41',
  subtitle: 'Geriatric Comedic Delusion Syndrome',
  classificationCode: 'NICP-41-GCDS',
  department: 'Division of Intergenerational Humor Trauma',
  threatLevel: 'TERMINAL',
  tags: ['clinical', 'dad jokes', 'facility placement'],
}

export default function GcdsFile() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .pg {
          font-family: 'Georgia', serif;
          background: #ffffff;
          color: #1a1a2e;
          padding: 0;
        }
        .header-band {
          background: #1a3a5c;
          color: #fff;
          padding: 1.25rem 2rem 1rem;
        }
        .org-line {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #a8c4e0;
          margin-bottom: 6px;
        }
        .bulletin-title {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 1.3;
          color: #fff;
        }
        .bulletin-sub {
          font-size: 12px;
          color: #c0d4e8;
          margin-top: 4px;
          font-family: 'Courier New', monospace;
          letter-spacing: 1px;
        }
        .meta-bar {
          background: #e8f0f8;
          border-bottom: 1px solid #c5d8ec;
          padding: 0.5rem 2rem;
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .meta-item {
          font-size: 11px;
          font-family: 'Courier New', monospace;
          color: #2a4a6a;
        }
        .meta-item span {
          font-weight: 700;
          color: #1a3a5c;
        }
        .gcds-body { padding: 1.5rem 2rem; }
        .icd-badge {
          display: inline-block;
          background: #1a3a5c;
          color: #fff;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 2px;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        .condition-name {
          font-size: 18px;
          font-weight: 700;
          color: #1a3a5c;
          line-height: 1.3;
          margin-bottom: 2px;
        }
        .condition-alias {
          font-size: 13px;
          color: #555;
          font-style: italic;
          margin-bottom: 1.5rem;
        }
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .section-head {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1a3a5c;
          border-bottom: 2px solid #1a3a5c;
          padding-bottom: 4px;
          margin-bottom: 0.75rem;
        }
        .body-text {
          font-size: 13px;
          line-height: 1.75;
          color: #1a1a2e;
        }
        .crit-item {
          display: flex;
          gap: 10px;
          margin-bottom: 0.5rem;
          align-items: flex-start;
        }
        .crit-check {
          width: 16px;
          height: 16px;
          border: 1.5px solid #1a3a5c;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #1a3a5c;
          font-weight: 900;
        }
        .crit-text {
          font-size: 13px;
          line-height: 1.6;
          color: #1a1a2e;
        }
        .warn-box {
          border: 1.5px solid #8b1a1a;
          background: #fff5f5;
          padding: 0.75rem 1rem;
          margin-bottom: 1.5rem;
        }
        .warn-head {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8b1a1a;
          font-weight: 700;
          margin-bottom: 0.4rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .warn-text {
          font-size: 13px;
          line-height: 1.7;
          color: #3a0a0a;
        }
        .case-card {
          border: 1px solid #c5d8ec;
          padding: 0.75rem 1rem;
          margin-bottom: 0.75rem;
          background: #f7fafd;
        }
        .case-head {
          font-size: 11px;
          font-family: 'Courier New', monospace;
          color: #1a3a5c;
          letter-spacing: 1px;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        .case-text {
          font-size: 12.5px;
          line-height: 1.65;
          color: #1a1a2e;
        }
        .case-verdict {
          display: inline-block;
          margin-top: 0.4rem;
          font-size: 11px;
          font-family: 'Courier New', monospace;
          padding: 2px 8px;
        }
        .verdict-home {
          background: #fff0d4;
          color: #7a4400;
          border: 1px solid #e0aa50;
        }
        .verdict-arrest {
          background: #fde8e8;
          color: #7a1a1a;
          border: 1px solid #e08080;
        }
        .verdict-fled {
          background: #e8f4e8;
          color: #1a5a1a;
          border: 1px solid #80c080;
        }
        .stage-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 10px;
          margin-bottom: 0.6rem;
          align-items: start;
        }
        .stage-label {
          font-size: 11px;
          font-family: 'Courier New', monospace;
          color: #fff;
          background: #1a3a5c;
          padding: 3px 6px;
          text-align: center;
          letter-spacing: 1px;
        }
        .stage-text {
          font-size: 13px;
          line-height: 1.6;
          color: #1a1a2e;
        }
        .prognosis-bar {
          height: 8px;
          background: #eee;
          border-radius: 0;
          margin: 0.3rem 0 0.2rem;
          overflow: hidden;
        }
        .prognosis-fill { height: 100%; }
        .prognosis-label {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          font-family: 'Courier New', monospace;
          color: #555;
        }
        .footnote-bar {
          background: #1a3a5c;
          color: #a8c4e0;
          padding: 0.75rem 2rem;
          font-size: 10px;
          font-family: 'Courier New', monospace;
          letter-spacing: 1px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .glint-box {
          background: #fffbe6;
          border-left: 3px solid #e0aa00;
          padding: 0.5rem 0.75rem;
          margin: 0.75rem 0;
          font-size: 12.5px;
          line-height: 1.65;
          font-style: italic;
          color: #4a3800;
        }
        .full-section { margin-bottom: 1.5rem; }
        .intervention-item {
          display: flex;
          gap: 10px;
          margin-bottom: 0.5rem;
        }
        .int-num {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          color: #fff;
          background: #5a7a9a;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .int-text {
          font-size: 13px;
          line-height: 1.65;
          color: #1a1a2e;
        }
        .redact {
          background: #1a1a2e;
          color: #1a1a2e;
          border-radius: 1px;
          padding: 0 3px;
          user-select: none;
        }
        @media (max-width: 640px) {
          .two-col { grid-template-columns: 1fr; }
          .gcds-body { padding: 1.25rem 1rem; }
          .footnote-bar { padding: 0.75rem 1rem; }
        }
      `}</style>

      <div className="pg">

        <div className="header-band">
          <div className="org-line">National Institute of Comedic Pathology &nbsp;|&nbsp; Division of Intergenerational Humor Trauma</div>
          <div className="bulletin-title">Disease Classification Bulletin No. 41</div>
          <div className="bulletin-sub">Geriatric Comedic Delusion Syndrome &nbsp;/&nbsp; Mandatory Clinician Reference</div>
        </div>

        <div className="meta-bar">
          <div className="meta-item">Status: <span>Active Outbreak</span></div>
          <div className="meta-item">Affected Age Group: <span>Anyone Near Someone 40+</span></div>
          <div className="meta-item">Transmission: <span>Eye Contact, Family Gatherings</span></div>
          <div className="meta-item">Bulletin Ref: <span>NICP-41-GCDS-2026</span></div>
        </div>

        <div className="gcds-body">

          <div className="icd-badge">ICD-11 CODE: 6D40.J &mdash; GCDS (ADVANCED)</div>
          <div className="condition-name">Geriatric Comedic Delusion Syndrome</div>
          <div className="condition-alias">
            &ldquo;Dad Joke Disorder&rdquo; &nbsp;/&nbsp; &ldquo;The Affliction&rdquo; &nbsp;/&nbsp; &ldquo;The Glint Condition&rdquo; &nbsp;/&nbsp; Clinically: <em>Risus Vacuus Perpetuus</em>
          </div>

          <div className="warn-box">
            <div className="warn-head">⚠&nbsp; Public Safety Notice</div>
            <div className="warn-text">
              GCDS does not discriminate by biological age. Documented cases include a 38-year-old uncle, a 45-year-old mother, and one confirmed 31-year-old coworker who discovered wordplay in 2021 and has not recovered. Chronological age is irrelevant. The condition is defined by the <strong>joke</strong>, not the birth year.
            </div>
          </div>

          <div className="two-col">
            <div>
              <div className="section-head">Diagnostic Criteria (5 of 7 required)</div>
              {[
                'Tells jokes with no traceable punchline, arriving instead at a plateau of mild wordplay that collapses silently into itself',
                'Laughs before, during, and after the joke, filling the silence the audience refuses to provide',
                'Interprets your polite smile as a standing invitation to tell another one immediately',
                'Has been cycling through the same 4 jokes since a year you were not yet born in',
                'Uses the phrase "you don\'t get it" not as an admission of failure but as a diagnosis of your deficiency',
                'Has explained the joke. Twice. Is now explaining why it was clever.',
                'Exhibits THE GLINT (see below)',
              ].map((text, i) => (
                <div className="crit-item" key={i}>
                  <div className="crit-check">✓</div>
                  <div className="crit-text">{text}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="section-head">Pathology &amp; Disease Mechanism</div>
              <div className="body-text">
                The primary mechanism of GCDS is a progressive decoupling between the subject&apos;s internal humor experience and objective comedic output. Brain imaging confirms that the GCDS subject&apos;s nucleus accumbens fires identically whether the joke lands or not. The laughing is neurologically mandatory. The audience&apos;s response is neurologically irrelevant.
              </div>
              <br />
              <div className="body-text">
                This explains the central paradox of the condition: the subject is genuinely, fully, profoundly enjoying themselves. The suffering is entirely unilateral. They will leave the encounter invigorated. You will leave needing to sit down somewhere quiet and reassess things.
              </div>
              <div className="glint-box">
                &ldquo;THE GLINT&rdquo; &mdash; The 0.3 second pre-joke luminescence visible in the subject&apos;s eyes before they begin. It is the only warning you will receive. Clinical literature recommends immediate evasive action upon detection.
              </div>
            </div>
          </div>

          <div className="full-section">
            <div className="section-head">Documented Case Files (Declassified)</div>

            <div className="case-card">
              <div className="case-head">CASE FILE A &nbsp;|&nbsp; &ldquo;The Dining Table Incident&rdquo;</div>
              <div className="case-text">
                Subject: Female, 45. Known relationship to observer: maternal. Onset: Sunday dinner, 7:42pm. Subject asked &ldquo;why don&apos;t scientists trust atoms?&rdquo; and then answered her own question before anyone could leave the table. Observer reported symptoms including jaw lock, involuntary nodding, and a 40 minute dissociative episode. Subject was found the next morning preparing a follow-up variant.
              </div>
              <div><span className="case-verdict verdict-home">OUTCOME: Facility Assessment Initiated</span></div>
            </div>

            <div className="case-card">
              <div className="case-head">CASE FILE B &nbsp;|&nbsp; &ldquo;The Car Journey&rdquo;</div>
              <div className="case-text">
                Subject: Male, 52. Confined space, 3 hour drive. No viable exit route. Subject produced 11 jokes across 180 minutes, 9 of which were variants of the same foundational joke about a man walking into a bar. The bar changed. The joke did not. Observers submitted a formal complaint to the relevant authority. The authority was also the subject.
              </div>
              <div><span className="case-verdict verdict-arrest">OUTCOME: Attempted Boredom Charge, Currently Sub Judice</span></div>
            </div>

            <div className="case-card">
              <div className="case-head">CASE FILE C &nbsp;|&nbsp; &ldquo;The WhatsApp Family Group&rdquo;</div>
              <div className="case-text">
                Subject: <span className="redact">redacted</span>, age 48. Asynchronous transmission vector. Subject discovered that meme format jokes could now be sent as images, effectively weaponizing GCDS for remote delivery. The group has 34 members. 28 have notifications silenced. 4 have changed their numbers. 2 remain, and no one knows why.
              </div>
              <div><span className="case-verdict verdict-fled">OUTCOME: 28 Survivors. Group Still Active.</span></div>
            </div>
          </div>

          <div className="two-col">
            <div>
              <div className="section-head">Escalation Stages</div>
              {[
                { label: 'STAGE 1', text: 'Single joke, isolated incident. You laugh. This is a mistake you will live with.' },
                { label: 'STAGE 2', text: 'Subject registers your laugh as proof of taste. A second joke is loading.' },
                { label: 'STAGE 3', text: '"Ooh, that reminds me of another one." You are now in the session.' },
                { label: 'STAGE 4', text: 'Subject has called in a third party to witness the retelling. You are now an audience.' },
                { label: 'STAGE 5', text: 'The joke has been told to someone else, with you cited as someone who "really got it." You are now their reference. You will be summoned again.' },
              ].map(row => (
                <div className="stage-row" key={row.label}>
                  <div className="stage-label">{row.label}</div>
                  <div className="stage-text">{row.text}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="section-head">Approved Clinical Interventions</div>
              {[
                {
                  body: <><strong>Preemptive topic flooding.</strong> Upon detection of THE GLINT, immediately introduce a subject of sufficient personal urgency that the joke cannot survive the transition. Bereavement works. Minor injury works. &ldquo;I have to tell you something&rdquo; at sufficient volume works.</>,
                },
                {
                  body: <><strong>The Flat Reception.</strong> Do not laugh. Do not smile. Do not frown. Return a perfectly neutral face and say &ldquo;mm.&rdquo; once. Subjects rated this experience as &ldquo;confusing&rdquo; in 71% of trials. Note: it does not stop them. Nothing stops them. But it slows the reload.</>,
                },
                {
                  body: <><strong>Facility escalation.</strong> Chronological age is not a requirement for a referral. Documented precedents exist for subjects as young as 38. The intake form asks for &ldquo;primary presenting behavior.&rdquo; There is a dropdown. It has this exact condition listed.</>,
                },
              ].map((item, i) => (
                <div className="intervention-item" key={i}>
                  <div className="int-num">{i + 1}</div>
                  <div className="int-text">{item.body}</div>
                </div>
              ))}

              <div className="section-head" style={{ marginTop: '1rem' }}>Prognosis by Intervention Type</div>

              {[
                { label: 'Recovery (no intervention)',        pct: 3,  color: '#8b1a1a' },
                { label: 'Recovery (facility placement)',     pct: 12, color: '#5a7a3a' },
              ].map(row => (
                <div key={row.label}>
                  <div style={{ fontSize: '12px', fontFamily: "'Courier New', monospace", color: '#444', marginBottom: '4px', marginTop: '8px' }}>
                    {row.label}
                  </div>
                  <div className="prognosis-bar">
                    <div className="prognosis-fill" style={{ width: `${row.pct}%`, background: row.color }} />
                  </div>
                  <div className="prognosis-label">
                    <span>0%</span><span>{row.pct}%</span><span>100%</span>
                  </div>
                </div>
              ))}
              <div style={{ fontSize: '11px', fontFamily: "'Courier New', monospace", color: '#666', marginTop: '4px' }}>
                Note: the 12% recovered. The facility did not.
              </div>
            </div>
          </div>

          <div className="warn-box">
            <div className="warn-head">⚠&nbsp; Clinician Advisory &mdash; Do Not Attempt</div>
            <div className="warn-text">
              Under no circumstances should the clinician or observer attempt to explain why the joke was not funny. The subject will engage this as a debate. The debate will last longer than the original encounter. You came in to escape a 4 minute joke. You will leave 90 minutes later having provided a detailed defense of comedic theory to someone who is not listening and is already thinking of another one.
            </div>
          </div>

        </div>

        <div className="footnote-bar">
          <span>NICP-41-GCDS-2026 &nbsp;|&nbsp; National Institute of Comedic Pathology</span>
          <span>This bulletin constitutes legal grounds for facility referral in 14 jurisdictions</span>
          <span>Next revision: when it stops happening (projected: never)</span>
        </div>

      </div>
    </>
  )
}