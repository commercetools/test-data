import { Builder } from '../../../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TOidcSsoConfigDraft,
  TCreateOidcSsoConfigDraftBuilder,
} from './types';

const Model: TCreateOidcSsoConfigDraftBuilder = () =>
  Builder<TOidcSsoConfigDraft>({
    generator,
    transformers,
  });

export default Model;
