import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateOrganizationDraftBuilder,
  TOrganizationDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateOrganizationDraftBuilder = () =>
  Builder<TOrganizationDraft>({
    generator,
    transformers,
  });

export default Model;
