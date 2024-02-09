import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import bedroomFurniture from './bedroom-furniture';

const bedroomFurnitureDraft = bedroomFurniture().build<TCategoryDraft>();

const beds = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Beds')
        ['en-US']('Beds')
        ['de-DE']('Betten')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('beds')
        ['en-US']('beds')
        ['de-DE']('beds')
    )
    .key('beds')
    .orderHint('.4')
    .parent(
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!)
    );

export default beds;
