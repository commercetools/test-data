import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import type { TChannelDraftBuilder } from '../../../types';
import * as ChannelDraft from '../../index';

const deFrUk = (): TChannelDraftBuilder =>
  ChannelDraft.presets
    .empty()
    .key('de-fr-uk')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Deutschland, Frankreich und Vereinigtes Königreich')
        ['it-IT']('Germania, Francia e Regno Unito')
        ['en-UK']('Germany, France and United Kingdom')
        ['nl-NL']('Duitsland, Frankrijk en Verenigd Koninkrijk')
        ['fr-FR']('Allemagne, France et Royaume-Uni')
        ['en-AU']('Germany, France and United Kingdom')
        ['es-ES']('Alemania, Francia y Reino Unido')
        ['en-GB']('Germany, France and United Kingdom')
        ['en-NZ']('Germany, France and United Kingdom')
        ['pt-PT']('Alemanha, França e Reino Unido')
        ['en-US']('Germany, France and United Kingdom')
    )
    .roles([roles.ProductDistribution]);

export default deFrUk;
