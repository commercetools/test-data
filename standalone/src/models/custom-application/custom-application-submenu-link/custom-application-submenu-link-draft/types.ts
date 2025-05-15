import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput,
} from '@commercetools-test-data/graphql-types';

export type TCustomApplicationSubmenuLinkDraftGraphql =
  TMcSettingsCustomApplicationSubmenuLinkDraftDataInput;

export type TCreateCustomApplicationSubmenuLinkDraftBuilder<
  TModel extends TCustomApplicationSubmenuLinkDraftGraphql,
> = () => TBuilder<TModel>;
