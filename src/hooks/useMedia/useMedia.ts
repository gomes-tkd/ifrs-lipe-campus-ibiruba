import React from "react";

export function useMedia(media: string) {
  const [mediaMatch, setMediaMatch] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMediaMatch(matches);
    }

    window.addEventListener("resize", changeMatch);

    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);

  return mediaMatch;
}
