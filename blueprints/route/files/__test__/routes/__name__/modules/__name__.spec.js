import { default as <%= camelEntityName %>Reducer };

describe('(Redux Module) <%= pascalEntityName %>', () => {
  // --------------------------------------------------------
  // Constant Export Existance Tests
  //
  // it('Should export a constant FOO.', () => { ... });
  // --------------------------------------------------------

  // --------------------------------------------------------
  // Reducer Tests
  // --------------------------------------------------------
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(<%= camelEntityName %>Reducer).to.be.a('function');
    })
  });

  // ---------------------------------------------------------
  // Action Creator Tests
  // Each action create should have its own describe block
  //
  // Example:
  //
  // describe('(Action Creator) foo', () => { ... });
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // Action Handler Tests
  // Each action create should have its own describe block
  //
  // Example:
  //
  // describe('(Action Handler) FOO_INCREMENT', () => { ... });
  // ----------------------------------------------------------
})
