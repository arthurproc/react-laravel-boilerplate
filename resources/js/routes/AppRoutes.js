import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {PrivateRoute, PublicRoute} from '../routes/helpers';
import ProtectedRoutes from '../routes/ProtectedRoutes';

const LoginPage = lazy(() => import('../components/LoginPage'));
const ProductPage = lazy(() => import('../components/Product'));
const Registration = lazy(() => import('../components/Register'));


export function AppRoutes({isAuthenticated}) {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute path="/" isAuthenticated={isAuthenticated} exact>
            <LoginPage/>
          </PublicRoute>
          <PublicRoute path="/product" isAuthenticated={isAuthenticated} exact>
            <ProductPage/>
          </PublicRoute>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated} exact>
            <LoginPage/>
          </PublicRoute>
          <PublicRoute path="/register" isAuthenticated={isAuthenticated} exact>
            <Registration/>
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated} >
            <ProtectedRoutes/>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}
