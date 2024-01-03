import { Reference } from '@commercetools-test-data/commons';
import AttributeNestedType from '../../attribute-nested-type/builder';
const productType = (productTypeId?: string) => {
  if (!productTypeId) {
    throw Error(
      'Product Type Id should be provided to build a Nested AttributeType'
    );
  }

  return AttributeNestedType().typeRef(
    Reference.random().typeId('product-type').id(productTypeId)
  );
};

export default productType;
