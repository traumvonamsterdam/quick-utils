import React, { useEffect } from "react";
import useReactRouter from "use-react-router";

export default () => {
  const { history, location, match } = useReactRouter();

  useEffect(() => {
    
  }, []);

  return <div>This is the task list.</div>;
};
