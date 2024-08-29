import type { ShippingInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TShippingInfo = ShippingInfo;

export type TShippingInfoGraphql = TShippingInfo & {
  __typename: 'ShippingInfo';
};

export type TShippingInfoBuilder = TBuilder<ShippingInfo>;
export type TCreateShippingInfoBuilder = () => TShippingInfoBuilder;
