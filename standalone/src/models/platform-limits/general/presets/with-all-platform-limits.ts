import * as BusinessUnitsPlatformLimits from '../../business-units';
import * as CartDiscountsPlatformLimits from '../../cart-discounts';
import * as CartsPlatformLimits from '../../carts';
import * as CustomerGroupsPlatformLimits from '../../customer-groups';
import * as CustomersPlatformLimits from '../../customers';
import * as Limit from '../../limit';
import * as LimitWithCurrent from '../../limit-with-current';
import * as ProductDiscountsPlatformLimits from '../../product-discounts';
import * as ShippingMethodsPlatformLimits from '../../shipping-methods';
import * as ShoppingListsPlatformLimits from '../../shopping-lists';
import * as StoresPlatformLimits from '../../stores';
import * as TaxCategoriesPlatformLimits from '../../tax-categories';
import * as ZonesPlatformLimits from '../../zones';
import PlatformLimits from '../builder';

const withAllPlatformLimits = () =>
  PlatformLimits()
    .businessUnits(
      BusinessUnitsPlatformLimits.random()
        .maxAssociateRoles(Limit.random().limit(5))
        .maxAssociates(Limit.random().limit(2000))
        .maxDepthLimit(Limit.random().limit(5))
        .maxDivisions(Limit.random().limit(4000))
    )
    .customers(
      CustomersPlatformLimits.random().total(
        LimitWithCurrent.presets.withNonExceeded()
      )
    )
    .customerGroups(
      CustomerGroupsPlatformLimits.random().total(
        LimitWithCurrent.presets.withNonExceeded()
      )
    )
    .zones(
      ZonesPlatformLimits.random().total(
        LimitWithCurrent.presets.withNonExceeded()
      )
    )
    .taxCategories(
      TaxCategoriesPlatformLimits.random().total(
        LimitWithCurrent.presets.withNonExceeded()
      )
    )
    .shippingMethods(
      ShippingMethodsPlatformLimits.random().total(
        LimitWithCurrent.presets.withNonExceeded()
      )
    )
    .productDiscounts(
      ProductDiscountsPlatformLimits.random().totalActive(
        LimitWithCurrent.presets.withNonExceeded()
      )
    )
    .cartDiscounts(
      CartDiscountsPlatformLimits.random().totalActiveWithoutDiscountCodes(
        LimitWithCurrent.presets.withNonExceeded()
      )
    )
    .stores(
      StoresPlatformLimits.random()
        .total(LimitWithCurrent.presets.withNonExceeded())
        .inventorySupplyChannels(Limit.random())
        .productDistributionChannels(Limit.random())
    )
    .carts(
      CartsPlatformLimits.random().total(
        LimitWithCurrent.presets.withNonExceeded()
      )
    )
    .shoppingLists(
      ShoppingListsPlatformLimits.random()
        .total(LimitWithCurrent.presets.withNonExceeded())
        .lineItems(Limit.random().limit(10))
        .textLineItems(Limit.random().limit(10))
    );

export default withAllPlatformLimits;
