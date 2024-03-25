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
    .orderHint('0.00001708382946502410689089')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityMotorGradersCategory.key!)
    );

export default airportGraders;
