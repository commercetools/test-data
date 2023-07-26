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
        // id: fake((f) => f.string.uuid()),
        // version: sequence(),
        // key: fake((f) => f.lorem.slug()),
        // name: fake(() => LocalizedString.random()),
        // languages: //TODO,
        // countries: //TODO,
        // distributionChannels: //TODO,
        // supplyChannels: //TODO,
        // productSelections://TODO,
        // custom: null,
        // createdAt: fake(getOlderDate),
        // createdBy: fake(() => ClientLogging.random()),
        // lastModifiedAt: fake(getNewerDate),
        // lastModifiedBy: fake(() => ClientLogging.random()),
      })
    )
  );

  it(
    ...createBuilderSpec<TStore, TStore>(
      'rest',
      Store.random(),
      expect.objectContaining({
        //TODO
      })
    )
  );
  it(
    ...createBuilderSpec<TStore, TStoreGraphql>(
      'graphql',
      Store.random(),
      expect.objectContaining({
        //TODO
      })
    )
  );
});
