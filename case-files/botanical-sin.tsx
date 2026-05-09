// case-files/botanical-sin.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'botanical-sin',
  title: 'BOTANICAL SIN',
  subtitle: 'A Philosophical Broadside on the Ethics of Eating',
  classificationCode: 'PB-ETH-001',
  department: 'Dept. of Moral Ecology & Dietary Jurisprudence',
  threatLevel: 'MODERATE',
  tags: ['satirical verse', 'philosophy', 'food ethics'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Mono:wght@400;500&display=swap');

  .broadside * { box-sizing: border-box; margin: 0; padding: 0; }

  .broadside {
    font-family: 'EB Garamond', serif;
    background: #1C2410;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }

  .sheet {
    background: #F2EAD0;
    max-width: 560px;
    width: 100%;
    position: relative;
    box-shadow:
      0 0 0 1px #c8b880,
      6px 6px 0 rgba(0,0,0,0.3),
      12px 12px 0 rgba(0,0,0,0.15);
    overflow: hidden;
  }

  .sheet::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 10;
    mix-blend-mode: multiply;
  }

  .inner {
    padding: 40px 48px 44px;
    position: relative;
    z-index: 1;
  }

  .border-outer {
    position: absolute;
    inset: 10px;
    border: 1px solid #b8a060;
    pointer-events: none;
    z-index: 2;
  }

  .border-inner {
    position: absolute;
    inset: 13px;
    border: 1px solid rgba(184,160,96,0.4);
    pointer-events: none;
    z-index: 2;
  }

  .botanical-top {
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 16px;
  }

  .leaf-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-bottom: 14px;
    font-size: 16px;
    color: #3a5a20;
    opacity: 0.7;
    letter-spacing: 4px;
  }

  .broadside-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #7a6a30;
    margin-bottom: 14px;
  }

  .poem-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 7vw, 52px);
    font-weight: 900;
    color: #1a2010;
    line-height: 1.0;
    letter-spacing: -0.5px;
    margin-bottom: 4px;
  }

  .poem-title em {
    font-style: italic;
    color: #3a5a20;
  }

  .title-rule {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 16px 0 0;
    justify-content: center;
  }

  .tr-line { height: 1px; width: 48px; background: #b8a060; }
  .tr-center {
    font-size: 9px;
    color: #7a6a30;
    letter-spacing: 4px;
    font-family: 'DM Mono', monospace;
    text-transform: uppercase;
  }

  .poem-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 32px;
    margin: 20px 0;
  }

  .stanza {
    margin-bottom: 20px;
    break-inside: avoid;
  }

  .stanza-num {
    font-family: 'DM Mono', monospace;
    font-size: 7px;
    letter-spacing: 2px;
    color: #b8a060;
    display: block;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  .stanza-lines {
    font-size: 14.5px;
    line-height: 1.7;
    color: #1a1a0a;
    font-weight: 400;
  }

  .stanza-lines em {
    font-style: italic;
    color: #3a2a08;
  }

  .stanza.accent .stanza-lines {
    color: #1a3008;
    font-style: italic;
  }

  .stanza.wide {
    grid-column: 1 / -1;
    text-align: center;
    padding: 16px 0;
    border-top: 1px solid rgba(184,160,96,0.4);
    border-bottom: 1px solid rgba(184,160,96,0.4);
    margin: 4px 0 20px;
  }

  .stanza.wide .stanza-lines {
    font-size: 16px;
    line-height: 1.75;
    color: #1a1a0a;
  }

  .stanza.closing {
    grid-column: 1 / -1;
    text-align: center;
    margin-bottom: 0;
    margin-top: 4px;
  }

  .stanza.closing .stanza-lines {
    font-size: 15px;
    line-height: 1.75;
    font-style: italic;
    color: #3a2a08;
  }

  .botanical-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 4px 0 20px;
    grid-column: 1 / -1;
    color: #5a7a30;
    font-size: 13px;
    opacity: 0.5;
    letter-spacing: 6px;
  }

  .broadside-footer {
    border-top: 1px solid rgba(184,160,96,0.5);
    padding-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 8px;
  }

  .footer-left {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: #9a8a50;
    text-transform: uppercase;
    line-height: 1.8;
  }

  .footer-center {
    font-size: 18px;
    color: #5a7a30;
    opacity: 0.4;
    letter-spacing: 6px;
  }

  .footer-right {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: #9a8a50;
    text-transform: uppercase;
    text-align: right;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    .poem-body { grid-template-columns: 1fr; }
    .stanza.wide, .stanza.closing { grid-column: 1; }
    .botanical-div { grid-column: 1; }
    .inner { padding: 32px 28px 36px; }
  }
