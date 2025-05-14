/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TFilterValues, TFilterValuesGraphql } from './types';
import * as FilterValues from './';

describe('builder', () => {
  it(
    ...createBuilderSpec<TFilterValues, TFilterValues>(
      'default',
      FilterValues.random(),
      expect.objectContaining({
        id: expect.any(String),
        target: expect.any(String),
        type: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        json: expect.any(Object),
      })
    )
  );

  it(
    ...createBuilderSpec<TFilterValues, TFilterValues>(
      'rest',
      FilterValues.random(),
      expect.objectContaining({
        id: expect.any(String),
        target: expect.any(String),
        type: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        json: expect.any(Object),
      })
    )
  );

  it(
    ...createBuilderSpec<TFilterValues, TFilterValuesGraphql>(
      'graphql',
      FilterValues.random(),
      expect.objectContaining({
        id: expect.any(String),
        target: expect.any(String),
        type: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        json: expect.any(Object),
        __typename: 'FilterValues',
      })
    )
  );
});
