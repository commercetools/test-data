import { GeometryRest, GeometryGraphql } from './index';

describe('Geometry Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = GeometryRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'Point',
        coordinates: expect.arrayContaining([
          expect.any(Number),
          expect.any(Number),
        ]),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = GeometryGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        type: 'Point',
        coordinates: expect.arrayContaining([
          expect.any(Number),
          expect.any(Number),
        ]),
        __typename: 'Geometry',
      })
    );
  });
});
