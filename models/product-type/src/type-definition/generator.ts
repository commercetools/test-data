import {
  LocalizedString,
  ClientLogging,
} from '@commercetools-test-data/commons';
import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { FieldDefinition } from '@commercetools-test-data/type';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TTypeDefinition } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TTypeDefinition>({
  fields: {
    key: fake((f) => f.lorem.words()),
    name: fake(() => LocalizedString.random()),
    description: undefined,
    resourceTypeIds: [],
    fieldDefinitions: [fake(() => FieldDefinition.random())],
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
