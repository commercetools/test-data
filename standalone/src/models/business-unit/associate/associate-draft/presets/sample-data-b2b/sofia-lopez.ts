import {
  AssociateRoleDraft,
  type TAssociateRoleDraft,
} from '../../../../../associate-role';
import { KeyReferenceDraft } from '@/models/commons';
import { CustomerDraft, type TCustomerDraft } from '@/models/customer/customer';
import { AssociateRoleAssignmentDraft } from '../../../../associate-role-assignment';
import { associateRoleInheritanceMode } from '../../../../associate-role-assignment/constants';
import { type TAssociateDraftBuilder } from '../../../types';
import * as AssociateDraft from '../../index';

const sofiaLopezCustomer = CustomerDraft.presets.sampleDataB2B
  .sofiaLopez()
  .build<TCustomerDraft>();

const buyerAssociateRole = AssociateRoleDraft.presets.sampleDataB2B
  .buyer()
  .build<TAssociateRoleDraft>();

const sofiaLopez = (): TAssociateDraftBuilder =>
  AssociateDraft.random()
    .customer(KeyReferenceDraft.presets.customer().key(sofiaLopezCustomer.key!))
    .associateRoleAssignments([
      AssociateRoleAssignmentDraft.presets
        .empty()
        .associateRole(
          KeyReferenceDraft.presets.associateRole().key(buyerAssociateRole.key!)
        )
        .inheritance(associateRoleInheritanceMode.Disabled),
    ]);

export default sofiaLopez;
