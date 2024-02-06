import { Generator, fake } from '@commercetools-test-data/core';
import type { TReferenceDraft } from '../types';

// https://docs.commercetools.com/api/types#referencetype
const generator = Generator<TReferenceDraft>({
  fields: {
    id: fake((f) => f.string.uuid()),
    typeId: null,
  },
});

export default generator;
