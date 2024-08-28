import { LocalizedField } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import {
  TCustomersSearchListMyView,
  TCustomersSearchListMyViewGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomersSearchListMyView, TCustomersSearchListMyView>(
    'default',
    {
      buildFields: ['name'],
    }
  ),
  graphql: Transformer<
    TCustomersSearchListMyView,
    TCustomersSearchListMyViewGraphql
  >('graphql', {
    removeFields: ['name'],
    addFields: ({ fields }) => ({
      nameAllLocales: [
        LocalizedField.random().value(fields.name).buildGraphql(),
      ],
      __typename: 'CustomersSearchListMyView',
    }),
  }),
};

export default transformers;
