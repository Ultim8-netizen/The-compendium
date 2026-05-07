// case-files/public-audio-advisory.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'public-audio-advisory',
  title: 'Advisory Notice PCA-0047-AUD',
  subtitle: 'Public Disturbance: Unsolicited Audio Broadcast in a Shared Space',
  classificationCode: 'PCA-0047-AUD',
  department: 'Public Conduct Authority',
  threatLevel: 'MODERATE',
  tags: ['public conduct', 'audio hazard', 'headphone noncompliance'],
}

export default function PublicAudioAdvisory() {
  return (
    <div style={{
      fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
      background: "#F5F0E8",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
    }}>
      <div style={{ maxWidth: 560, width: "100%" }}>

        {/* Header band */}
        <div style={{
          background: "#1A1A1A",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ color: "#F5C800", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontWeight: 900 }}>
            Public Conduct Authority
          </div>
          <div style={{ color: "#666", fontSize: 10, letterSpacing: 2, fontFamily: "monospace" }}>
            NOTICE REF: PCA-0047-AUD
          </div>
        </div>

        {/* Yellow warning block */}
        <div style={{
          background: "#F5C800",
          padding: "32px 24px 24px",
          borderLeft: "8px solid #1A1A1A",
          borderRight: "8px solid #1A1A1A",
        }}>
          <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#1A1A1A", marginBottom: 8, fontWeight: 900 }}>
            ⚠ Official Public Disturbance Advisory
          </div>
          <div style={{ fontSize: 38, fontWeight: 900, color: "#1A1A1A", lineHeight: 1.1, textTransform: "uppercase" }}>
            SOMEONE IN THIS SPACE IS PLAYING A VIDEO OUT LOUD
          </div>
          <div style={{ fontSize: 14, color: "#1A1A1A", marginTop: 12, fontWeight: 700, letterSpacing: 1 }}>
            Headphones: not missing. Not forgotten. Simply not considered.
          </div>
        </div>

        {/* Main body */}
        <div style={{
          background: "#FAFAF8",
          border: "8px solid #1A1A1A",
          borderTop: "none",
          padding: "24px",
        }}>

          {/* Subject description */}
          <div style={{ marginBottom: 24 }}>
            <div style={{
              fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
              color: "#999", fontWeight: 700, marginBottom: 12,
              fontFamily: "monospace",
            }}>
              Identifying the subject
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Phone position", "Screen up, speaker pointed outward like a declaration"],
                ["Volume", "Loud enough to hear clearly. Loud enough that you now know what they are watching."],
                ["Content", "A reaction video, or someone laughing, or a song with a lot of bass. Always."],
                ["Eye contact", "None. The phone absorbs all available attention and several nearby souls."],
                ["Awareness level", "Zero. Clinically confirmed. Twice."],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 12, alignItems: "start" }}>
                  <div style={{ fontSize: 11, fontWeight: 900, color: "#999", textTransform: "uppercase", letterSpacing: 1, paddingTop: 2, fontFamily: "monospace" }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 14, color: "#1A1A1A", lineHeight: 1.5, fontFamily: "Georgia, serif", fontWeight: 400 }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "#E0D8C8", margin: "20px 0" }} />

          {/* The behavior cycle */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#999", fontWeight: 700, marginBottom: 14, fontFamily: "monospace" }}>
              The known cycle
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                ["01", "The video begins. Nobody asked."],
                ["02", "Background noise increases. Subject raises volume to compensate."],
                ["03", "Background noise increases further. Volume increases further."],
                ["04", "The entire carriage/room/waiting area can now follow the plot."],
                ["05", "Someone looks over. Subject looks back. The look says: the problem is you."],
                ["06", "Video ends. A new video begins immediately."],
              ].map(([num, text]) => (
                <div key={num} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    background: "#1A1A1A", color: "#F5C800",
                    fontSize: 10, fontWeight: 900,
                    width: 28, height: 28, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "monospace",
                  }}>{num}</div>
                  <div style={{ fontSize: 14, color: "#1A1A1A", lineHeight: 1.5, fontFamily: "Georgia, serif", paddingTop: 5 }}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "#E0D8C8", margin: "20px 0" }} />

          {/* What to do */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#999", fontWeight: 700, marginBottom: 14, fontFamily: "monospace" }}>
              Recommended actions
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { action: "Say something", outcome: "They will look at you as though you have malfunctioned." },
                { action: "Say nothing", outcome: "The video continues. A new episode begins. You now know the characters." },
                { action: "Move away", outcome: "Valid. The sound carries further than you expect." },
                { action: "Make eye contact", outcome: "They will not see you. The phone has all their attention. You are ambient." },
                { action: "Play your own video", outcome: "You have now become the problem. The problem has doubled. The carriage loses." },
              ].map(({ action, outcome }) => (
                <div key={action} style={{ background: "#F0EDE6", padding: "10px 14px", borderLeft: "3px solid #1A1A1A" }}>
                  <div style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, color: "#1A1A1A", marginBottom: 3 }}>
                    {action}
                  </div>
                  <div style={{ fontSize: 13, color: "#555", fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.5 }}>
                    {outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "#E0D8C8", margin: "20px 0" }} />

          {/* Closing notice */}
          <div style={{
            background: "#1A1A1A",
            padding: "16px 20px",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}>
            <div style={{ fontSize: 28, color: "#F5C800", lineHeight: 1, flexShrink: 0 }}>🔊</div>
            <div>
              <div style={{ color: "#F5C800", fontSize: 11, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", marginBottom: 5 }}>
                Official position of this authority
              </div>
              <div style={{ color: "#CCCCCC", fontSize: 13, lineHeight: 1.6, fontFamily: "Georgia, serif" }}>
                Headphones exist. They are widely available. They are not expensive.
                The subject is aware of headphones. The subject has simply decided
                that this particular video, at this particular volume,
                is a gift to everyone present. It is not.
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{
          background: "#1A1A1A",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}>
          <div style={{ color: "#555", fontSize: 10, letterSpacing: 2, fontFamily: "monospace" }}>
            PCA-0047-AUD
          </div>
          <div style={{ color: "#555", fontSize: 10, letterSpacing: 2, fontFamily: "monospace" }}>
            THE VIDEO WAS NOT GOOD ENOUGH FOR THIS
          </div>
          <div style={{ color: "#555", fontSize: 10, letterSpacing: 2, fontFamily: "monospace" }}>
            HEADPHONES: £3.99
          </div>
        </div>

      </div>
    </div>
  )
}