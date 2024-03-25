import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const spain = (): TStoreDraftBuilder =>
  StoreDraft.presets
    .empty()
    .key('spain')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Spanien')
        ['it-IT']('Spagna')
        ['nl-NL']('Spanje')
        ['fr-FR']('Espagnole')
        ['en-AU']('Spain')
        ['es-ES']('España')
        ['en-GB']('Spain')
        ['en-NZ']('Spain')
        ['pt-PT']('Espanha')
        ['en-US']('Spain')
    );

export default spain;
