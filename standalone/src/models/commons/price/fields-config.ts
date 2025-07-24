import { type TModelFieldsConfig, fake } from '@/core';
import { CentPrecisionMoney, ReferenceGraphql } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TPriceGraphql, TPriceRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  fields: {
    channel: null,
    country: fake((f) => f.location.countryCode()),
    custom: null,
    customerGroup: null,
    discounted: null,
    key: null,
    id: fake((f) => f.string.uuid()),
    recurrencePolicy: null,
    tiers: null,
    validFrom: fake(getOlderDate),
    validUntil: fake(getNewerDate),
    value: fake(() => CentPrecisionMoney.random()),
  },
};

export const restFieldsConfig: TModelFieldsConfig<TPriceRest> = {
  fields: {
    ...commonFieldsConfig.fields,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPriceGraphql> = {
  fields: {
    ...commonFieldsConfig.fields,
    channelRef: null,
    customerGroupRef: null,
    recurrencePolicyRef: null,
    __typename: 'ProductPrice',
  },
  postBuild: (model) => {
    const channelRef = model.channel
      ? ReferenceGraphql.presets.channelReference().id(model.channel.id).build()
      : model.channelRef;

    const customerGroupRef = model.customerGroup
      ? ReferenceGraphql.presets
          .customerGroupReference()
          .id(model.customerGroup.id)
          .build()
      : model.customerGroupRef;

    const recurrencePolicyRef = model.recurrencePolicy
      ? ReferenceGraphql.random()
          .typeId('recurrence-policy')
          .id(model.recurrencePolicy.id)
          .build()
      : model.recurrencePolicyRef;

    return { ...model, channelRef, customerGroupRef, recurrencePolicyRef };
  },
};
