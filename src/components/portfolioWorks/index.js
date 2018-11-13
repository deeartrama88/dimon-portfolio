import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Fantasy from './fantasy';
const WildWest = React.lazy(() => import('../portfolioWorks/wildWest'));

const PortfolioWorks = () => {
   return (
      <section className="works">
         <div className="works__title">Portfolio</div>

         {/* section for wild-west project, bot visible by in root route */}
         <BrowserRouter>
            <Switch>
               <Route exact path="/wild-west" render={() => (
                  <Suspense fallback={<div>Loading...</div>}>
                     <WildWest/>
                  </Suspense>
               )} />
            </Switch>
         </BrowserRouter>

         <Fantasy />
      </section>
   )
};

export default PortfolioWorks;