import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import bedroomFurniture from './bedroom-furniture';

const bedroomFurnitureDraft = bedroomFurniture().build<TCategoryDraft>();

const storageTables = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Storage & Tables')
        ['de-DE']('Kommoden')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('storage-and-tables')
        ['de-DE']('dressers')
    )
    .key('storage--tables')
    .orderHint('.1')
    .parent(KeyReference.presets.category().key(bedroomFurnitureDraft.key!));

export default storageTables;
