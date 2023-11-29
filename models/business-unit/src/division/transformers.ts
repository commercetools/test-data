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
  graphql: Transformer<TBusinessUnit, TBusinessUnitGraphql>('graphql', {
    buildFields: [
      'addresses',
      'createdBy',
      'lastModifiedBy',
      'parentUnit',
      'topLevelUnit',
    ],
    replaceFields: ({ fields }) => ({
      ...fields,
      parentUnit: Company.random(),
      topLevelUnit: Company.random(),
      ancestors: [],
      inheritedStores: null,
      __typename: 'BusinessUnit',
    }),
  }),
};

export default transformers;
