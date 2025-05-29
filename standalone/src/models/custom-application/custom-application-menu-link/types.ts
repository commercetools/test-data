import type { TBuilder } from '@/core';
import type {
  TMcSettingsCustomApplicationMenuLink,
  TMcSettingsCustomApplicationMenuLinkDraftDataInput,
} from '@/graphql-types';

export type TCustomApplicationMenuLinkGraphql =
  TMcSettingsCustomApplicationMenuLink;

export type TCustomApplicationMenuLinkDraftGraphql =
  TMcSettingsCustomApplicationMenuLinkDraftDataInput;

export type TCreateCustomApplicationMenuLinkBuilder<
  TModel extends
    | TCustomApplicationMenuLinkGraphql
    | TCustomApplicationMenuLinkDraftGraphql,
> = () => TBuilder<TModel>;
