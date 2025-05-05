import { fake, Generator } from '@commercetools-test-data/core';
import { AttributeBooleanTypeDraft } from '../../attribute-boolean-type/attribute-boolean-type-draft';
import { TAttributeSetTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributesettype

export const generator = Generator<TAttributeSetTypeDraft>({
  fields: {
    name: 'set',
    elementType: fake(() => AttributeBooleanTypeDraft.random()),
  },
});
