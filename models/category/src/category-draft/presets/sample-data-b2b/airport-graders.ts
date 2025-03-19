import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import highCapacityMotorGraders from './high-capacity-motor-graders';

const highCapacityMotorGradersCategory =
  highCapacityMotorGraders().build<TCategoryDraft>();

const airportGraders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Flughafengrader')
        ['it-IT']('Livellatrici per Aeroporti')
        ['nl-NL']('Luchthavengraders')
        ['fr-FR']("Niveleuses d'aéroport")
        ['en-AU']('Airport Graders')
        ['es-ES']('Motoniveladoras para aeropuertos')
        ['en-GB']('Airport Graders')
        ['en-NZ']('Airport Graders')
        ['pt-PT']('Motoniveladoras de Aeroporto')
        ['en-US']('Airport Graders')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Motorgrader, die für den Flughafenbau geeignet sind')
        [
          'it-IT'
        ]('Livellatrici motorizzate adatte per la costruzione di aeroporti')
        ['nl-NL']('Motorgraders geschikt voor luchthavenbouw')
        ['fr-FR']('Niveleuses adaptées à la construction aéroportuaire')
        ['en-AU']('Motor graders suitable for airport construction')
        [
          'es-ES'
        ]('Motoniveladoras adecuadas para la construcción de aeropuertos')
        ['en-GB']('Motor graders suitable for airport construction')
        ['en-NZ']('Motor graders suitable for airport construction')
        ['pt-PT']('Motoniveladoras adequadas para construção de aeroportos')
        ['en-US']('Motor graders suitable for airport construction')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('flughafen_grader')
        ['it-IT']('airport_graders')
        ['nl-NL']('airport_graders')
        ['fr-FR']('niveleuses_aeroport')
        ['en-AU']('airport_graders')
        ['es-ES']('motoniveladoras_aeropuertos')
        ['en-GB']('airport_graders')
        ['en-NZ']('airport_graders')
        ['pt-PT']('airport_graders')
        ['en-US']('airport_graders')
    )
    .key('airport-graders')
    .orderHint('0.000017113644847401957960348')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityMotorGradersCategory.key!)
    );

export default airportGraders;
