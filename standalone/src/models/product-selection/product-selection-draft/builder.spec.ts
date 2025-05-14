/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TProductSelectionDraft,
  TProductSelectionDraftGraphql,
} from '../types';
import * as ProductSelectionDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductSelectionDraft, TProductSelectionDraft>(
      'default',
      ProductSelectionDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        mode: expect.any(String),
        custom: null,
      })
    )
  );
  it(
    ...createBuilderSpec<TProductSelectionDraft, TProductSelectionDraft>(
      'rest',
      ProductSelectionDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        mode: expect.any(String),
        custom: null,
      })
    )
  );
  it(
    ...createBuilderSpec<TProductSelectionDraft, TProductSelectionDraftGraphql>(
      'graphql',
      ProductSelectionDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        mode: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'fr',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'de',
            value: expect.any(String),
          }),
        ]),
      })
    )
  );
});
