import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountValueGiftLineItemDraft,
  TCartDiscountValueGiftLineItemDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountValueGiftLineItemDraft,
    TCartDiscountValueGiftLineItemDraft
  >('default', {
    buildFields: ['product', 'supplyChannel', 'distributionChannel'],
  }),
  rest: Transformer<
    TCartDiscountValueGiftLineItemDraft,
    TCartDiscountValueGiftLineItemDraft
  >('rest', {
    buildFields: ['product', 'supplyChannel', 'distributionChannel'],
  }),
  graphql: Transformer<
    TCartDiscountValueGiftLineItemDraft,
    TCartDiscountValueGiftLineItemDraftGraphql
  >('graphql', {
    buildFields: ['product', 'supplyChannel', 'distributionChannel'],
  }),
};

export default transformers;
