import { ImageDimensionsDraftRest, ImageDimensionsDraftGraphql } from './index';

describe('ImageDimensionsDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ImageDimensionsDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        w: expect.any(Number),
        h: expect.any(Number),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ImageDimensionsDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number),
      })
    );
  });
});
