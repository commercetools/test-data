import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import type { TChannelDraftBuilder } from '../../../types';
import * as ChannelDraft from '../../index';

const defaultChannel = (): TChannelDraftBuilder =>
  ChannelDraft.presets
    .empty()
    .key('default-channel')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Standard')
        ['it-IT']('Predefinito')
        ['nl-NL']('Standaard')
        ['fr-FR']('Défaut')
        ['en-AU']('Default')
        ['es-ES']('Predeterminado')
        ['en-GB']('Default')
        ['en-NZ']('Default')
        ['pt-PT']('Padrão')
        ['en-US']('Default')
    )
    .roles([roles.ProductDistribution]);

export default defaultChannel;
