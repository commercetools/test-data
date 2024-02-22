import { Transformer } from '@commercetools-test-data/core';
import {
  TAttributePlainEnumValueDraftGraphql,
  TAttributePlainEnumValueDraft,
} from '../types';

const transformers = {
  default: Transformer<
    TAttributePlainEnumValueDraft,
    TAttributePlainEnumValueDraft
  >('default', {
    buildFields: [],
  }),
  graphql: Transformer<
    TAttributePlainEnumValueDraft,
    TAttributePlainEnumValueDraftGraphql
  >('graphql', {
    buildFields: [],
  }),
};

export default transformers;
