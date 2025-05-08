import { Generator, fake, oneOf } from '../../../../core';
import { LocalizedStringDraft } from '../../../commons';
import type { TStoreDraft } from '../types';

// https://docs.commercetools.com/api/projects/stores#storedraft

const generator = Generator<TStoreDraft>({
  fields: {
    key: fake((f) => f.lorem.slug()),
    name: fake(() => LocalizedStringDraft.random()),
    languages: [oneOf('en-US', 'de-DE', 'es-ES', 'en-GB')],
    countries: [fake((f) => f.location.countryCode())],
    distributionChannels: null,
    supplyChannels: null,
    productSelections: null,
    custom: null,
  },
});

export default generator;
