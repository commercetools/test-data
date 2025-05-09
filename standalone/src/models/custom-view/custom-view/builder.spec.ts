/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type { TCustomView } from './types';
import * as CustomView from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomView, TCustomView>(
      'default',
      CustomView.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        defaultLabel: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ]),
        locators: expect.arrayContaining([expect.any(String)]),
        ownerId: expect.any(String),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        status: expect.stringMatching(/^(DRAFT|PRIVATE_USAGE)$/),
        type: 'CustomPanel',
        typeSettings: expect.objectContaining({
          size: expect.stringMatching(/^(SMALL|LARGE)$/),
        }),
        url: expect.any(String),
        installedBy: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            acceptedPermissions: expect.arrayContaining([
              expect.objectContaining({
                name: expect.stringMatching(/^(view|manage)$/),
                oAuthScopes: expect.arrayContaining([expect.any(String)]),
              }),
            ]),
            installInAllProjects: expect.any(Boolean),
            projects: expect.any(Array),
            ownerId: expect.any(String),
            owner: expect.any(Object),
          }),
        ]),
      })
    )
  );
  it(
    ...createBuilderSpec<TCustomView, TCustomView>(
      'graphql',
      CustomView.random(),
      expect.objectContaining({
        __typename: 'CustomView',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        defaultLabel: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ]),
        locators: expect.arrayContaining([expect.any(String)]),
        ownerId: expect.any(String),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        status: expect.stringMatching(/^(DRAFT|PRIVATE_USAGE)$/),
        type: 'CustomPanel',
        typeSettings: expect.objectContaining({
          size: expect.stringMatching(/^(SMALL|LARGE)$/),
        }),
        url: expect.any(String),
        installedBy: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CustomViewInstallation',
            id: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            acceptedPermissions: expect.arrayContaining([
              expect.objectContaining({
                name: expect.stringMatching(/^(view|manage)$/),
                oAuthScopes: expect.arrayContaining([expect.any(String)]),
              }),
            ]),
            installInAllProjects: expect.any(Boolean),
            projects: expect.any(Array),
            ownerId: expect.any(String),
            owner: expect.any(Object),
          }),
        ]),
      })
    )
  );
});
