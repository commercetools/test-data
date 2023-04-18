import { LocalizedString } from '@commercetools-test-data/commons';
import { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const men = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Men'))
    .slug(LocalizedString.presets.empty()['en-US']('men'))
    .description(LocalizedString.presets.empty()['en-US']('Items for men'))
    .key('men')
    .orderHint('0.75');

export default men;
