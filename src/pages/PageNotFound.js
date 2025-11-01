import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Button } from "../components/Button";
const PageNotFoundImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPc3nCMbgH8lElexAa_bditHj6ihuf-ZqUlA&s";

export const PageNotFound = ({ title }) => {
  const _pageTitle = useTitle(title);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col justify-center my-4">
          <p className="text-7xl text-gray-700 font-bold py-10 dark:text-white">
            404, Oops!
          </p>
          <div className="flex justify-center">
            <img
              className="rounded max-w-lg"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
