import { Generator } from '@commercetools-test-data/core';
import { TProjectCustomLimitsProjection } from './types';

/**
 * customers -  reference to customersPlatformLimits ,
 * customerGroups -  reference to customerGroupsPlatformLimits ,
 * zones -  reference to zonesPlatformLimits ,
 * taxCategories -  reference to taxCategoriesPlatformLimits ,
 * shippingMethods -  reference to shippingMethodsPlatformLimits ,
 * productDiscounts -  reference to productDiscountsPlatformLimits ,
 * cartDiscounts -  reference to cartDiscountsPlatformLimits ,
 * stores -  reference to storesPlatformLimits ,
 * shoppingLists -  reference to shoppingListsPlatformLimits ,
 * carts -  reference to cartsPlatformLimits ,
 * businessUnits -  reference to businessUnitsPlatformLimits ,
 */
const generator = Generator<TProjectCustomLimitsProjection>({
  fields: {
    customers: null,
    customerGroups: null,
    zones: null,
    taxCategories: null,
    shippingMethods: null,
    productDiscounts: null,
    cartDiscounts: null,
    stores: null,
    shoppingLists: null,
    carts: null,
    businessUnits: null,
  },
});

export default generator;
