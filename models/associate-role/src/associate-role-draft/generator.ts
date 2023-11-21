import { fake, Generator } from '@commercetools-test-data/core';
import { TAssociateRoleDraft } from '../types';

const generator = Generator<TAssociateRoleDraft>({
  fields: {
    key: fake((f) => f.string.alphanumeric(10)),
    name: fake((f) => f.string.alphanumeric(15)),
    buyerAssignable: fake((f) => f.datatype.boolean()),
    permissions: [],
    custom: null,
  },
});

export default generator;
