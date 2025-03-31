import { MoneyDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  TCustomLineItemDraftRest,
  TCustomLineItemDraftGraphql,
  TCustomLineItemDraft,
} from '../../../types';
import {
  CustomLineItemDraft,
  CustomLineItemDraftRest,
  CustomLineItemDraftGraphql,
} from '../../index';

const populatePreset = <
  TModel extends TCustomLineItemDraftRest | TCustomLineItemDraftGraphql,
>(
  builder: TBuilder<TModel>
) => {
  return builder.money(
    MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode()
  );
};

export const restPreset = (): TBuilder<TCustomLineItemDraftRest> =>
  populatePreset(CustomLineItemDraftRest.random());

export const graphqlPreset = (): TBuilder<TCustomLineItemDraftGraphql> =>
  populatePreset(CustomLineItemDraftGraphql.random());

export const compatPreset = (): TBuilder<TCustomLineItemDraft> =>
  populatePreset(CustomLineItemDraft.random());
