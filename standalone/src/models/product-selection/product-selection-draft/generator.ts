import { fake, Generator, oneOf } from '../../../core';
import { LocalizedStringDraft } from '../../commons';
import { TProductSelectionDraft } from '../types';

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
