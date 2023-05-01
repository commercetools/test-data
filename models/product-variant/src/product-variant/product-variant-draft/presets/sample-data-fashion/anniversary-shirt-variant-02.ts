import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import { TProductVariantDraftBuilder } from '../../../types';

const anniversaryShirtVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets.empty().attributes([
    AttributeDraft.random().name('size').value({
      key: 'Medium',
      label: 'Medium',
    }),
  ]);

export default anniversaryShirtVariant02;
