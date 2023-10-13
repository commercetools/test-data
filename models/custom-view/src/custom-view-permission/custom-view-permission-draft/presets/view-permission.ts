import { faker } from '@faker-js/faker';
import CustomViewPermission from '../builder';

const viewOauthScopes = [
  'view_products',
  'view_states',
  'view_types',
  'view_customer_groups',
  'view_product_selections',
  'view_orders',
  'view_customers',
  'view_payments',
  'view_discount_codes',
  'view_business_units',
  'view_associate_roles',
  'view_stores',
];

const viewPermission = () =>
  CustomViewPermission()
    .name('view')
    .oAuthScopes(
      faker.helpers.arrayElements(viewOauthScopes, {
        min: 1,
        max: 3,
      })
    );

export default viewPermission;
