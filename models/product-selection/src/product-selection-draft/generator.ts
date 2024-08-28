import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import type { TProductSelectionDraft } from '../types';

//https://docs.commercetools.com/api/projects/product-selections#productselectiondraft

const generator = Generator<TProductSelectionDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedStringDraft.random()),
    mode: oneOf('Individual', 'IndividualExclusion'),
    custom: null,
  },
});

export default generator;
