import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';

const kidsCategoryDraft = CategoryDraft.presets.sampleDataFashion
  .kids()
  .build<TCategoryDraft>();

const clothingKids = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Clothing'))
    .slug(LocalizedString.presets.empty()['en-US']('clothing_kids'))
    .parent(
      KeyReference.random().key(kidsCategoryDraft.key!).typeId('category')
    )
    .key('clothing-kids')
    .orderHint('0.8');

export default clothingKids;
