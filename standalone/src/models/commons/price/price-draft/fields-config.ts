import { type TModelFieldsConfig, fake } from '@/core';
import { BaseMoneyDraftGraphql, MoneyDraftRest } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TPriceDraftGraphql, TPriceDraftRest } from '../types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  fields: {
    channel: null,
    country: fake((f) => f.location.countryCode()),
    custom: null,
    customerGroup: null,
    discounted: null,
    key: null,
    recurrencePolicy: null,
    tiers: null,
    validFrom: fake(getOlderDate),
    validUntil: fake(getNewerDate),
  },
};

export const restFieldsConfig: TModelFieldsConfig<TPriceDraftRest> = {
  fields: {
    ...commonFieldsConfig.fields,
    value: fake(() => MoneyDraftRest.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPriceDraftGraphql> = {
  fields: {
    ...commonFieldsConfig.fields,
    value: fake(() => BaseMoneyDraftGraphql.presets.withAllFields()),
  },
  postBuild: (model, context) => {
    if (context?.isCompatMode && model.value) {
      model.value = BaseMoneyDraftGraphql.presets
        .withAllFields({
          // @ts-expect-error - The compat models is initialized with REST data we need to convert to GraphQL
          currencyCode: model.value.currencyCode,
        })
        .build();
    }
    return model;
  },
};
