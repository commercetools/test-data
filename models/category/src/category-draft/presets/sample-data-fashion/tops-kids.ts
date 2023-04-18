import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';

const clothingKidsDraft = CategoryDraft.presets.sampleDataFashion
  .clothingKids()
  .build<TCategoryDraft>();

const topsKids = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_kids'))
    .description(LocalizedString.presets.empty()['en-US']('Tops'))
    .parent(
      KeyReference.random().key(clothingKidsDraft.key!).typeId('category')
    )
    .key('tops-kids')
    .orderHint('0.3');

export default topsKids;
