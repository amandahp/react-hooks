import UseStateExample from '../pages/usestate/usestateexample'
import UseEffectExample from '../pages/useeffect/useeffectexample'
import HomePage from '../pages/home/home'

const routes = [
    { path: '/reactHooks', component: HomePage},
    { path: '/use-state', component: UseStateExample}, 
    { path: '/use-effect', component: UseEffectExample}

]

export default routes;