/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomView } from './types';
import * as CustomViewModel from './index';

describe('CustomView model builder', () => {
  it(
    ...createBuilderSpec<TCustomView, TCustomView>(
      'default',
      CustomViewModel.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        defaultLabel: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        locators: expect.arrayContaining([expect.any(String)]),
        ownerId: expect.any(String),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        status: expect.stringMatching(/DRAFT|PUBLIC/),
        type: expect.stringContaining('CustomPanel'),
        typeSettings: expect.objectContaining({
          size: expect.stringMatching(/SMALL|LARGE/),
        }),
        url: expect.any(String),
      })
    )
  );
});
