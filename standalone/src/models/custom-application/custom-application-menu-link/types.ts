import type { TBuilder } from '../../../core';
import type {
  TMcSettingsCustomApplicationMenuLink,
  TMcSettingsCustomApplicationMenuLinkDraftDataInput,
} from '../../../graphql-types';

export type TCustomApplicationMenuLinkGraphql = Omit<
  TMcSettingsCustomApplicationMenuLink,
  'submenuLinks'
>;

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
