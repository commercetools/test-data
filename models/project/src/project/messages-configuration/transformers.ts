import { Transformer } from '@commercetools-test-data/core';
import type {
  TMessagesConfiguration,
  TMessagesConfigurationGraphql,
} from './types';

const transformers = {
  default: Transformer<TMessagesConfiguration, TMessagesConfiguration>(
    'default',
    {}
  ),
  rest: Transformer<TMessagesConfiguration, TMessagesConfiguration>('rest', {}),
  graphql: Transformer<TMessagesConfiguration, TMessagesConfigurationGraphql>(
    'graphql',
    {
      addFields: () => ({
        __typename: 'MessagesConfiguration',
      }),
    }
  ),
};

export default transformers;
