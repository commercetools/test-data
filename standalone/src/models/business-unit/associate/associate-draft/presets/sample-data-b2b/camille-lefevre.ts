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

const camilleLefevreCustomer = CustomerDraft.presets.sampleDataB2B
  .camilleLefevre()
  .build<TCustomerDraft>();

const buyerAssociateRole = AssociateRoleDraft.presets.sampleDataB2B
  .buyer()
  .build<TAssociateRoleDraft>();

const camilleLefevre = (): TAssociateDraftBuilder =>
  AssociateDraft.random()
    .customer(
      KeyReferenceDraft.presets.customer().key(camilleLefevreCustomer.key!)
    )
    .associateRoleAssignments([
      AssociateRoleAssignmentDraft.presets
        .empty()
        .associateRole(
          KeyReferenceDraft.presets.associateRole().key(buyerAssociateRole.key!)
        )
        .inheritance(associateRoleInheritanceMode.Disabled),
    ]);

export default camilleLefevre;
