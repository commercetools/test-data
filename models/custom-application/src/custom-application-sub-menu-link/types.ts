import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationSubmenuLink } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationSubmenuLinkGraphql =
  TMcSettingsCustomApplicationSubmenuLink;

export type TCustomApplicationSubmenuLink = Omit<
  TCustomApplicationSubmenuLinkGraphql,
  '__typename'
>;

export type TCustomApplicationSubmenuLinkDraftGraphql = Pick<
  TMcSettingsCustomApplicationSubmenuLink,
  'defaultLabel' | 'labelAllLocales' | 'permissions' | 'uriPath'
>;

export type TCustomApplicationSubmenuLinkDraft = Omit<
  TCustomApplicationSubmenuLinkDraftGraphql,
  '__typename'
>;

export type TCustomApplicationSubmenuLinkBuilder =
  TBuilder<TCustomApplicationSubmenuLink>;
export type TCreateCustomApplicationSubmenuLinkBuilder =
  () => TCustomApplicationSubmenuLinkBuilder;

export type TCustomApplicationSubmenuLinkDraftBuilder =
  TBuilder<TCustomApplicationSubmenuLinkDraft>;
export type TCreateCustomApplicationSubmenuLinkDraftBuilder =
  () => TCustomApplicationSubmenuLinkDraftBuilder;
