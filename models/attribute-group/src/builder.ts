import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import { TAttributeGroup, TCreateAssociateRoleBuilder } from './types';

const Model: TCreateAssociateRoleBuilder = () =>
  Builder<TAttributeGroup>({
    generator,
    transformers,
  });

export default Model;
