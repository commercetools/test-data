import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const bottomsWomen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedString.presets.empty()['en-US']('bottoms_women'))
    .parent(Reference.presets.category()['key']('women'))
    .key('bottoms-women')
    .orderHint('0.4')
    .assets([]);

export default bottomsWomen;
