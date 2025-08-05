import * as withSmallSizePresets from './with-small-size';

describe('ImageDimensions "withSmallSize" preset builders', () => {
  it('should build properties for the REST representation', () => {
    const restModel = withSmallSizePresets.restPreset().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        w: 150,
        h: 150,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = withSmallSizePresets.graphqlPreset().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        width: 150,
        height: 150,
      })
    );
  });
});
