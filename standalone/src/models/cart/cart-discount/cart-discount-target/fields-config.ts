import { fake, type TModelFieldsConfig } from '@/core';
import { targetTypes } from './constants';
import type {
  TCartDiscountTargetGraphql,
  TCartDiscountTargetRest,
} from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscounttarget

const targetTypeToGraphqlTypenameMap: Record<string, string> = {
  customLineItems: 'CustomLineItemsTarget',
  lineItems: 'LineItemsTarget',
  pattern: 'PatternTarget',
  shipping: 'ShippingTarget',
  totalPrice: 'TotalPriceTarget',
};

const commonFieldsConfig = {
  type: fake((f) => f.helpers.arrayElement(Object.values(targetTypes))),
};

export const restFieldsConfig: TModelFieldsConfig<TCartDiscountTargetRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCartDiscountTargetGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      predicate: null,
      __typename: null,
    },
    postBuild: (model) => {
      const shouldIncludePredicate = model.type === targetTypes.shipping;

      return {
        ...model,
        predicate: shouldIncludePredicate
          ? (model.predicate ?? '1 = 1')
          : undefined,
        __typename: targetTypeToGraphqlTypenameMap[model.type],
      };
    },
  };
