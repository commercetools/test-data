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
    name: 'TextLineItemDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTextLineItemBuilder<
  TTextLineItemDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TextLineItemDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
