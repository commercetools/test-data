import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../commons';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Hämmer, die für Abbrucharbeiten verwendet werden')
        ['it-IT']('Martelli utilizzati per compiti di demolizione')
        ['nl-NL']('Hamers gebruikt voor sloopwerkzaamheden')
        ['fr-FR']('Marteaux utilisés pour des tâches de démolition')
        ['en-AU']('Hammers used for demolition tasks')
        ['es-ES']('Martillos utilizados para tareas de demolición')
        ['en-GB']('Hammers used for demolition tasks')
        ['en-NZ']('Hammers used for demolition tasks')
        ['pt-PT']('Martelos usados para tarefas de demolição')
        ['en-US']('Hammers used for demolition tasks')
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
    .orderHint('0.00001711364484762327979076')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(largeHydraulicHammersCategory.key!)
    );

export default demolitionHammers;
