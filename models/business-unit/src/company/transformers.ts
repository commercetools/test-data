import { KeyReference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TBusinessUnit, TBusinessUnitGraphql } from '../types';

const transformers = {
  default: Transformer<TBusinessUnit, TBusinessUnit>('default', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy', 'topLevelUnit'],
  }),
  rest: Transformer<TBusinessUnit, TBusinessUnit>('rest', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy', 'topLevelUnit'],
  }),
  graphql: Transformer<
    TBusinessUnit | TBusinessUnitGraphql,
    TBusinessUnitGraphql
  >('graphql', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => {
      return {
        ...(fields as TBusinessUnit),
        storesRef: KeyReference.random().typeId('store').buildGraphql(),
        parentUnitRef: null,
        topLevelUnitRef: KeyReference.random()
          .typeId('business-unit')
          .key(fields.key)
          .buildGraphql(),
        topLevelUnit:
          fields.topLevelUnit && 'id' in fields.topLevelUnit
            ? fields.topLevelUnit
            : {
                ...(fields as TBusinessUnit),
                __typename: 'BusinessUnit',
              },
        ancestors:
          'ancestors' in fields && fields.ancestors ? fields.ancestors : [],
        inheritedStores:
          'inheritedStores' in fields && fields.inheritedStores
            ? fields.inheritedStores
            : null,
        __typename: 'BusinessUnit',
      };
    },
  }),
};

export default transformers;
