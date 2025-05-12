import {
  fake,
  type TModelFieldsConfig,
  oneOf,
} from '../../../core';
import {
  CentPrecisionMoney,
  LocalizedString,
  Money,
  ReferenceGraphql,
} from '../../commons';
import { customLineItemPriceMode } from '../cart/constants';
import { TCustomLineItemRest, TCustomLineItemGraphql } from './types';

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  key: fake((f) => f.string.uuid()),
  taxedPrice: null,
  taxedPricePortions: [],
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
    name: fake((f) => LocalizedString.random()),
    money: fake(() => CentPrecisionMoney.random()),
    totalPrice: fake(() => CentPrecisionMoney.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomLineItemGraphql> = {
  fields: {
    ...commonFieldsConfig,
    name: null,
    money: fake(() => Money.random()),
    totalPrice: fake(() => Money.random()),
    __typename: 'CustomLineItem',
    nameAllLocales: fake((f) => LocalizedString.random()),
    taxCategoryRef: null,
    recurrenceInfo: null
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
