import { MoneyDraft } from '@/models/commons';
import { BaseMoneyDraftGraphql } from '@/models/commons/base-money/base-money-draft';
import {
  GraphqlModelBuilder,
  RestModelBuilder,
  CompatModelBuilder,
} from '../builders';

export const graphqlPreset = () => {
  return GraphqlModelBuilder().value(
    BaseMoneyDraftGraphql.presets.withAllFields({ currencyCode: 'USD' })
  );
};

export const restPreset = () => {
  return RestModelBuilder().value(MoneyDraft.presets.withCurrency('USD'));
};

export const compatPreset = () => {
  return CompatModelBuilder().value(MoneyDraft.presets.withCurrency('USD'));
};
