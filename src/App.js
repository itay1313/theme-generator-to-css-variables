import React from "react"
import tinycolor from "tinycolor2"
import styled from "@emotion/styled"
import "./styles.css"
import { ColorBlock } from "./ColorBlock"
import { Footer } from "./Footer"

import { createGlobalStyle } from "styled-components"

const squareStyle = {
  height: "50px",
  width: "50px",
}

const Button = styled.button`
  color: ${(p) => p.prim.opposite};
  background: ${(p) => p.prim.normal};

  &:hover {
    background: ${(p) =>
      tinycolor(p.bgColor).isDark() ? p.prim.light : p.prim.dark};
    color: ${(p) =>
      tinycolor(p.bgColor).isDark()
        ? p.prim.oppositeLight
        : p.prim.oppositeDark};
  }
`

const Card = styled.div`
  background: ${(c) =>
    tinycolor(c.bgColor).isDark() ? c.prim.light : c.prim.dark};
  color: ${(c) =>
    tinycolor(c.bgColor).isDark() ? c.prim.oppositeLight : c.prim.oppositeDark};
`

const Opposite = styled.div`
  padding: 0 1rem 1rem 1rem;
  margin: 1rem 0;
  border: 1px solid;
  border-color: ${(c) =>
    tinycolor(c.bgColor).isDark() ? c.prim.light : c.prim.dark};
  color: ${(c) => (tinycolor(c.bgColor).isDark() ? c.prim.light : c.prim.dark)};
  background: ${(c) =>
    tinycolor(c.bgColor).isDark() ? c.prim.oppositeLight : c.prim.oppositeDark};
`

export default function App() {
  // const [textColor, setTextColor] = React.useState("#fff")
  // eslint-disable-next-line
  const [bgColor, setBgColor] = React.useState("#000")
  const [primaryColor, setPrimaryColor] = React.useState("#570df8")
  // const [perc, setPerc] = React.useState([])
  const [prims, setPrims] = React.useState({})

  // React.useEffect(() => {
  //   setPerc(
  //     [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((p) =>
  //       tinycolor.mix(bgColor, textColor, p).toHexString()
  //     )
  //   );
  // }, [textColor, bgColor]);

  React.useEffect(() => {
    // TODO reformat
    setPrims({
      darkest: tinycolor(primaryColor).darken(60).toHexString(),
      darker: tinycolor(primaryColor).darken(40).toHexString(),
      dark: tinycolor(primaryColor).darken(20).toHexString(),
      normal: primaryColor,
      light: tinycolor(primaryColor).lighten(20).toHexString(),
      lighter: tinycolor(primaryColor).lighten(40).toHexString(),
      lightest: tinycolor(primaryColor).lighten(60).toHexString(),
      secondary: tinycolor(primaryColor).spin(-90).toHexString(),
      secondarytext: tinycolor
        .mostReadable(tinycolor(primaryColor).spin(-90).toHexString(), [
          "#000",
          "#fff",
        ])
        .toHexString(),
      opposite: tinycolor
        .mostReadable(primaryColor, ["#000", "#fff"])
        .toHexString(),
      oppositeLight: tinycolor
        .mostReadable(tinycolor(primaryColor).lighten(20).toHexString(), [
          "#000",
          "#fff",
        ])
        .toHexString(),
      oppositeDark: tinycolor
        .mostReadable(tinycolor(primaryColor).darken(20).toHexString(), [
          "#000",
          "#fff",
        ])
        .toHexString(),
    })
  }, [primaryColor])

  const Variables = createGlobalStyle`
  :root {
            --primary: ${prims.normal};
            --primary-focus: ${prims.light};
            --primary-content: ${prims.normal};
            --secondary: ${prims.secondary};
            --secondary-focus: ${prims.lighter};
            --secondary-content: ${prims.secondarytext};
            --link-color: ${prims.light};
            --link-color-focus: ${prims.light};
            --info: #2094f3;
            --success: #009485;
            --warning: #ff9900;
            --error: #ff5724; 
            --body-background: ${prims.lightest};
            --body-text: ${prims.darkest};
            --footer-background: #0a00b6;
            --footer-text: ${prims.opposite};
            --button-background: ${prims.secondary};
            --button-text: ${prims.secondarytext};
}
body {
  color: var(--body-text);
  background-color: var(--body-background);
}
`

  return (
    <div className="App">
      <Variables />
      <div className="flexcenter">
        <h1>Theme generator to css variables</h1>
        <h2>Choose your primary color</h2>
      </div>
      <div className="flexcenter" style={{ display: "block" }}>
        <div>
          Primary color
          <ColorBlock
            color={primaryColor}
            onChangeComplete={(c) => setPrimaryColor(c.hex)}
          />
        </div>
      </div>

      <div className="flex">
        <div>
          <h2>Example</h2>
          <Card
            prim={prims}
            bgColor={bgColor}
            style={{
              padding: "10px",
            }}
          >
            <h4>Hey I'm a Subtitle</h4>
            <hr />

            <p>Schnitzel ipsum lorem soup, Schnitzel ipsum lorem soup</p>

            <Button prim={prims} type="button" bgColor={bgColor}>
              Primary
            </Button>
            <button
              style={{
                background: prims.secondary,
                color: prims.secondarytext,
                padding: "10px",
                marginLeft: "1rem",
              }}
            >
              Secondary
            </button>
          </Card>

          <h2>Color scale</h2>
          <div style={{ display: "flex" }}>
            {Object.values(prims).map((c) => (
              <div style={{ ...squareStyle, background: c }}></div>
            ))}
          </div>
        </div>
        <Opposite prim={prims} bgColor={bgColor}>
          <h2>CSS Variables For your Theme - </h2>
          <pre>{`
        :root {
            --primary: ${prims.normal};
            --primary-focus: ${prims.light};
            --primary-content: ${prims.normal};
            --secondary: ${prims.secondary};
            --secondary-focus: ${prims.lighter};
            --secondary-content: ${prims.secondarytext};
            --link-color: ${prims.light};
            --link-color-focus: ${prims.light};
            --info: #2094f3;
            --success: #009485;
            --warning: #ff9900;
            --error: #ff5724; 
            --body-background: ${prims.lightest};
            --body-text: ${prims.darkest};
            --footer-background: #0a00b6;
            --footer-text: ${prims.opposite};
            --button-background: ${prims.secondary};
            --button-text: ${prims.secondarytext};
        }   
        `}</pre>
        </Opposite>
      </div>
      <Footer />
    </div>
  )
}
