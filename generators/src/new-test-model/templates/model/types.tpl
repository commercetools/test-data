import {
  {{it.modelName}},
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  {{it.graphqlTypePrefix}}{{it.modelName}},
} from '@commercetools-test-data/graphql-types';


export type T{{it.modelName}}Rest = {{it.modelName}};

export type T{{it.modelName}}Graphql = {{it.graphqlTypePrefix}}{{it.modelName}};

// TODO: Implement draft models if needed
// Otherwise remove this code
// export type T{{it.modelName}}DraftRest = {{it.modelName}}Draft;
// export type T{{it.modelName}}DraftGraphql = {{it.graphqlTypePrefix}}{{it.modelName}}Draft;

export type TCreate{{it.modelName}}Builder<
  TModel extends
    | T{{it.modelName}}Rest
    | T{{it.modelName}}Graphql
    // | T{{it.modelName}}DraftRest
    // | T{{it.modelName}}DraftGraphql
> = () => TBuilder<TModel>;
