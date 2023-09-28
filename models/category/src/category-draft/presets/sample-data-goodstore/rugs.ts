import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import roomDecor from './room-decor';

const roomDecorDraft = roomDecor().build<TCategoryDraft>();

const rugs = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-GB']('Rugs')['de-DE']('Teppiche'))
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('rugs')
        ['en-GB']('rugs')
        ['de-DE']('teppiche')
    )
    .key('rugs')
    .orderHint('.4')
    .parent(KeyReference.presets.category().key(roomDecorDraft.key!));

export default rugs;
