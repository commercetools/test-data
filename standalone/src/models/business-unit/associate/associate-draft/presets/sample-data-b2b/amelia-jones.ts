import {
  AssociateRoleDraft,
  type TAssociateRoleDraft,
} from '@/models/associate-role';
import { KeyReferenceDraft } from '@/models/commons';
import { CustomerDraft, type TCustomerDraft } from '@/models/customer';
import { AssociateRoleAssignmentDraft } from '../../../../associate-role-assignment';
import { associateRoleInheritanceMode } from '../../../../associate-role-assignment/constants';
import { type TAssociateDraftBuilder } from '../../../types';
import * as AssociateDraft from '../../index';

const ameliaJonesCustomer = CustomerDraft.presets.sampleDataB2B
  .ameliaJones()
  .build<TCustomerDraft>();

const approverAssociateRole = AssociateRoleDraft.presets.sampleDataB2B
  .approver()
  .build<TAssociateRoleDraft>();

const ameliaJones = (): TAssociateDraftBuilder =>
  AssociateDraft.random()
    .customer(
      KeyReferenceDraft.presets.customer().key(ameliaJonesCustomer.key!)
    )
    .associateRoleAssignments([
      AssociateRoleAssignmentDraft.presets
        .empty()
        .associateRole(
          KeyReferenceDraft.presets
            .associateRole()
            .key(approverAssociateRole.key!)
        )
        .inheritance(associateRoleInheritanceMode.Disabled),
    ]);

export default ameliaJones;
