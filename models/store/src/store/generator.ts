import {
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { Generator, fake, sequence,  } from '@commercetools-test-data/core';
import type { TStore } from './types';
import { createRelatedDates } from '@commercetools-test-data/utils';

// https://docs.commercetools.com/api/projects/stores#store

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TStore>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedString.random()),
    languages: //TODO,
    countries: //TODO,
    distributionChannels: //TODO,
    supplyChannels: //TODO,
    productSelections://TODO,
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
