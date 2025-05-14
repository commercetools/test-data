import { Transformer } from '@/core';
import { LocalizedString } from '@/models/commons';
import type {
  TDiscountsCustomViewInput,
  TDiscountsCustomViewInputGraphql,
} from '../types';

const transformers = {
  default: Transformer<TDiscountsCustomViewInput, TDiscountsCustomViewInput>(
    'default',
    {
      buildFields: ['name', 'filters'],
    }
  ),
  rest: Transformer<TDiscountsCustomViewInput, TDiscountsCustomViewInput>(
    'rest',
    {
      buildFields: ['name', 'filters'],
    }
  ),
  graphql: Transformer<
    TDiscountsCustomViewInput,
    TDiscountsCustomViewInputGraphql
  >('graphql', {
    buildFields: ['name', 'filters'],
    addFields: ({ fields }) => ({
      nameAllLocales: LocalizedString.toLocalizedField(fields.name),
    }),
  }),
};

export default transformers;
