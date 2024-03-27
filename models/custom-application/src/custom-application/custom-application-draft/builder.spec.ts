/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomApplicationDraft } from '../types';
import * as CustomApplicationDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomApplicationDraft, TCustomApplicationDraft>(
      'default',
      CustomApplicationDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        description: expect.any(String),
        icon: expect.any(String),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)(\w+)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        url: expect.any(String),
        mainMenuLink: null,
        submenuLinks: [],
      })
    )
  );
  it(
    ...createBuilderSpec<TCustomApplicationDraft, TCustomApplicationDraft>(
      'graphql',
      CustomApplicationDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        description: expect.any(String),
        icon: expect.any(String),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)(\w+)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        url: expect.any(String),
        mainMenuLink: null,
        submenuLinks: [],
      })
    )
  );
});
