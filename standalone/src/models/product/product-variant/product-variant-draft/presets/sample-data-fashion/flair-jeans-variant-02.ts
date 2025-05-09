import { TBuilder } from '../../../../../../core';
import { AttributeDraft } from '../../../../attribute';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const flairJeansVariant02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets.empty().attributes([
    AttributeDraft.random().name('size').value({
      key: 'Medium',
      label: 'Medium',
    }),
    AttributeDraft.random().name('fit').value({
      key: 'Flair',
      label: 'Flair',
    }),
    AttributeDraft.random().name('color').value({
      key: 'Black',
      label: 'Black',
    }),
    AttributeDraft.random().name('length').value({
      key: 'Extra Long',
      label: 'Extra Long',
    }),
  ]);

export default flairJeansVariant02;
