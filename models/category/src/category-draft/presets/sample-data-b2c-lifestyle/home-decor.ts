import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder } from '../../../types';
import empty from '../empty';

const homeDecor = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Home Decor')
        ['en-US']('Home Decor')
        ['de-DE']('Dekoration')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('home-decor')
        ['en-US']('home-decor')
        ['de-DE']('home-decor')
    )
    .key('home-decor')
    .orderHint('0.1');

export default homeDecor;
