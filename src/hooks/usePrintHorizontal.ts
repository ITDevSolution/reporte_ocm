// import { useEffect } from 'react';

// export const usePrintHorizontal = () => {
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       @media print {
//         @page {
//           size: landscape;
//           margin: 0.5cm;
//         }
//         body, html {
//           width: 100% !important;
//           height: auto !important;
//           margin: 0 !important;
//           padding: 0 !important;
//         }
//         .document-container {
//           width: 100% !important;
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);
// };