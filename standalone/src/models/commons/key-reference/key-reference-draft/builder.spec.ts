/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TKeyReferenceDraft, TKeyReferenceDraftGraphql } from '.././types';
import * as KeyReferenceDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TKeyReferenceDraft, TKeyReferenceDraft>(
      'default',
      KeyReferenceDraft.random(),
      {
        typeId: null,
        key: expect.any(String),
      }
    )
  );
  it(
    ...createBuilderSpec<TKeyReferenceDraft, TKeyReferenceDraft>(
      'rest',
      KeyReferenceDraft.random().typeId('product'),
      {
        typeId: 'product',
        key: expect.any(String),
      }
    )
  );
  it(
    ...createBuilderSpec<TKeyReferenceDraft, TKeyReferenceDraftGraphql>(
      'graphql',
      KeyReferenceDraft.random().typeId('product'),
      {
        typeId: 'product',
        key: expect.any(String),
      }
    )
  );
});
