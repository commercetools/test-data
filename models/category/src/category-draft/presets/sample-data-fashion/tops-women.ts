import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';

const womenCategoryDraft = CategoryDraft.presets.sampleDataFashion
  .women()
  .build<TCategoryDraft>();

const topsWomen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_women'))
    .parent(
      KeyReference.random().key(womenCategoryDraft.key!).typeId('category')
    )
    .key('tops-women')
    .orderHint('0.3');

export default topsWomen;
