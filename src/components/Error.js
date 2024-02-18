import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops... this page is not found</h1>
      <h1>hello</h1>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  );
};

export default Error;
