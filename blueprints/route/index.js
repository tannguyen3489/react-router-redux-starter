'use strict';

const _ = require('lodash');

module.exports = {
  description: () => {
    return 'Generates a new redux/react-router route.';
  },

  locals: (options) => {
    let route = options.entity.name;

    if (!_.isUndefined(options.entity.options.route)) {
      route = options.entity.options.route;
    }

    return { route };
  },

  fileMapTokens: (options) => {
    const name = options.entity.name;
    const __container__ = name.charAt(0).toUpperCase() + name.slice(1);
    const __view__ = __container__ + 'View';

    return {
      __container__: () => __container__,
      __view__: () => __view__
    };
  }
};
