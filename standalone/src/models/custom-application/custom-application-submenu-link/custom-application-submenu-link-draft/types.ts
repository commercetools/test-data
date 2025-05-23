import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationSubmenuLinkDraftDataInput } from '@/graphql-types';

export type TCustomApplicationSubmenuLinkDraftGraphql =
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput;

export type TCreateCustomApplicationSubmenuLinkDraftBuilder<
  TModel extends TCustomApplicationSubmenuLinkDraftGraphql,
> = () => TBuilder<TModel>;
