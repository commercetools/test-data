import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import homeDecor from './home-decor';

const homeDecorDraft = homeDecor().build<TCategoryDraft>();

const roomDecor = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Room Decor')
        ['de-DE']('Zimmerdekoration')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('room-decor')
        ['de-DE']('zimmerdekoration')
    )
    .key('room-decor')
    .orderHint('.8')
    .parent(KeyReference.presets.category().key(homeDecorDraft.key!));

export default roomDecor;
