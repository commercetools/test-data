import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import roomDecor from './room-decor';

const roomDecorDraft = roomDecor().build<TCategoryDraft>();

const homeAccents = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Home Accents')
        ['de-DE']('Accessoires')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('home-accents')
        ['de-DE']('home-akzente')
    )
    .key('home-accents')
    .orderHint('.5')
    .parent(KeyReference.presets.category().key(roomDecorDraft.key!));

export default homeAccents;
