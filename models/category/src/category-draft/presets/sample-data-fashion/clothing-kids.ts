import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const clothingKids = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Clothing'))
    .slug(LocalizedString.presets.empty()['en-US']('clothing_kids'))
    .parent(Reference.presets.category()['key']('kids'))
    .key('clothing-kids')
    .orderHint('0.8')
    .assets([]);

export default clothingKids;
