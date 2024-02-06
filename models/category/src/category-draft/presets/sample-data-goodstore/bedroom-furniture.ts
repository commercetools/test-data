import {
  LocalizedString,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import furniture from './furniture';

const furnitureDraft = furniture().build<TCategoryDraft>();

const bedroomFurniture = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Bedroom Furniture')
        ['en-US']('Bedroom Furniture')
        ['de-DE']('Schlafzimmer')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('bedroom-furniture')
        ['en-US']('bedroom-furniture')
        ['de-DE']('bedroom-furniture')
    )
    .key('bedroom-furniture')
    .orderHint('.9')
    .parent(KeyReferenceDraft.presets.category().key(furnitureDraft.key!));

export default bedroomFurniture;
