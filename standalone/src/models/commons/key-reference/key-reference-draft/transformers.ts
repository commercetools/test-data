import type { TKeyReferenceDraft, TKeyReferenceDraftGraphql } from '.././types';
import { Transformer } from '../../../../core';

const transformers = {
  default: Transformer<TKeyReferenceDraft, TKeyReferenceDraft>('default', {}),
  rest: Transformer<TKeyReferenceDraft, TKeyReferenceDraft>('rest', {}),
  graphql: Transformer<TKeyReferenceDraft, TKeyReferenceDraftGraphql>(
    'graphql',
    {}
  ),
};

export default transformers;
