import { ErrorBoundary } from 'src/components';
import { ConnectedRouter } from 'connected-react-router';
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { history } from './state';

const Home = React.lazy(() => import('./pages/home'));

export function Router(): JSX.Element {
  return (
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={'/home'} component={Home} />
            <Redirect from='/' to={'/home'} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </ConnectedRouter>
  );
}
