import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Fantasy from './fantasy';
import HealthDefender from './healthDefender';
import Tanks from './tanks';
import SciFi from './sci-fi';
import Fantasy2 from './fantasy2';
import WesternSetting from "./western-setting";
import PunkSet from "./punk-set";
import Moon from "./moon";
import Freelance from "./freelance";


const WildWest = React.lazy(() => import('../portfolioWorks/wildWest'));

const PortfolioWorks = () => {
   return (
      <section className="works">
         <div className="works__title">Portfolio</div>

         {/* section for wild-west project, visible only for special route */}
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
         <HealthDefender />
         <Tanks />
         <SciFi />
         <Fantasy2 />
         <WesternSetting />
         <PunkSet />
         <Moon />
         <Freelance />

      </section>
   )
};

export default PortfolioWorks;