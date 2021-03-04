import React from "react";
import Audio from "./theme.mp3";
import { Howl, Howler } from "howler";

function SoundButton() {
  const [playing, setPlaying] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("PLAY SOUND!");

  var sound = new Howl({
    src: [Audio],
    onplay: function () {
      setPlaying(true);
      setButtonText("STOP!");
    },
    onstop: function () {
      setPlaying(false);
      setButtonText("PLAY!");
    },
  });

  Howler.volume(0.1);

  const handleClick = () => {
    if (!playing) {
      sound.play();
    }
    if (playing) {
      Howler.stop();
    }
  };

  return (
    <li className="nav-style pad nav-item" onClick={handleClick}>
      <span id="playbtn">{buttonText}</span>
    </li>
  );
}

export default SoundButton;
