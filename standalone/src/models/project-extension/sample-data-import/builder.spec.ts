/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type {
  TSampleDataImportMetadata,
  TSampleDataImportMetadataGraphql,
} from './types';
import * as SampleDataImportMetadata from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TSampleDataImportMetadata, TSampleDataImportMetadata>(
      'default',
      SampleDataImportMetadata.random(),
      expect.objectContaining({
        completed: expect.any(Boolean),
        dataset: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TSampleDataImportMetadata,
      TSampleDataImportMetadataGraphql
    >(
      'graphql',
      SampleDataImportMetadata.random(),
      expect.objectContaining({
        __typename: 'SampleDataImportMetadata',
        completed: expect.any(Boolean),
        dataset: expect.any(String),
      })
    )
  );
});
