import type { FreezeStrategy } from '@commercetools/platform-sdk';
import {
  TCtpCartOrigin,
  TCtpCartState,
  TCtpCustomLineItemPriceMode,
  TCtpInventoryMode,
  TCtpLineItemMode,
  TCtpLineItemPriceMode,
  TCtpRoundingMode,
  TCtpShippingMode,
  TCtpTaxCalculationMode,
  TCtpTaxMode,
} from '@/graphql-types';

export const inventoryMode = TCtpInventoryMode;

export const taxMode = TCtpTaxMode;

export const taxRoundingMode = TCtpRoundingMode;

export const taxCalculationMode = TCtpTaxCalculationMode;

export const origin = TCtpCartOrigin;

export const shippingMode = TCtpShippingMode;

export const cartState = TCtpCartState;

export const customLineItemPriceMode = TCtpCustomLineItemPriceMode;

export const priceMode = TCtpLineItemPriceMode;

export const priceRoundingMode = TCtpRoundingMode;

export const lineItemMode = TCtpLineItemMode;

// The GraphQL schema doesn't expose a FreezeStrategy enum yet, so the values
// are declared manually against the SDK's `FreezeStrategy` type.
export const freezeStrategies: FreezeStrategy[] = ['HardFreeze', 'SoftFreeze'];
