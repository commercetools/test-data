import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import { TProductVariantDraftBuilder } from '../../../types';

const flairJeansVariant02 = (): TProductVariantDraftBuilder =>
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
