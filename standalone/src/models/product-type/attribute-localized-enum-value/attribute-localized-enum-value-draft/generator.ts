import { fake, Generator } from '../../../../core';
import { LocalizedStringDraft } from '../../../commons';
import { TAttributeLocalizedEnumValueDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumvalue

export const generator = Generator<TAttributeLocalizedEnumValueDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    label: fake(() => LocalizedStringDraft.random()),
  },
});
