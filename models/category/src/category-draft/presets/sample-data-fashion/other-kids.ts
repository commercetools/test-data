import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';

const kidsCategoryDraft = CategoryDraft.presets.sampleDataFashion
  .kids()
  .build<TCategoryDraft>();

const otherKids = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Other'))
    .slug(LocalizedString.presets.empty()['en-US']('other_kids'))
    .parent(
      KeyReference.random().key(kidsCategoryDraft.key!).typeId('category')
    )
    .key('other-kids')
    .orderHint('0.25');

export default otherKids;
