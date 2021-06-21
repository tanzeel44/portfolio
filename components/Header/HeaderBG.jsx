import { useState, useEffect } from 'react';

export default function HeaderBG() {
  const [viewBoxWidth, setViewBoxWidth] = useState(1440);

  useEffect(() => {
    function changeViewboxWithViewport() {
      // eslint-disable-next-line no-console
      console.log(window.innerWidth);
      if (window.innerWidth >= 1275) {
        setViewBoxWidth(1440);
      }
      if (window.innerWidth < 1275 && window.innerWidth >= 902) {
        setViewBoxWidth(1050);
      }
      if (window.innerWidth < 902 && window.innerWidth >= 640) {
        setViewBoxWidth(750);
      }
      if (window.innerWidth < 640 && window.innerWidth >= 440) {
        setViewBoxWidth(500);
      }
      if (window.innerWidth < 440) {
        setViewBoxWidth(440);
      }
    }

    // resize blob responsively with window resize to ensure proper logo/menu positioning
    window.addEventListener('resize', changeViewboxWithViewport);
    changeViewboxWithViewport();
  }, []);

  return (

    <svg
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      id="visual"
      viewBox="0 0 1920 300"
      width="1920"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <rect x="0" y="0" width="1920" height="300" fill="#FFFFFF00" />
      <path d="M0 234L106.7 212.8C213.3 191.7 426.7 149.3 640 140.7C853.3 132 1066.7 157 1280 151.7C1493.3 146.3 1706.7 110.7 1813.3 92.8L1920 75L1920 0L1813.3 0C1706.7 0 1493.3 0 1280 0C1066.7 0 853.3 0 640 0C426.7 0 213.3 0 106.7 0L0 0Z" fill="#16c79a" strokeLinecap="round" strokeLinejoin="miter" />

    </svg>
  );
}
