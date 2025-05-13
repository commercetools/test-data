import { Transformer } from '@/core';
import {
  type TAttributeLocalizedEnumValueDraft,
  type TAttributeLocalizedEnumValueDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TAttributeLocalizedEnumValueDraft,
    TAttributeLocalizedEnumValueDraft
  >('default', { buildFields: ['label'] }),

  rest: Transformer<
    TAttributeLocalizedEnumValueDraft,
    TAttributeLocalizedEnumValueDraft
  >('rest', { buildFields: ['label'] }),
  graphql: Transformer<
    TAttributeLocalizedEnumValueDraft,
    TAttributeLocalizedEnumValueDraftGraphql
  >('graphql', {
    buildFields: ['label'],
  }),
};

export default transformers;
