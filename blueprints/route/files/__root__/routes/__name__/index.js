import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: '<%= route %>',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const <%= pascalEntityName %> = require('./containers/<%= pascalEntityName %>Container').default;
      const reducer = require('./modules/<%= camelEntityName %>');

      injectReducer(store, { key: '<%= camelEntityName %>', reducer });

      cb(null, <%= pascalEntityName %>);
    }, '<%= camelEntityName %>');
  }
});
