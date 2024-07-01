import { Reference } from '@commercetools-test-data/commons';
import AttributeNestedType from '../../attribute-nested-type/builder';
import AttributeDefinition from '../builder';
const nested = (productTypeId?: string) => {
  if (!productTypeId) {
    throw Error(
      'Product Type Id should be provided to build a Nested AttributeDefinition'
    );
  }

  return AttributeDefinition().type(
    AttributeNestedType().typeRef(
      Reference.random().typeId('product-type').id(productTypeId)
    )
  );
};

export default nested;
