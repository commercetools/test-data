import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';

const highCapacityMotorGraders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Motorgrader')
        ['it-IT']('Livellatrici')
        ['nl-NL']('Graders')
        ['fr-FR']('Niveleuses')
        ['en-AU']('Graders')
        ['es-ES']('Motoniveladoras')
        ['en-GB']('Graders')
        ['en-NZ']('Graders')
        ['pt-PT']('Motoniveladoras')
        ['en-US']('Graders')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('hohe_kapazitaet_motorgrader')
        ['it-IT']('high_capacity_motor_graders')
        ['nl-NL']('high_capacity_motor_graders')
        ['fr-FR']('niveleuses_haute_capacite')
        ['en-AU']('high_capacity_motor_graders')
        ['es-ES']('motoniveladoras_alta_capacidad')
        ['en-GB']('high_capacity_motor_graders')
        ['en-NZ']('high_capacity_motor_graders')
        ['pt-PT']('high_capacity_motor_graders')
        ['en-US']('high_capacity_motor_graders')
    )
    .key('high-capacity-motor-graders')
    .orderHint('0.0000170838293796780439361');

export default highCapacityMotorGraders;
