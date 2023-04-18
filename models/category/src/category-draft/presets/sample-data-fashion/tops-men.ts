import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';

const menCategoryDraft = CategoryDraft.presets.sampleDataFashion
  .men()
  .build<TCategoryDraft>();

const topsMen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Tops'))
    .slug(LocalizedString.presets.empty()['en-US']('tops_men'))
    .parent(KeyReference.random().key(menCategoryDraft.key!).typeId('category'))
    .key('tops-men')
    .orderHint('0.6');

export default topsMen;
