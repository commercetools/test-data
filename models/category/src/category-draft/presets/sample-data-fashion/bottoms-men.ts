import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';

const menCategoryDraft = CategoryDraft.presets.sampleDataFashion
  .men()
  .build<TCategoryDraft>();

const bottomsMen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedString.presets.empty()['en-US']('bottoms_men'))
    .parent(KeyReference.random().key(menCategoryDraft.key!).typeId('category'))
    .key('bottoms-men')
    .orderHint('0.4');

export default bottomsMen;
