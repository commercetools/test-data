import { TBuilder } from '@/core';
import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraft } from '../../../types';
import { compatPreset as emptyCompatPreset } from '../empty/empty';
import roomDecor from './room-decor';

const roomDecorDraft = roomDecor().build<TCategoryDraft>();

const homeAccents = (): TBuilder<TCategoryDraft> =>
  emptyCompatPreset()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Home Accents')
        ['en-US']('Home Accents') // en-US not present in MC, assuming translation will match en-GB
        ['de-DE']('Accessoires') // typo exists in MC
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('home-accents')
        ['en-US']('home-accents')
        ['de-DE']('home-akzente')
    )
    .key('home-accents')
    .orderHint('.5')
    .parent(KeyReferenceDraft.presets.category().key(roomDecorDraft.key!));

export default homeAccents;
