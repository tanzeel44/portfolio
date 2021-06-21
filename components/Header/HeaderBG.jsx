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
        setViewBoxWidth(300);
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} 290`}
    >
      <path fill="#00cba9" fillOpacity="1" d="M0,128L34.3,117.3C68.6,107,137,85,206,101.3C274.3,117,343,171,411,176C480,181,549,139,617,117.3C685.7,96,754,96,823,106.7C891.4,117,960,139,1029,170.7C1097.1,203,1166,245,1234,229.3C1302.9,213,1371,139,1406,101.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z" />
    </svg>

  );
}
