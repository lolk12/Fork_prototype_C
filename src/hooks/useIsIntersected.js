import { useRef, useState, useCallback, useEffect } from "react";
export function useIsIntersected() {
  const intersectionTargetRef = useRef();
  const [isIntersected, setIntersection] = useState(false);

  const handler = useCallback(entries => {
    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .sentinal node.
    // Here observe whether or not that node is in the viewport
    if (!entries[0].isIntersecting) {
      setIntersection(true);
    } else {
      setIntersection(false);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handler);
    if (intersectionTargetRef && intersectionTargetRef.current && observer) {
      observer.observe(intersectionTargetRef.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  return {
    isIntersected,
    intersectionTargetRef
  };
}
