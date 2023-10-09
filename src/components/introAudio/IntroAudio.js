import React, { useState } from "react";
import intro_music from "../../assets/audio/intro-music.mp3";
import "./IntroAudio.css";

const IntroAudio = () => {
  const [notPlaying, setnotPlaying] = useState(true);
  const audioRef = React.createRef();
  const toggle = () => {
    if (notPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setnotPlaying(!notPlaying);
  };
  return (
    <div class="codeutsava__introAudio-justbg">
      <audio
        ref={audioRef}
        id="codeutsava__introAudio-intro-audio"
        loop
      >
        <source src={intro_music} />
      </audio>
      <div className="codeutsava__introAudio-intro-audio-div">
        <button
          className="codeutsava__introAudio-intro-audio-btn1"
          onClick={toggle}
        >
          {!notPlaying ? (
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill=""
                stroke="none"
              >
                <path
                  d="M2846 4943 c-10 -3 -400 -310 -867 -684 l-849 -678 -442 -3 c-437 -3
    -444 -3 -489 -26 -74 -36 -125 -87 -161 -160 l-33 -67 0 -765 0 -765 33 -67
    c36 -73 87 -124 161 -160 45 -23 52 -23 489 -26 l442 -3 848 -678 c467 -373
    859 -681 873 -684 75 -20 156 12 194 77 l25 43 0 2263 0 2263 -25 43 c-38 65
    -121 97 -199 77z"
                />
                <path
                  d="M4249 4290 c-71 -21 -119 -87 -119 -165 0 -60 7 -72 104 -180 154
    -171 247 -307 337 -491 233 -478 270 -1026 103 -1533 -93 -282 -227 -509 -440
    -746 -97 -108 -104 -120 -104 -180 0 -115 101 -194 212 -165 34 9 60 29 120
    90 291 299 512 714 603 1135 165 764 -54 1558 -591 2134 -91 98 -149 124 -225
    101z"
                />
                <path
                  d="M3770 3807 c-77 -25 -120 -83 -120 -160 0 -62 16 -91 100 -183 225
    -248 342 -556 342 -904 0 -345 -115 -652 -338 -899 -89 -100 -104 -126 -104
    -186 0 -81 48 -144 125 -164 48 -12 102 -2 143 27 42 31 168 180 235 280 65
    95 151 268 190 377 72 203 107 483 88 698 -34 382 -165 695 -410 982 -107 126
    -170 159 -251 132z"
                />
              </g>
            </svg>
          ) : (
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill=""
                stroke="none"
              >
                <path
                  d="M2912 4957 c-17 -7 -418 -288 -891 -624 l-858 -612 -460 -3 -460 -3
    -49 -30 c-30 -19 -60 -49 -79 -79 l-30 -49 0 -997 0 -997 30 -49 c19 -30 49
    -60 79 -79 l49 -30 460 -3 460 -3 846 -603 c465 -331 859 -611 876 -622 23
    -15 47 -19 111 -19 75 0 86 3 125 30 59 42 97 99 109 165 7 37 9 796 8 2245
    -3 1997 -4 2193 -19 2226 -24 52 -78 110 -124 130 -46 21 -133 24 -183 6z"
                />
                <path
                  d="M3772 3234 c-84 -42 -132 -121 -132 -216 1 -88 26 -126 197 -299
    l156 -159 -160 -162 c-181 -185 -199 -214 -191 -317 11 -152 155 -252 306
    -211 41 12 69 35 217 181 l170 168 160 -158 c88 -87 176 -167 195 -177 46 -25
    171 -26 216 -2 76 42 134 134 134 216 0 85 -16 109 -194 290 l-170 173 161
    162 c171 171 202 216 203 293 0 87 -55 179 -134 222 -45 24 -170 23 -216 -2
    -19 -10 -107 -90 -195 -177 l-160 -158 -170 168 c-136 133 -178 170 -211 179
    -66 19 -125 15 -182 -14z"
                />
              </g>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default IntroAudio;
