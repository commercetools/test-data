import { LocalizedString } from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const homeDecor = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Home Decor')
        ['en-US']('Home Decor')
        ['de-DE']('Dekoration')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('home-decor')
        ['en-US']('home-decor')
        ['de-DE']('dekoration')
    )
    .key('home-decor')
    .orderHint('0.6');

export default homeDecor;
