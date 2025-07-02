import { TBuilder } from '@/core';
import {
  DiscountedLineItemPriceRest,
  DiscountedLineItemPriceForQuantityRest,
  ItemStateRest,
  TaxedItemPriceRest,
  DiscountedLineItemPortionRest,
  ItemStateGraphql,
  TaxedItemPriceGraphql,
  DiscountedLineItemPriceForQuantityGraphql,
} from '@/models/cart/cart';
import {
  CartDiscount,
  CartDiscountTargetGraphql,
  CartDiscountValueRelative,
} from '@/models/cart/cart-discount';
import {
  DiscountedLineItemPortionGraphql,
  DiscountedLineItemPriceGraphql,
  LocalizedString,
  Money,
  ReferenceRest,
} from '@/models/commons';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import { TLineItemGraphql, TLineItemRest } from '../../types';

export const restPreset = (): TBuilder<TLineItemRest> => {
  const includedDiscount = DiscountedLineItemPortionRest.random()
    .discount(
      ReferenceRest.presets.cartDiscountReference().id('cart-discount-id')
    )
    .discountedAmount(Money.presets.withCurrency('EUR'));

  const discountedPrice = DiscountedLineItemPriceRest.random()
    .value(Money.presets.withCurrency('EUR'))
    .includedDiscounts([includedDiscount]);

  const discountedPricePerQuantity =
    DiscountedLineItemPriceForQuantityRest.random().discountedPrice(
      discountedPrice
    );

  return RestModelBuilder()
    .state(ItemStateRest.random())
    .taxedPrice(TaxedItemPriceRest.presets.withAllFields())
    .discountedPricePerQuantity([discountedPricePerQuantity]);
};

export const graphqlPreset = (): TBuilder<TLineItemGraphql> => {
  const cartDiscount = CartDiscount.random()
    .id('cart-discount-id')
    .name(LocalizedString.random())
    .value(CartDiscountValueRelative.random())
    .target(
      CartDiscountTargetGraphql.random().type(
        CartDiscountTargetGraphql.constants.targetTypes.lineItems
      )
    );

  const includedDiscount = DiscountedLineItemPortionGraphql.random()
    .discount(cartDiscount)
    .discountedAmount(Money.presets.withCurrency('EUR').centAmount(1000));

  const discountedPrice = DiscountedLineItemPriceGraphql.random()
    .value(Money.presets.withCurrency('EUR').centAmount(800))
    .includedDiscounts([includedDiscount]);

  const discountedPricePerQuantity =
    DiscountedLineItemPriceForQuantityGraphql.random()
      .discountedPrice(discountedPrice)
      .quantity(1);

  return GraphqlModelBuilder()
    .state(ItemStateGraphql.random())
    .taxedPrice(TaxedItemPriceGraphql.presets.withAllFields())
    .discountedPricePerQuantity([discountedPricePerQuantity]);
};
