/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type {
  TStoreDraft,
  TStoreDraftGraphql,
  TStoreDraftRest,
} from '../types';
import { StoreDraftGraphql, StoreDraftRest, StoreDraft } from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStoreDraftRest, TStoreDraftRest>(
      'rest',
      StoreDraftRest.random(),
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
    ...createBuilderSpec<TStoreDraftGraphql, TStoreDraftGraphql>(
      'graphql',
      StoreDraftGraphql.random(),
      expect.objectContaining({
        key: expect.any(String),
      })
    )
  );

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
});
