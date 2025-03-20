import { KeyReference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TCompany, TCompanyGraphql } from './types';

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
        ...fields,
        storesRef:
          'stores' in fields
            ? fields.stores?.map((store) =>
                KeyReference.random()
                  .typeId('store')
                  .key(store.key)
                  .buildGraphql()
              )
            : [],
        inheritedStoresRef:
          'inheritedStores' in fields
            ? fields.inheritedStores?.map((store) =>
                KeyReference.random()
                  .typeId('store')
                  .key(store.key)
                  .buildGraphql()
              )
            : [],
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
        __typename: 'BusinessUnit',
      };
    },
  }),
};

export default transformers;
