/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomViewDraft } from '../types';
import * as CustomViewDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomViewDraft, TCustomViewDraft>(
      'default',
      CustomViewDraft.random(),
      expect.objectContaining({
        defaultLabel: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ]),
        locators: expect.arrayContaining([expect.any(String)]),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        status: 'DRAFT',
        type: 'CustomPanel',
        typeSettings: expect.objectContaining({
          size: expect.stringMatching(/^(SMALL|LARGE)$/),
        }),
        url: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<TCustomViewDraft, TCustomViewDraft>(
      'graphql',
      CustomViewDraft.random(),
      expect.objectContaining({
        defaultLabel: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ]),
        locators: expect.arrayContaining([expect.any(String)]),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        status: 'DRAFT',
        type: 'CustomPanel',
        typeSettings: expect.objectContaining({
          size: expect.stringMatching(/^(SMALL|LARGE)$/),
        }),
        url: expect.any(String),
      })
    )
  );
});
