import {
  AssociateRoleDraft,
  type TAssociateRoleDraft,
} from '../../../../../associate-role';
import { KeyReferenceDraft } from '../../../../../commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '../../../../../customer';
import { AssociateRoleAssignmentDraft } from '../../../../associate-role-assignment';
import { associateRoleInheritanceMode } from '../../../../associate-role-assignment/constants';
import { type TAssociateDraftBuilder } from '../../../types';
import * as AssociateDraft from '../../index';

const jamesSmithCustomer = CustomerDraft.presets.sampleDataB2B
  .jamesSmith()
  .build<TCustomerDraft>();

const adminAssociateRole = AssociateRoleDraft.presets.sampleDataB2B
  .admin()
  .build<TAssociateRoleDraft>();

const jamesSmith = (): TAssociateDraftBuilder =>
  AssociateDraft.random()
    .customer(KeyReferenceDraft.presets.customer().key(jamesSmithCustomer.key!))
    .associateRoleAssignments([
      AssociateRoleAssignmentDraft.presets
        .empty()
        .associateRole(
          KeyReferenceDraft.presets.associateRole().key(adminAssociateRole.key!)
        )
        .inheritance(associateRoleInheritanceMode.Disabled),
    ]);

export default jamesSmith;
