import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomViewTypeSettingsForCustomPanel,
  TCustomViewTypeSettingsForCustomPanelGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomViewTypeSettingsForCustomPanel,
    TCustomViewTypeSettingsForCustomPanel
  >('default', {}),
  graphql: Transformer<
    TCustomViewTypeSettingsForCustomPanel,
    TCustomViewTypeSettingsForCustomPanelGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'CustomViewTypeSettings',
    }),
  }),
};

export default transformers;
