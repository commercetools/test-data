import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';

const kids = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(LocalizedStringDraft.presets.empty()['en-US']('Kids'))
    .slug(LocalizedStringDraft.presets.empty()['en-US']('kids'))
    .description(
      LocalizedStringDraft.presets.empty()['en-US']('Items for kids')
    )
    .key('kids')
    .orderHint('0.25');

export default kids;
