import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomApplicationDraft,
  TCustomApplicationDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TCustomApplicationDraft, TCustomApplicationDraft>(
    'default',
    {
      buildFields: ['permissions', 'mainMenuLink', 'submenuLinks'],
    }
  ),
  graphql: Transformer<TCustomApplicationDraft, TCustomApplicationDraftGraphql>(
    'graphql',
    {
      buildFields: ['permissions', 'mainMenuLink', 'submenuLinks'],
    }
  ),
};

export default transformers;
