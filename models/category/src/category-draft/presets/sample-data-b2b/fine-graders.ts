import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import highCapacityMotorGraders from './high-capacity-motor-graders';

const highCapacityMotorGradersCategory =
  highCapacityMotorGraders().build<TCategoryDraft>();

const fineGraders = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Fein-Grader')
        ['it-IT']('Livellatrici Fine')
        ['nl-NL']('Fijne Graders')
        ['fr-FR']('Niveleuses fines')
        ['en-AU']('Fine Graders')
        ['es-ES']('Motoniveladoras finas')
        ['en-GB']('Fine Graders')
        ['en-NZ']('Fine Graders')
        ['pt-PT']('Motoniveladoras Finas')
        ['en-US']('Fine Graders')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('fein_grader')
        ['it-IT']('fine_graders')
        ['nl-NL']('fine_graders')
        ['fr-FR']('niveleuses_fines')
        ['en-AU']('fine_graders')
        ['es-ES']('motoniveladoras_finas')
        ['en-GB']('fine_graders')
        ['en-NZ']('fine_graders')
        ['pt-PT']('fine_graders')
        ['en-US']('fine_graders')
    )
    .key('fine-graders')
    .orderHint('0.00001708382946805785223058')
    .parent(
      KeyReferenceDraft.presets
        .category()
        .key(highCapacityMotorGradersCategory.key!)
    );

export default fineGraders;
