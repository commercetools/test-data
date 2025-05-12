import { fake, Generator } from '../../../../core';
import * as AttributeLocalizedEnumValueDraft from '../../attribute-localized-enum-value/attribute-localized-enum-value-draft';
import { TAttributeLocalizedEnumTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumtype

export const generator = Generator<TAttributeLocalizedEnumTypeDraft>({
  fields: {
    name: 'lenum',
    values: fake(() => [AttributeLocalizedEnumValueDraft.random()]),
  },
});
