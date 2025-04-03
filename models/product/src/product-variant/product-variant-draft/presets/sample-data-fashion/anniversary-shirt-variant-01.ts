import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const anniversaryShirtVariant01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets.empty().attributes([
    AttributeDraft.random().name('size').value({
      key: 'Small',
      label: 'Small',
    }),
  ]);

export default anniversaryShirtVariant01;
