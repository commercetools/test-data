import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import beddingbundle from './bedding-bundle';

describe(`with bedding-bundle preset`, () => {
  it(`should create an bedding-bundle product type draft`, () => {
    const beddingBundleProductType = beddingbundle().build<TProductTypeDraft>();
    expect(beddingBundleProductType).toMatchInlineSnapshot(`{
  "attributes": [
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "inputTip": {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      },
      "isRequired": false,
      "isSearchable": false,
      "label": {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      },
      "name": "sheets",
      "type": {
        "name": "text",
      },
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "inputTip": {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      },
      "isRequired": false,
      "isSearchable": false,
      "label": {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      },
      "name": "pillow-cases",
      "type": {
        "name": "text",
      },
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "inputTip": {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      },
      "isRequired": false,
      "isSearchable": false,
      "label": {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      },
      "name": "product-reference-example",
      "type": {
        "name": "reference",
        "referenceTypeId": "product",
      },
    },
    {
      "attributeConstraint": "SameForAll",
      "inputHint": "SingleLine",
      "inputTip": {
        "de": undefined,
        "en": undefined,
        "en-GB": "description of the bundle product",
        "fr": undefined,
      },
      "isRequired": false,
      "isSearchable": false,
      "label": {
        "de": undefined,
        "en": undefined,
        "en-GB": "product-description",
        "fr": undefined,
      },
      "name": "product-description",
      "type": {
        "name": "ltext",
      },
    },
    {
      "attributeConstraint": "SameForAll",
      "inputHint": "SingleLine",
      "inputTip": {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      },
      "isRequired": false,
      "isSearchable": false,
      "label": {
        "de": undefined,
        "en": undefined,
        "en-GB": "Product Spec",
        "fr": undefined,
      },
      "name": "product-spec",
      "type": {
        "name": "ltext",
      },
    },
    {
      "attributeConstraint": "None",
      "inputHint": "SingleLine",
      "inputTip": {
        "de": undefined,
        "en": undefined,
        "fr": undefined,
      },
      "isRequired": false,
      "isSearchable": false,
      "label": {
        "de": undefined,
        "en": undefined,
        "en-GB": "Blanket",
        "fr": undefined,
      },
      "name": "blanket",
      "type": {
        "name": "ltext",
      },
    },
  ],
  "description": "Product type used to bundle bedding components",
  "key": "bedding-bundle",
  "name": "Bedding Bundle",
}`);
  });

  // it(`should create an accessories product type draft when built for GraphQl`, () => {
  //   const accessoriesProductType =
  //     beddingbundle().buildGraphql<TProductTypeDraftGraphql>();
  //
  //   expect(accessoriesProductType).toMatchInlineSnapshot(`
  //     {
  //       "__typename": "ProductTypeDraft",
  //       "attributeDefinitions": [
  //         {
  //               "attributeConstraint": "None",
  //               "inputHint": "SingleLine",
  //               "inputTip": [
  //                 {
  //                   "__typename": "LocalizedString",
  //                   "locale": "en-US",
  //                   "value": "Type",
  //                 },
  //               ],
  //               "isRequired": true,
  //               "isSearchable": true,
  //               "label": [
  //                 {
  //                   "__typename": "LocalizedString",
  //                   "locale": "en-US",
  //                   "value": "Type",
  //                 },
  //               ],
  //               "name": "type",
  //               "type": {
  //                 "enum": {
  //                   "values": [
  //                     {
  //                       "key": "Jewelry",
  //                       "label": "Jewelry",
  //                     },
  //                     {
  //                       "key": "Bag",
  //                       "label": "Bag",
  //                     },
  //                     {
  //                       "key": "Shoes",
  //                       "label": "Shoes",
  //                     },
  //                   ],
  //                 },
  //               },
  //         },
  //         {
  //               "attributeConstraint": "None",
  //               "inputHint": "SingleLine",
  //               "inputTip": [
  //                 {
  //                   "__typename": "LocalizedString",
  //                   "locale": "en-US",
  //                   "value": "Engraving",
  //                 },
  //               ],
  //               "isRequired": false,
  //               "isSearchable": false,
  //               "label": [
  //                 {
  //                   "__typename": "LocalizedString",
  //                   "locale": "en-US",
  //                   "value": "Engraving",
  //                 },
  //               ],
  //               "name": "engraving",
  //               "type": {
  //                 "text": {
  //                   "dummy": null,
  //                 },
  //               },
  //         },
  //       ],
  //       "description": "Accessories",
  //       "key": "accessories",
  //       "name": "Accessories",
  //     }
  //   `);
  // });
});
