import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';

const kitchen = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Kitchen')
        ['en-US']('Kitchen')
        ['de-DE']('Küche')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('kitchen')
        ['en-US']('kitchen')
        ['de-DE']('kitchen')
    )
    .key('kitchen')
    .orderHint('0.3');

export default kitchen;
