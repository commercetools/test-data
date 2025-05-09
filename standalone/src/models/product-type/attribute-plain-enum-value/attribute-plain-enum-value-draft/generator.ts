import { fake, Generator } from '../../../../core';
import { TAttributePlainEnumValueDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributeplainenumvalue

export const generator = Generator<TAttributePlainEnumValueDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    label: fake((f) => f.lorem.slug(2)),
  },
});
