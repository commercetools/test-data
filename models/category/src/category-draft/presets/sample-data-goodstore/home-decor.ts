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
        ['en-US']('Home Decor')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('home-decor')
        ['en-US']('home-decor')
        ['de-DE']('home-decor')
        ['en-US']('home-decor')
    )
    .key('home-decor')
    .orderHint('0.1');

export default homeDecor;
