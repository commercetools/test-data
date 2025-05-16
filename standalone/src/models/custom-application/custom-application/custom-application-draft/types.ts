import type { TMcSettingsCustomApplicationDraftDataInput } from '@commercetools-test-data/graphql-types';
import type { TBuilder } from '@/core';

export type TCustomApplicationDraftGraphql =
  TMcSettingsCustomApplicationDraftDataInput;

export type TCreateCustomApplicationDraftBuilder<
  TModel extends TCustomApplicationDraftGraphql,
> = () => TBuilder<TModel>;
