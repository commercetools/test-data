import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TProductVariantDraft } from '../types';

// https://docs.commercetools.com/api/projects/products#productvariantdraft

const generator = Generator<TProductVariantDraft>({
  fields: {},
});

export default generator;
