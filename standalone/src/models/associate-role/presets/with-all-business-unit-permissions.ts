import AssociateRole from '../builder';
import { BUSINESS_UNIT_PERMISSIONS } from '../constants';

const withAllBusinessUnitPermissions = () =>
  AssociateRole().permissions([
    BUSINESS_UNIT_PERMISSIONS.ADD_CHILD_UNITS,
    BUSINESS_UNIT_PERMISSIONS.UPDATE_ASSOCIATES,
    BUSINESS_UNIT_PERMISSIONS.UPDATE_BUSINESS_UNIT_DETAILS,
    BUSINESS_UNIT_PERMISSIONS.UPDATE_PARENT_UNIT,
  ]);

export default withAllBusinessUnitPermissions;
