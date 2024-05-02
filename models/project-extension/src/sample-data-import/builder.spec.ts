/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TSampleDataImportMetadata,
  TSampleDataImportMetadataGraphql,
} from './types';
import * as ProjectExtension from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TSampleDataImportMetadata, TSampleDataImportMetadata>(
      'default',
      ProjectExtension.random(),
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
      ProjectExtension.random(),
      expect.objectContaining({
        __typename: 'SampleDataImportMetadata',
        completed: expect.any(Boolean),
        dataset: expect.any(String),
      })
    )
  );
});
