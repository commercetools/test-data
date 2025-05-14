import {
  AssociateRoleDraft,
  type TAssociateRoleDraft,
} from '../../../../../associate-role';
import { KeyReferenceDraft } from '../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '../../../../../customer';
import { AssociateRoleAssignmentDraft } from '../../../../associate-role-assignment';
import { associateRoleInheritanceMode } from '../../../../associate-role-assignment/constants';
import { type TAssociateDraftBuilder } from '../../../types';
import * as AssociateDraft from '../../index';

const oliverSmithCustomer = CustomerDraft.presets.sampleDataB2B
  .oliverSmith()
  .build<TCustomerDraft>();

const adminAssociateRole = AssociateRoleDraft.presets.sampleDataB2B
  .admin()
  .build<TAssociateRoleDraft>();

const oliverSmith = (): TAssociateDraftBuilder =>
  AssociateDraft.random()
    .customer(
      KeyReferenceDraft.presets.customer().key(oliverSmithCustomer.key!)
    )
    .associateRoleAssignments([
      AssociateRoleAssignmentDraft.presets
        .empty()
        .associateRole(
          KeyReferenceDraft.presets.associateRole().key(adminAssociateRole.key!)
        )
        .inheritance(associateRoleInheritanceMode.Enabled),
    ]);

export default oliverSmith;
