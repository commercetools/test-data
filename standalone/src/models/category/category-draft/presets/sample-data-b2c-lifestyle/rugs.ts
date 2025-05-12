import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import roomDecor from './room-decor';

const roomDecorDraft = roomDecor().build<TCategoryDraft>();

const rugs = (): TCategoryDraftBuilder =>
  empty()
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
