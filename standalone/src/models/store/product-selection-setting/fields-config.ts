import { ProductSelectionReference } from '@commercetools/platform-sdk';
import { fake, TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import {
  ProductSelectionRest,
  ProductSelectionGraphql,
} from '@/models/product/product-selection';
import {
  TProductSelectionSettingRest,
  TProductSelectionSettingGraphql,
} from './types';

export const restFieldsConfig: TModelFieldsConfig<TProductSelectionSettingRest> =
  {
    fields: {
      productSelection: fake(() => ProductSelectionRest.random()),
      active: fake((f) => f.datatype.boolean()),
    },
    postBuild: (model) => {
      const productSelection = model.productSelection
        ? (ReferenceRest.presets
            .productSelectionReference()
            .id(model.productSelection.id)
            .typeId('product-selection')
            .buildRest() as unknown as ProductSelectionReference)
        : undefined;
      return {
        productSelection,
      };
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
        ? ReferenceGraphql.random()
            .id(model.productSelection.id)
            .typeId('product-selection')
            .buildGraphql()
        : undefined;
      return {
        productSelectionRef,
      };
    },
  };
