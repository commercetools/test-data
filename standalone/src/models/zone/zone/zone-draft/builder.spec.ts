/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import { TZoneDraft, TZoneDraftGraphql } from '../types';
import * as ZoneDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TZoneDraft, TZoneDraft>(
      'default',
      ZoneDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        key: expect.any(String),
        description: expect.any(String),
        locations: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TZoneDraft, TZoneDraft>(
      'rest',
      ZoneDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        key: expect.any(String),
        description: expect.any(String),
        locations: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TZoneDraft, TZoneDraftGraphql>(
      'graphql',
      ZoneDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        key: expect.any(String),
        description: expect.any(String),
        locations: expect.any(Array),
      })
    )
  );
});
