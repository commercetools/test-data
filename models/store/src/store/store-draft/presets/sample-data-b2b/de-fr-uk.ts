import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import type { TStoreDraftBuilder } from '../../../types';
import * as StoreDraft from '../../index';

const deFrUk = (): TStoreDraftBuilder =>
  StoreDraft.presets
    .empty()
    .key('de-fr-uk')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Deutschland, Frankreich und Vereinigtes Königreich')
        ['it-IT']('Germania, Francia e Regno Unito')
        ['nl-NL']('Duitsland, Frankrijk en Verenigd Koninkrijk')
        ['fr-FR']('Allemagne, France et Royaume-Uni')
        ['en-AU']('Germany, France and United Kingdom')
        ['es-ES']('Alemania, Francia y Reino Unido')
        ['en-GB']('Germany, France and United Kingdom')
        ['en-NZ']('Germany, France and United Kingdom')
        ['pt-PT']('Alemanha, França e Reino Unido')
        ['en-US']('Germany, France and United Kingdom')
    );

export default deFrUk;
