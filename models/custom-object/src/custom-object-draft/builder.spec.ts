/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomObjectDraft } from '../types';
import * as CustomObjectDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomObjectDraft, TCustomObjectDraft>(
      'default',
      CustomObjectDraft.random(),
      expect.objectContaining({
        version: expect.any(Number),
        key: expect.any(String),
        container: expect.any(String),
        value: expect.any(Object),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomObjectDraft, TCustomObjectDraft>(
      'rest',
      CustomObjectDraft.random(),
      expect.objectContaining({
        version: expect.any(Number),
        key: expect.any(String),
        container: expect.any(String),
        value: expect.any(Object),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomObjectDraft, TCustomObjectDraft>(
      'graphql',
      CustomObjectDraft.random(),
      expect.objectContaining({
        version: expect.any(Number),
        key: expect.any(String),
        container: expect.any(String),
        value: expect.any(Object),
      })
    )
  );
});
