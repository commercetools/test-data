/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomApplicationMenuLinkDraft } from '../types';
import * as CustomApplicationMenuLink from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationMenuLinkDraft,
      TCustomApplicationMenuLinkDraft
    >(
      'default',
      CustomApplicationMenuLink.random(),
      expect.objectContaining({
        labelAllLocales: [
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ],
        defaultLabel: expect.any(String),
        permissions: [],
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomApplicationMenuLinkDraft,
      TCustomApplicationMenuLinkDraft
    >(
      'graphql',
      CustomApplicationMenuLink.random(),
      expect.objectContaining({
        __typename: 'CustomApplicationMenuLinkDraft',
        labelAllLocales: [
          expect.objectContaining({
            __typename: 'LocalizedField',
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ],
        defaultLabel: expect.any(String),
        permissions: [],
      })
    )
  );
});
