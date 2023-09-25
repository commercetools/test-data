import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TAttributeLocalizedEnumValueDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumvalue

export const generator = Generator<TAttributeLocalizedEnumValueDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    label: fake(() => LocalizedString.random()),
  },
});
