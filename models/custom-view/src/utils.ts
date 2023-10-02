const upperFirst = (word: string) => word[0].toUpperCase() + word.slice(1);

export const formatCustomViewIdToResourceAccessKey = (
  entryPointUriPath: string
) =>
  entryPointUriPath
    // Splits the string by underscore.
    .split('_')
    // Uppercase the first character of each word split.
    .map(upperFirst)
    // Join the words by an underscore.
    .join('_')
    // Each word is split by a hyphen.
    .split('-')
    .map((word, i) => {
      // Regex below checking if the character is numeric.
      // If the word after the hyphen is numeric, replace the hyphen with a forward slash.
      // If not, omit the hyphen and uppercase the first character
      if (i > 0 && /^-?\d+$/.test(word[0])) {
        return `/${word}`;
      }
      return upperFirst(word);
    })
    .join('');

export const defaultLocators = [
  'products.product_details.general',
  'products.product_variant_details.general',
  'categories.category_details.external_search',
  'customers.customer_addresses.edit_address',
  'orders.order_details.custom_field',
  'standalone_prices.standalone_price_details',
  'discounts.product_discount_details.custom_fields',
  'operations.import_log_details',
];
