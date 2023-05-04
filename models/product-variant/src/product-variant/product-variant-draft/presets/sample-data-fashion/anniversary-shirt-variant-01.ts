import { AttributeDraft } from '../../../../attribute/index';
import { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const anniversaryShirtVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets.empty().attributes([
    AttributeDraft.random().name('size').value({
      key: 'Small',
      label: 'Small',
    }),
  ]);

export default anniversaryShirtVariant01;
