/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TStoreDraft, TStoreDraftGraphql } from '../types';
import * as StoreDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStoreDraft, TStoreDraft>(
      'default',
      StoreDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        languages: expect.any(Array),
        countries: expect.any(Array),
        distributionChannels: null,
        supplyChannels: null,
        productSelections: null,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TStoreDraft, TStoreDraft>(
      'rest',
      StoreDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        languages: expect.any(Array),
        countries: expect.any(Array),
        distributionChannels: null,
        supplyChannels: null,
        productSelections: null,
        custom: null,
      })
    )
  );
  //Note that the storeDraft graphql is provided as scaffolding only and may not be complete at this time.
  it(
    ...createBuilderSpec<TStoreDraft, TStoreDraftGraphql>(
      'graphql',
      StoreDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
      })
    )
  );
});
