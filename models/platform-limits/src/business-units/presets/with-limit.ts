import * as Limit from '../../limit';
import BusinessUnitsPlatformLimits from '../builder';

const withLimit = () =>
  BusinessUnitsPlatformLimits()
    .maxAssociateRoles(Limit.random())
    .maxAssociates(Limit.random())
    .maxDepthLimit(Limit.random())
    .maxDivisions(Limit.random());

export default withLimit;
