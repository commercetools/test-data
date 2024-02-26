import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import highCapacityMotorGraders from './high-capacity-motor-graders';

const highCapacityMotorGradersCategory =
  highCapacityMotorGraders().build<TCategoryDraft>();

const roadGraders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Straßengrader')
        ['it-IT']('Livellatrici Stradali')
        ['nl-NL']('Weggraders')
        ['fr-FR']('Niveleuses routières')
        ['en-AU']('Road Graders')
        ['es-ES']('Motoniveladoras para carreteras')
        ['en-GB']('Road Graders')
        ['en-NZ']('Road Graders')
        ['pt-PT']('Motoniveladoras de Estrada')
        ['en-US']('Road Graders')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('strassen_grader')
        ['it-IT']('road_graders')
        ['nl-NL']('road_graders')
        ['fr-FR']('niveleuses_construction_routiere')
        ['en-AU']('road_graders')
        ['es-ES']('motoniveladoras_carreteras')
        ['en-GB']('road_graders')
        ['en-NZ']('road_graders')
        ['pt-PT']('road_graders')
        ['en-US']('road_graders')
    )
    .key('road-graders')
    .orderHint('0.000017083829461181415854930')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityMotorGradersCategory.key!)
    );

export default roadGraders;
