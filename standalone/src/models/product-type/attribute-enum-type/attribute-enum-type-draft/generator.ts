import { fake, Generator } from '@/core';
import * as AttributePlainEnumValueDraft from '../../attribute-plain-enum-value/attribute-plain-enum-value-draft';
import { TAttributeEnumTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributeenumtype

export const generator = Generator<TAttributeEnumTypeDraft>({
  fields: {
    name: 'enum',
    values: fake((f) => [AttributePlainEnumValueDraft.random()]),
  },
});
