import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type {
  TAttributeDefinitionDraft,
  TAttributeDefinitionDraftGraphql,
} from '../src/types';

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
        label: LocalizedString.toLocalizedField(fields.label)!,
      };
    },
  }),
};

export default transformers;
