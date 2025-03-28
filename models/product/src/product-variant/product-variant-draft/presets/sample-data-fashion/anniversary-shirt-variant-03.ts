import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

// rename master variants to variant01, etc...
const anniversaryShirtVariant03 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets.empty().attributes([
    AttributeDraft.random().name('size').value({
      key: 'Large',
      label: 'Large',
    }),
  ]);

export default anniversaryShirtVariant03;
