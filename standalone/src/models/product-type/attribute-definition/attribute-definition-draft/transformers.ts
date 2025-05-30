import { Transformer } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
import type {
  TAttributeDefinitionDraft,
  TAttributeDefinitionDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TAttributeDefinitionDraft, TAttributeDefinitionDraft>(
    'default',
    { buildFields: ['label', 'inputTip', 'type'] }
  ),
  rest: Transformer<TAttributeDefinitionDraft, TAttributeDefinitionDraft>(
    'rest',
    { buildFields: ['label', 'inputTip', 'type'] }
  ),
  graphql: Transformer<
    TAttributeDefinitionDraft,
    TAttributeDefinitionDraftGraphql
  >('graphql', {
    buildFields: ['label', 'inputTip', 'type'],
    addFields: ({ fields }) => {
      return {
        label: LocalizedStringDraft.toLocalizedField(fields.label)!,
      };
    },
  }),
};

export default transformers;
