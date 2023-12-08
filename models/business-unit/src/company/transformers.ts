import { KeyReference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TCompany, TCompanyGraphql } from '../types';

const transformers = {
  default: Transformer<TCompany, TCompany>('default', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy', 'topLevelUnit'],
  }),
  rest: Transformer<TCompany, TCompany>('rest', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy', 'topLevelUnit'],
  }),
  graphql: Transformer<TCompany | TCompanyGraphql, TCompanyGraphql>('graphql', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => {
      return {
        ...(fields as TCompany),
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
                ...(fields as TCompany),
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
