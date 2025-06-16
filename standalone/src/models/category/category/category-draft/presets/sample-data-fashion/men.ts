import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';

const men = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Men'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('men'))
    .description(LocalizedStringDraft.presets.empty()['en-US']('Items for men'))
    .key('men')
    .orderHint('0.75');

export default men;
