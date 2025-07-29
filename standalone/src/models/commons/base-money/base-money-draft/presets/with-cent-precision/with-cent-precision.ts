import { MoneyDraftGraphql } from '@/models/commons';
import { BaseMoneyDraftGraphql } from '../../index';

type TParams = {
  currencyCode?: string;
};

const defaultParams = {
  currencyCode: 'EUR',
} as const;

export const graphqlPreset = (params: TParams = defaultParams) => {
  return BaseMoneyDraftGraphql.random().centPrecision(
    MoneyDraftGraphql.presets.withCurrency(
      params.currencyCode ?? defaultParams.currencyCode
    )
  );
};
