// case-files/endless-talker.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'endless-talker',
  title: 'OPERATION: DEAD AIR',
  subtitle: 'Surviving the Infinite Talker',
  classificationCode: 'NSA-7742-ORAL',
  department: 'Dept. of Conversational Threat Assessment',
  threatLevel: 'CRITICAL',
  tags: ['social survival', 'field manual', 'extraction protocols'],
}

export default function EndlessTalkerFile() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
        .doc-wrap { font-family: 'Courier New', monospace; background: #f5f0e8; color: #1a1a14; padding: 2rem 2.5rem; border: 1px solid #c8b99a; position: relative; max-width: 680px; }
        .stamp { font-family: 'Special Elite', 'Courier New', serif; font-size: 28px; font-weight: 900; border: 4px solid; display: inline-block; padding: 4px 14px; transform: rotate(-4deg); letter-spacing: 3px; position: absolute; }
        .stamp.top-secret { color: #8b0000; border-color: #8b0000; top: 24px; right: 32px; }
        .stamp.classified { color: #8b0000; border-color: #8b0000; font-size: 16px; margin-bottom: 1rem; position: static; transform: none; display: inline-block; }
        .redact { background: #1a1a14; color: #1a1a14; border-radius: 2px; display: inline; padding: 0 4px; user-select: none; font-size: inherit; }
        .doc-header { border-bottom: 2px solid #1a1a14; padding-bottom: 1rem; margin-bottom: 1.5rem; }
        .doc-header p { font-size: 11px; margin: 2px 0; color: #444; }
        .doc-header .title { font-size: 15px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin: 0.5rem 0 0.2rem; color: #1a1a14; }
        .doc-header .subtitle { font-size: 12px; letter-spacing: 0.5px; color: #555; }
        .section-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin: 1.5rem 0 0.25rem; border-top: 0.5px solid #c8b99a; padding-top: 0.5rem; }
        .section-body { font-size: 13px; line-height: 1.75; color: #2a2a1e; }
        .alert-box { border: 1px solid #8b0000; padding: 0.75rem 1rem; margin: 1rem 0; background: #fff5f5; }
        .alert-box .alert-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #8b0000; font-weight: bold; margin-bottom: 0.4rem; }
        .phase-item { display: flex; gap: 12px; margin: 0.6rem 0; align-items: flex-start; }
        .phase-num { font-size: 10px; background: #1a1a14; color: #f5f0e8; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; font-weight: bold; }
        .phase-text { font-size: 13px; line-height: 1.65; color: #2a2a1e; }
        .phase-text strong { font-weight: bold; }
        .footer-bar { margin-top: 2rem; padding-top: 1rem; border-top: 2px solid #1a1a14; display: flex; justify-content: space-between; align-items: center; font-size: 10px; letter-spacing: 1px; color: #666; }
        .watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-35deg); font-size: 88px; font-weight: 900; color: rgba(139,0,0,0.05); letter-spacing: 6px; pointer-events: none; white-space: nowrap; font-family: 'Special Elite', serif; z-index: 0; }
        .content-z { position: relative; z-index: 1; }
        .code-ref { font-size: 10px; background: #e8e0d0; padding: 1px 6px; border-radius: 2px; letter-spacing: 1px; }
        .exhibit { border-left: 3px solid #c8b99a; padding: 0.5rem 0.75rem; margin: 0.75rem 0; background: #ede8da; font-size: 12px; font-style: italic; color: #444; }
        .threat-level { display: inline-flex; gap: 4px; align-items: center; margin: 0.5rem 0 1rem; }
        .threat-dot { width: 14px; height: 14px; border-radius: 50%; }
        .threat-label { font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #555; margin-left: 6px; }
      `}</style>

      <div className="doc-wrap">
        <div className="watermark">CLASSIFIED</div>
        <div className="content-z">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '0.5rem' }}>
            <div className="stamp classified">TOP SECRET // EYES ONLY</div>
            <div style={{ fontSize: '10px', textAlign: 'right', color: '#888', lineHeight: 1.6 }}>
              DOCUMENT ID: <span className="code-ref">NSA-7742-ORAL</span><br />
              DISTRIBUTION: LEVEL 5 ONLY<br />
              COPY 3 OF 3
            </div>
          </div>

          <div className="doc-header">
            <p>NATIONAL SOCIAL ENDURANCE AUTHORITY</p>
            <p>DEPARTMENT OF CONVERSATIONAL THREAT ASSESSMENT</p>
            <div className="threat-level">
              <div className="threat-dot" style={{ background: '#2e7d32' }}></div>
              <div className="threat-dot" style={{ background: '#f9a825' }}></div>
              <div className="threat-dot" style={{ background: '#c62828' }}></div>
              <div className="threat-dot" style={{ background: '#c62828' }}></div>
              <div className="threat-dot" style={{ background: '#c62828' }}></div>
              <span className="threat-label">Threat level: CRITICAL VERBAL</span>
            </div>
            <div className="title">OPERATION: DEAD AIR</div>
            <div className="subtitle">Field Manual for Surviving the Infinite Talker &nbsp;|&nbsp; Edition 9, Rev. 4</div>
          </div>

          <div className="section-label">Section 1 &mdash; Threat Profile</div>
          <div className="section-body">
            The subject known internally as <strong>THE ENDLESS ONE</strong> presents as a civilian with no apparent awareness that conversation is a bilateral activity. Field operatives have described encounters lasting between 47 minutes and <span className="redact">classified</span> hours with zero opportunity for extraction. The subject shows no response to standard termination signals including the look-at-watch maneuver, the &quot;anyway&quot; pivot, or the slowly-backing-away-while-nodding technique.
          </div>

          <div className="exhibit">
            &quot;He trapped me at the printer. I went in for paper. I came out with a complete understanding of his brother-in-law&apos;s 2019 knee surgery.&quot; &mdash; Field Operative <span className="redact">REDACTED</span>, Lagos Station
          </div>

          <div className="alert-box">
            <div className="alert-label">&#9888; Critical Warning</div>
            The subject interprets eye contact as consent. The subject interprets lack of eye contact as an invitation to lean closer. There is no correct response. You are already in the scenario.
          </div>

          <div className="section-label">Section 2 &mdash; Known Entry Points (How You Got Here)</div>
          <div className="section-body">
            The following were all confirmed entry points for multi-hour detainment. You were warned about none of them.
          </div>
          <div style={{ margin: '0.5rem 0 0.25rem' }}>
            <div className="phase-item"><div className="phase-num">A</div><div className="phase-text">Asking &quot;how are you?&quot; as a formality. The subject answered. In full.</div></div>
            <div className="phase-item"><div className="phase-num">B</div><div className="phase-text">Making brief eye contact across a room at a social event. You nodded. They took it as a summons.</div></div>
            <div className="phase-item"><div className="phase-num">C</div><div className="phase-text">Standing still for more than 8 consecutive seconds anywhere near the subject&apos;s known perimeter.</div></div>
            <div className="phase-item"><div className="phase-num">D</div><div className="phase-text">Saying &quot;interesting&quot; once. Just once. To fill a pause. The subject registered this as encouragement to go deeper.</div></div>
          </div>

          <div className="section-label">Section 3 &mdash; Approved Extraction Protocols</div>
          <div className="section-body">
            The following techniques are listed in order of escalating desperation. Begin at Protocol ALPHA. Progress only if previous protocol has failed.
          </div>
          <div className="phase-item" style={{ marginTop: '0.75rem' }}><div className="phase-num">1</div><div className="phase-text"><strong>Protocol ALPHA &mdash; The False Departure.</strong> Announce a destination. &quot;I have to get some water.&quot; Begin moving. Do not stop moving. The kitchen was never the destination. You are now outside.</div></div>
          <div className="phase-item"><div className="phase-num">2</div><div className="phase-text"><strong>Protocol BETA &mdash; The Phantom Vibration.</strong> Look at phone. Furrow brow with controlled urgency. Say &quot;oh no&quot; under breath. This works approximately <span className="redact">62</span>% of the time. In the remaining cases the subject will ask what happened and the conversation will restart from the beginning about someone else entirely.</div></div>
          <div className="phase-item"><div className="phase-num">3</div><div className="phase-text"><strong>Protocol GAMMA &mdash; Conversational Judo.</strong> Identify a third person across the room. Say &quot;oh, I actually need to quickly speak to <span className="redact">REDACTED</span> before they leave.&quot; Walk toward that person. That person is a casualty of war. Brief them later.</div></div>
          <div className="phase-item"><div className="phase-num">4</div><div className="phase-text"><strong>Protocol DELTA &mdash; The Sincere Summary.</strong> Wait for a breath. Interrupt with warmth. &quot;This has been so good, I don&apos;t want to keep you.&quot; This deploys the subject&apos;s own politeness against them. Success rate: moderate. The subject may respond &quot;oh no you&apos;re not keeping me at all!&quot; and continue for another 35 minutes.</div></div>
          <div className="phase-item"><div className="phase-num">5</div><div className="phase-text"><strong>Protocol OMEGA &mdash; Controlled Sacrifice.</strong> Reserved for critical situations only. You begin a story of your own. You make it boring. Deliberately, professionally boring. The subject, who has never listened to another person speak, will begin looking for their own exit. You have now reversed the dynamic. <strong>Use sparingly.</strong> This is how monsters are made.</div></div>

          <div className="section-label">Section 4 &mdash; Survival Posture (If Extraction Has Failed)</div>
          <div className="section-body">
            If all protocols have failed, you are in a sustained engagement. Your mission is no longer escape. It is <strong>psychological preservation.</strong>
          </div>
          <div style={{ marginTop: '0.75rem' }}>
            <div className="phase-item"><div className="phase-num">i</div><div className="phase-text">Maintain a neutral facial expression at all times. Do not smile at something funny. Smiling signals that you are enjoying this.</div></div>
            <div className="phase-item"><div className="phase-num">ii</div><div className="phase-text">Engage a parallel mental process. Mentally redesign a room you know. Solve a small math problem. Plan tomorrow. Your body is present. Your mind is on assignment elsewhere.</div></div>
            <div className="phase-item"><div className="phase-num">iii</div><div className="phase-text">Deploy the <strong>Slow Nod Cycle</strong> at a frequency of once every 8 to 12 seconds. This communicates processing and engagement without encouraging acceleration. Do not vary the cadence. Variation reads as interest.</div></div>
            <div className="phase-item"><div className="phase-num">iv</div><div className="phase-text">Under no circumstances ask a follow-up question. Not even reflexively. Especially not &quot;really?&quot; Not even &quot;wow.&quot; Silence, though uncomfortable, is your only remaining weapon.</div></div>
          </div>

          <div className="alert-box" style={{ borderColor: '#6d4c00', background: '#fffbf0' }}>
            <div className="alert-label" style={{ color: '#6d4c00' }}>&#9888; Field Note &mdash; The Second Wind Phenomenon</div>
            At approximately the 40-minute mark, the subject may pause. This is not the end. This is breath. The subject is refueling. Operatives who have mistaken this pause for a closing have, on record, triggered a second wave lasting longer than the first. Do not move too early. Wait for a genuine topic change that circles back to the beginning. <em>That</em> is the end. That is their closing ceremony.
          </div>

          <div className="section-label">Section 5 &mdash; Post-Encounter Debrief</div>
          <div className="section-body">
            Upon successful extraction, proceed to a quiet location immediately. Consume water. Stare at a wall for a duration proportional to minutes spent in the field. Do not recount the interaction to others in detail, as this reactivates the experience in a way that is clinically indistinguishable from reliving it. File a brief internal report. Mark the subject&apos;s location on your personal threat map. Update your entry routes accordingly.
          </div>

          <div className="footer-bar">
            <span>OPERATION: DEAD AIR &nbsp;|&nbsp; <span className="code-ref">NSA-7742-ORAL</span></span>
            <span>DESTROY AFTER MEMORIZATION</span>
            <span>PAGE 1 OF 1 (THERE IS NO PAGE 2. LEAVE.)</span>
          </div>
        </div>
      </div>
    </>
  )
}