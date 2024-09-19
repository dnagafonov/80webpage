import { useState } from "react";
import img1 from "../../assets/images/404.png";
import img2 from "../../assets/images/404.1.png";
import { Link, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const [logoSrc, setLogoSrc] = useState(img1)
  const error = useRouteError();

  console.error(error.status);

  return (
    <Link to ="/">
    <img
        src={logoSrc}
        onMouseEnter={() => setLogoSrc(img2)}
        onMouseLeave={() => setLogoSrc(img1)}
        onClick={() => <Link to={"ffff"} />}
      />
    </Link>
  );
};

export default ErrorBoundary;
