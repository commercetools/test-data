import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';

const womenCategoryDraft = CategoryDraft.presets.sampleDataFashion
  .women()
  .build<TCategoryDraft>();

const bottomsWomen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedString.presets.empty()['en-US']('bottoms_women'))
    .parent(
      KeyReference.random().key(womenCategoryDraft.key!).typeId('category')
    )
    .key('bottoms-women')
    .orderHint('0.4');

export default bottomsWomen;
