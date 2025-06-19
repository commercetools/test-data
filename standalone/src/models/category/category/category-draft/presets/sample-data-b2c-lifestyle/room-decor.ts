import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import homeDecor from './home-decor';

const homeDecorDraft = homeDecor().build<TCategoryDraft>();

const roomDecor = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Room Decor')
        ['en-US']('Room Decor')
        ['de-DE']('Zimmerdekoration')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('room-decor')
        ['en-US']('room-decor')
        ['de-DE']('zimmerdekoration')
    )
    .key('room-decor')
    .orderHint('.8')
    .parent(KeyReferenceDraft.presets.category().key(homeDecorDraft.key!));

export default roomDecor;
