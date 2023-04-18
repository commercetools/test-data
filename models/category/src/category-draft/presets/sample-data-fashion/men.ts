import { LocalizedString } from '@commercetools-test-data/commons';
import * as CategoryDraft from '../..';
import { TCategoryDraftBuilder } from '../../../types';

const men = (): TCategoryDraftBuilder =>
  CategoryDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Men'))
    .slug(LocalizedString.presets.empty()['en-US']('men'))
    .description(LocalizedString.presets.empty()['en-US']('Items for men'))
    .key('men')
    .orderHint('0.75');

export default men;
