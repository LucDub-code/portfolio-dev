import { useEffect, useState, useRef } from "react";

export default function TypewriterWrapper({ isActive = false, children }) {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }, [isActive]);

  return (
    <div
      ref={contentRef}
      className={`markdown-content text-text-default ${
        showContent ? "" : "hidden"
      }`}
    >
      {showContent && children}
    </div>
  );
}
