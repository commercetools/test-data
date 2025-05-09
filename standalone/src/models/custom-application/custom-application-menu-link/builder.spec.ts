/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type {
  TCustomApplicationMenuLink,
  TCustomApplicationMenuLinkGraphql,
} from './types';
import * as CustomApplicationMenuLink from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationMenuLink,
      TCustomApplicationMenuLink
    >(
      'default',
      CustomApplicationMenuLink.random(),
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
        icon: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomApplicationMenuLink,
      TCustomApplicationMenuLinkGraphql
    >(
      'graphql',
      CustomApplicationMenuLink.random(),
      expect.objectContaining({
        __typename: 'CustomApplicationMenuLink',
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
        icon: expect.any(String),
      })
    )
  );
});
