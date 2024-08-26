import {
  {{modelName}},
} from '@commercetools/platform-sdk';
import type { TSpecializedBuilder } from '@commercetools-test-data/core';

export type T{{modelName}}Rest = {{modelName}};

// TODO: Check wether the graphql version has different properties
// or types than the rest version.
// You might want to use the GraphQL Explorer for that
// (https://mc.europe-west1.gcp.escemo.com/test-with-big-data-44/graphql-explorer-commercetools/platform)
export type T{{modelName}}Graphql = {{modelName}} & {
  __typename: '{{modelName}}';
};

// TODO: Implement draft models if needed
// Otherwise remove this code
// export type T{{modelName}}DraftRest = OrderDraft;
// export type T{{modelName}}DraftGraphql = OrderDraft;

export type TCreate{{modelName}}Builder<
  TModel extends
    | T{{modelName}}Rest
    | T{{modelName}}Graphql
    // | T{{modelName}}DraftRest
    // | T{{modelName}}DraftGraphql
> = () => TSpecializedBuilder<TModel>;
