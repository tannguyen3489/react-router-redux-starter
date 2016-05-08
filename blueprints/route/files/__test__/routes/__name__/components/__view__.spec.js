import React from 'react';
import { <%= pascalEntityName %>View } from 'routes/<%= pascalEntityName %>/components/<%= pascalEntityName %>View';
import { render } from 'enzyme';

describe('(View) <%= pascalEntityName %>', () => {
  let _component;

  beforeEach(() => {
    _component = render(<<%= pascalEntityName %>View />);
  });
};
