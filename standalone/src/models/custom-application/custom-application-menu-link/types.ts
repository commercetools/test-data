import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationMenuLink } from '@/graphql-types';

export type TCustomApplicationMenuLinkGraphql =
  TMcSettingsCustomApplicationMenuLink;

export type TCreateCustomApplicationMenuLinkBuilder<
  TModel extends TCustomApplicationMenuLinkGraphql,
> = () => TBuilder<TModel>;
