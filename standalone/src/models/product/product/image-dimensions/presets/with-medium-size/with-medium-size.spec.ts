import * as withMediumSizePresets from './with-medium-size';

describe('ImageDimensions "withMediumSize" preset builders', () => {
  it('should build properties for the REST representation', () => {
    const restModel = withMediumSizePresets.restPreset().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        w: 400,
        h: 400,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = withMediumSizePresets.graphqlPreset().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        width: 400,
        height: 400,
        __typename: 'Dimensions',
      })
    );
  });
});
