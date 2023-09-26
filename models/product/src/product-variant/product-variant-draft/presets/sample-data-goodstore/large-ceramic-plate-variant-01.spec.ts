import type { TProductVariantDraft } from '../../../types';
import largeCeramicPlateVariant01 from './large-ceramic-plate-variant-01';
describe(`with largeCeramicPlateVariant01 preset`, () => {
  it('should return a sample largeCeramicPlateVariant01 product preset', () => {
    const largeCeramicPlateVariant01Preset =
      largeCeramicPlateVariant01().build<TProductVariantDraft>();
    expect(largeCeramicPlateVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "#d8deb1",
              "en-GB": "#d8deb1",
              "en-US": "#d8deb1",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Light Olive ",
              "en-GB": "Light Olive ",
              "en-US": "Light Olive ",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe",
              "en-GB": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe
      - Microwave safe",
              "en-US": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein großer runder Keramikteller in Helloliv und Hellgrau ist ein schönes und vielseitiges Geschirr, das sich perfekt zum Servieren einer Vielzahl von Mahlzeiten eignet. Der Teller wird in der Regel aus hochwertigem Keramikmaterial handgefertigt und verfügt über eine glänzende Oberfläche, die ihm ein poliertes und elegantes Aussehen verleiht.  Die Platte ist groß und hat typischerweise einen Durchmesser von etwa 12 bis 14 Zoll. Dadurch eignet er sich ideal zum Servieren großer Speisenportionen, wie z. B. eines Hauptgerichts oder einer gemeinsamen Vorspeise. Die runde Form des Tellers bietet viel Platz zum Anrichten von Speisen, während der erhöhte Rand des Tellers verhindert, dass Saucen und Säfte über die Seiten schwappen.  Der Teller ist in zwei schönen und neutralen Farben erhältlich - Helloliv und Hellgrau. Diese Farben sind perfekt, um eine breite Palette von Einrichtungsstilen und Farbschemata für Esszimmer zu ergänzen, von modern und minimalistisch bis rustikal und erdig.  Der Teller zeichnet sich durch ein schlichtes und elegantes Design mit glatter Oberfläche und einem minimalistischen Look aus. Dies macht es ideal für zwanglose und formelle Anlässe, von alltäglichen Familienessen bis hin zu besonderen Anlässen und Dinnerpartys.  Insgesamt ist ein großer runder Keramikteller in hellen Oliv- und Hellgrautönen eine schöne und praktische Ergänzung für jedes Esszimmer. Sein schlichtes und elegantes Design, kombiniert mit seinen vielseitigen Größen- und Farboptionen, machen ihn zur perfekten Wahl, um eine Vielzahl von Mahlzeiten zu servieren und ein stilvolles und einladendes Speiseerlebnis zu schaffen.",
              "en-GB": "A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.",
              "en-US": "A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#00FF00",
              "label": {
                "de-DE": "Grün",
                "en-GB": "Green",
                "en-US": "Green",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_301934007-L_4CrBFU.jpeg",
          },
          {
            "dimensions": {
              "h": 2700,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_301935413-qxOvi5pU.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "LCP-01",
      }
    `);
  });
});
