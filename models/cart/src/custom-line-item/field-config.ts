import {
  LocalizedString,
  Money,
  ReferenceGraphql,
} from '@commercetools-test-data/commons';
import {
  fake,
  type TModelFieldsConfig,
  oneOf,
} from '@commercetools-test-data/core';
import { customLineItemPriceMode } from '../cart/constants';
import { TCustomLineItemRest, TCustomLineItemGraphql } from './types';

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  key: fake((f) => f.string.uuid()),
  name: null,
  money: fake(() => [Money.random()]),
  taxedPrice: null,
  taxedPricePortions: [],
  totalPrice: null,
  slug: fake((f) => f.lorem.slug(3)),
  quantity: fake((f) => f.number.int(9)),
  state: [],
  taxCategory: null,
  taxRate: null,
  perMethodTaxRate: [],
  discountedPricePerQuantity: [],
  shippingDetails: null,
  priceMode: oneOf(...Object.values(customLineItemPriceMode)),
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TCustomLineItemRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomLineItemGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'CustomLineItem',
    nameAllLocales: null,
    taxCategoryRef: null,
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : model.nameAllLocales;
    const taxCategoryRef = model.taxCategory
      ? ReferenceGraphql.presets
          .taxCategoryReference()
          .id(model.taxCategory.id)
          .buildGraphql()
      : model.taxCategory;

    return {
      name,
      taxCategoryRef,
    };
  },
};
