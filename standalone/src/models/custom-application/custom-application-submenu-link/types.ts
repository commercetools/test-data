import type { TBuilder } from '@/core';
import type {
  TMcSettingsCustomApplicationSubmenuLink,
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput,
} from '@/graphql-types';

export type TCustomApplicationSubmenuLinkGraphql =
  TMcSettingsCustomApplicationSubmenuLink;

export type TCreateCustomApplicationSubmenuLinkBuilder<
TModel extends TCustomApplicationSubmenuLinkGraphql, 
> = () => TBuilder<TModel>;
