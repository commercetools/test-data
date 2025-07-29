import { HighPrecisionMoneyDraft } from '@/models/commons';
import { BaseMoneyDraftGraphql } from '../../index';

type TParams = {
  currencyCode?: string;
};

const defaultParams = {
  currencyCode: 'EUR',
} as const;

export const graphqlPreset = (params: TParams = defaultParams) => {
  return BaseMoneyDraftGraphql.random().highPrecision(
    HighPrecisionMoneyDraft.random().currencyCode(
      params.currencyCode ?? defaultParams.currencyCode
    )
  );
};
