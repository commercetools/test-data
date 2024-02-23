/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TMcUserDraft } from '../types';
import * as McUserDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMcUserDraft, TMcUserDraft>(
      'default',
      McUserDraft.random(),
      expect.objectContaining({
        firstName: expect.any(String),
        lastName: expect.any(String),
        password: expect.any(String),
        businessRole: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMcUserDraft, TMcUserDraft>(
      'rest',
      McUserDraft.random(),
      expect.objectContaining({
        password: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        businessRole: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMcUserDraft, TMcUserDraft>(
      'graphql',
      McUserDraft.random(),
      expect.objectContaining({
        password: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        businessRole: expect.any(String),
      })
    )
  );
});
