/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAttributeDraft, TAttributeDraftGraphql } from '../types';
import * as AttributeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeDraft, TAttributeDraft>(
      'default',
      AttributeDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDraft, TAttributeDraft>(
      'rest',
      AttributeDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDraft, TAttributeDraft>(
      'rest',
      AttributeDraft.random().value({ foo: 'bar' }),
      expect.objectContaining({
        name: expect.any(String),
        value: { foo: 'bar' },
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDraft, TAttributeDraftGraphql>(
      'graphql',
      AttributeDraft.random().value({ foo: 'bar' }),
      expect.objectContaining({
        name: expect.any(String),
        value: '{"foo":"bar"}',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDraft, TAttributeDraftGraphql>(
      'graphql',
      AttributeDraft.random().value(false),
      expect.objectContaining({
        name: expect.any(String),
        value: 'false',
      })
    )
  );
});
