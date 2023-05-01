import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import { TProductVariantDraftBuilder } from '../../../types';

const flairJeansVariant01 = (): TProductVariantDraftBuilder =>
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
