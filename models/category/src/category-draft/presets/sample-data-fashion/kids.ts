import { LocalizedString } from '@commercetools-test-data/commons';
import { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const kids = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-US']('Kids'))
    .slug(LocalizedString.presets.empty()['en-US']('kids'))
    .description(LocalizedString.presets.empty()['en-US']('Items for kids'))
    .key('kids')
    .orderHint('0.25');

export default kids;
