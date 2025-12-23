import { useRouteError } from "react-router-dom";
import { websiteName } from "../../util/constants";

const ErrorBoundary = () => {

  // let error = useRouteError();
  // Uncaught ReferenceError: path is not defined
  return <div style={{ height: "100vh" }} className="flex-center"><h1>This page does not exist on {websiteName}</h1></div>;
}

export default ErrorBoundary;