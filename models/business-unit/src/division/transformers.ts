import { KeyReference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import * as Company from '../company';
import type { TBusinessUnit, TBusinessUnitGraphql } from '../types';

const transformers = {
  default: Transformer<TBusinessUnit, TBusinessUnit>('default', {
    buildFields: [
      'addresses',
      'createdBy',
      'lastModifiedBy',
      'parentUnit',
      'topLevelUnit',
    ],
  }),
  rest: Transformer<TBusinessUnit, TBusinessUnit>('rest', {
    buildFields: [
      'addresses',
      'createdBy',
      'lastModifiedBy',
      'parentUnit',
      'topLevelUnit',
    ],
  }),
  graphql: Transformer<
    TBusinessUnit | TBusinessUnitGraphql,
    TBusinessUnitGraphql
  >('graphql', {
    buildFields: ['addresses', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => ({
      ...(fields as TBusinessUnit),
      storesRef: KeyReference.random().typeId('store').buildGraphql(),
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
      inheritedStores:
        'inheritedStores' in fields && fields.inheritedStores
          ? fields.inheritedStores
          : null,
      __typename: 'BusinessUnit',
    }),
  }),
};

export default transformers;
