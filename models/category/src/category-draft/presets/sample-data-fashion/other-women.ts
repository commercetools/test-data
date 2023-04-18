import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';

const womenCategoryDraft = CategoryDraft.presets.sampleDataFashion
  .women()
  .build<TCategoryDraft>();

const otherWomen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Other'))
    .slug(LocalizedString.presets.empty()['en-US']('other_women'))
    .parent(
      KeyReference.random().key(womenCategoryDraft.key!).typeId('category')
    )
    .key('other-women')
    .orderHint('0.5')
    .assets([]);

export default otherWomen;
