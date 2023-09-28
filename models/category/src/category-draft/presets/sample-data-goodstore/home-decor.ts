import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const homeDecor = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Home Decor')
        ['en-GB']('Home Decor')
        ['de-DE']('Dekoration')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('home-decor')
        ['en-GB']('home-decor')
        ['de-DE']('home-decor')
    )
    .key('home-decor')
    .orderHint('0.1');

export default homeDecor;
