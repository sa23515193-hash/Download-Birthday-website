import { useEffect } from "react";

const BirthdayAd: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://otieu.com/4/10030286"; // tera direct link
    script.async = true;

    // TypeScript safe append
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <div id="propeller-ad"></div>;
};

export default BirthdayAd;
