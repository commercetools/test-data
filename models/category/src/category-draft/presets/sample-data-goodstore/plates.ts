import {
  LocalizedString,
  KeyReference,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import dinnerware from './dinnerware';

const dinnerwareDraft = dinnerware().build<TCategoryDraft>();

const plates = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Plates')
        ['en-US']('Plates')
        ['de-DE']('Platten')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('plates')
        ['en-US']('plates')
        ['de-DE']('platten')
    )
    .key('plates')
    .orderHint('.82')
    .parent(KeyReference.presets.category().key(dinnerwareDraft.key!));

export default plates;
