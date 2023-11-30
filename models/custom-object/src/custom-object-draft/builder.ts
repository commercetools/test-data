import { Builder } from '@commercetools-test-data/core';
import { TCustomObjectDraft, TCreateCustomObjectDraftBuilder } from '../types';
import generator from './generator';

const CustomObjectDraft: TCreateCustomObjectDraftBuilder = () =>
  Builder<TCustomObjectDraft>({
    generator,
  });

export default CustomObjectDraft;
