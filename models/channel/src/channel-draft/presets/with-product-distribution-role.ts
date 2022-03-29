import { roles } from '../../constants';
import Channel from '../builder';

const withProductDistributionRole = () =>
  Channel().roles([roles.ProductDistribution]);

export default withProductDistributionRole;
