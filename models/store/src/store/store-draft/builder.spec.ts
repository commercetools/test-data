/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TStoreDraft } from '../types';
import * as StoreDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStoreDraft, TStoreDraft>(
      'default',
      StoreDraft.random(),
      expect.objectContaining({
        // key: fake((f) => f.lorem.slug()),
        // name: fake(() => LocalizedString.random()),
        // languages: //TODO,
        // countries: //TODO,
        // distributionChannels: //TODO,
        // supplyChannels: //TODO,
        // productSelections://TODO,
        // custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TStoreDraft, TStoreDraft>(
      'rest',
      StoreDraft.random(),
      expect.objectContaining({
        //TODO
      })
    )
  );
  // StoreDraft/StoreDraftInput does not exist in a graphql format
});
