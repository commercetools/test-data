import { type TModelFieldsConfig, fake } from '@/core';
import { BaseMoneyDraftGraphql, MoneyDraft } from '@/models/commons';
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

// readonly key?: string;
// readonly value: _Money;
// readonly country?: string;
// readonly customerGroup?: CustomerGroupResourceIdentifier;
// readonly channel?: ChannelResourceIdentifier;
// readonly validFrom?: string;
// readonly validUntil?: string;
// readonly discounted?: DiscountedPriceDraft;
// readonly tiers?: PriceTierDraft[];
// readonly custom?: CustomFieldsDraft;
// recurrencePolicy?: IReference;
export const restFieldsConfig: TModelFieldsConfig<TPriceDraftRest> = {
  fields: {
    ...commonFieldsConfig.fields,
    value: fake(() => MoneyDraft.random()),
  },
};

// channel?: InputMaybe<TCtpResourceIdentifierInput>;
// country?: InputMaybe<Scalars['Country']['input']>;
// custom?: InputMaybe<TCtpCustomFieldsDraft>;
// customerGroup?: InputMaybe<TCtpReferenceInput>;
// discounted?: InputMaybe<TCtpDiscountedProductPriceValueInput>;
// key?: InputMaybe<Scalars['String']['input']>;
// recurrencePolicy?: InputMaybe<TCtpResourceIdentifierInput>;
// tiers?: InputMaybe<Array<TCtpProductPriceTierInput>>;
// validFrom?: InputMaybe<Scalars['DateTime']['input']>;
// validUntil?: InputMaybe<Scalars['DateTime']['input']>;
// value: TCtpBaseMoneyInput;
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
