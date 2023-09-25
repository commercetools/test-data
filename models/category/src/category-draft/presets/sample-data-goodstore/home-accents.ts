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
        ['en-US']('Home Accents') // en-US not present in MC, assuming translation will match en-GB
        ['de-DE']('Accessoires') // typo exists in MC
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('home-accents')
        ['en-US']('home-accents')
        ['de-DE']('home-akzente')
        ['en-US']('home-accents')
    )
    .key('home-accents')
    .orderHint('.5')
    .parent(KeyReference.presets.category().key(roomDecorDraft.key!));

export default homeAccents;
