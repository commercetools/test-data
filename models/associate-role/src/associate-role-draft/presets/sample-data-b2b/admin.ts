import type { TAssociateRoleDraftBuilder } from '../../../types';
import * as AssociateRoleDraft from '../../index';

const admin = (): TAssociateRoleDraftBuilder =>
  AssociateRoleDraft.presets
    .empty()
    .key('admin')
    .name('Admin')
    .buyerAssignable(true)
    .permissions([
      'UpdateAssociates',
      'UpdateApprovalFlows',
      'ViewOthersCarts',
      'DeclineOthersQuotes',
      'CreateApprovalRules',
      'UpdateBusinessUnitDetails',
      'ViewOthersOrders',
      'AddChildUnits',
      'UpdateOthersOrders',
      'UpdateOthersCarts',
      'AcceptOthersQuotes',
      'ViewOthersQuotes',
      'UpdateParentUnit',
      'UpdateOthersQuoteRequests',
      'ViewOthersQuoteRequests',
      'UpdateApprovalRules',
    ]);

export default admin;
