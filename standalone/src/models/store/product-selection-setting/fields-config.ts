import { fake, TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { ProductSelectionGraphql } from '@/models/product/product-selection';
import {
  TProductSelectionSettingRest,
  TProductSelectionSettingGraphql,
} from './types';

export const restFieldsConfig: TModelFieldsConfig<TProductSelectionSettingRest> =
  {
    fields: {
      productSelection: fake(() =>
        ReferenceRest.presets.productSelectionReference()
      ),
      active: fake((f) => f.datatype.boolean()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductSelectionSettingGraphql> =
  {
    fields: {
      __typename: 'ProductSelectionSetting',
      productSelection: fake(() => ProductSelectionGraphql.random()),
      active: fake((f) => f.datatype.boolean()),
      productSelectionRef: null,
    },
    postBuild: (model) => {
      const productSelectionRef = model.productSelection
        ? ReferenceGraphql.presets
            .productSelectionReference()
            .id(model.productSelection.id)
            .buildGraphql()
        : undefined;
      return {
        productSelectionRef,
      };
    },
  };
