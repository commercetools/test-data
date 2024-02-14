import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateAssociateRoleAssignmentDraftBuilder,
  TAssociateRoleAssignmentDraft,
} from '../types';

const Model: TCreateAssociateRoleAssignmentDraftBuilder = () =>
  Builder<TAssociateRoleAssignmentDraft>({
    generator,
    transformers,
  });

export default Model;
