import { fake, Generator } from '@commercetools-test-data/core';
import * as AttributeBooleanTypeDraft from '../../attribute-boolean-type/attribute-boolean-type-draft';
import type { TAttributeSetTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributesettype

export const generator = Generator<TAttributeSetTypeDraft>({
  fields: {
    name: 'set',
    elementType: fake(() => AttributeBooleanTypeDraft.random()),
  },
});
