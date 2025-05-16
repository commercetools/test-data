import { Transformer } from '../../../../../core';
import type { TOidcSsoConfigDraft, TOidcSsoConfigDraftGraphql } from './types';

const buildFields: (keyof TOidcSsoConfigDraft)[] = [];

const transformers = {
  default: Transformer<TOidcSsoConfigDraft, TOidcSsoConfigDraft>('default', {
    buildFields,
  }),
  graphql: Transformer<TOidcSsoConfigDraft, TOidcSsoConfigDraftGraphql>(
    'graphql',
    {
      buildFields,
    }
  ),
};

export default transformers;
