import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Location } from "history";

interface ScrollTopBehaviourProps {}

const ScrollTopBehaviourComponent: React.FC<ScrollTopBehaviourProps> = () => {
  const { pathname }: Location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTopBehaviourComponent;
