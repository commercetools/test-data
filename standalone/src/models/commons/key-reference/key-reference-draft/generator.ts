import { Generator, fake } from '@/core';
import type { TKeyReferenceDraft } from '.././types';

// https://docs.commercetools.com/api/types#keyreference
const generator = Generator<TKeyReferenceDraft>({
  fields: {
    typeId: null,
    key: fake((f) => f.string.alphanumeric(8)),
  },
});

export default generator;
