import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationMenuLinkDraft } from '@/graphql-types';

export type TCustomApplicationMenuLinkDraftGraphql =
  TMcSettingsCustomApplicationMenuLinkDraft;

export type TCreateCustomApplicationMenuLinkDraftBuilder<
  TModel extends TCustomApplicationMenuLinkDraftGraphql,
> = () => TBuilder<TModel>;
