import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import bedroomFurniture from './bedroom-furniture';

const bedroomFurnitureDraft = bedroomFurniture().build<TCategoryDraft>();

const beds = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Beds')
        ['de-DE']('Betten')
        ['en-US']('Beds')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('beds')
        ['de-DE']('beds')
        ['en-US']('beds')
    )
    .key('beds')
    .orderHint('.4')
    .parent(KeyReference.presets.category().key(bedroomFurnitureDraft.key!));

export default beds;