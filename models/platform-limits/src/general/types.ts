import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TCustomerLimitsProjection,
  TCustomerGroupLimitsProjection,
  TZoneLimitsProjection,
  TTaxCategoryLimitsProjection,
  TShippingMethodLimitsProjection,
  TProductDiscountLimitsProjection,
  TCartDiscountLimitsProjection,
  TStoreLimitsProjection,
  TShoppingListLimitsProjection,
  TCartLimitsProjection,
  TBusinessUnitLimitsProjection,
} from '../index';

export type TProjectCustomLimitsProjection = {
  customers: TCustomerLimitsProjection;
  customerGroups: TCustomerGroupLimitsProjection;
  zones: TZoneLimitsProjection;
  taxCategories: TTaxCategoryLimitsProjection;
  shippingMethods: TShippingMethodLimitsProjection;
  productDiscounts: TProductDiscountLimitsProjection;
  cartDiscounts: TCartDiscountLimitsProjection;
  stores: TStoreLimitsProjection;
  shoppingLists: TShoppingListLimitsProjection;
  carts: TCartLimitsProjection;
  businessUnits: TBusinessUnitLimitsProjection;
};

export type TProjectCustomLimitsProjectionGraphql =
  TProjectCustomLimitsProjection & {
    __typename: 'ProjectCustomLimitsProjection';
  };

export type TProjectCustomLimitsProjectionBuilder =
  TBuilder<TProjectCustomLimitsProjection>;
export type TCreateProjectCustomLimitsProjectionBuilder =
  () => TProjectCustomLimitsProjectionBuilder;
