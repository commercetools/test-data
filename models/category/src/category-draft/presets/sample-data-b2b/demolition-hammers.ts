import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import largeHydraulicHammers from './large-hydraulic-hammers';

const largeHydraulicHammersCategory =
  largeHydraulicHammers().build<TCategoryDraft>();

const demolitionHammers = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Abbruchhämmer')
        ['it-IT']('Martelli Demolitori')
        ['nl-NL']('Sloophamers')
        ['fr-FR']('Marteaux de démolition')
        ['en-AU']('Demolition Hammers')
        ['es-ES']('Martillos de demolición')
        ['en-GB']('Demolition Hammers')
        ['en-NZ']('Demolition Hammers')
        ['pt-PT']('Martelos Demolidores')
        ['en-US']('Demolition Hammers')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('abbruch_haemmer')
        ['it-IT']('demolition_hammers')
        ['nl-NL']('demolition_hammers')
        ['fr-FR']('marteaux_demolition')
        ['en-AU']('demolition_hammers')
        ['es-ES']('martillos_demolicion')
        ['en-GB']('demolition_hammers')
        ['en-NZ']('demolition_hammers')
        ['pt-PT']('demolition_hammers')
        ['en-US']('demolition_hammers')
    )
    .key('demolition-hammers')
    .orderHint('0.00001708382950462763451332')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeHydraulicHammersCategory.key!)
    );

export default demolitionHammers;
