import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
const WildWest = React.lazy(() => import('./wildWest'));

const PortfolioWorks = () => {
   return (
      <section className="works">
         <div className="works__title">Portfolio</div>
         <BrowserRouter>
            <Switch>
               <Route exact path="/wild-west" render={() => (
                  <Suspense fallback={<div>Loading...</div>}>
                     <WildWest/>
                  </Suspense>
               )} />
            </Switch>
         </BrowserRouter>
         <div className="works__fantasy">
            <div className="works__fantasy__title">Characters for project in Fantasy setting</div>
         </div>
      </section>
   )
};

export default PortfolioWorks;