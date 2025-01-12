
// import { useEffect, useState } from "react";

// export const useMediaQuery = (query: string) => {
//   const [matches, setMatches] = useState(window.matchMedia(query).matches);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//         console.log('window', window)
//       // Client-side-only code
//       const mediaQueryList = window.matchMedia(query);
//       const documentChangeHandler = () => setMatches(mediaQueryList.matches);
//       mediaQueryList.addEventListener("change", documentChangeHandler);
//       return () => {
//         mediaQueryList.removeEventListener("change", documentChangeHandler);
//       };
//     } else {
//       return;
//     }
//   }, [query]);
//   return matches;
// };

// export const useIsSmall = () => useMediaQuery("(min-width: 480px)");
// export const useIsMedium = () => useMediaQuery("(min-width: 768px)");
