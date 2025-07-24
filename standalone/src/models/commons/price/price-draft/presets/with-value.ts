import { MoneyDraftRest } from '@/models/commons';
import { BaseMoneyDraftGraphql } from '@/models/commons/base-money/base-money-draft';
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
    MoneyDraftRest.presets.withCurrency(params?.currencyCode || 'USD')
  );
};

export const compatPreset = (params?: TParams) => {
  return CompatModelBuilder().value(
    MoneyDraftRest.presets.withCurrency(params?.currencyCode || 'USD')
  );
};
