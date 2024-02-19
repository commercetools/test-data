/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TMcProjectDraft, TMcProjectDraftGraphql } from '../types';
import * as McProjectDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMcProjectDraft, TMcProjectDraft>(
      'default',
      McProjectDraft.random().key('project-key-1'),
      expect.objectContaining({
        key: 'project-key-1',
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        ownerId: expect.any(String),
        deleteDaysAfterCreation: null,
        messagesEnabled: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TMcProjectDraft, TMcProjectDraft>(
      'rest',
      McProjectDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        ownerId: expect.any(String),
        deleteDaysAfterCreation: null,
        messagesEnabled: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TMcProjectDraft, TMcProjectDraftGraphql>(
      'graphql',
      McProjectDraft.random().key('project-key-1'),
      expect.objectContaining({
        key: 'project-key-1',
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        ownerId: expect.any(String),
        deleteDaysAfterCreation: null,
        messagesEnabled: null,
      })
    )
  );
});
