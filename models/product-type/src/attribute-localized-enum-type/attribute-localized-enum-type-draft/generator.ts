import { fake, Generator } from '@commercetools-test-data/core';
import * as AttributeLocalizedEnumValueDraft from '../../attribute-localized-enum-value/attribute-localized-enum-value-draft';
import { TAttributeLocalizedEnumTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumtype

export const generator = Generator<TAttributeLocalizedEnumTypeDraft>({
  fields: {
    values: fake(() => [AttributeLocalizedEnumValueDraft.random()]),
  },
});