`

const stanzasA = [
  {
    id: 'i',
    lines: ['You preach salvation', 'Through meatless plates', 'Rally in streets, righteous,', 'Against slaughterhouse gates'],
    accent: false,
  },
  {
    id: 'ii',
    lines: ['\u201CAll life is sacred!\u201D', 'Your banners decree', 'While crushing grass beneath', 'Your protesting feet'],
    accent: true,
  },
  {
    id: 'iii',
    lines: ['You shun flesh and blood', 'Dairy, eggs, and fish', 'Yet massacre forests', 'Of green on your dish'],
    accent: false,
  },
  {
    id: 'iv',
    lines: ['Blind zealot, consider:', 'The silent scream', 'Of wheat beneath scythes', 'Of corn in machines'],
    accent: true,
  },
  {
    id: 'v',
    lines: ['Plants feel pain too', 'Rooted, they endure', 'Watching kin fall', 'Unable to cure'],
    accent: false,
  },
  {
    id: 'vi',
    lines: ['Their chemical cries', 'Lost in the wind', 'As you claim virtue', 'Through botanical sin'],
    accent: true,
  },
]

const stanzasB = [
  {
    id: 'vii',
    wide: true,
    closing: false,
    lines: ['Nature\u2019s truth is simple:', 'Life feeds on life', 'Whether tooth or root', 'All ends in strife'],
    accent: false,
  },
  {
    id: 'viii',
    wide: false,
    closing: false,
    lines: ['Your moral highground', 'Is quicksand below', 'For to exist is to kill', 'This, biology shows'],
    accent: false,
  },
  {
    id: 'ix',
    wide: false,
    closing: false,
    lines: ['So weigh your choice:', 'Starve for your creed', 'Or accept nature\u2019s cycle', 'Of hunger and need'],
    accent: true,
  },
  {
    id: 'x',
    wide: false,
    closing: true,
    lines: ['Remember this truth', 'As you ponder your worth:', 'You\u2019re not above nature\u2014', 'But part of its mirth'],
    accent: false,
  },
]

export default function BotanicalSin() {
  return (
    <>
      <style>{styles}</style>
      <div className="broadside">
        <div className="sheet">
          <div className="border-outer" />
          <div className="border-inner" />

          <div className="inner">

            <div className="botanical-top">
              <div className="leaf-row">🌿 &nbsp; ✦ &nbsp; 🌿</div>
              <div className="broadside-label">A Philosophical Broadside</div>
              <div className="poem-title">Botanical<br /><em>Sin</em></div>
              <div className="title-rule">
                <div className="tr-line" />
                <div className="tr-center">On the ethics of eating</div>
                <div className="tr-line" />
              </div>
            </div>

            <div className="poem-body">
              {stanzasA.map(s => (
                <div className={`stanza${s.accent ? ' accent' : ''}`} key={s.id}>
                  <span className="stanza-num">— {s.id} —</span>
                  <div className="stanza-lines">
                    {s.lines.map((l, i) => <span key={i}>{l}<br /></span>)}
                  </div>
                </div>
              ))}

              <div className="botanical-div">🌾 &nbsp; ❧ &nbsp; 🌾</div>

              {stanzasB.map(s => {
                if (s.wide) return (
                  <div className="stanza wide" key={s.id}>
                    <span className="stanza-num">— {s.id} —</span>
                    <div className="stanza-lines">
                      {s.lines.map((l, i) => <span key={i}>{l}<br /></span>)}
                    </div>
                  </div>
                )
                if (s.closing) return (
                  <div className="stanza closing" key={s.id}>
                    <span className="stanza-num">— {s.id} —</span>
                    <div className="stanza-lines">
                      {s.lines.map((l, i) => <span key={i}>{l}<br /></span>)}
                    </div>
                  </div>
                )
                return (
                  <div className={`stanza${s.accent ? ' accent' : ''}`} key={s.id}>
                    <span className="stanza-num">— {s.id} —</span>
                    <div className="stanza-lines">
                      {s.lines.map((l, i) => <span key={i}>{l}<br /></span>)}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="broadside-footer">
              <div className="footer-left">
                Form: Satirical verse<br />
                Structure: Quatrains
              </div>
              <div className="footer-center">🌿 ✦ 🌿</div>
              <div className="footer-right">
                Subject: The ecology<br />of moral certainty
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}