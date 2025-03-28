import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const flairJeansVariant01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets.empty().attributes([
    AttributeDraft.random().name('size').value({
      key: 'Large',
      label: 'Large',
    }),
    AttributeDraft.random().name('fit').value({
      key: 'Flair',
      label: 'Flair',
    }),
    AttributeDraft.random().name('color').value({
      key: 'Blue',
      label: 'Blue',
    }),
    AttributeDraft.random().name('length').value({
      key: 'Crop',
      label: 'Crop',
    }),
  ]);

export default flairJeansVariant01;
