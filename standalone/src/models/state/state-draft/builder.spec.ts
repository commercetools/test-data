/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '../../../core/test-utils';
import type { TStateDraft, TStateDraftGraphql } from '../types';
import * as StateDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStateDraft, TStateDraft>(
      'default',
      StateDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        type: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        initial: expect.any(Boolean),
        roles: expect.any(Array),
        transitions: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TStateDraft, TStateDraft>(
      'rest',
      StateDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        type: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        initial: expect.any(Boolean),
        roles: expect.any(Array),
        transitions: null,
      })
    )
  );
  // Note that the StateDraft graphql is provided as scaffolding only and may not be complete at this time.
  it(
    ...createBuilderSpec<TStateDraft, TStateDraftGraphql>(
      'graphql',
      StateDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        type: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        initial: expect.any(Boolean),
        roles: expect.any(Array),
        transitions: null,
      })
    )
  );
});
