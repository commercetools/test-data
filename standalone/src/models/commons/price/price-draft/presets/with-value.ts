// import { MoneyDraft } from '../../../money';
// import PriceDraft from '../builders';

// const withValue = ({ currency = 'USD' } = {}) =>
//   PriceDraft().value(MoneyDraft.presets.withCurrency(currency));

// export default withValue;

import { BaseMoneyDraftGraphql } from '@/models/commons/base-money/base-money-draft';
import { MoneyDraft } from '@/models/commons/money';
import {
  GraphqlModelBuilder,
  RestModelBuilder,
  CompatModelBuilder,
} from '../builders';

type TParams = {
  currencyCode?: string;
};

export const graphqlPreset = (params?: TParams) => {
  return GraphqlModelBuilder().value(
    BaseMoneyDraftGraphql.presets.withAllFields({
      currencyCode: params?.currencyCode || 'USD',
    })
  );
};

export const restPreset = (params?: TParams) => {
  return RestModelBuilder().value(
    MoneyDraft.presets.withCurrency(params?.currencyCode || 'USD')
  );
};

export const compatPreset = (params?: TParams) => {
  return CompatModelBuilder().value(
    MoneyDraft.presets.withCurrency(params?.currencyCode || 'USD')
  );
};
