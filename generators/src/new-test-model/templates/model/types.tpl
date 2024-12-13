import {
  {{it.modelName}},
  {{@if(it.isDraftRequired === true)}}
  {{it.modelName}}Draft,
  {{/if}}
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  {{it.graphqlTypePrefix}}{{it.modelName}},
  {{@if(it.isDraftRequired === true)}}
  {{it.graphqlTypePrefix}}{{it.modelName}}Draft,
  {{/if}}
} from '@commercetools-test-data/graphql-types';


export type T{{it.modelName}}Rest = {{it.modelName}};
{{@if(it.isDraftRequired === true)}}
export type T{{it.modelName}}DraftRest = {{it.modelName}}Draft;
{{/if}}
export type T{{it.modelName}}Graphql = {{it.graphqlTypePrefix}}{{it.modelName}};
{{@if(it.isDraftRequired === true)}}
export type T{{it.modelName}}DraftGraphql = {{it.graphqlTypePrefix}}{{it.modelName}}Draft;
{{/if}}

export type TCreate{{it.modelName}}Builder<
  TModel extends
    | T{{it.modelName}}Rest
    | T{{it.modelName}}Graphql
    {{@if(it.isDraftRequired === true)}}
    | T{{it.modelName}}DraftRest
    | T{{it.modelName}}DraftGraphql
    {{/if}}
> = () => TBuilder<TModel>;
