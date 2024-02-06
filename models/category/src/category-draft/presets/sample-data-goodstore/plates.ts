import {
  LocalizedString,
  KeyReferenceDraft,
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
        ['de-DE']('plates')
    )
    .key('plates')
    .orderHint('.82')
    .parent(KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!));

export default plates;
