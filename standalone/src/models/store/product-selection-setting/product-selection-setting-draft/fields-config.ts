import { fake, TModelFieldsConfig } from '@/core';
import { KeyReferenceDraft, ReferenceRest } from '@/models/commons';
import { ProductSelectionGraphql } from '@/models/product/product-selection';
import {
  TProductSelectionSettingDraftRest,
  TProductSelectionSettingDraftGraphql,
} from '../types';

export const restFieldsConfig: TModelFieldsConfig<TProductSelectionSettingDraftRest> =
  {
    fields: {
      productSelection: fake(() =>
        ReferenceRest.presets.productSelectionReference()
      ),
      active: fake((f) => f.datatype.boolean()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductSelectionSettingDraftGraphql> =
  {
    fields: {
      productSelection: fake(() =>
        KeyReferenceDraft.presets.productSelection()
      ),
      active: fake((f) => f.datatype.boolean()),
    },
  };
