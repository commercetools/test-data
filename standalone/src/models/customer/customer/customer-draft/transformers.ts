import { Transformer } from '@/core';
import type { TCustomerDraft, TCustomerDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCustomerDraft, TCustomerDraft>('default', {
    buildFields: ['addresses', 'customerGroup'],
  }),
  rest: Transformer<TCustomerDraft, TCustomerDraft>('rest', {
    buildFields: ['addresses', 'customerGroup'],
  }),
  graphql: Transformer<TCustomerDraft, TCustomerDraftGraphql>('graphql', {
    buildFields: ['addresses', 'customerGroup'],
  }),
};

export default transformers;
