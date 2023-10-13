import { faker } from '@faker-js/faker';
import CustomViewPermissionDraft from '../builder';

const manageOauthScopes = [
  'manage_orders',
  'manage_payments',
  'manage_types',
  'manage_discount_codes',
  'manage_business_units',
];

const managePermission = () =>
  CustomViewPermissionDraft()
    .name('manage')
    .oAuthScopes(
      faker.helpers.arrayElements(manageOauthScopes, {
        min: 1,
        max: 3,
      })
    );

export default managePermission;
