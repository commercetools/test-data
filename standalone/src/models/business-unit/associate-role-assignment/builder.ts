import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TAssociateRoleAssignmentDefault,
  TCreateAssociateRoleAssignmentBuilder,
} from './types';

const Model: TCreateAssociateRoleAssignmentBuilder = () =>
  Builder<TAssociateRoleAssignmentDefault>({
    generator,
    transformers,
  });

export default Model;
