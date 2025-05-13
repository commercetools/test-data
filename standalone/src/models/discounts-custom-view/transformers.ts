import { Transformer } from '@/core';
import { LocalizedString } from '@/models/commons';
import type {
  TDiscountsCustomView,
  TDiscountsCustomViewGraphql,
} from './types';

const transformers = {
  default: Transformer<TDiscountsCustomView, TDiscountsCustomView>('default', {
    buildFields: ['name', 'filters'],
  }),
  rest: Transformer<TDiscountsCustomView, TDiscountsCustomView>('rest', {
    buildFields: ['name', 'filters'],
  }),
  graphql: Transformer<TDiscountsCustomView, TDiscountsCustomViewGraphql>(
    'graphql',
    {
      buildFields: ['name', 'filters'],
      addFields: ({ fields }) => ({
        nameAllLocales: LocalizedString.toLocalizedField(fields.name),
        __typename: 'DiscountsCustomView',
      }),
    }
  ),
};

export default transformers;
