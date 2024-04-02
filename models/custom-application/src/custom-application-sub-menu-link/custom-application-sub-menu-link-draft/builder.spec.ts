/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomApplicationSubmenuLinkDraft,
  TCustomApplicationSubmenuLinkDraftGraphql,
} from '../types';
import * as CustomApplicationSubmenuLinkDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationSubmenuLinkDraft,
      TCustomApplicationSubmenuLinkDraft
    >(
      'default',
      CustomApplicationSubmenuLinkDraft.random(),
      expect.objectContaining({
        labelAllLocales: [
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ],
        defaultLabel: expect.any(String),
        permissions: [],
        uriPath: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomApplicationSubmenuLinkDraft,
      TCustomApplicationSubmenuLinkDraftGraphql
    >(
      'graphql',
      CustomApplicationSubmenuLinkDraft.random(),
      expect.objectContaining({
        labelAllLocales: [
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ],
        defaultLabel: expect.any(String),
        permissions: [],
        uriPath: expect.any(String),
      })
    )
  );
});
