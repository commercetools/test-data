import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationMenuLink } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationMenuLinkGraphql =
  TMcSettingsCustomApplicationMenuLink;

export type TCustomApplicationMenuLink = Omit<
  TCustomApplicationMenuLinkGraphql,
  '__typename'
>;

export type TCustomApplicationMenuLinkDraft = Pick<
  TMcSettingsCustomApplicationMenuLink,
  'defaultLabel' | 'labelAllLocales' | 'permissions'
>;

export type TCustomApplicationMenuLinkBuilder =
  TBuilder<TCustomApplicationMenuLink>;
export type TCreateCustomApplicationMenuLinkBuilder =
  () => TCustomApplicationMenuLinkBuilder;

export type TCustomApplicationMenuLinkDraftBuilder =
  TBuilder<TCustomApplicationMenuLinkDraft>;
export type TCreateCustomApplicationMenuLinkDraftBuilder =
  () => TCustomApplicationMenuLinkDraftBuilder;
