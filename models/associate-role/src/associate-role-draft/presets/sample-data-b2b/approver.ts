import type { TAssociateRoleDraftBuilder } from '../../../types';
import * as AssociateRoleDraft from '../../index';

const approver = (): TAssociateRoleDraftBuilder =>
  AssociateRoleDraft.presets
    .empty()
    .key('approver')
    .name('Approver')
    .buyerAssignable(true)
    .permissions([
      'UpdateApprovalFlows',
      'CreateApprovalRules',
      'UpdateApprovalRules',
      'UpdateOthersCarts',
      'ViewOthersCarts',
      'ViewOthersOrders',
    ]);

export default approver;
