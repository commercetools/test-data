import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateCustomViewPermissionDraftBuilder,
  TCustomViewPermissionDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const CustomViewInstallationDraft: TCreateCustomViewPermissionDraftBuilder =
  () =>
    Builder<TCustomViewPermissionDraft>({
      generator,
      transformers,
    });

export default CustomViewInstallationDraft;
