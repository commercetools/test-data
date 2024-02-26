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
      'ViewOthersCarts',
      'CreateApprovalRules',
      'ViewOthersOrders',
      'UpdateOthersCarts',
      'UpdateApprovalRules',
    ]);

export default approver;
