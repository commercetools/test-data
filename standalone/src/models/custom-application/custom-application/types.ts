import { TBuilder } from '@/core';
import type {
  TMcSettingsRestrictedCustomApplicationForOrganization,
  TMcSettingsCustomApplicationDraftDataInput,
} from '@/graphql-types';

export type TCustomApplicationGraphql =
  TMcSettingsRestrictedCustomApplicationForOrganization;

export type TCustomApplicationDraftGraphql =
  TMcSettingsCustomApplicationDraftDataInput;

export type TCreateCustomApplicationBuilder<
  TModel extends TCustomApplicationGraphql | TCustomApplicationDraftGraphql,
> = () => TBuilder<TModel>;
