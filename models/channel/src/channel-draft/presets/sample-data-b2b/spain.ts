import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import type { TChannelDraftBuilder } from '../../../types';
import * as ChannelDraft from '../../index';

const spain = (): TChannelDraftBuilder =>
  ChannelDraft.presets
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
    )
    .roles([roles.ProductDistribution]);

export default spain;
