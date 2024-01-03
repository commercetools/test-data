import { TAttributeDefinition } from '../types';
import nested from './nested';

describe(`with nested preset`, () => {
  it('should return a nested attribute definintion when id is passed', () => {
    const nestedAttributeDefinition =
      nested('123').buildRest<TAttributeDefinition>();
    expect(nestedAttributeDefinition.name).toEqual(expect.any(String));
    expect(nestedAttributeDefinition.type).toEqual({
      name: 'nested',
      typeRef: {
        id: '123',
        obj: {
          id: '123',
        },
        typeId: 'product-type',
      },
      typeref: null,
    });
  });

  it('should throw error when id is not passed', () => {
    expect(() => {
      nested().buildGraphql();
    }).toThrow(
      'Product Type Id should be provided to build a Nested AttributeDefinition'
    );
  });
});
