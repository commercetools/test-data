import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TMcSettingsCustomView,
  TMcSettingsCustomViewDraftDataInput,
} from '@commercetools-test-data/graphql-types';

export type TCustomViewGraphql = TMcSettingsCustomView;

export type TCustomView = Omit<TCustomViewGraphql, '__typename' | 'owner'>;

export type TCustomViewDraftGraphql = TMcSettingsCustomViewDraftDataInput;

export type TCustomViewDraft = Omit<TCustomViewDraftGraphql, '__typename'>;

export type TCustomViewBuilder = TBuilder<TCustomView>;
export type TCreateCustomViewBuilder = () => TCustomViewBuilder;

export type TCustomViewDraftBuilder = TBuilder<TCustomViewDraft>;
export type TCreateCustomViewDraftBuilder = () => TCustomViewDraftBuilder;
