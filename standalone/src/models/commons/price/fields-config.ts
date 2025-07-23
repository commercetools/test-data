import { type TModelFieldsConfig, fake } from '@/core';
import { CentPrecisionMoney, ReferenceGraphql } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TPriceGraphql, TPriceRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  fields: {
    id: fake((f) => f.string.uuid()),
    typeId: null,
  },
};

// readonly id: string;
// readonly key?: string;
// readonly value: TypedMoney;
// readonly country?: string;
// readonly customerGroup?: CustomerGroupReference;
// readonly channel?: ChannelReference;
// readonly validFrom?: string;
// readonly validUntil?: string;
// readonly discounted?: DiscountedPrice;
// readonly tiers?: PriceTier[];
// readonly custom?: CustomFields;
// recurrencePolicy?: IReference;
export const restFieldsConfig: TModelFieldsConfig<TPriceRest> = {
  fields: {
    ...commonFieldsConfig.fields,
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

// __typename?: 'ProductPrice';
// channel?: Maybe<TCtpChannel>;
// channelRef?: Maybe<TCtpReference>;
// country?: Maybe<Scalars['Country']['output']>;
// custom?: Maybe<TCtpCustomFieldsType>;
// customerGroup?: Maybe<TCtpCustomerGroup>;
// customerGroupRef?: Maybe<TCtpReference>;
// discounted?: Maybe<TCtpDiscountedProductPriceValue>;
// id?: Maybe<Scalars['String']['output']>;
// key?: Maybe<Scalars['String']['output']>;
// /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
// recurrencePolicy?: Maybe<TCtpRecurrencePolicy>;
// /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
// recurrencePolicyRef?: Maybe<TCtpReference>;
// tiers?: Maybe<Array<TCtpProductPriceTier>>;
// validFrom?: Maybe<Scalars['DateTime']['output']>;
// validUntil?: Maybe<Scalars['DateTime']['output']>;
// value: TCtpHighPrecisionMoney | TCtpMoney;
export const graphqlFieldsConfig: TModelFieldsConfig<TPriceGraphql> = {
  fields: {
    ...commonFieldsConfig.fields,
    channel: null,
    channelRef: null,
    country: fake((f) => f.location.countryCode()),
    custom: null,
    customerGroup: null,
    customerGroupRef: null,
    discounted: null,
    id: fake((f) => f.string.uuid()),
    key: null,
    recurrencePolicy: null,
    recurrencePolicyRef: null,
    tiers: null,
    validFrom: fake(getOlderDate),
    validUntil: fake(getNewerDate),
    value: fake(() => CentPrecisionMoney.random()),
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
