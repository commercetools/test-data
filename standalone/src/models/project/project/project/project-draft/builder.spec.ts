/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TProjectDraft, TProjectDraftGraphql } from '../types';
import * as ProjectDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProjectDraft, TProjectDraft>(
      'default',
      ProjectDraft.random().key('project-key-1'),
      expect.objectContaining({
        key: 'project-key-1',
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        ownerId: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TProjectDraft, TProjectDraft>(
      'rest',
      ProjectDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        ownerId: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TProjectDraft, TProjectDraftGraphql>(
      'graphql',
      ProjectDraft.random().key('project-key-1'),
      expect.objectContaining({
        key: 'project-key-1',
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        ownerId: expect.any(String),
      })
    )
  );
});
