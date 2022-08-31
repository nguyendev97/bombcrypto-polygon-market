/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(Component: any) {
  function ComponentWithRouterProp(props: JSX.IntrinsicAttributes) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}
