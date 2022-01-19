import { Redirect, Route } from 'react-router-dom';

export default function ProctedRoute({ user, path, children, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      render={() => (user ? { ...children } : <Redirect to="/auth" />)}
    />
  );
}
