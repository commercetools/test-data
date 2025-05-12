import type { TAssociateRoleDraftBuilder } from '../../../types';
import * as AssociateRoleDraft from '../../index';

const admin = (): TAssociateRoleDraftBuilder =>
  AssociateRoleDraft.presets
    .empty()
    .key('admin')
    .name('Admin')
    .buyerAssignable(true)
    .permissions([
      'UpdateApprovalFlows',
      'CreateApprovalRules',
      'UpdateApprovalRules',
      'AddChildUnits',
      'UpdateAssociates',
      'UpdateBusinessUnitDetails',
      'UpdateParentUnit',
      'UpdateOthersCarts',
      'ViewOthersCarts',
      'UpdateOthersOrders',
      'ViewOthersOrders',
      'AcceptOthersQuotes',
      'DeclineOthersQuotes',
      'ViewOthersQuotes',
      'UpdateOthersQuoteRequests',
      'ViewOthersQuoteRequests',
    ]);

export default admin;
