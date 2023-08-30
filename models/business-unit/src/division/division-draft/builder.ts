import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateBusinessUnitDraftBuilder,
  TBusinessUnitDraft,
} from '../../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateBusinessUnitDraftBuilder = () =>
  Builder<TBusinessUnitDraft>({
    generator,
    transformers,
  });

export default Model;
