import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql } from '@/models/commons';
import { ProductSelection } from '@/models/product-selection';
import { createRelatedDates } from '@/utils';
import type { TSelectionOfProductGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TSelectionOfProductGraphql> =
  {
    fields: {
      createdAt: fake(getOlderDate),
      lastModifiedAt: fake(getNewerDate),
      productSelection: fake(() => ProductSelection.random()),
      productSelectionRef: null,
      variantSelection: {
        type: oneOf('inclusion', 'exclusion'),
        skus: [],
      },
      variantExclusion: null,
      __typename: 'SelectionOfProduct',
    },
    postBuild: (model) => {
      if (model.productSelection) {
        model.productSelectionRef = ReferenceGraphql.presets
          .productSelectionReference()
          .id(model.productSelection.id)
          .build();
      }
      return model;
    },
  };
