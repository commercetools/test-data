import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const bottomsKids = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedString.presets.empty()['en-US']('bottoms_kids'))
    .description(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .parent(Reference.presets.category()['key']('clothing-kids'))
    .key('bottoms_kids')
    .orderHint('0.3')
    .assets([]);

export default bottomsKids;
