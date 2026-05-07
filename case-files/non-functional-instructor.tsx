// case-files/non-functional-instructor.tsx
'use client'

import { useState } from 'react'
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'non-functional-instructor',
  title: 'Emergency Academic Field Card',
  subtitle: 'Issued to Students Enrolled Under a Non-Functional Instructor',
  classificationCode: 'EAF-CARD-NF1',
  department: 'Dept. of Academic Endurance',
  threatLevel: 'CRITICAL',
  tags: ['academic survival', 'field card', 'instructor noncompliance'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap');

  .card-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

  .card-wrap {
    font-family: 'Lora', Georgia, serif;
    background: #e8e0cc;
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 32px 16px;
    background-image: url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.6' fill='%23c8bc9e' opacity='0.4'/%3E%3C/svg%3E");
  }

  .card {
    max-width: 580px;
    width: 100%;
    background: #f5edd8;
    border: 1px solid #b8a880;
    box-shadow: 4px 4px 0 #b8a880, 8px 8px 0 rgba(0,0,0,0.08);
    position: relative;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 4px;
    border: 1px dashed #c8b888;
    pointer-events: none;
    z-index: 0;
  }

  .card > * { position: relative; z-index: 1; }

  .card-header {
    background: #2d3a1e;
    padding: 18px 24px 16px;
    border-bottom: 3px solid #4a6030;
  }

  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .issue-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    color: #8aaa60;
    text-transform: uppercase;
  }

  .card-num {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #5a7040;
    letter-spacing: 1px;
  }

  .card-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    letter-spacing: 2px;
    color: #f0e4b8;
    line-height: 1;
    margin-bottom: 4px;
  }

  .card-sub {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #8aaa60;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .situation-band {
    background: #c8520a;
    padding: 10px 24px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sit-icon { font-size: 16px; }

  .sit-text {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #fff;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .card-body { padding: 0 24px 24px; }

  .section {
    border-bottom: 1px solid #d4c498;
    padding: 18px 0;
  }

  .section:last-child { border-bottom: none; }

  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #7a6a3a;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #d4c498;
  }

  .body-text {
    font-size: 14px;
    color: #2a1f0e;
    line-height: 1.75;
  }

  .body-text em {
    font-style: italic;
    color: #5a3a10;
  }

  .week-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .week-row {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 12px;
    align-items: start;
  }

  .week-tag {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #f5edd8;
    background: #5a4a20;
    padding: 3px 8px;
    text-align: center;
    letter-spacing: 1px;
    margin-top: 3px;
    white-space: nowrap;
  }

  .week-text {
    font-size: 13.5px;
    color: #2a1f0e;
    line-height: 1.6;
    font-family: 'Lora', serif;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .do-box {
    border: 1.5px solid #4a6030;
    padding: 12px;
  }

  .dont-box {
    border: 1.5px solid #8b2010;
    padding: 12px;
  }

  .box-head {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .do-box .box-head { color: #4a6030; }
  .dont-box .box-head { color: #8b2010; }

  .tool-item {
    display: flex;
    gap: 8px;
    margin-bottom: 6px;
    align-items: flex-start;
  }

  .tool-bullet {
    width: 6px;
    height: 6px;
    background: #4a6030;
    flex-shrink: 0;
    margin-top: 6px;
  }

  .dont-bullet {
    width: 6px;
    height: 6px;
    background: #8b2010;
    flex-shrink: 0;
    margin-top: 6px;
  }

  .tool-text {
    font-size: 12.5px;
    color: #2a1f0e;
    line-height: 1.5;
    font-family: 'Lora', serif;
  }

  .callout {
    background: #2d3a1e;
    padding: 14px 18px;
    margin-top: 16px;
  }

  .callout-head {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #8aaa60;
    margin-bottom: 6px;
  }

  .callout-text {
    font-size: 13px;
    color: #d4c898;
    line-height: 1.65;
    font-family: 'Lora', serif;
    font-style: italic;
  }

  .vs-grid {
    display: grid;
    grid-template-columns: 1fr 16px 1fr;
    gap: 8px;
    align-items: start;
  }

  .vs-col-head {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .vs-col-head.claimed { color: #4a6030; }
  .vs-col-head.reality { color: #8b2010; }

  .vs-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 22px;
  }

  .vs-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 18px;
    color: #b8a880;
    letter-spacing: 1px;
  }

  .vs-item {
    font-size: 13px;
    color: #2a1f0e;
    line-height: 1.55;
    padding: 7px 0;
    border-bottom: 1px dashed #d4c498;
    font-family: 'Lora', serif;
  }

  .vs-item:last-child { border-bottom: none; }

  .stamp-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .stamp {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    border: 2px solid #8b2010;
    color: #8b2010;
    padding: 3px 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transform: rotate(-1.5deg);
    display: inline-block;
    opacity: 0.85;
  }

  .card-footer {
    background: #2d3a1e;
    padding: 10px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
  }

  .footer-text {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #5a7040;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .final-line {
    background: #c8520a;
    padding: 10px 24px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #fff;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
  }
`

export default function NonFunctionalInstructor() {
  const [revealed, setRevealed] = useState(false)
  void revealed // field reserved for future interactive reveal; suppress lint

  return (
    <>
      <style>{styles}</style>
      <div className="card-wrap">
        <div className="card">

          <div className="card-header">
            <div className="header-top">
              <div className="issue-tag">Emergency Academic Field Card</div>
              <div className="card-num">ISSUANCE: EVERY SEMESTER, INDEFINITELY</div>
            </div>
            <div className="card-title">ACADEMIC SURVIVAL GUIDE</div>
            <div className="card-sub">For students enrolled under a non-functional instructor</div>
          </div>

          <div className="situation-band">
            <div className="sit-icon">⚠</div>
            <div className="sit-text">Situation: You are in a course. The course has a lecturer. These two facts are unrelated.</div>
          </div>

          <div className="card-body">

            <div className="section">
              <div className="section-label">Assess your situation</div>
              <div className="body-text">
                You are enrolled in a course with documented learning outcomes, a syllabus, and a lecturer who has read neither.
                The textbook is on the table. You have a copy. The lecturer has a copy.
                <em> You will understand yours first.</em> This is not an accident. This is the situation.
              </div>
            </div>

            <div className="section">
              <div className="section-label">How the semester unfolds</div>
              <div className="week-list">
                {[
                  ["Week 1", "Confident introduction. Syllabus distributed. You are cautiously optimistic. File that feeling away. You will need it later for contrast."],
                  ["Week 2", "First deviation. The topic starts correctly, pivots to something adjacent, then to something unrelated, then arrives somewhere that is not on any known curriculum."],
                  ["Week 3", "A student asks a question. The lecturer reads the relevant paragraph back. Slowly. Then louder. The paragraph answers a different question entirely."],
                  ["Week 4", "The course material has been left behind. What continues is a lecture about the course material, delivered by someone who is also trying to understand the course material in real time."],
                  ["Weeks 5–12", "Stable chaos. Each session covers something. Nobody is certain what. Notes from this period will not be useful for the exam. They will not be useless either. They are simply unclassifiable."],
                  ["Finals", "The exam is entirely based on the textbook. The textbook you have been reading alone since Week 3. You are prepared. Not because of the lectures. This is the detail that stays with you."],
                ].map(([tag, text]) => (
                  <div className="week-row" key={tag}>
                    <div className="week-tag">{tag}</div>
                    <div className="week-text">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <div className="section-label">What is happening, officially vs actually</div>
              <div className="vs-grid">
                <div>
                  <div className="vs-col-head claimed">What is claimed</div>
                  {[
                    "Delivering a structured lecture",
                    "Explaining a concept",
                    "Providing an example",
                    "Answering the question",
                    "Clarifying the diagram",
                  ].map(t => <div className="vs-item" key={t}>{t}</div>)}
                </div>
                <div className="vs-divider"><div className="vs-text">VS</div></div>
                <div>
                  <div className="vs-col-head reality">What is happening</div>
                  {[
                    "Reading the slide for the first time, aloud, to an audience",
                    "Explaining what the concept is called, not what it means",
                    "Providing an example from a different subject entirely",
                    "Reading the question back with rising inflection",
                    "Drawing a new diagram that also requires clarification",
                  ].map(t => <div className="vs-item" key={t}>{t}</div>)}
                </div>
              </div>

              <div className="callout">
                <div className="callout-head">Field observation</div>
                <div className="callout-text">
                  The lecturer is not confused about the subject. They are confident.
                  This is the detail that makes the situation what it is.
                  Confusion you can work with. Confident wrongness has its own gravity.
                  It pulls everything nearby into a different orbit.
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-label">Survival protocol</div>
              <div className="two-col">
                <div className="do-box">
                  <div className="box-head">Use these</div>
                  {[
                    "The textbook. Read it. All of it. Before the lecture if possible.",
                    "YouTube. Eight minutes. Clearer than fourteen weeks.",
                    "Past exam papers. The questions do not change because the understanding required does not change.",
                    "A classmate who also read the textbook. Compare notes. Fill the gaps.",
                    "Office hours at another department. Knock. Explain. Ask.",
                  ].map(t => (
                    <div className="tool-item" key={t}>
                      <div className="tool-bullet" />
                      <div className="tool-text">{t}</div>
                    </div>
                  ))}
                </div>
                <div className="dont-box">
                  <div className="box-head">Do not attempt</div>
                  {[
                    "Asking for clarification during the lecture. This triggers a second reading of the same passage.",
                    "Attending expecting to learn. Attend for the register. Adjust expectations accordingly.",
                    "Trusting the worked example on the board. Verify it independently before writing it down.",
                    "Assuming the digression will return to the point. It will not. The point has been abandoned.",
                    "Waiting for it to click. It will not click. The click must be arranged privately, with the textbook.",
                  ].map(t => (
                    <div className="tool-item" key={t}>
                      <div className="dont-bullet" />
                      <div className="tool-text">{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="section" style={{ borderBottom: 'none' }}>
              <div className="section-label">Before you leave this course</div>
              <div className="body-text">
                You will pass. The material is learnable. The subject is not the problem.
                The delivery is not teaching. The textbook is. The internet is. You are.
                There is a version of this semester where you come out understanding the subject
                better than students who had a functioning instructor, because you had to learn it
                rather than be told it.
                <em> That version is still available to you.</em>
              </div>
              <div className="stamp-row">
                <div className="stamp">Instructor: Non-Functional</div>
                <div className="stamp">Student: Responsible For Everything</div>
              </div>
            </div>

          </div>

          <div className="card-footer">
            <div className="footer-text">Issued upon enrollment detection</div>
            <div className="footer-text">Valid for the duration of the semester</div>
            <div className="footer-text">Do not return to sender</div>
          </div>

          <div className="final-line">
            The course outline was a work of optimistic fiction. The textbook was always the course.
          </div>

        </div>
      </div>
    </>
  )
}