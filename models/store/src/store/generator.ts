import {
  ClientLogging,
  LocalizedString,
  Reference,
} from '@commercetools-test-data/commons';
import {
  Generator,
  fake,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TStore } from './types';

// https://docs.commercetools.com/api/projects/stores#store

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TStore>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedString.random()),
    languages: [oneOf('en-US', 'de-DE', 'es-ES')],
    countries: [fake((f) => f.location.countryCode())],
    distributionChannels: [fake(() => Reference.random().typeId('channel'))],
    supplyChannels: [fake(() => Reference.random().typeId('channel'))],
    productSelections: [],
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
