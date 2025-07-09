import { createSpecializedBuilder } from '@/core';
import {
  TTextLineItemDraftGraphql,
  TTextLineItemDraftRest,
  TCreateTextLineItemBuilder,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateTextLineItemBuilder<
  TTextLineItemDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'TextLineItemRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTextLineItemBuilder<
  TTextLineItemDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TextLineItemGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
