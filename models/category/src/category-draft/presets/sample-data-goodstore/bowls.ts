import {
  LocalizedString,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import dinnerware from './dinnerware';

const dinnerwareDraft = dinnerware().build<TCategoryDraft>();

const bowls = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Bowls')
        ['en-US']('Bowls')
        ['de-DE']('Schalen')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('bowls')
        ['en-US']('bowls')
        ['de-DE']('bowls')
    )
    .key('bowls')
    .orderHint('.56')
    .parent(KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!));

export default bowls;
