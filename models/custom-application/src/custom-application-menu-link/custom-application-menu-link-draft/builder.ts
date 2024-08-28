import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateCustomApplicationMenuLinkDraftBuilder,
  TCustomApplicationMenuLinkDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCustomApplicationMenuLinkDraftBuilder = () =>
  Builder<TCustomApplicationMenuLinkDraft>({
    generator,
    transformers,
  });

export default Model;
