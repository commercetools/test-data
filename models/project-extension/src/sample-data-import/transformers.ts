import { Transformer } from '@commercetools-test-data/core';
import type {
  TSampleDataImportMetadata,
  TSampleDataImportMetadataGraphql,
} from './types';

const buildFields: (keyof TSampleDataImportMetadata)[] = [];

const transformers = {
  default: Transformer<TSampleDataImportMetadata, TSampleDataImportMetadata>(
    'default',
    {
      buildFields,
    }
  ),
  graphql: Transformer<
    TSampleDataImportMetadata,
    TSampleDataImportMetadataGraphql
  >('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'SampleDataImportMetadata',
    }),
  }),
};

export default transformers;
