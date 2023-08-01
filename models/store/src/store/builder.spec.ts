/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TStore, TStoreGraphql } from './types';
import * as Store from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStore, TStore>(
      'default',
      Store.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        languages: expect.any(Array),
        countries: expect.any(Array),
        distributionChannels: expect.any(Array),
        supplyChannels: expect.any(Array),
        productSelections: [],
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TStore, TStore>(
      'rest',
      Store.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        languages: expect.any(Array),
        countries: expect.any(Array),
        distributionChannels: expect.any(Array),
        supplyChannels: expect.any(Array),
        productSelections: [],
        custom: null,
      })
    )
  );

  //   it(
  //     ...createBuilderSpec<TStore, TStoreGraphql>(
  //       'graphql',
  //       Store.random(),
  //       expect.objectContaining({
  //         //TODO
  //       })
  //     )
  //   );
});
