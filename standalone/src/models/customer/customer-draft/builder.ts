import { Builder } from '../../../core';
import type { TCreateCustomerDraftBuilder, TCustomerDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const CustomerDraft: TCreateCustomerDraftBuilder = () =>
  Builder<TCustomerDraft>({
    generator,
    transformers,
  });

export default CustomerDraft;
