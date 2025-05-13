import { Builder } from '@/core';
import type {
  TCreateAssociateRoleAssignmentDraftBuilder,
  TAssociateRoleAssignmentDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateAssociateRoleAssignmentDraftBuilder = () =>
  Builder<TAssociateRoleAssignmentDraft>({
    generator,
    transformers,
  });

export default Model;
