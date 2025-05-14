import { Money } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpMoney, TCtpMoneyDraft } from '@/graphql-types';

// Base model
export type TMoney = Money;

export type TMoneyGraphql = TCtpMoney;

export type TMoneyBuilder = TBuilder<TMoney>;
export type TCreateMoneyBuilder = () => TMoneyBuilder;

// Draft model
export type TMoneyDraft = Money;

export type TMoneyDraftGraphql = TCtpMoneyDraft;

export type TMoneyDraftBuilder = TBuilder<TMoneyDraft>;
export type TCreateMoneyDraftBuilder = () => TMoneyDraftBuilder;
