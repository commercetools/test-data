import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const otherKids = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Other'))
    .slug(LocalizedString.presets.empty()['en-US']('other_kids'))
    .parent(Reference.presets.category()['key']('kids'))
    .key('other-kids')
    .orderHint('0.25')
    .assets([]);

export default otherKids;
