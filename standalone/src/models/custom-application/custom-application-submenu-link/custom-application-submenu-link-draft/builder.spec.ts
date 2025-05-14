/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TCustomApplicationSubmenuLinkDraft } from '../types';
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
      TCustomApplicationSubmenuLinkDraft
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
