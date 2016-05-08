import <%= pascalEntityName %>Route from 'routes/<%= pascalEntityName %>';

describe('(Route) <%= pascalEntityName %>', () => {
  let _component;

  beforeEach(() => {
    _component = <%= pascalEntityName %>Route.component():
  });

  it('Should return a route configuration object', () => {
    expect(typeof(<%= pascalEntityName %>Route)).to.equal('object');
  });

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div');
  });
};
