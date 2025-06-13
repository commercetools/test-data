import { LocalizedStringDraft } from '../../../../../commons';
import type { TCategoryDraftBuilder } from '../../../types';
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
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Motorgrader mit hoher Grading-Kapazität')
        ['it-IT']('Livellatrici motorizzate ad alta capacità di livellamento')
        ['nl-NL']('Motorgraders met hoge graderingscapaciteit')
        ['fr-FR']('Niveleuses avec une capacité de nivellement élevée')
        ['en-AU']('Motor graders with high grading capacity')
        ['es-ES']('Motoniveladoras con alta capacidad de nivelación')
        ['en-GB']('Motor graders with high grading capacity')
        ['en-NZ']('Motor graders with high grading capacity')
        ['pt-PT']('Motoniveladoras com alta capacidade de nivelamento')
        ['en-US']('Motor graders with high grading capacity')
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
    .orderHint('0.000017113644845161588258996');

export default highCapacityMotorGraders;
