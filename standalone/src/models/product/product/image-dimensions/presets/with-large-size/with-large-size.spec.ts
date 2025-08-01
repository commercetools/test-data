import * as withLargeSizePresets from './with-large-size';

describe('ImageDimensions "withLargeSize" preset builders', () => {
  it('should build properties for the REST representation', () => {
    const restModel = withLargeSizePresets.restPreset().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        w: 700,
        h: 700,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = withLargeSizePresets.graphqlPreset().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        width: 700,
        height: 700,
        __typename: 'Dimensions',
      })
    );
  });
});
