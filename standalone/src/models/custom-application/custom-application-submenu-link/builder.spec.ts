/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type {
  TCustomApplicationSubmenuLink,
  TCustomApplicationSubmenuLinkGraphql,
} from './types';
import * as CustomApplicationSubmenuLink from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationSubmenuLink,
      TCustomApplicationSubmenuLink
    >(
      'default',
      CustomApplicationSubmenuLink.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
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
      TCustomApplicationSubmenuLink,
      TCustomApplicationSubmenuLinkGraphql
    >(
      'graphql',
      CustomApplicationSubmenuLink.random(),
      expect.objectContaining({
        __typename: 'CustomApplicationSubmenuLink',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
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
