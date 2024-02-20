/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TMcUserDraft, TMcUserDraftGraphql } from '../types';
import * as McUserDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMcUserDraft, TMcUserDraft>(
      'default',
      McUserDraft.random().email('hello@ct.com'),
      expect.objectContaining({
        email: 'hello@ct.com',
        firstName: expect.any(String),
        lastName: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMcUserDraft, TMcUserDraft>(
      'rest',
      McUserDraft.random(),
      expect.objectContaining({
        email: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMcUserDraft, TMcUserDraftGraphql>(
      'graphql',
      McUserDraft.random(),
      expect.objectContaining({
        email: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
      })
    )
  );
});
