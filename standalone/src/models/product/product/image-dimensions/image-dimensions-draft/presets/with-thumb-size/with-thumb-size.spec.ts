import * as withThumbSizePresets from './with-thumb-size';

describe('ImageDimensions "withThumbSize" preset builders', () => {
  it('should build properties for the REST representation', () => {
    const restModel = withThumbSizePresets.restPreset().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        w: 50,
        h: 50,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = withThumbSizePresets.graphqlPreset().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        width: 50,
        height: 50,
      })
    );
  });
});
