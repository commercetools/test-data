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

const michaelWilliamsCustomer = CustomerDraft.presets.sampleDataB2B
  .michaelWilliams()
  .build<TCustomerDraft>();

const buyerAssociateRole = AssociateRoleDraft.presets.sampleDataB2B
  .buyer()
  .build<TAssociateRoleDraft>();

const michaelWilliams = (): TAssociateDraftBuilder =>
  AssociateDraft.random()
    .customer(
      KeyReferenceDraft.presets.customer().key(michaelWilliamsCustomer.key!)
    )
    .associateRoleAssignments([
      AssociateRoleAssignmentDraft.presets
        .empty()
        .associateRole(
          KeyReferenceDraft.presets.associateRole().key(buyerAssociateRole.key!)
        )
        .inheritance(associateRoleInheritanceMode.Disabled),
    ]);

export default michaelWilliams;
