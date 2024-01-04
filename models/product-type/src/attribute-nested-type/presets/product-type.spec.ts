import { TAttributeNestedType } from '../types';
import productType from './product-type';

describe(`with productType preset`, () => {
  it('should return a nested producttype when id is passed', () => {
    const nestedProductType =
      productType('123').buildGraphql<TAttributeNestedType>();
    expect(nestedProductType).toMatchObject({
      __typename: 'NestedAttributeDefinitionType',
      name: 'nested',
      typeRef: {
        __typename: 'Reference',
        id: '123',
        typeId: 'product-type',
      },
    });
  });

  it('should throw error when id is not passed', () => {
    expect(() => {
      productType().buildGraphql();
    }).toThrow(
      'Product Type Id should be provided to build a Nested AttributeType'
    );
  });
});
