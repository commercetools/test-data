import { Cart, CartDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpCart, TCtpCartDraft } from '@/graphql-types';

/**
 * @deprecated use `TCartRest` instead
 */
export type TCart = Cart;
export type TCartRest = Cart;
export type TCartGraphql = TCtpCart;

/**
 * @deprecated use `TCartDraftRest` instead
 */
export type TCartDraft = CartDraft;
export type TCartDraftRest = CartDraft;
export type TCartDraftGraphql = TCtpCartDraft;

export type TCreateCartBuilder<
  TCartModel extends
    | TCartRest
    | TCartGraphql
    | TCartDraftRest
    | TCartDraftGraphql,
> = () => TBuilder<TCartModel>;
