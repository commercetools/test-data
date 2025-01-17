import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductTailoringData,
  TProductTailoringDataRest,
  TProductTailoringDataGraphql,
} from './types';

const buildFields: Array<keyof TProductTailoringData> = [
  'name',
  'description',
  'metaTitle',
  'metaDescription',
  'metaKeywords',
  'variants',
];

const transformers = {
  default: Transformer<TProductTailoringData, TProductTailoringData>(
    'default',
    {
      buildFields,
    }
  ),
  rest: Transformer<TProductTailoringData, TProductTailoringDataRest>('rest', {
    buildFields,
  }),
  graphql: Transformer<TProductTailoringData, TProductTailoringDataGraphql>(
    'graphql',
    {
      buildFields,
      replaceFields: ({ fields }) => ({
        ...fields,
        __typename: 'ProductTailoringData',
      }),
    }
  ),
};

export default transformers;
