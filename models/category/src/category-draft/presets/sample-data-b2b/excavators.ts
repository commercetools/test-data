import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const excavators = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Bagger')
        ['it-IT']('Escavatori')
        ['nl-NL']('Graafmachines')
        ['fr-FR']('Excavatrices')
        ['en-AU']('Excavators')
        ['es-ES']('Excavadoras')
        ['en-GB']('Excavators')
        ['en-NZ']('Excavators')
        ['pt-PT']('Escavadeiras')
        ['en-US']('Excavators')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('bagger')
        ['it-IT']('excavators')
        ['nl-NL']('excavators')
        ['fr-FR']('excavatrices')
        ['en-AU']('excavators')
        ['es-ES']('excavadoras')
        ['en-GB']('excavators')
        ['en-NZ']('excavators')
        ['pt-PT']('excavators')
        ['en-US']('excavators')
    )
    .key('excavators')
    .orderHint('0.000017083829365781074397182');

export default excavators;
