import { fake, Generator } from '@/core';
import { LocalizedString } from '@/models/commons';
import { type TAttributeLocalizedEnumValue } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumvalue

const generator = Generator<TAttributeLocalizedEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    label: fake(() => LocalizedString.random()),
  },
});

export default generator;
