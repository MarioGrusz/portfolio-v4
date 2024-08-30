import "./style.scss";
import Marquee from "../Marquee";
import Button from "../Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const content = (
    <>
      <span className="text-block">404 error • 404 error • 404 error •</span>
      &nbsp;
      <span className="text-block">404 error • 404 error • 404 error •</span>
      &nbsp;
    </>
  );
  return (
    <section className="not-found">
      <Marquee content={content} isReverse={false} animationTime="20s" />
      <Marquee content={content} isReverse={true} animationTime="20s" />
      <div className="not-found__info">
        <h2>Sorry, page not found</h2>
        <p>
          Oops! We couldn't locate the page you were searching for. The address
          might have been entered incorrectly, or the page might have been
          moved.
        </p>
        <Link to="/">
          <Button text="Back To Homepage" content="Back To Homepage" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
