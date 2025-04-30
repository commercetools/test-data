import {
  MoneyDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import {
  fake,
  type TModelFieldsConfig,
  oneOf,
} from '@commercetools-test-data/core';
import { customLineItemPriceMode } from '../../cart/constants';
import {
  TCustomLineItemDraftRest,
  TCustomLineItemDraftGraphql,
} from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.string.uuid()),
  name: fake(() => LocalizedStringDraft.random()),
  quantity: fake((f) => f.number.int(9)),
  money: fake(() => MoneyDraft.random()),
  slug: fake((f) => f.lorem.slug(3)),
  taxCategory: null,
  externalTaxRate: null,
  shippingDetails: null,
  priceMode: oneOf(...Object.values(customLineItemPriceMode)),
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TCustomLineItemDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomLineItemDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      recurrenceInfo: null,
    },
  };
