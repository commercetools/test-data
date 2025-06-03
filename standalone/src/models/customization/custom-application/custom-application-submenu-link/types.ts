import type { TBuilder } from '@/core';
import type {
  TMcSettingsCustomApplicationSubmenuLink,
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput,
} from '@/graphql-types';

export type TCustomApplicationSubmenuLinkGraphql =
  TMcSettingsCustomApplicationSubmenuLink;

export type TCustomApplicationSubmenuLinkDraftGraphql =
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput;

export type TCreateCustomApplicationSubmenuLinkBuilder<
  TModel extends
    | TCustomApplicationSubmenuLinkGraphql
    | TCustomApplicationSubmenuLinkDraftGraphql,
> = () => TBuilder<TModel>;
