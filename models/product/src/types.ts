import type { TBuilder } from '@commercetools-test-data/core';
import { Product } from '@commercetools/platform-sdk';

export type TProduct = Product;

export type TProductGraphql = TProduct & {
  //
  __typename: 'Product';
};

export type TProductBuilder = TBuilder<TProduct>;
export type TCreateProductBuilder = () => TProductBuilder;
