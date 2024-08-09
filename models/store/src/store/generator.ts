import { Channel } from '@commercetools-test-data/channel';
import {
  ClientLogging,
  LocalizedString,
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

// For distribution & supply channels, rest takes a channelReference, while graphql takes both a channelReference & the channel objects.
// The distinction is handled in the transformers.

const generator = Generator<TStore>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedString.random()),
    languages: [oneOf('en-US', 'de-DE', 'es-ES')],
    countries: [fake((f) => ({ code: f.location.countryCode() }))],
    distributionChannels: [fake(() => Channel.random())],
    supplyChannels: [fake(() => Channel.random())],
    productSelections: [],
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
