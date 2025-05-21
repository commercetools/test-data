import { TBuilder } from '@/core';
import { AttributeDraft } from '../../../../attribute';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const anniversaryShirtVariant02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets.empty().attributes([
    AttributeDraft.random().name('size').value({
      key: 'Medium',
      label: 'Medium',
    }),
  ]);

export default anniversaryShirtVariant02;
