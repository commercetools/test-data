import { Transformer } from '../../core';
import { TCustomersSearchListMyView } from './types';

const transformers = {
  default: Transformer<TCustomersSearchListMyView, TCustomersSearchListMyView>(
    'default',
    { buildFields: ['nameAllLocales'] }
  ),
  graphql: Transformer<TCustomersSearchListMyView, TCustomersSearchListMyView>(
    'graphql',
    {
      buildFields: ['nameAllLocales'],
      addFields: () => ({
        __typename: 'CustomersSearchListMyView',
      }),
    }
  ),
};

export default transformers;
