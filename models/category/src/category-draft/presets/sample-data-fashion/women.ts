import { LocalizedString } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const women = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Women'))
    .slug(LocalizedString.presets.empty()['en-US']('women'))
    .description(LocalizedString.presets.empty()['en-US']('Items for women'))
    .key('women')
    .orderHint('0.5');

export default women;
