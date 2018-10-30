const nepalData =
  '{"countryName":"Nepal", "countryCode": "np","flag": "/img/nepal.gif", "countryDetail":{"headerImage":"/img/np7.jpg","headerText":"The land of Himalayas and Temples","caption":"Where you meet the Himalayas and Cultures","marketingText":"","highlights":["The Nepal flag is the only national flag that is not quadrilateral in shape. It is made of two triangles","Nepal is the birthplace of Lord Gautam Buddha","Nepal has the only living goddess in the world, the Kumari","Major Part Of Himalayas is In Nepal"],"shortDesc":"Nepal, the landlocked multiethnic, multilingual, multi-religious country, is situated north of India in the Himalayas, in the region where, about 40 to 50 million years ago, the Indian subcontinent has crashed into Asia. Because of that accident, Nepal has some of the world\'s highest mountains including Sagarmatha (Mt. Everest, 8848m, which it shares with Tibet (by now a province of China). The highest mountain on Earth is towering above populated valleys and forested plains.","images":["/img/np1.jpg","/img/np2.jpg"],"longDesc":"Somewhere here in the Kapilavastu district, there is a place called Lumbini where in about 500 B.C.E. Queen Mayadevi is said to have given birth to Siddhartha Gautama, better known as Buddha. Nepal can be divided broadly into three ecological zones: the lowland, the midland and the highland. The altitude of the Himalayan Region (the highland) ranges between 4877 m - 8848 m, It includes 8 of the highest 14 summits in the world, which exceed altitude of 8000 meters including Mount Everest. The mountain region accounts for about 64 percent of total land area, which is formed by the Mahabharat range that soars up to 4877 m and the lower Churia range. The lowland Terai, the flat river plain of the Ganges with a belt of marshy grasslands, savannas, and forests, occupies about 17 percent of the total land area of the country.","cities":[{"name":"Kathmandu","desc":"Kathmandu, Nepal\'s capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city’s mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances.mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances.mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances.mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances.mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city\'s historic sites were damaged or destroyed by a 2015 earthquake. Durbar Square\'s palace, Hanuman Dhoka, and Kasthamandap, a wooden  Hindu temple, are being rebuilt.","highlights":["h2","h2","h3","h4"],"images":["/img/np1.jpg", "/img/np2.jpg","img2"],"places":[{"name":"Thamel","image":["img1","img2"],"desc":"This is Thamel"},{"name":"Garden of Dreams", "image":["img1","img2"],"desc":"This is Garden of Dreams"},{"name":"Durbar Square","image":["img1","img2"],"desc":""}, {"name":"Syambhu Nath","image":["img1","img2"],"desc":""}, {"name":"Hanuman Dhoka","image":["img1","img2"],"desc":""}, {"name":"Thamel","image":["img1","img2"],"desc":""},{"name":"Garden of Dreams", "image":["img1","img2"],"desc":""},{"name":"Durbar Square","image":["img1","img2"],"desc":""}, {"name":"Thamel","image":["img1","img2"],"desc":""},{"name":"Garden of Dreams", "image":["img1","img2"],"desc":""},{"name":"Durbar Square","image":["img1","img2"],"desc":""}, {"name":"Syambhu Nath","image":["img1","img2"],"desc":""}]},{"name":"Kathmandu","desc":"Kathmandu, Nepal\'s capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city’s mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city\'s historic sites were damaged or destroyed by a 2015 earthquake. Durbar Square\'s palace, Hanuman Dhoka, and Kasthamandap, a wooden  Hindu temple, are being rebuilt.","highlights":["h2","h2","h3","h4"],"images":["/img/np3.jpg","/img/np4.jpg", "/img/np5.jpg", "/img/np6.jpg"],"places":[{"name":"Thamel","image":["img1","img2"],"desc":""}, {"name":"Syambhu Nath","image":["img1","img2"],"desc":""}, {"name":"Hanuman Dhoka","image":["img1","img2"],"desc":""}, {"name":"Thamel","image":["img1","img2"],"desc":""},{"name":"Garden of Dreams", "image":["img1","img2"],"desc":""},{"name":"Durbar Square","image":["img1","img2"],"desc":""}, {"name":"Syambhu Nath","image":["img1","img2"],"desc":""}, {"name":"Hanuman Dhoka","image":["img1","img2"],"desc":""}, {"name":"Thamel","image":["img1","img2"],"desc":""},{"name":"Garden of Dreams", "image":["img1","img2"],"desc":""}]}]}}';

const bhutanData =
  '{"countryName":"Bhutan", "countryCode": "bt", "countryDetail":{"headerImage":"/img/np7.jpg","headerText":"","caption":"","marketingText":"","highlights":["high1","Bhitan is happy place","h890","h6677"],"shortDesc":"","images":["img1","img2"],"longDesc":"","cities":[{"name":"Kathmandu","desc":"","highlights":["high1","Bhitan is happy place","h890","h6677"],"images":["img1","img2"],"places":[{"name":"Thamel","image":["img1","img2"],"desc":""}]}]}}';

const data = JSON.parse(`[${nepalData}, ${bhutanData}]`);
export default data;

// {"countryName": "Nepal",
// "countryDetail": [
//     {"headerImage": ""},
//     {"headerText": ""},
//     {"caption": ""},
//     {"marketingText" :""},
//     {"highlights": [
//         "h1", "h2", "h3", "h4"
//     ]},
//     {"shortDesc": ""},
//     {"images": ["img1", "img2"]},
//     {"longDesc": ""},
//     {"cities": [
//         {
//             "name": "Kathmandu",
//             "desc": "",
//             "highlights": ["h2", "h2", "h3", "h4"],
//             "images": ["img1", "img2"],
//             "places": [
//                 {
//                     "name": "Thamel",
//                     "image": ["img1", "img2"],
//                     "desc" : ""
//                 }
//             ]
//         }
//     ]}
// ] }
