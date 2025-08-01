import * as withZoomSizePresets from './with-zoom-size';

describe('ImageDimensions "withZoomSize" preset builders', () => {
  it('should build properties for the REST representation', () => {
    const restModel = withZoomSizePresets.restPreset().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        w: 1400,
        h: 1400,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = withZoomSizePresets.graphqlPreset().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        width: 1400,
        height: 1400,
        __typename: 'Dimensions',
      })
    );
  });
});
