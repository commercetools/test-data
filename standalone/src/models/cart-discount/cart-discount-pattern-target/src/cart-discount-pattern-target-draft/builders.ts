import { createSpecializedBuilder } from '../../../../../core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCartDiscountPatternTargetDraftBuilder,
  TCartDiscountPatternTargetDraftGraphql,
} from './types';

export const GraphqlModelBuilder: TCreateCartDiscountPatternTargetDraftBuilder<
  TCartDiscountPatternTargetDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CartDiscountPatternTargetDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
