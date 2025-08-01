import { ImageDimensionsRest, ImageDimensionsGraphql } from './index';

describe('ImageDimensions Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ImageDimensionsRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        w: expect.any(Number),
        h: expect.any(Number),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ImageDimensionsGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number),
        __typename: 'Dimensions',
      })
    );
  });
});
