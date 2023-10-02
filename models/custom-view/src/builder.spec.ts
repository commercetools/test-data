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
        labelAllLocales: expect.arrayContaining(
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          })
        ),
        locators: expect.arrayContaining(expect.any(String)),
        ownerId: expect.any(String),
        status: expect.stringMatching(/DRAFT|PUBLIC/),
        type: expect.stringContaining('CustomPanel'),
        typeSettings: expect.objectContaining({
          size: expect.stringMatching(/SMALL|LARGE/),
        }),
        url: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomView, TCustomView>(
      'graphql',
      CustomViewModel.random(),
      expect.objectContaining({
        __typename: 'CustomView',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),

        defaultLabel: expect.any(String),
        labelAllLocales: expect.arrayContaining(
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          })
        ),
        locators: expect.arrayContaining(expect.any(String)),
        ownerId: expect.any(String),
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
