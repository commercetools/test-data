import { TBuilder } from '@/core';
import type { TMcSettingsRestrictedCustomApplicationForOrganization } from '@/graphql-types';

export type TCustomApplicationGraphql =
  TMcSettingsRestrictedCustomApplicationForOrganization;

export type TCreateCustomApplicationBuilder<
  TModel extends TCustomApplicationGraphql,
> = () => TBuilder<TModel>;
