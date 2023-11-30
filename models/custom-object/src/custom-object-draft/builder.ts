import { Builder } from '@commercetools-test-data/core';
import { TCustomObjectDraft, TCustomObjectDraftBuilder } from '../types';
import generator from './generator';

const CustomObjectDraft: TCustomObjectDraftBuilder = () =>
  Builder<TCustomObjectDraft>({
    generator,
  });

export default CustomObjectDraft;
