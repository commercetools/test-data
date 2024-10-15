import {
  {{it.modelName}},
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type T{{it.modelName}}Rest = {{it.modelName}};

// TODO: Check wether the graphql version has different properties
// or types than the rest version.
// You might want to use the GraphQL Explorer for that
// (https://<merchant_center_domain>/<project_key>/graphql-explorer-commercetools/platform)
export type T{{it.modelName}}Graphql = {{it.modelName}} & {
  __typename: '{{it.modelName}}';
};

// TODO: Implement draft models if needed
// Otherwise remove this code
// export type T{{it.modelName}}DraftRest = OrderDraft;
// export type T{{it.modelName}}DraftGraphql = OrderDraft;

export type TCreate{{it.modelName}}Builder<
  TModel extends
    | T{{it.modelName}}Rest
    | T{{it.modelName}}Graphql
    // | T{{it.modelName}}DraftRest
    // | T{{it.modelName}}DraftGraphql
> = () => TBuilder<TModel>;
