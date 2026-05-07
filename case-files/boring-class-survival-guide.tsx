// case-files/boring-class-survival-guide.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'boring-class-survival-guide',
  title: 'The Boring Class Survival Manual',
  subtitle: 'Surviving an Excruciatingly Boring Class',
  classificationCode: 'DAE-3RD-ED',
  department: 'Dept. of Academic Endurance',
  threatLevel: 'CRITICAL',
  tags: ['academic survival', 'field manual', 'mental escape'],
}

export default function BoringClassSurvivalGuideFile() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');
        
        .boring-wrapper {
          --cream: #f5f0e8;
          --dark: #1a1410;
          --ink: #2c2318;
          --red: #c0392b;
          --faded: #8a7a6a;
          --stamp: rgba(192, 57, 43, 0.15);
          --paper: #ede8dc;

          background: #2a2520;
          font-family: 'Courier Prime', monospace;
          color: var(--ink);
          min-height: 100vh;
          padding: 40px 20px;
          background-image:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              rgba(255,255,255,0.01) 80px,
              rgba(255,255,255,0.01) 81px
            );
        }

        .boring-wrapper * {
          box-sizing: border-box;
        }

        .boring-wrapper .page {
          max-width: 780px;
          margin: 0 auto;
          background: var(--cream);
          padding: 60px 70px;
          position: relative;
          box-shadow: 0 20px 80px rgba(0,0,0,0.6), inset 0 0 120px rgba(0,0,0,0.05);
          border: 1px solid #d4c9b0;
        }

        .boring-wrapper .page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .boring-wrapper .page > * { position: relative; z-index: 1; }

        .boring-wrapper .page::after {
          content: '';
          position: absolute;
          left: 90px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(192, 57, 43, 0.3);
          pointer-events: none;
        }

        .boring-wrapper .stamp {
          position: absolute;
          top: 50px;
          right: 60px;
          border: 3px solid var(--red);
          color: var(--red);
          font-family: 'Courier Prime', monospace;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 3px;
          padding: 8px 14px;
          text-transform: uppercase;
          transform: rotate(7deg);
          opacity: 0.55;
          line-height: 1.6;
          text-align: center;
        }

        .boring-wrapper header {
          text-align: center;
          border-bottom: 2px solid var(--ink);
          padding-bottom: 30px;
          margin-bottom: 36px;
        }

        .boring-wrapper .eyebrow {
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--faded);
          margin-bottom: 12px;
        }

        .boring-wrapper h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 5vw, 46px);
          font-weight: 900;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 8px;
        }

        .boring-wrapper h1 em {
          font-style: italic;
          color: var(--red);
        }

        .boring-wrapper .subtitle {
          font-size: 12px;
          letter-spacing: 2px;
          color: var(--faded);
          text-transform: uppercase;
          margin-top: 10px;
        }

        .boring-wrapper .intro {
          font-size: 14px;
          line-height: 1.9;
          color: var(--ink);
          margin-bottom: 40px;
          padding: 20px 24px;
          border-left: 3px solid var(--ink);
          background: rgba(0,0,0,0.03);
          font-style: italic;
        }

        .boring-wrapper .section {
          margin-bottom: 44px;
        }

        .boring-wrapper .section-header {
          display: flex;
          align-items: baseline;
          gap: 14px;
          margin-bottom: 18px;
          border-bottom: 1px solid #c9bfaa;
          padding-bottom: 10px;
        }

        .boring-wrapper .section-num {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--red);
          opacity: 0.4;
          line-height: 1;
          min-width: 32px;
        }

        .boring-wrapper h2 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: 0.3px;
          margin: 0;
        }

        .boring-wrapper .entry {
          margin-bottom: 20px;
          padding-left: 16px;
        }

        .boring-wrapper .entry-title {
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--ink);
          margin-bottom: 5px;
        }

        .boring-wrapper .entry-body {
          font-size: 13.5px;
          line-height: 1.85;
          color: #3d3228;
        }

        .boring-wrapper .entry-body .aside {
          font-style: italic;
          color: var(--faded);
        }

        .boring-wrapper .warning-box {
          border: 1.5px solid var(--red);
          padding: 14px 18px;
          margin: 28px 0;
          position: relative;
          background: rgba(192, 57, 43, 0.04);
        }

        .boring-wrapper .warning-box .tag {
          position: absolute;
          top: -10px;
          left: 14px;
          background: var(--cream);
          padding: 0 8px;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red);
          font-weight: 700;
        }

        .boring-wrapper .warning-box p {
          font-size: 13px;
          line-height: 1.8;
          color: var(--ink);
          font-style: italic;
        }

        .boring-wrapper .field-notes {
          background: var(--paper);
          border: 1px solid #c9bfaa;
          padding: 20px 24px;
          margin: 28px 0;
          font-size: 12.5px;
          line-height: 1.9;
          color: var(--faded);
        }

        .boring-wrapper .field-notes .label {
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--faded);
          display: block;
          margin-bottom: 8px;
          border-bottom: 1px solid #c9bfaa;
          padding-bottom: 6px;
        }

        .boring-wrapper .survival-rating {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: var(--ink);
          color: var(--cream);
          padding: 2px 8px;
          margin-left: 6px;
          vertical-align: middle;
        }

        .boring-wrapper .survival-rating.high { background: #2d6a4f; }
        .boring-wrapper .survival-rating.medium { background: #b87a00; }
        .boring-wrapper .survival-rating.low { background: var(--red); }

        .boring-wrapper hr.divider {
          border: none;
          border-top: 1px solid #c9bfaa;
          margin: 40px 0;
        }

        .boring-wrapper .colophon {
          text-align: center;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--faded);
          padding-top: 20px;
          border-top: 1px solid #c9bfaa;
          line-height: 2;
        }

        .boring-wrapper .handwritten {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 15px;
          color: var(--faded);
        }

        .boring-wrapper .toc {
          columns: 2;
          column-gap: 40px;
          margin-bottom: 40px;
          font-size: 12px;
          line-height: 2.2;
          color: var(--faded);
          border: 1px solid #c9bfaa;
          padding: 20px 24px;
          background: rgba(0,0,0,0.02);
        }

        .boring-wrapper .toc .toc-label {
          column-span: all;
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 12px;
          color: var(--ink);
          display: block;
          border-bottom: 1px solid #c9bfaa;
          padding-bottom: 8px;
        }

        .boring-wrapper .toc-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dotted #c9bfaa;
          padding-bottom: 2px;
        }

        @media (max-width: 640px) {
          .boring-wrapper .page { padding: 40px 24px; }
          .boring-wrapper .page::after { left: 44px; }
          .boring-wrapper .stamp { top: 20px; right: 20px; font-size: 9px; }
          .boring-wrapper .toc { columns: 1; }
        }
      `}</style>

      <div className="boring-wrapper">
        <div className="page">
          <div className="stamp">For Official<br/>Academic Use<br/>Only</div>

          <header>
            <p className="eyebrow">A Comprehensive Field Manual</p>
            <h1>Surviving an<br/><em>Excruciatingly</em><br/>Boring Class</h1>
            <p className="subtitle">Third Edition &bull; Revised and Expanded &bull; Still Depressing</p>
          </header>

          <div className="intro">
            This manual exists because some lectures are not designed to teach you anything. They are designed to exist. The lecturer arrived. You arrived. Time, indifferent and cruel, has agreed to pass very slowly. What follows is the collected wisdom of survivors... people who sat through those classes and came out the other side with their soul only partially evacuated. Read carefully. Your GPA will not benefit from this guide. Your sanity might.
          </div>

          <div className="toc">
            <span className="toc-label">Contents</span>
            <div className="toc-item"><span>I. Pre-Class Preparation</span><span>p.1</span></div>
            <div className="toc-item"><span>II. The First Five Minutes</span><span>p.1</span></div>
            <div className="toc-item"><span>III. Mental Escape Tactics</span><span>p.2</span></div>
            <div className="toc-item"><span>IV. The Clock Problem</span><span>p.2</span></div>
            <div className="toc-item"><span>V. Dealing with the Lecturer</span><span>p.3</span></div>
            <div className="toc-item"><span>VI. Classmate Operations</span><span>p.3</span></div>
            <div className="toc-item"><span>VII. Emergency Protocols</span><span>p.4</span></div>
            <div className="toc-item"><span>VIII. The Exit Strategy</span><span>p.4</span></div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-num">I</span>
              <h2>Pre-Class Preparation <span className="survival-rating high">Critical</span></h2>
            </div>
            <div className="entry">
              <p className="entry-title">Choose Your Seat Like a Hostage Negotiator</p>
              <p className="entry-body">The middle of the middle row is where hope goes to die. You are visible from every angle, surrounded by people equally suffering, with no wall to stare at meaningfully. Sit along the periphery. Specifically: back corner, near a window, aisle seat. The window is not for escaping. It is for watching birds and briefly becoming a poet. The aisle is for dignity... the ability to leave without climbing over four knees and a bag of chin chin.</p>
            </div>
            <div className="entry">
              <p className="entry-title">Arrive With the Correct Mental Framework</p>
              <p className="entry-body">Do not arrive expecting education. Expectation is the enemy. You are not here to learn. You are here to endure. Think of it like a flight. You are not traveling for the experience of sitting in a metal tube breathing recycled air next to a stranger eating eggs. You are traveling for the destination. Attendance is the destination. Adjust accordingly. <span className="aside">(The destination is your transcript. The transcript leads to your degree. The degree leads to an office where you will also be bored, but at least they will pay you for it.)</span></p>
            </div>
            <div className="entry">
              <p className="entry-title">Load Your Weapons</p>
              <p className="entry-body">Phone on silent. Not vibrate. Silent. Vibrate is a sound that everyone hears and that you will fumble to silence while the lecturer pauses and looks directly at you. Bring a notebook even if you will not use it. The notebook is a prop. It signals to the lecturer that you are engaged. It signals to yourself that you arrived with intentions. Both of these things are lies, but comfortable ones.</p>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-num">II</span>
              <h2>The First Five Minutes <span className="survival-rating medium">Dangerous</span></h2>
            </div>
            <div className="entry">
              <p className="entry-title">Do Not Let the Opening Get You</p>
              <p className="entry-body">The first five minutes of a boring class are disproportionately lethal. You still have the memory of the outside world. You remember that air existed, that you had plans, that you were, at some point today, a person with forward momentum. The contrast is brutal. Do not feel it. Transition into operational mode immediately. Unpack slowly. Arrange things on your desk as though you are a surgeon preparing for a procedure. You need something to do with your hands in these early minutes, or your brain will begin computing exactly how many total hours you have spent in this room across the semester, and you will become briefly inconsolable.</p>
            </div>
            <div className="warning-box">
              <span className="tag">Field Warning</span>
              <p>Never make eye contact with the lecturer in the first three minutes. They are still calibrating their energy. Early eye contact is interpreted as enthusiasm and will result in you being called upon, engaged directly, or worse... asked to &quot;come up and share your thoughts.&quot; There are no thoughts. There is only survival.</p>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-num">III</span>
              <h2>Mental Escape Tactics <span className="survival-rating high">Core Skill</span></h2>
            </div>
            <div className="entry">
              <p className="entry-title">The Planning Trance</p>
              <p className="entry-body">Use the specific, anxious clarity that this room somehow produces to plan things you have been avoiding. Not vague intentions. Precise logistics. The exact words you will use when you finally reply to that message you have been sitting on for eleven days. The precise argument you will make to get an extension on a different assignment. The detailed sequence of events that would need to occur for your life to look the way you want it to. None of this will happen. You will leave the class, step into sunlight, and forget every word of it within four minutes. But the planning will be vivid and detailed, and by the time you accept that, fifty minutes will have passed, which is the closest thing to a miracle this particular classroom will ever produce.</p>
            </div>
            <div className="entry">
              <p className="entry-title">The Character Study</p>
              <p className="entry-body">Pick a classmate and construct their entire biography from observable evidence only. The bag tells you their financial situation. The shoes tell you their relationship with self-image. The way they hold their pen tells you if they are a firstborn. You will almost certainly be wrong about everything. That is not the point. The point is that you have spent twenty minutes being a novelist, and novelists, famously, do not suffer from boredom in the same way that normal people do.</p>
            </div>
            <div className="entry">
              <p className="entry-title">The Slow Debate</p>
              <p className="entry-body">Choose a mild opinion you hold and argue against it, internally, with full commitment. If you believe that morning people are disciplined, spend the next fifteen minutes prosecuting that idea. Where does that belief come from. What does it actually explain. What is the strongest possible case against it. You will reach no conclusion. That is fine. This is not a court. The prosecution never rests, the defense never arrives, and the judge is the person two rows ahead of you who appears to have been asleep since the second slide. The case stays open. That is the point. An unresolved internal argument has no natural endpoint, which means it will continue for exactly as long as you need it to.</p>
            </div>
            <div className="field-notes">
              <span className="label">Field Note No. 7</span>
              Do not, under any circumstances, begin counting ceiling tiles, chair legs, or the number of times the lecturer says &quot;essentially.&quot; These activities feel productive but they are traps. Once you start, you cannot stop. You will lose count, restart, lose count again, and finish the class feeling like you failed at the one thing you were trying to do. It is not a good feeling. It is the most specific kind of failure there is.
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-num">IV</span>
              <h2>The Clock Problem <span className="survival-rating low">Severe</span></h2>
            </div>
            <div className="entry">
              <p className="entry-title">Never Check the Time in the First Half</p>
              <p className="entry-body">Checking the time before the class is halfway over is a profound strategic error. You will look at the clock and see that eleven minutes have passed. Eleven. You will do the mental arithmetic of how many minutes remain, and the number will be so large that something inside you will briefly give up. Time in a boring class behaves like a government queue. It does not move. It rests. Occasionally it inches forward, then appears to move backward, and no one can explain this.</p>
            </div>
            <div className="entry">
              <p className="entry-title">The Commitment Method</p>
              <p className="entry-body">You may not check the time until you have finished whatever mental task you started. Finish the character study. Prosecute your opinion to a satisfying stalemate. Determine with specificity what you will eat the moment this ends. Only when the work is complete may you consult the clock. The discipline here is not in completing the task. The discipline is in refusing to look. The clock knows you want to look. The clock is the only entity in this room that is fully engaged, and it is spending that engagement watching you suffer. Do not give it the satisfaction. Make it wait for you, for once.</p>
            </div>
            <div className="warning-box">
              <span className="tag">Emergency Note</span>
              <p>If you catch yourself watching the second hand of a clock move in real time, you have crossed into a medically concerning zone of boredom. This is the academic equivalent of staring at a wall and seeing it breathe. Close your eyes. Breathe. Reread the first page of your notes as though they contain hidden messages. They do not contain hidden messages. But the search will take about four minutes, which is four minutes you did not spend watching a second hand.</p>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-num">V</span>
              <h2>Dealing With the Lecturer <span className="survival-rating medium">Delicate</span></h2>
            </div>
            <div className="entry">
              <p className="entry-title">The Art of Looking Engaged</p>
              <p className="entry-body">The slow, deliberate nod is your most powerful tool. It communicates comprehension, agreement, and active listening. It communicates none of these things. What it actually does is release you from the social obligation of maintaining eye contact, because a nod is itself a form of acknowledgment that resets the attention timer. Nod once every two to four minutes. Any more and you look like you are malfunctioning. Any less and the lecturer&apos;s eye begins to drift toward you with the specific suspicion of the underwhelmed teacher.</p>
            </div>
            <div className="entry">
              <p className="entry-title">The Single Good Question</p>
              <p className="entry-body">Ask one question per semester in any given boring class. Not per lecture. Per semester. One question that is genuine, slightly unexpected, and mildly interesting. Something that makes the lecturer pause for two seconds before answering. This question does three things: it establishes you as a thinker in their memory, it earns you approximately three weeks of not being called upon, and it occasionally... occasionally... makes the class interesting for four minutes. These four minutes are precious. Protect them.</p>
            </div>
            <div className="entry">
              <p className="entry-title">On Lecturers Who Read Directly From the Slide</p>
              <p className="entry-body">These are a specific category of academic hazard. They have removed the one compelling reason to attend a lecture, which is that a human being might say something the slide does not say. Accept this reality early. The class is now a group reading session. You have permission, morally and cosmically, to read the slide yourself and then think about something else entirely. You are not being disrespectful. You are being efficient. The lecturer has already surrendered the room.</p>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-num">VI</span>
              <h2>Classmate Operations <span className="survival-rating medium">Variable</span></h2>
            </div>
            <div className="entry">
              <p className="entry-title">The Mutual Acknowledgment Protocol</p>
              <p className="entry-body">Brief, wordless eye contact with a fellow sufferer, followed by the smallest possible eyebrow raise... this is one of the most human exchanges available to you in an academic environment. It says: I see you. I, too, am here. We are not alone in this particular version of purgatory. Do not do more than this. Do not lean over and whisper. Do not pass notes. You are not children. Also, the lecturer will notice immediately and it will make the remaining time actively worse for both of you.</p>
            </div>
            <div className="entry">
              <p className="entry-title">On the Person Who Is Visibly Interested</p>
              <p className="entry-body">There is always one. Sitting near the front, slightly forward in their chair, nodding with what appears to be genuine enthusiasm. Do not resent them. Study them, carefully, from a distance, the way a naturalist observes a rare and baffling species. At some point in the future, in an office somewhere, this person will explain a quarterly reporting process to a new colleague with this same exact energy, and that colleague will look at them precisely the way you are looking at them right now. You are not witnessing engagement. You are witnessing a preview. The future is legible from this seat, if you know what you are looking at.</p>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-num">VII</span>
              <h2>Emergency Protocols <span className="survival-rating low">Last Resort</span></h2>
            </div>
            <div className="entry">
              <p className="entry-title">When Nothing Is Working</p>
              <p className="entry-body">You have tried everything. The planning trance ended prematurely. The character study subject left early. The clock is mocking you. You have read the same slide four times and retained nothing, which is actually consistent with reading it one time. In these moments, fall back to the body. Sit straighter than you have ever sat. Not as performance... as sensation. Notice your feet on the floor. Notice the specific temperature of the room. Notice whether the fluorescent light above you has a very slight flicker that you have never registered before. It almost certainly does. Fluorescent lights in academic buildings flicker with the quiet persistence of a system that was installed cheaply in 1994 and has simply continued existing because no one has written the memo to fix it. You have now spent four minutes noticing something real. That is three more than the lecture has produced today.</p>
            </div>
            <div className="entry">
              <p className="entry-title">The Fake Cough Exit</p>
              <p className="entry-body">A cough, followed by a second cough, followed by a brief gesture toward the door, will allow you to leave the room for between three and six minutes with no social consequence whatsoever. Use this window to stand in a corridor. Look out a window that faces something other than another building. Remember that the outside world is continuous and large and indifferent to your GPA. Return refreshed. This is not a sustainable strategy. It works twice per class at maximum before even the most inattentive lecturer registers a pattern.</p>
            </div>
            <div className="warning-box">
              <span className="tag">Final Warning</span>
              <p>Under no circumstances should you open your phone visibly, start a side conversation that has volume, or begin eating something with a wrapper. These are not survival strategies. These are provocations. A lecturer who was passively boring can become actively vindictive very quickly. You do not want a targeted question. You do not want your name said with that specific falling inflection that means someone has noticed your absence of presence. Stay invisible. Invisibility is freedom.</p>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-num">VIII</span>
              <h2>The Exit Strategy <span className="survival-rating high">Do Not Ruin It</span></h2>
            </div>
            <div className="entry">
              <p className="entry-title">The Final Ten Minutes</p>
              <p className="entry-body">This is the most psychologically volatile period of any boring class. You can see the end. The end is close. And yet it is not here. Do not start packing. Packing ten minutes early is a cultural aggression that lecturers remember, and more importantly, it collapses time rather than accelerating it. You will pack, then sit with your packed bag, watching the clock with everything on the table already in your hands, and the last ten minutes will become the longest ten minutes of the entire class. Leave your bag alone. Let time do its work. It will end. Every boring class, in the entire history of formal education, has ended. Yours will too.</p>
            </div>
            <div className="entry">
              <p className="entry-title">The Debrief</p>
              <p className="entry-body">When the class ends, do not immediately reach for your phone. Stand up. Stretch with full commitment, as though you have concluded something physically demanding, which in a very real neurological sense you have. Then walk out at a normal pace. Do not run. Running is the posture of someone who was defeated and is now fleeing, and you were not defeated. You remained. For the full duration. Of your own free will, technically, which if held at a certain angle and in poor lighting is almost indistinguishable from discipline. The outside world does not know where you were. It does not know what you sat through. It has been out there the entire time, existing freely, unaware of your sacrifice. Do not explain it to anyone. Simply return, like someone who has been somewhere and is now back, which is all you need to be.</p>
            </div>
          </div>

          <hr className="divider" />

          <div className="colophon">
            <p className="handwritten">&quot;Education is what remains after one has forgotten what one learned in school.&quot;</p>
            <p style={{ marginTop: '8px' }}>A. Einstein &bull; Who also, presumably, sat through some very long lectures</p>
            <p style={{ marginTop: '16px' }}>Issued by the Department of Academic Endurance &bull; Third Edition &bull; All rights reserved by no one in particular</p>
            <p style={{ marginTop: '6px' }}>This document self-destructs upon graduation &bull; You will forget it ever existed &bull; Good luck</p>
          </div>
        </div>
      </div>
    </>
  )
}