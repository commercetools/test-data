import { Cart, CartDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCart = Cart;
export type TCartDraft = CartDraft;

export type TCartGraphql = TCart & {
  __typename: 'Cart';
};
export type TCartDraftGraphql = TCartDraft & {
  __typename: 'CartDraft';
};

export type TCartBuilder = TBuilder<TCart>;
export type TCartDraftBuilder = TBuilder<TCartDraft>;
export type TCreateCartBuilder = () => TCartBuilder;
export type TCreateCartDraftBuilder = () => TCartDraftBuilder;
