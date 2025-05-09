import { Builder } from '../../../core';
import type {
  TCreateCustomerGroupDraftBuilder,
  TCustomerGroupDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const CustomerGroupDraft: TCreateCustomerGroupDraftBuilder = () =>
  Builder<TCustomerGroupDraft>({
    generator,
    transformers,
  });

export default CustomerGroupDraft;
