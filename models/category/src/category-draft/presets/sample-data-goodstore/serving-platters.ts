import {
  LocalizedString,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import serveware from './serveware';

const servewareDraft = serveware().build<TCategoryDraft>();

const servingPlatters = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Serving Platters')
        ['en-US']('Serving Platters')
        ['de-DE']('Servierplatten')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('serving-platters')
        ['en-US']('serving-platters')
        ['de-DE']('serving-platters')
    )
    .key('serving-platters')
    .orderHint('.0004')
    .parent(KeyReferenceDraft.presets.category().key(servewareDraft.key!));

export default servingPlatters;
