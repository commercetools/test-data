import { Generator, fake } from '@commercetools-test-data/core';
import type { TStoreDraft } from '../types';
import {
  LocalizedString,
} from '@commercetools-test-data/commons';

// https://docs.commercetools.com/api/projects/stores#storedraft


const generator = Generator<TStoreDraft>({
  fields: {

    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedString.random()),
    languages: //TODO,
    countries: //TODO,
    distributionChannels: //TODO,
    supplyChannels: //TODO,
    productSelections://TODO,
    custom: null,
  },
});

export default generator;
