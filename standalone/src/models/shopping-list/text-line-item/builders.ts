import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import {
  TTextLineItemGraphql,
  TTextLineItemRest,
  TCreateTextLineItemBuilder,
} from './types';

export const RestModelBuilder: TCreateTextLineItemBuilder<
  TTextLineItemRest
> = () =>
  createSpecializedBuilder({
    name: 'TextLineItemRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTextLineItemBuilder<
  TTextLineItemGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TextLineItemGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
