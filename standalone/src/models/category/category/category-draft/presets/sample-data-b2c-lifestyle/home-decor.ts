import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';

const homeDecor = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Home Decor')
        ['en-US']('Home Decor')
        ['de-DE']('Dekoration')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('home-decor')
        ['en-US']('home-decor')
        ['de-DE']('home-decor')
    )
    .key('home-decor')
    .orderHint('0.1');

export default homeDecor;
