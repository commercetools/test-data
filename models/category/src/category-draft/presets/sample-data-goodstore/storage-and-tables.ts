import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import bedroomFurniture from './bedroom-furniture';

const bedroomFurnitureDraft = bedroomFurniture().build<TCategoryDraft>();

const storageAndTables = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Storage and Tables')
        ['en-US']('Storage and Tables')
        ['de-DE']('Kommoden')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('storage-and-tables')
        ['en-US']('storage-and-tables')
        ['de-DE']('kommoden')
    )
    .key('storage-and-tables')
    .orderHint('.1')
    .parent(KeyReference.presets.category().key(bedroomFurnitureDraft.key!));

export default storageAndTables;
