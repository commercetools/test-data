import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

import dinnerware from './dinnerware';

const dinnerwareDraft = dinnerware().build<TCategoryDraft>();

const bowls = (): TCategoryDraftBuilder =>
  empty()
    .name(LocalizedString.presets.empty()['en-GB']('Bowls')['de-DE']('Schalen'))
    .slug(LocalizedString.presets.empty()['en-GB']('bowls')['de-DE']('bowls'))
    .key('bowls')
    .orderHint('.56')
    .parent(KeyReference.presets.category().key(dinnerwareDraft.key!));

export default bowls;
