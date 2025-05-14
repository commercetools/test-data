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

const lucasDuboisCustomer = CustomerDraft.presets.sampleDataB2B
  .lucasDubois()
  .build<TCustomerDraft>();

const approverAssociateRole = AssociateRoleDraft.presets.sampleDataB2B
  .approver()
  .build<TAssociateRoleDraft>();

const lucasDubois = (): TAssociateDraftBuilder =>
  AssociateDraft.random()
    .customer(
      KeyReferenceDraft.presets.customer().key(lucasDuboisCustomer.key!)
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

export default lucasDubois;
