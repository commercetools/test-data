/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { CustomViewDraft } from '../types';
import * as CustomViewDraftModel from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<CustomViewDraft, CustomViewDraft>(
      'default',
      CustomViewDraftModel.random(),
      expect.objectContaining({
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
    ...createBuilderSpec<CustomViewDraft, CustomViewDraft>(
      'graphql',
      CustomViewDraftModel.random(),
      expect.objectContaining({
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
