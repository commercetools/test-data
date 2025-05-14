import { LocalizedStringDraft, KeyReferenceDraft } from '../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import homeDecor from './home-decor';

const homeDecorDraft = homeDecor().build<TCategoryDraft>();

const roomDecor = (): TCategoryDraftBuilder =>
  empty()
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
