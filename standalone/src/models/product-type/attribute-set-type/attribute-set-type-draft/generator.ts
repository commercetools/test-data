import { fake, Generator } from '../../../../core';
import * as AttributeBooleanTypeDraft from '../../attribute-boolean-type/attribute-boolean-type-draft';
import { TAttributeSetTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributesettype

export const generator = Generator<TAttributeSetTypeDraft>({
  fields: {
    name: 'set',
    elementType: fake(() => AttributeBooleanTypeDraft.random()),
  },
});
