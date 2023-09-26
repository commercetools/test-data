import type { TProductVariantDraft } from '../../../types';
import naturaRugVariant01 from './natura-rug-variant-01';
describe(`with naturaRugVariant01 preset`, () => {
  it('should return a sample naturaRugVariant01 product preset', () => {
    const naturaRugVariant01Preset =
      naturaRugVariant01().build<TProductVariantDraft>();
    expect(naturaRugVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 6 Fuß x 6 Fuß",
              "en-GB": "- 6ft x 6ft",
              "en-US": "- 6ft x 6ft",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein runder Teppich aus Naturfasern ist eine Teppichart, die kreisförmig ist und aus Materialien besteht, die in der Natur vorkommen. Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, sind Jute, Sisal, Seegras und Bambus.  Diese Teppiche haben aufgrund der Verwendung natürlicher Materialien, die einem Raum Wärme und Textur verleihen können, ein rustikales und organisches Gefühl. Die neutralen Töne dieser Fasern machen sie außerdem vielseitig und in der Lage, eine Reihe von Einrichtungsstilen zu ergänzen, von Bohème über Küsten bis hin zu Bauernhäusern.  Struktur und Dicke eines runden Teppichs aus Naturfasern können je nach verwendetem Material variieren. Beispielsweise haben Jute und Sisal eine rauere Textur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.  Die Herstellung dieser Teppiche erfolgt oft von Hand, was zu ihrer einzigartigen und einzigartigen Qualität beiträgt. Die Web- oder Flechttechnik, die zur Herstellung des Teppichs verwendet wird, kann dem Design auch visuelles Interesse verleihen, z. B. mit einem Fischgräten- oder Chevron-Muster.  Ein runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Essbereichen. Sie sind besonders beliebt in böhmischen und küstennahen Einrichtungsstilen, wo sie dem Raum eine entspannte und entspannte Atmosphäre verleihen können.  Insgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Wohnkultur Textur und Wärme verleihen möchten.",
              "en-GB": "A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.",
              "en-US": "A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#F5F5DC",
              "label": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#F7ECD9 ",
              "en-GB": "#F7ECD9 ",
              "en-US": "#F7ECD9 ",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Beige",
              "en-GB": "Beige",
              "en-US": "Beige",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 8000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Natura%20Rug-DmA5URbn.jpeg",
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
              "centAmount": 39900,
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
              "centAmount": 39900,
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
              "centAmount": 39900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "NR-09",
      }
    `);
  });
});
