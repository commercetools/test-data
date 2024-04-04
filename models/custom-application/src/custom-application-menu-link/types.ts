import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TMcSettingsCustomApplicationMenuLink,
  TMcSettingsCustomApplicationMenuLinkDraftDataInput,
} from '@commercetools-test-data/graphql-types';

export type TCustomApplicationMenuLinkGraphql =
  TMcSettingsCustomApplicationMenuLink;

export type TCustomApplicationMenuLink = Omit<
  TCustomApplicationMenuLinkGraphql,
  '__typename'
>;

export type TCustomApplicationMenuLinkDraft =
  TMcSettingsCustomApplicationMenuLinkDraftDataInput;

export type TCustomApplicationMenuLinkBuilder =
  TBuilder<TCustomApplicationMenuLink>;
export type TCreateCustomApplicationMenuLinkBuilder =
  () => TCustomApplicationMenuLinkBuilder;

export type TCustomApplicationMenuLinkDraftBuilder =
  TBuilder<TCustomApplicationMenuLinkDraft>;
export type TCreateCustomApplicationMenuLinkDraftBuilder =
  () => TCustomApplicationMenuLinkDraftBuilder;
