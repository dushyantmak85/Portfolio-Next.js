"use client";
import { useEffect, useState } from "react";

export default function TypingText() {
  const phrases = ["Dushyant", "Game Developer", "VR Enthusiast"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = 1500;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentPhrase.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText === currentPhrase) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayedText === "") {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  useEffect(() => {
    const cursorBlink = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span className="font-semibold text-[#00ADB5] whitespace-nowrap">
      {displayedText}
      <span className={`inline-block w-[1ch] ${cursorVisible ? "opacity-100" : "opacity-0"}`}>
        |
      </span>
    </span>
  );
}
