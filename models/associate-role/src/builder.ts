import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TAssociateRole, TCreateAssociateRoleBuilder } from './types';

const Model: TCreateAssociateRoleBuilder = () =>
  Builder<TAssociateRole>({
    generator,
    transformers,
  });

export default Model;
