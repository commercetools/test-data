import type { Cart, CartDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCart = Cart;
export type TCartDraft = CartDraft;

export type TCartGraphql = TCart & {
  __typename: 'Cart';
};
export type TCartDraftGraphql = TCartDraft;

export type TCartBuilder = TBuilder<TCart>;
export type TCartDraftBuilder = TBuilder<TCartDraft>;
export type TCreateCartBuilder = () => TCartBuilder;
export type TCreateCartDraftBuilder = () => TCartDraftBuilder;
