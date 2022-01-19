import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({ user, path, children, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      render={() => (user ? { ...children } : <Redirect to="/auth" />)}
    />
  );
}
