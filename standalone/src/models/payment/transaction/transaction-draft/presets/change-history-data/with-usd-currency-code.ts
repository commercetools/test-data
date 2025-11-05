import { TBuilder } from '@/core';
import {
  MoneyDraft,
  MoneyDraftGraphql,
  MoneyDraftRest,
} from '@/models/commons';
import {
  TTransactionDraftGraphql,
  TTransactionDraftRest,
} from '../../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../../builders';

export const restPreset = (): TBuilder<TTransactionDraftRest> =>
  RestModelBuilder().amount(
    MoneyDraftRest.presets.changeHistoryData.withUsdCurrencyCode()
  );

export const graphqlPreset = (): TBuilder<TTransactionDraftGraphql> =>
  GraphqlModelBuilder().amount(
    MoneyDraftGraphql.presets.changeHistoryData.withUsdCurrencyCode()
  );

export const compatPreset = (): TBuilder<
  TTransactionDraftRest | TTransactionDraftGraphql
> =>
  CompatModelBuilder().amount(
    MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode()
  );
