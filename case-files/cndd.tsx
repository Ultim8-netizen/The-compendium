// case-files/cndd.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'cndd',
  title: 'Curriculum Compliance Audit No. 41',
  subtitle: 'Chronic Narrative Divergence Disorder in Active Teaching Personnel',
  classificationCode: 'OCINC/UBD-2026/0041',
  department: 'Office of Curricular Integrity & Narrative Containment',
  threatLevel: 'TERMINAL',
  tags: ['clinical', 'academic', 'biographical containment'],
}

export default function CnddFile() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap');

        .cndd-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

        .cndd-wrap {
          font-family: 'EB Garamond', 'Georgia', serif;
          background: #faf8f4;
          color: #1c1c16;
          border: 1px solid #c9bfa8;
        }

        .cndd-wrap .crest-bar {
          background: #2c1a0e;
          color: #f0e8d8;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .cndd-wrap .crest {
          width: 48px;
          height: 48px;
          border: 2px solid #a08050;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 22px;
          color: #d4a84b;
        }

        .cndd-wrap .crest-text { flex: 1; }

        .cndd-wrap .org-name {
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #d4a84b;
          font-weight: 600;
        }

        .cndd-wrap .org-sub {
          font-size: 11px;
          color: #a09070;
          letter-spacing: 1px;
          margin-top: 2px;
        }

        .cndd-wrap .meta-bar {
          background: #3d2810;
          padding: 0.5rem 2rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cndd-wrap .meta-pill {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          color: #c0a070;
          letter-spacing: 1px;
        }

        .cndd-wrap .meta-pill span {
          color: #f0d090;
          font-weight: 700;
        }

        .cndd-wrap .body { padding: 1.75rem 2rem; }

        .cndd-wrap .doc-title-block {
          border-bottom: 2px solid #2c1a0e;
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .cndd-wrap .doc-type {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #7a6040;
          margin-bottom: 6px;
        }

        .cndd-wrap .doc-title {
          font-size: 22px;
          font-weight: 700;
          color: #1c1c16;
          line-height: 1.3;
        }

        .cndd-wrap .doc-subtitle {
          font-size: 13px;
          color: #7a6040;
          font-style: italic;
          margin-top: 4px;
        }

        .cndd-wrap .violation-stamp {
          display: inline-block;
          border: 3px solid #8b1a1a;
          color: #8b1a1a;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          font-weight: 900;
          padding: 4px 14px;
          letter-spacing: 3px;
          transform: rotate(2deg);
          float: right;
          margin-top: -8px;
        }

        .cndd-wrap .section-head {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #2c1a0e;
          border-bottom: 1.5px solid #2c1a0e;
          padding-bottom: 4px;
          margin-bottom: 0.85rem;
          margin-top: 1.5rem;
          font-weight: 700;
        }

        .cndd-wrap .body-text {
          font-size: 14px;
          line-height: 1.8;
          color: #2a2218;
        }

        .cndd-wrap .severity-dots {
          display: flex;
          gap: 4px;
          align-items: center;
          margin: 0.5rem 0 1rem;
        }

        .cndd-wrap .sev-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .cndd-wrap .dot-label {
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #7a6040;
          margin-left: 6px;
          font-family: 'Courier New', monospace;
        }

        .cndd-wrap .alert {
          border-left: 4px solid #8b1a1a;
          background: #fff5f0;
          padding: 0.75rem 1rem;
          margin: 1rem 0;
        }

        .cndd-wrap .alert-head {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8b1a1a;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .cndd-wrap .alert-text {
          font-size: 13px;
          line-height: 1.7;
          color: #3a1010;
        }

        .cndd-wrap .info {
          border-left: 4px solid #a08050;
          background: #fdf8ec;
          padding: 0.75rem 1rem;
          margin: 1rem 0;
        }

        .cndd-wrap .info-head {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #7a5020;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .cndd-wrap .info-text {
          font-size: 13px;
          line-height: 1.7;
          color: #3a2800;
        }

        .cndd-wrap .time-chart { margin: 1rem 0; }

        .cndd-wrap .bar-row {
          display: grid;
          grid-template-columns: 220px 1fr 48px;
          gap: 8px;
          align-items: center;
          margin-bottom: 8px;
        }

        .cndd-wrap .bar-label {
          font-size: 12px;
          color: #4a3820;
          text-align: right;
          font-style: italic;
        }

        .cndd-wrap .bar-track {
          height: 20px;
          background: #ede5d8;
          border: 1px solid #c9bfa8;
          overflow: hidden;
        }

        .cndd-wrap .bar-fill { height: 100%; }

        .cndd-wrap .bar-pct {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          color: #2c1a0e;
          font-weight: 700;
        }

        .cndd-wrap .lineage-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          margin: 0.75rem 0;
        }

        .cndd-wrap .lineage-table th {
          background: #2c1a0e;
          color: #f0e8d8;
          padding: 6px 12px;
          text-align: left;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .cndd-wrap .lineage-table td {
          padding: 7px 12px;
          border-bottom: 1px solid #e0d8c8;
          vertical-align: top;
          color: #2a2218;
          line-height: 1.5;
        }

        .cndd-wrap .lineage-table tr:nth-child(even) td { background: #f4f0e8; }

        .cndd-wrap .status-c {
          color: #8b6000;
          font-style: italic;
          font-size: 12px;
        }

        .cndd-wrap .status-u {
          color: #8b1a1a;
          font-style: italic;
          font-size: 12px;
        }

        .cndd-wrap .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .cndd-wrap .finding-item {
          display: flex;
          gap: 10px;
          margin-bottom: 0.6rem;
          align-items: flex-start;
        }

        .cndd-wrap .finding-num {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          background: #2c1a0e;
          color: #f0e8d8;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .cndd-wrap .finding-text {
          font-size: 13.5px;
          line-height: 1.7;
          color: #2a2218;
        }

        .cndd-wrap .quote-block {
          border: 1px solid #c9bfa8;
          background: #f4f0e8;
          padding: 0.75rem 1.25rem;
          margin: 0.75rem 0;
          font-style: italic;
          font-size: 13.5px;
          color: #4a3820;
          line-height: 1.7;
        }

        .cndd-wrap .quote-block cite {
          font-size: 11px;
          font-style: normal;
          color: #8a7050;
          display: block;
          margin-top: 0.4rem;
          font-family: 'Courier New', monospace;
        }

        .cndd-wrap .protocol-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 10px;
          margin-bottom: 0.75rem;
          align-items: start;
        }

        .cndd-wrap .protocol-tag {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          background: #2c1a0e;
          color: #d4a84b;
          padding: 3px 8px;
          text-align: center;
          letter-spacing: 1px;
          line-height: 1.6;
        }

        .cndd-wrap .protocol-text {
          font-size: 13.5px;
          line-height: 1.7;
          color: #2a2218;
        }

        .cndd-wrap .footnote-bar {
          background: #2c1a0e;
          color: #9a8060;
          padding: 0.75rem 2rem;
          font-family: 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 0.5rem;
        }

        .cndd-wrap .redact {
          background: #1c1c16;
          color: #1c1c16;
          border-radius: 1px;
          padding: 0 3px;
          user-select: none;
        }

        @media (max-width: 640px) {
          .cndd-wrap .body { padding: 1.25rem 1rem; }
          .cndd-wrap .crest-bar { padding: 1rem; }
          .cndd-wrap .meta-bar { padding: 0.5rem 1rem; }
          .cndd-wrap .footnote-bar { padding: 0.75rem 1rem; }
          .cndd-wrap .two-col { grid-template-columns: 1fr; }
          .cndd-wrap .bar-row { grid-template-columns: 130px 1fr 36px; }
          .cndd-wrap .protocol-item { grid-template-columns: 80px 1fr; }
        }
      `}</style>

      <div className="cndd-wrap">
        <div className="crest-bar">
          <div className="crest">⛢</div>
          <div className="crest-text">
            <div className="org-name">Office of Curricular Integrity &amp; Narrative Containment</div>
            <div className="org-sub">Division of Unsolicited Biographical Disclosure, Academic Oversight Authority</div>
          </div>
        </div>

        <div className="meta-bar">
          <div className="meta-pill">REF: <span>OCINC/UBD-2026/0041</span></div>
          <div className="meta-pill">CLASSIFICATION: <span>INTERNAL USE, WIDE CIRCULATION</span></div>
          <div className="meta-pill">SUBJECT TYPE: <span>ACTIVE TEACHING STAFF</span></div>
          <div className="meta-pill">REVIEW CYCLE: <span>EVERY SEMESTER, INDEFINITELY</span></div>
        </div>

        <div className="body">
          <div className="doc-title-block">
            <div className="violation-stamp">NON-COMPLIANT</div>
            <div className="doc-type">Formal Curriculum Compliance Review</div>
            <div className="doc-title">
              Chronic Narrative Divergence Disorder<br />in Active Teaching Personnel
            </div>
            <div className="doc-subtitle">
              Commonly known as The Affliction, &ldquo;The Grandfather Situation,&rdquo; or simply &ldquo;He&apos;s Still Going&rdquo;
            </div>
          </div>

          <div className="severity-dots">
            <div className="sev-dot" style={{ background: '#2e7d32' }} />
            <div className="sev-dot" style={{ background: '#2e7d32' }} />
            <div className="sev-dot" style={{ background: '#f9a825' }} />
            <div className="sev-dot" style={{ background: '#e65100' }} />
            <div className="sev-dot" style={{ background: '#b71c1c' }} />
            <span className="dot-label">Severity Index: CRITICAL BIOGRAPHICAL</span>
          </div>

          <div className="section-head">Section 1 &mdash; Summary of Violation</div>
          <div className="body-text">
            The subject presents as a member of academic teaching staff assigned to deliver structured instruction on a documented syllabus. In practice, the subject operates as an oral historian with institutional access to a captive audience. Curriculum delivery, where it occurs at all, functions as a transitional device between personal anecdotes. Students arrive expecting instruction. They leave knowing the subject&apos;s mother&apos;s maiden name, the specific year the subject&apos;s uncle made a poor financial decision, and at least one detail about a childhood dog that did not survive the decade.
          </div>

          <div className="alert">
            <div className="alert-head">⚠ Classification Note</div>
            <div className="alert-text">
              This condition is distinct from general disorganization. The subject is organized. They are delivering content with structure, confidence, and often visual aids. The content is simply about themselves and everyone they have ever known. The PowerPoint has a slide titled &ldquo;A Bit of Background.&rdquo; There are fourteen slides before it returns to the course material. There is no course material after slide nineteen.
            </div>
          </div>

          <div className="section-head">Section 2 &mdash; Lecture Time Allocation (Audit Period: One Semester)</div>
          <div className="body-text" style={{ marginBottom: '0.75rem' }}>
            The following represents verified time usage across 28 observed lecture sessions, 90 minutes each, 2,520 minutes total.
          </div>

          <div className="time-chart">
            {[
              { label: 'Actual syllabus content',                   pct: 18, color: '#2e7d32' },
              { label: 'Personal anecdote, unverified',             pct: 34, color: '#e65100' },
              { label: 'Ancestral disclosure, unsolicited',         pct: 22, color: '#b71c1c' },
              { label: '"Back in my day" orientation',              pct: 14, color: '#7b1fa2' },
              { label: 'Explaining what the topic reminds them of', pct:  8, color: '#1565c0' },
              { label: 'Pausing to remember which year it was',     pct:  4, color: '#558b2f' },
            ].map(row => (
              <div className="bar-row" key={row.label}>
                <div className="bar-label">{row.label}</div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${row.pct}%`, background: row.color }} />
                </div>
                <div className="bar-pct">{row.pct}%</div>
              </div>
            ))}
          </div>

          <div className="section-head">Section 3 &mdash; Genealogical Disclosure Index (Involuntary, Per Semester)</div>
          <div className="body-text" style={{ marginBottom: '0.75rem' }}>
            The following family members were disclosed to students enrolled in a course on <span className="redact">redacted</span>. No portion of this information appeared on any examination or contributed to any learning outcome.
          </div>

          <table className="lineage-table">
            <thead>
              <tr>
                <th>Individual</th>
                <th>Disclosed Via</th>
                <th>Relevance to Curriculum</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The subject&apos;s father</td>
                <td>Opening remarks, Week 1</td>
                <td>None confirmed</td>
                <td className="status-u">Recurring presence</td>
              </tr>
              <tr>
                <td>The subject&apos;s father&apos;s brother</td>
                <td>Tangent from Week 3 case study</td>
                <td>Used as cautionary example</td>
                <td className="status-c">Appeared twice more</td>
              </tr>
              <tr>
                <td>Maternal grandmother</td>
                <td>Discussion on Week 6 foundational concepts</td>
                <td>Allegedly &ldquo;understood this intuitively&rdquo;</td>
                <td className="status-u">Full biography delivered</td>
              </tr>
              <tr>
                <td>A childhood neighbor, name: <span className="redact">redacted</span></td>
                <td>Week 9, mid-lecture</td>
                <td>Subject of extended formative memory</td>
                <td className="status-c">Mentioned once more, fondly</td>
              </tr>
              <tr>
                <td>The subject&apos;s first employer</td>
                <td>Weeks 4, 7, 11, and 13</td>
                <td>&ldquo;Everything I know, I learned there&rdquo;</td>
                <td className="status-u">Still mentioned. Still fondly.</td>
              </tr>
              <tr>
                <td>A cousin who &ldquo;almost studied this&rdquo;</td>
                <td>Week 2 introduction</td>
                <td>Established as road not taken</td>
                <td className="status-c">The cousin did not. Noted.</td>
              </tr>
              <tr>
                <td>The subject&apos;s secondary school teacher</td>
                <td>Week 5, unprompted</td>
                <td>&ldquo;Changed everything for me&rdquo;</td>
                <td className="status-u">Full physical description provided</td>
              </tr>
              <tr>
                <td>A dog</td>
                <td>Week 10, context unknown</td>
                <td>None</td>
                <td className="status-u">Deceased. Students informed.</td>
              </tr>
            </tbody>
          </table>

          <div className="two-col" style={{ marginTop: '1.5rem' }}>
            <div>
              <div className="section-head">Section 4 &mdash; Documented Narrative Archetypes</div>
              {[
                { title: 'The Origin Story.', body: 'A 12 to 20 minute account of how the subject came to be in this field. Delivered in Week 1, then again in Week 6 to the students who missed Week 1, and once more in Week 11 for reasons that remain unclear.' },
                { title: 'The Better Era Invocation.', body: 'A structured argument that things were different before, specifically better, and that current students cannot appreciate the difficulty of conditions under which the subject formed their entire worldview.' },
                { title: 'The Parallel Life Disclosure.', body: 'A branch in the narrative where the subject describes the career they almost had. The alternative career is always more interesting than the current one. The subject has mixed feelings about this.' },
                { title: 'The Formative Struggle.', body: 'A period of documented personal adversity, told with enough specificity to function as memoir, inserted during a lecture on something completely unrelated to adversity.' },
                { title: 'The Unsolicited Character Reference.', body: 'An extended account of a person who shaped the subject, delivered with the full authority of someone who has been waiting years to be asked and has now simply stopped waiting.' },
              ].map((item, i) => (
                <div className="finding-item" key={i}>
                  <div className="finding-num">{i + 1}</div>
                  <div className="finding-text"><strong>{item.title}</strong> {item.body}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="section-head">Section 5 &mdash; Student Impact Assessment</div>
              <div className="quote-block">
                &ldquo;I know he was born near a river. I do not know what the course is called. The exam is in three weeks.&rdquo;
                <cite>Anonymous student, Course <span className="redact">redacted</span>, Semester 2</cite>
              </div>
              <div className="quote-block">
                &ldquo;By Week 8 I could have written his biography. I could not have written a paragraph about the subject matter. The two facts sit next to each other in my notebook.&rdquo;
                <cite>Anonymous student, same course, different year</cite>
              </div>
              <div className="quote-block">
                &ldquo;He said this would be relevant later. It was Week 3. We are now in Week 14. The relevance has not arrived. I am still watching for it.&rdquo;
                <cite>Anonymous student, submitted formally, with no apparent urgency</cite>
              </div>
              <div className="info">
                <div className="info-head">ℹ Academic Outcome Note</div>
                <div className="info-text">
                  Students who passed the final examination report having learned the course material entirely from the textbook in the 72 hours prior. They also report knowing the name of the subject&apos;s secondary school, the approximate location of their hometown, and the breed of the dog. None of this appeared on the paper. All of it is retained.
                </div>
              </div>
            </div>
          </div>

          <div className="section-head">Section 6 &mdash; The Transition Mechanism</div>
          <div className="body-text">
            Of particular clinical interest is the subject&apos;s ability to navigate from any syllabus topic to a personal memory with what colleagues have described as &ldquo;invisible infrastructure.&rdquo; No seam is visible in the delivery. The subject begins with a concept. The concept reminds them of a period. The period introduces a person. The person has a story. The story has a moral. The moral circles back toward the original concept but does not arrive. The lecture ends. No student is certain whether this was intentional.
          </div>

          <div className="alert" style={{ marginTop: '1rem' }}>
            <div className="alert-head">⚠ Critical Behavioral Marker: The Pause and Smile</div>
            <div className="alert-text">
              At intervals in the personal narrative, the subject pauses and smiles at a private memory that has surfaced mid-sentence. The smile lasts between 2 and 6 seconds. The room waits. No explanation is provided. The lecture then continues from a point approximately 15 years earlier in the subject&apos;s life. This transition has been timed. It is seamless. It took years to perfect.
            </div>
          </div>

          <div className="section-head">Section 7 &mdash; Recommended Containment Protocols (Student Field Manual)</div>
          {[
            { tag: 'PROTOCOL A', body: <><strong>Pre-emptive question deployment.</strong> Ask a specific course-related question in the first four minutes before the subject locates their own entry point into personal history. A well-placed question forces a brief return to the syllabus. The window is narrow. It is the only window.</> },
            { tag: 'PROTOCOL B', body: <><strong>Strategic note-taking display.</strong> Open the notebook visibly at the start of the narrative. Write something. Write anything. The performance of note-taking has, in isolated cases, caused the subject to briefly believe they are on syllabus content and accelerate toward it. Success rate: low. Attempt anyway.</> },
            { tag: 'PROTOCOL C', body: <><strong>Parallel operation mode.</strong> Accept that the lecture will not cover what it is supposed to cover. Open the textbook. Read the textbook. Maintain an expression of engagement. The subject will not distinguish between a student following the narrative and a student reading about something else entirely, as long as the posture is forward-facing and the nodding is periodic.</> },
            { tag: 'PROTOCOL D', body: <><strong>Active genealogy logging.</strong> Maintain a running family tree in the margin of your notes. Cross-reference across sessions. By the end of semester, a complete diagram will be available. This information will not help you pass. It will, however, be more accurate and detailed than anything else in the notebook.</> },
            { tag: 'OMEGA', body: <><strong>Ask them directly how they ended up here.</strong> Reserved as a last resort in the final lecture of semester only. This question will consume the remaining session in its entirety. However, by the final lecture, the semester is over. The sacrifice is proportional. Several students have used this strategically to avoid a summary quiz. It has worked every time. The subject did not notice. The subject was talking.</> },
          ].map(p => (
            <div className="protocol-item" key={p.tag}>
              <div className="protocol-tag">{p.tag}</div>
              <div className="protocol-text">{p.body}</div>
            </div>
          ))}

          <div className="section-head">Section 8 &mdash; Formal Recommendation</div>
          <div className="body-text">
            This office does not recommend termination or disciplinary action. The subject, in a different context, would be a compelling and valued oral historian. The issue is not the content. The issue is the venue and the captive audience who paid tuition expecting instruction on a different subject entirely. The office recommends a formal reallocation of the subject to a department better suited to their output, specifically any department whose curriculum is defined as &ldquo;the life and times of <span className="redact">redacted</span>.&rdquo; No such department currently exists. This office has filed a proposal. It is pending review. In the meantime, the lectures continue.
          </div>

          <div className="info" style={{ marginTop: '1rem' }}>
            <div className="info-head">ℹ Closing Note from the Review Committee</div>
            <div className="info-text">
              The committee wishes to note that the subject, upon being informed of this review, did not dispute the findings. They asked if the committee had heard about how they first got into academia. The meeting was scheduled for 45 minutes. It lasted two and a half hours. The committee now knows about the river.
            </div>
          </div>
        </div>

        <div className="footnote-bar">
          <span>OCINC/UBD-2026/0041 &nbsp;|&nbsp; Office of Curricular Integrity</span>
          <span>The family tree is available as a supplementary appendix on request</span>
          <span>The dog&apos;s name was <span style={{ color: '#d4a84b' }}>redacted</span></span>
        </div>
      </div>
    </>
  )
}