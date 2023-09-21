import type { TProductDraft } from '../../../types';
import abigailLoungeChair from './abigail-lounge-chair';
describe(`with abigailLoungeChair preset`, () => {
  it('should return a sample abigailLoungeChair product preset', () => {
    const abigailLoungeChairPreset =
      abigailLoungeChair().build<TProductDraft>();
    expect(abigailLoungeChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "abigail-lounge-chair",
      "name": {
            "en-US": "Abigail Lounge Chair",
            "en-GB": "Abigail Lounge Chair",
            "de-DE": "Abigail Lounge-Stuhl"
          },
      "metaTitle": {
            "en-US": "",
            "de-DE": ""
          },
      "searchKeywords": {},
      "slug": {
            "en-US": "abigail-lounge-chair",
            "de-DE": "abigail-lounge-stuhl",
            "en-GB": "abigail-lounge-chair"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"color","value":{"en-US":"lightpink","en-GB":"lightpink","de-DE":"lightpink"}},{"name":"colorlabel","value":{"en-US":"Soft Pink","en-GB":"Soft Pink","de-DE":"Soft Pink"}},{"name":"finishlabel","value":{"en-US":"Brass","en-GB":"Brass","de-DE":"Brass"}},{"name":"finish","value":{"en-US":"goldenrod","en-GB":"goldenrod","de-DE":"goldenrod"}},{"name":"productspec","value":{"en-US":"- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled","en-GB":"- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled","de-DE":"- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled"}},{"name":"product-description","value":{"en-GB":"A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.","en-US":"A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.","de-DE":"Ein Loungesessel mit rosafarbener Samtpolsterung und Spindelbeinen aus Messing ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer, Schlafzimmer oder Büro einen Hauch von Glamour verleihen kann. Der Stuhl verfügt über einen bequemen und geräumigen Sitz mit weicher und plüschiger Samtpolsterung in zartrosa Farbe.  Die Rückenlehne und die Armlehnen des Stuhls sind leicht gebogen und bieten einen bequemen und stützenden Platz zum Sitzen und Entspannen. Die Spindelbeine aus Messing sind konisch zulaufend und tragen zur allgemeinen Eleganz und Raffinesse des Designs bei.  Die Kombination aus rosafarbenem Samt und Messing ist sowohl opulent als auch schick und macht den Loungesessel zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu Vintage-inspiriert und glamourös.  Insgesamt ist ein Loungesessel mit rosafarbener Samtpolsterung und Spindelbeinen aus Messing ein luxuriöses und komfortables Möbelstück, das jedem Raum einen Hauch von Glamour und Raffinesse verleihen kann. Seine weiche und weiche Polsterung, kombiniert mit seinem eleganten und zeitlosen Design, machen ihn zu einem perfekten Ort, um sich stilvoll zu entspannen und zu entspannen."}},{"name":"color-filter","value":{"key":"#FFC0CB","label":{"de-DE":"Rosa","en-GB":"Pink","en-US":"Pink"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
