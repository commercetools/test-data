import type { TBuilder } from '../../../core';
import type {
  TMcSettingsCustomApplicationSubmenuLink,
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput,
} from '../../../graphql-types';

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
