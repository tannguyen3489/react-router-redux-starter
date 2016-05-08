import Layout from '../containers/Layout';
import Home from './Home';

export const createRoutes = (store) => ({
  path: '/',
  component: Layout,
  indexRoute: Home
});

export default createRoutes;
