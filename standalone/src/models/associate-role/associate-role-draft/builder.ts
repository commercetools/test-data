import { Builder } from '@/core';
import {
  TAssociateRoleDraft,
  TCreateAssociateRoleDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const AssociateRoleDraft: TCreateAssociateRoleDraftBuilder = () =>
  Builder<TAssociateRoleDraft>({
    generator,
    transformers,
  });

export default AssociateRoleDraft;
