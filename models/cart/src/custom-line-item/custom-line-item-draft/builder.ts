import { Builder } from '@commercetools-test-data/core';
import type {
  TCustomLineItemDraft,
  TCreateCustomLineItemDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCustomLineItemDraftBuilder = () =>
  Builder<TCustomLineItemDraft>({
    generator,
    transformers,
  });

export default Model;
