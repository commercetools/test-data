import { fake, Generator } from '@/core';
import { LocalizedString } from '@/models/commons';
import { type TCustomFieldLocalizedEnumValue } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldlocalizedenumvalue

const generator = Generator<TCustomFieldLocalizedEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    label: fake(() => LocalizedString.random()),
  },
});

export default generator;
