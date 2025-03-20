import { KeyReference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import * as Company from '../company';
import type { TDivision, TDivisionGraphql } from './types';

const transformers = {
  default: Transformer<TDivision, TDivisionGraphql>('default', {
    buildFields: [
      'addresses',
      'createdBy',
      'lastModifiedBy',
      'parentUnit',
      'topLevelUnit',
    ],
  }),
  rest: Transformer<TDivision, TDivisionGraphql>('rest', {
    buildFields: [
      'addresses',
      'createdBy',
      'lastModifiedBy',
      'parentUnit',
      'topLevelUnit',
    ],
  }),
  graphql: Transformer<TDivision | TDivisionGraphql, TDivisionGraphql>(
    'graphql',
    {
      buildFields: ['addresses', 'createdBy', 'lastModifiedBy'],
      replaceFields: ({ fields }) => ({
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
        parentUnitRef: KeyReference.random()
          .typeId('business-unit')
          .buildGraphql(),
        parentUnit:
          fields.parentUnit && 'id' in fields.parentUnit
            ? fields.parentUnit
            : Company.random().buildGraphql(),
        topLevelUnitRef: KeyReference.random()
          .typeId('business-unit')
          .buildGraphql(),
        topLevelUnit:
          fields.topLevelUnit && 'id' in fields.topLevelUnit
            ? fields.topLevelUnit
            : Company.random().buildGraphql(),
        ancestors:
          'ancestors' in fields && fields.ancestors ? fields.ancestors : [],
        __typename: 'BusinessUnit',
      }),
    }
  ),
};

export default transformers;
