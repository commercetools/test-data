import { LocalizedString } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const kids = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Kids'))
    .slug(LocalizedString.presets.empty()['en-US']('kids'))
    .description(LocalizedString.presets.empty()['en-US']('Items for kids'))
    .key('kids')
    .orderHint('0.25')
    .assets([]);

export default kids;
