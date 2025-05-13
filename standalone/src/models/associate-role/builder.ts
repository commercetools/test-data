import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import { TAssociateRole, TCreateAssociateRoleBuilder } from './types';

const Model: TCreateAssociateRoleBuilder = () =>
  Builder<TAssociateRole>({
    generator,
    transformers,
  });

export default Model;
