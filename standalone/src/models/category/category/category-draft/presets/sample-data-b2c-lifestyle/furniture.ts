import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';

const furniture = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Furniture')
        ['en-US']('Furniture')
        ['de-DE']('Möbel')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('furniture')
        ['en-US']('furniture')
        ['de-DE']('furniture')
    )
    .key('furniture')
    .orderHint('0.2');

export default furniture;
