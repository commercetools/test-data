import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomViewTypeSettings,
  TCustomViewTypeSettingsGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomViewTypeSettings, TCustomViewTypeSettings>(
    'default',
    {}
  ),
  graphql: Transformer<TCustomViewTypeSettings, TCustomViewTypeSettingsGraphql>(
    'graphql',
    {
      addFields: () => ({
        __typename: 'CustomViewTypeSettings',
      }),
    }
  ),
};

export default transformers;
