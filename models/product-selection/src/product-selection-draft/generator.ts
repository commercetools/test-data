import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TProductSelectionDraft } from '../types';

//https://docs.commercetools.com/api/projects/product-selections#productselectiondraft

const generator = Generator<TProductSelectionDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    custom: null,
  },
});

export default generator;
