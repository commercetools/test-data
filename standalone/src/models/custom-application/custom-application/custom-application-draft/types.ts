import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationDraftDataInput } from '@/graphql-types';

export type TCustomApplicationDraftGraphql =
  TMcSettingsCustomApplicationDraftDataInput;

export type TCreateCustomApplicationDraftBuilder<
  TModel extends TCustomApplicationDraftGraphql,
> = () => TBuilder<TModel>;
