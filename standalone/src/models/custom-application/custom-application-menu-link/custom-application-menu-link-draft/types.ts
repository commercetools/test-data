import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationMenuLinkDraftDataInput } from '@/graphql-types';

export type TCustomApplicationMenuLinkDraftGraphql =
  TMcSettingsCustomApplicationMenuLinkDraftDataInput;

export type TCreateCustomApplicationMenuLinkDraftBuilder<
  TModel extends TCustomApplicationMenuLinkDraftGraphql,
> = () => TBuilder<TModel>;
