import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const homeDecor = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets.empty()['en-GB']('Home Decor')['de-DE']('Deko')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('home-decor')
        ['de-DE']('home-decor')
    )
    .key('home-decor')
    .key('0.1');

export default homeDecor;
