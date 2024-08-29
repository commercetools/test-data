import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { FieldDefinition } from '@commercetools-test-data/type';
import type { TTypeDefinition } from './types';

// https://docs.commercetools.com/api/projects/but where is this?
// NOTE: SHould this be under type actually?

const generator = Generator<TTypeDefinition>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: fake((f) => f.lorem.words()),
    name: fake(() => LocalizedString.random()),
    fieldDefinitions: [fake(() => FieldDefinition.random())],
  },
});

export default generator;
