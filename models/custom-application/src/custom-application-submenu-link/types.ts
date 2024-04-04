import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TMcSettingsCustomApplicationSubmenuLink,
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput,
} from '@commercetools-test-data/graphql-types';

export type TCustomApplicationSubmenuLinkGraphql =
  TMcSettingsCustomApplicationSubmenuLink;

export type TCustomApplicationSubmenuLink = Omit<
  TCustomApplicationSubmenuLinkGraphql,
  '__typename'
>;

export type TCustomApplicationSubmenuLinkDraft =
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput;

export type TCustomApplicationSubmenuLinkBuilder =
  TBuilder<TCustomApplicationSubmenuLink>;
export type TCreateCustomApplicationSubmenuLinkBuilder =
  () => TCustomApplicationSubmenuLinkBuilder;

export type TCustomApplicationSubmenuLinkDraftBuilder =
  TBuilder<TCustomApplicationSubmenuLinkDraft>;
export type TCreateCustomApplicationSubmenuLinkDraftBuilder =
  () => TCustomApplicationSubmenuLinkDraftBuilder;
