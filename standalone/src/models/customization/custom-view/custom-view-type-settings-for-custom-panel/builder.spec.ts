/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TMcSettingsCustomViewSize } from '@/graphql-types';
import type {
  TCustomViewTypeSettingsForCustomPanel,
  TCustomViewTypeSettingsForCustomPanelGraphql,
} from './types';
import * as CustomViewTypeSettings from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomViewTypeSettingsForCustomPanel,
      TCustomViewTypeSettingsForCustomPanel
    >(
      'default',
      CustomViewTypeSettings.random(),
      expect.objectContaining({
        size: expect.stringMatching(/^(SMALL|LARGE)$/),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomViewTypeSettingsForCustomPanel,
      TCustomViewTypeSettingsForCustomPanelGraphql
    >(
      'graphql',
      CustomViewTypeSettings.random().size(TMcSettingsCustomViewSize.Small),
      expect.objectContaining({
        __typename: 'CustomViewTypeSettings',
        size: 'SMALL',
      })
    )
  );
});
