import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import roomDecor from './room-decor';

const roomDecorDraft = roomDecor().build<TCategoryDraft>();

const rugs = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Rugs')
        ['en-US']('Rugs') // en-US not present in MC, assuming translation will match en-GB
        ['de-DE']('Teppiche')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('rugs')
        ['en-US']('rugs')
        ['de-DE']('teppiche')
    )
    .key('rugs')
    .orderHint('.4')
    .parent(KeyReferenceDraft.presets.category().key(roomDecorDraft.key!));

export default rugs;
