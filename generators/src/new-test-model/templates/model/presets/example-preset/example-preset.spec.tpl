import * as examplePresets from './example-preset';

describe('example preset', () => {
  it(`should create the expected object preset - rest`, () => {
    const restExamplePreset = examplePresets.restPreset().build();
    expect(restExamplePreset).toEqual(
      expect.objectContaining({
        id: 'dummy-id',
      })
    );
  });

  // TODO: If both presets are the same, you can ommit this test
  it(`should create the expected object preset - graphql`, () => {
    const graphqlExamplePreset = examplePresets.graphqlPreset().build();
    expect(graphqlExamplePreset).toEqual(
      expect.objectContaining({
        id: 'dummy-id',
      })
    );
  });
});
