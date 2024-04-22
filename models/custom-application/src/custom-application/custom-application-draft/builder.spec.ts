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
        mainMenuLink: expect.objectContaining({
          defaultLabel: expect.any(String),
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              locale: expect.any(String),
              value: expect.any(String),
            }),
          ]),
        }),
        submenuLinks: expect.arrayContaining([
          expect.objectContaining({
            labelAllLocales: [
              expect.objectContaining({
                locale: expect.any(String),
                value: expect.any(String),
              }),
            ],
            defaultLabel: expect.any(String),
            permissions: [],
            uriPath: expect.any(String),
          }),
        ]),
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
        mainMenuLink: expect.objectContaining({
          defaultLabel: expect.any(String),
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              locale: expect.any(String),
              value: expect.any(String),
            }),
          ]),
        }),
        submenuLinks: expect.arrayContaining([
          expect.objectContaining({
            labelAllLocales: [
              expect.objectContaining({
                locale: expect.any(String),
                value: expect.any(String),
              }),
            ],
            defaultLabel: expect.any(String),
            permissions: [],
            uriPath: expect.any(String),
          }),
        ]),
      })
    )
  );
});
