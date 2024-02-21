import {
  AssociateRoleDraft,
  type TAssociateRoleDraft,
} from '@commercetools-test-data/associate-role';
import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import { AssociateRoleAssignmentDraft } from '../../../../associate-role-assignment';
import { associateRoleInheritanceMode } from '../../../../associate-role-assignment/constants';
import { type TAssociateDraftBuilder } from '../../../types';
import * as AssociateDraft from '../../index';

const oliviaJonesCustomer = CustomerDraft.presets.sampleDataB2B
  .oliviaJones()
  .build<TCustomerDraft>();

const adminAssociateRole = AssociateRoleDraft.presets.sampleDataB2B
  .admin()
  .build<TAssociateRoleDraft>();

const oliviaJones = (): TAssociateDraftBuilder =>
  AssociateDraft.random()
    .customer(
      KeyReferenceDraft.presets.customer().key(oliviaJonesCustomer.key!)
    )
    .associateRoleAssignments([
      AssociateRoleAssignmentDraft.presets
        .empty()
        .associateRole(
          KeyReferenceDraft.presets.associateRole().key(adminAssociateRole.key!)
        )
        .inheritance(associateRoleInheritanceMode.Disabled),
    ]);

export default oliviaJones;
