import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const bottomsMen = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Bottoms'))
    .slug(LocalizedString.presets.empty()['en-US']('bottoms_men'))
    .parent(Reference.presets.category()['key']('men'))
    .key('bottoms-men')
    .orderHint('0.4')
    .assets([]);

export default bottomsMen;
