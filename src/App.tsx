import { useState } from "react";
import IncrementDecrement from "./components/IncrementDecrement";
import Editor from "react-simple-code-editor";
import * as prism from "prismjs";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-aspnet";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-django";
import "prismjs/components/prism-git";
import "prismjs/components/prism-go";
import "prismjs/components/prism-haxe";
import "prismjs/components/prism-java";
import "prismjs/components/prism-php";
import "prismjs/components/prism-python";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-typescript";
import { Helmet } from "react-helmet";
import ColorPicker from "./components/ColorPicker";
import Switch from "./components/Switch";
import THEMES from "./constants/themes";
import ListBox from "./components/ListBox";
import LANGUAGES from "./constants/languages";
import useScreenshot from "./hooks/useScreenshot";

// TODO: make the sidebar responsive

function App() {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);

  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

  const [fontSize, setFontSize] = useState<number>(15);
  const [lineHeight, setLineHeight] = useState<number>(22);
  const [backgroundColor, setBackgroundColor] =
    useState<string>("rgb(55, 65, 81)");
  const [shadowVisible, setShadowVisible] = useState(true);
  const [fixedWidth, setFixedWidth] = useState(true);
  const [codeWidth, setCodeWidth] = useState(700);

  /* eslint-disable no-template-curly-in-string */
  const [code, setCode] = useState(
    "function $initHighlight(block, cls) {\n  try {\n   if (cls.search(/\bno-highlight\b/) != -1)\n     return process(block, true, 0x0F) + ` class='${cls}'`;\n  } catch (e) {\n   /* handle exception */\n  }\n  for (var i = 0 / 2; i < classes.length; i++) {\n   if (checkCondition(classes[i]) === undefined)\n     console.log('undefined');\n   }\n}\n\nexport  $initHighlight;"
  );

  const { generateImage, captureRef } = useScreenshot();

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={`css/${selectedTheme.path}.css`} />
      </Helmet>
      <div className="flex">
        <div className="min-h-screen bg-gray-900 w-2/3 md:w-80 p-3 flex flex-col gap-y-5">
          <div className="menu-container">
            <label className="menu-title">CODE</label>
            <div className="menu-items">
              <div className="menu-item">
                <span className="menu-item-title">Language</span>
                <div className="menu-item-container w-2/3">
                  <ListBox
                    items={LANGUAGES}
                    selected={selectedLanguage}
                    onSelect={setSelectedLanguage}
                  />
                </div>
              </div>
            </div>
            <div className="menu-items">
              <div className="menu-item">
                <span className="menu-item-title">Theme</span>
                <div className="menu-item-container w-2/3">
                  <ListBox
                    items={THEMES}
                    selected={selectedTheme}
                    onSelect={setSelectedTheme}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="menu-container">
            <label className="menu-title">FONT</label>
            <div className="menu-items">
              <div className="menu-item">
                <span className="menu-item-title">Font Size</span>
                <div className="menu-item-container">
                  <span className="text-sm text-gray-400">{fontSize}px</span>
                  <IncrementDecrement
                    onIncrement={() => setFontSize((prev) => prev + 1)}
                    onDecrement={() => setFontSize((prev) => prev - 1)}
                    incrementDisabled={false}
                    decrementDisabled={false}
                  />
                </div>
              </div>
              <div className="menu-item">
                <span className="menu-item-title">Line Height</span>
                <div className="menu-item-container">
                  <span className="text-sm text-gray-400">{lineHeight}px</span>
                  <IncrementDecrement
                    onIncrement={() => setLineHeight((prev) => prev + 1)}
                    onDecrement={() => setLineHeight((prev) => prev - 1)}
                    incrementDisabled={false}
                    decrementDisabled={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="menu-container">
            <label className="menu-title">BACKGROUND</label>
            <div className="menu-items">
              <div className="menu-item">
                <span className="menu-item-title">Background Color</span>
                <div className="menu-item-container z-10">
                  <ColorPicker
                    color={backgroundColor}
                    onChangeComplete={(color) => setBackgroundColor(color.hex)}
                  />
                </div>
              </div>
              <div className="menu-item">
                <span className="menu-item-title">Shadow</span>
                <div className="menu-item-container">
                  <Switch
                    checked={shadowVisible}
                    onChange={setShadowVisible}
                    label="Enable Shadow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="menu-container">
            <label className="menu-title">CORE WINDOW</label>
            <div className="menu-items">
              {/* <div className="menu-item">
              <span className="menu-item-title">Window Buttons</span>
              <div className="menu-item-container">
                <Switch
                  checked={fixedWidth}
                  onChange={setFixedWidth}
                  label="Enable Window Buttons"
                />
              </div>
            </div> */}
              <div className="menu-item">
                <span className="menu-item-title">Fixed Width</span>
                <div className="menu-item-container">
                  <Switch
                    checked={fixedWidth}
                    onChange={setFixedWidth}
                    label="Enable Fixed Width"
                  />
                </div>
              </div>
              <div className="menu-item">
                <span className="menu-item-title">Code Width</span>
                <div className="menu-item-container">
                  <span className="text-sm text-gray-400">{codeWidth}px</span>
                  <IncrementDecrement
                    onIncrement={() => setCodeWidth((prev) => prev + 25)}
                    onDecrement={() => setCodeWidth((prev) => prev - 25)}
                    incrementDisabled={false}
                    decrementDisabled={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="min-h-screen flex-1 flex flex-col items-center"
          style={{ backgroundColor }}
        >
          <div className="w-full p-2 flex items-center justify-between bg-gray-900">
            <a
              className="flex items-center gap-x-2"
              href="https://github.com/yigithanyucedag/kodsnap"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="white"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <img
                alt="GitHub"
                src="https://img.shields.io/github/stars/yigithanyucedag/kodsnap.svg?style=social&label=Star&maxAge=2592000"
              />
            </a>
            <button
              onClick={generateImage}
              className="bg-black bg-opacity-20 flex mr-1 text-sm px-3 py-2 hover:bg-opacity-30 font-medium text-white rounded-md focus:outline-none "
            >
              Export as Png
            </button>
          </div>
          <div
            ref={captureRef}
            style={{
              backgroundColor,
              maxWidth: fixedWidth ? `${codeWidth}px` : "unset",
              width: fixedWidth ? "100%" : "unset",
            }}
            className="flex justify-center p-10"
          >
            <div
              className={`${shadowVisible ? "shadow-xl " : ""}rounded-md`}
              style={{
                maxWidth: fixedWidth ? `${codeWidth}px` : "unset",
                width: fixedWidth ? "100%" : "unset",
                ...selectedTheme.containerStyle,
              }}
            >
              <Editor
                value={code}
                onValueChange={(code) => setCode(code)}
                highlight={(code) =>
                  prism
                    .highlight(
                      code,
                      prism.languages[selectedLanguage.code],
                      selectedLanguage.code
                    )
                    .split("\n")
                    .map(
                      (line, i) =>
                        `<span class='editorLineNumber'>${i + 1}</span>${line}`
                    )
                    .join("\n")
                }
                padding={10}
                className="editor"
                textareaId="codeArea"
                preClassName="language-default"
                textareaClassName="focus:outline-none"
                style={{
                  ...selectedTheme.codeStyle,
                  fontSize,
                  lineHeight: `${lineHeight}px`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
