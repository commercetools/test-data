import { Transformer } from '../../../../core';
import type {
  TLocalizedStringDraft,
  TLocalizedStringDraftGraphql,
} from '../types';

const isNil = (value: string | undefined) =>
  value === undefined || value === null;

const transformers = {
  default: Transformer<TLocalizedStringDraft, TLocalizedStringDraft>(
    'default',
    {}
  ),
  rest: Transformer<TLocalizedStringDraft, TLocalizedStringDraft>('rest', {}),
  graphql: Transformer<TLocalizedStringDraft, TLocalizedStringDraftGraphql>(
    'graphql',
    {
      replaceFields: ({ fields }) =>
        Object.entries(fields)
          .filter(([, value]) => !isNil(value))
          .map(([locale, value]) => ({
            locale,
            value: value || '',
          })),
    }
  ),
};

export default transformers;
