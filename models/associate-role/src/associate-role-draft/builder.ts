import { Builder } from '@commercetools-test-data/core';
import {
  TAssociateRoleDraft,
  TCreateAssociateRoleDraftBuilder,
} from '../types';
import generator from './generator';

const AssociateRoleDraft: TCreateAssociateRoleDraftBuilder = () =>
  Builder<TAssociateRoleDraft>({
    generator,
  });

export default AssociateRoleDraft;
