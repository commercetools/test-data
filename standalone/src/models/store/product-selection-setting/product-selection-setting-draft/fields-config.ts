import { fake, TModelFieldsConfig } from '@/core';
import { ReferenceDraftGraphql, ReferenceDraftRest } from '@/models/commons';
import {
  TProductSelectionSettingDraftRest,
  TProductSelectionSettingDraftGraphql,
} from '../types';

export const restFieldsConfig: TModelFieldsConfig<TProductSelectionSettingDraftRest> =
  {
    fields: {
      productSelection: fake(() =>
        ReferenceDraftRest.presets.productSelectionReference()
      ),
      active: fake((f) => f.datatype.boolean()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductSelectionSettingDraftGraphql> =
  {
    fields: {
      productSelection: fake(() =>
        ReferenceDraftGraphql.presets.productSelectionReference()
      ),
      active: fake((f) => f.datatype.boolean()),
    },
  };
