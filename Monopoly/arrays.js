const ObjectCreationFunctions = {

    streetObjectMaker: (cityName, name, position, color, price, cardInfo, id,idOfPlace, numInSet = 3) => {
        const streetObj = {
            cityName: cityName,
            name: name,
            position: position,
            color: color,
            price: price,
            cardInfo: cardInfo,
            isMorgtage: false,
            id: id,
            idOfPlace:idOfPlace,
            numInSet:numInSet,
            html: `
            <p class="city_name" style="background:${color};" >${cityName}</p>
            <p class="card_name">${name}</p>
            <div class="player_landin_erea" id="card_point-${position}"> </div>
            <p class="price">מחיר: ${price} ש"ח</p> `,
            type: "Street",
        };
        return streetObj
    },
    trainObjectMaker: (name, position, price) => {
        const trainObject = {
            name: name,
            price: price,
            position: position,
            isMorgtage: false,
            type: "Train",
            html: `
            <p class="card_name">${name}</p>
            <div class="card_img Train_img img"></div>
            <div class="player_landin_erea" id="card_point-${position}"> </div>
            <p class="price">מחיר: ${price} ש"ח</p> `,
            cardInfo: ObjectCreationFunctions.RentForTrainObjMaker(),
            idOfPlace:9000,
            numInSet:4,
        };
        return trainObject
    },
    chestObjectMaker: (type, name, position) => {
        const chestObj = {
            type: type,
            name: name,
            position: position,
            html: `
            <p class="card_name"> ${name}</p>
            <div class="player_landin_erea" id="card_point-${position}""></div>
            <div class="card_img ${type}-img img"> </div>`,
            numInSet:2,
            idOfPlace:1228,
        };
        return chestObj
    },
    compenysObjectMaker: (name, position, compenyType, price) => {
        const compenyObj = {
            name: name,
            position: position,
            type: "Compenys",
            isMorgtage: false,
            compenyType: compenyType,
            price: price,
            html: `
            <p class="card_name">${name}</p>
            <div class="card_img ${compenyType}-img img"></div>
            <div class="player_landin_erea" id="card_point-${position}"> </div>
            <p class="price">מחיר: ${price} ש"ח</p> `,
            cardInfo: ObjectCreationFunctions.RentForCompenysObjMaker(),

        };
        return compenyObj
    },
    taxObjectMaker: (name, position, taxType, price) => {
        const taxObj = {
            name: name,
            position: position,
            taxType: taxType,
            type: "Tax",
            price: price,
            html: `  
            <p class="card_name">${name}</p>
            <div class="card_img ${taxType}-img img"></div>
            <div class="player_landin_erea"  id="card_point-${position}"></div>
                <p class="price">שלם ${price} ש"ח</p>
            `
        };
        return taxObj
    },
    BasePointObjMaker: (name, position, action, typeOfBase) => {
        let html = ""
        if (typeOfBase == "Start") {
            html = `                 
         <p class="title start-title">${name}</p>
         <p class="start-sub_title"> כל העובר בדרך צלחה מקבל 200 ש"ח </p>
         <div class="player_landin_erea"  id="card_point-${position}"></div>
          </div>
         <div class="${typeOfBase}-img img"></div>`
        }
        else if (typeOfBase == "GoToPrison" || typeOfBase == "FreeParking") {
            html = `                 
            <div class="basePointImag ${typeOfBase}-img img"> </div>
            <p class="GTP-and-FP-title title">${name} </p>
            <div class="player_landin_erea"  id="card_point-${position}"></div>
             </div>`
        }
        else {
            html = `
            <div class="basePointImag ${typeOfBase}-img img"> </div>
            <div class="Prison-title">מעבר 
            <div class="player_landin_erea visitingPrison"  id="card_point-${position}"></div>
            </div>
            <div class="Prison-title Prison-title-rotate">חופשי </div>
            `
            // Prison
        }
        const basePointObj = {
            name: name,
            position: position,
            action: action,
            type: "basePoints",
            typeOfBase: typeOfBase,
            html: html
        };
        return basePointObj
    },
    HousesForStreetObjMaker: (price, morgtagePrice, basicRent, basicWithSet, rentHous1, rentHous2, rentHous3, rentHous4, rentHotel, housPrice, hotelPrice) => {
        const HousesObj = {
            price: price,
            morgtagePrice: morgtagePrice,
            basicRent: basicRent,
            basicWithSet: basicWithSet,
            housRentInfo: {
                1: rentHous1,
                2: rentHous2,
                3: rentHous3,
                4: rentHous4,
            },
            rentHotel: rentHotel,
            housPrice: housPrice,
            hotelPrice: hotelPrice

        };
        return HousesObj

    },
    RentForTrainObjMaker: () => {
        const TrainRentObj = {
            price: 200,
            morgtagePrice: 100,
            trainInfo: {
                1: 25,
                2: 50,
                3: 100,
                4: 200,
            }


        };
        return TrainRentObj
    },
    RentForCompenysObjMaker: () => {
        const RentForCompenys = {
            price: 150,
            morgtagePrice: 75,
            compenyRentInfo: {
                1: 4,
                2: 10
            }


        };
        return RentForCompenys
    },

    playerObjectMaker: (name, color, position, money, property, playerHtmlElement, id, turn) => {
        const Player = {
            name: name,
            id: id,
            color: color,
            position: position,
            money: money,
            property: property,
            playerHtmlElement: playerHtmlElement,
            turn: turn ? turn : {}
        };
        return Player
    },
    LuckyObjectMaker: (name, Text, type, price) => {
        const Player = {
            name: name,
            Text: Text,
            type: type,
            price:price
        };
        return Player
    }
}

const arrLuckyChest = [
    ObjectCreationFunctions.LuckyObjectMaker(`ביטוח בריאות`, `עברת טיפולי בריאות, שלם 50 ש"ח` , "pay" , 50 ),
    ObjectCreationFunctions.LuckyObjectMaker(`דו"ח מהירות`, `עברת מעל המהירות המותרת, שלם 150 ש"ח` , "pay" , 150),
    ObjectCreationFunctions.LuckyObjectMaker(`יום האהבה`, `הלכתם למסעדה ביום האהבה, שלם 200 ש"ח` , "pay" , 200),
    ObjectCreationFunctions.LuckyObjectMaker(`שיפוצים`, `עשית שיפוצים בבית, שלם 70 ש"ח` , "pay" , 70),
    ObjectCreationFunctions.LuckyObjectMaker(`רפואת שיניים`, `עשית טיפולי שיניים, שלם 25 ש"ח` , "pay" , 25),
    ObjectCreationFunctions.LuckyObjectMaker(`פנסיה`, `מצאו לך את קרן הפנסיה, קבל 100 ש"ח` , "get" , 100),
    ObjectCreationFunctions.LuckyObjectMaker(`מלכת היופי`, `נבחרת לסגנית מלכת היופי! קבל 50 ש"ח` , "get" , 50),
    ObjectCreationFunctions.LuckyObjectMaker(`התנהגות טובה`, `עזרת לקשישה לחצות את הכביש, קבל 75 ש"ח` , "get" , 75),
    ObjectCreationFunctions.LuckyObjectMaker(`לוטו`, `זכית בלוטו, קבל 200 ש"ח` , "get" , 200),
    ObjectCreationFunctions.LuckyObjectMaker(`מניה צמחה`, `המניה שלך צמחה, קבל 150 ש"ח` , "get" , 150),
    ObjectCreationFunctions.LuckyObjectMaker(`יום הולדת שמח `, `מזל טוב ליום הולדתך, קבל 25 ש"ח` , "get" , 25),
    ObjectCreationFunctions.LuckyObjectMaker(`ירושה`, `דודך מאמריקה הוריש לך כסף. קבל 70 ש"ח` , "get" , 70),
]
const arrStreet = [
    ObjectCreationFunctions.streetObjectMaker("אילת", `שד' תמרים`, 1, "#9e4d31", 60, ObjectCreationFunctions.HousesForStreetObjMaker(60, 30, 2, 4, 10, 30, 90, 160, 250, 50, 50 + (50 * 4)), 1001 ,1000, 2),
    ObjectCreationFunctions.streetObjectMaker("אילת", `רח' האילות`, 3, "#9e4d31", 60, ObjectCreationFunctions.HousesForStreetObjMaker(60, 30, 4, 8, 20, 60, 180, 320, 450, 50, 50 + (50 * 4)), 1002 ,1000,2),
    ObjectCreationFunctions.streetObjectMaker("טבריה", `רח' הירדן`, 6, "#2cbbe5", 100, ObjectCreationFunctions.HousesForStreetObjMaker(100, 50, 6, 12, 30, 90, 270, 400, 550, 50, 50 + (50 * 4)), 2001 , 2000),
    ObjectCreationFunctions.streetObjectMaker("טבריה", `רח' העצמאות`, 8, "#2cbbe5", 100, ObjectCreationFunctions.HousesForStreetObjMaker(100, 50, 6, 12, 30, 90, 270, 400, 550, 50, 50 + (50 * 4)), 2002, 2000),
    ObjectCreationFunctions.streetObjectMaker("טבריה", `רח' הגליל`, 9, "#2cbbe5", 120, ObjectCreationFunctions.HousesForStreetObjMaker(120, 60, 8, 16, 40, 100, 300, 450, 600, 50, 50 + (50 * 4)), 2003,2000),
    ObjectCreationFunctions.streetObjectMaker("באר שבע", `שד' שז"ר`, 11, "#ff7cd8", 140, ObjectCreationFunctions.HousesForStreetObjMaker(140, 70, 10, 20, 50, 150, 450, 625, 750, 100, 100 + (100 * 4)), 3001,3000),
    ObjectCreationFunctions.streetObjectMaker("באר שבע", `שד' הנשיאים`, 13, "#ff7cd8", 140, ObjectCreationFunctions.HousesForStreetObjMaker(140, 70, 10, 20, 50, 150, 450, 625, 750, 100, 100 + (100 * 4)), 3002,3000),
    ObjectCreationFunctions.streetObjectMaker("באר שבע", `דרך אילת`, 14, "#ff7cd8", 160, ObjectCreationFunctions.HousesForStreetObjMaker(160, 80, 12, 24, 60, 180, 500, 700, 900, 100, 100 + (100 * 4)), 3003,3000),
    ObjectCreationFunctions.streetObjectMaker("נתניה", `שד' בינימין`, 16, "#e98320", 180, ObjectCreationFunctions.HousesForStreetObjMaker(180, 90, 14, 28, 70, 200, 550, 750, 950, 100, 100 + (100 * 4)), 4001,4000),
    ObjectCreationFunctions.streetObjectMaker("נתניה", `שד' ויצמן`, 18, "#e98320", 180, ObjectCreationFunctions.HousesForStreetObjMaker(180, 90, 14, 28, 70, 200, 550, 750, 950, 100, 100 + (100 * 4)), 4002,4000),
    ObjectCreationFunctions.streetObjectMaker("נתניה", `רח' הרצל `, 19, "#e98320", 200,
        ObjectCreationFunctions.HousesForStreetObjMaker(200, 100, 16, 32, 80, 220, 600, 800, 1000, 100, 100 + (100 * 4)), 4003,4000),
    ObjectCreationFunctions.streetObjectMaker("רמת גן", `רח' אבא הלל`, 21, "#eb0c17", 220, ObjectCreationFunctions.HousesForStreetObjMaker(220, 110, 18, 36, 90, 250, 700, 875, 1050, 150, 150 + (4 * 150)), 5001,5000),
    ObjectCreationFunctions.streetObjectMaker("רמת גן", `רח' זבוטינסקי`, 23, "#eb0c17", 220, ObjectCreationFunctions.HousesForStreetObjMaker(220, 110, 18, 36, 90, 250, 700, 875, 1050, 150, 150 + (4 * 150)), 5002,5000),
    ObjectCreationFunctions.streetObjectMaker("רמת גן", `רח' ביאליק`, 24, "#eb0c17", 240, ObjectCreationFunctions.HousesForStreetObjMaker(240, 120, 20, 40, 100, 300, 750, 925, 1100, 150, 150 + (4 * 150)), 5003,5000),
    ObjectCreationFunctions.streetObjectMaker("ירושלים", `רח' יפו`, 26, "#ffd23c", 260, ObjectCreationFunctions.HousesForStreetObjMaker(260, 130, 22, 44, 110, 330, 800, 975, 1150, 150, 150 + (4 * 150)), 6001,6000),
    ObjectCreationFunctions.streetObjectMaker("ירושלים", `רח' בן יהודה`, 27, "#ffd23c", 260, ObjectCreationFunctions.HousesForStreetObjMaker(260, 130, 22, 44, 110, 330, 800, 975, 1150, 150, 150 + (4 * 150)), 6002,6000),
    ObjectCreationFunctions.streetObjectMaker("ירושלים", `רח' קינג גורג`, 29, "#ffd23c", 280, ObjectCreationFunctions.HousesForStreetObjMaker(280, 140, 24, 48, 120, 360, 850, 1025, 1200, 150, 150 + (4 * 150)), 6003,6000),
    ObjectCreationFunctions.streetObjectMaker("חיפה", `רח' העצמאות`, 31, "#12840d", 300, ObjectCreationFunctions.HousesForStreetObjMaker(300, 150, 26, 52, 130, 390, 900, 1100, 1275, 200, 200 + (4 * 200)), 7001,7000),
    ObjectCreationFunctions.streetObjectMaker("חיפה", `רח' החלוץ`, 32, "#12840d", 300, ObjectCreationFunctions.HousesForStreetObjMaker(300, 150, 26, 52, 130, 390, 900, 1100, 1275, 200, 200 + (4 * 200)), 7002,7000),
    ObjectCreationFunctions.streetObjectMaker("חיפה", `רח' מוריה`, 34, "#12840d", 320, ObjectCreationFunctions.HousesForStreetObjMaker(320, 160, 28, 56, 150, 450, 1000, 1200, 1400, 200, 200 + (4 * 200)), 7003,7000),
    ObjectCreationFunctions.streetObjectMaker("תל אביב", `רח' אלנבי`, 37, "#230fff", 350, ObjectCreationFunctions.HousesForStreetObjMaker(350, 175, 35, 70, 175, 500, 1100, 1300, 1500, 200, 200 + (4 * 200)), 8001,8000,2),
    ObjectCreationFunctions.streetObjectMaker("תל אביב", `רח' דזינגוף`, 39, "#230fff", 400, ObjectCreationFunctions.HousesForStreetObjMaker(400, 200, 50, 100, 200, 600, 1400, 1700, 2000, 200, 200 + (4 * 200)), 8002,8000,2),
];
const arrTax = [
    ObjectCreationFunctions.taxObjectMaker("מס הכנסה", 4, "dot", 200),
    ObjectCreationFunctions.taxObjectMaker("מס מותרות", 38, "loxer", 150)
]
const arrCompenys = [
    ObjectCreationFunctions.compenysObjectMaker("חברת החשמל", 12, "electric", 150),
    ObjectCreationFunctions.compenysObjectMaker("חברת המים", 28, "water", 150),

]
const arrTrains = [
    ObjectCreationFunctions.trainObjectMaker("רכבת פרברים", 5, 200),
    ObjectCreationFunctions.trainObjectMaker(`רכבת משא בע"מ`, 15, 200),
    ObjectCreationFunctions.trainObjectMaker("רכבת ראש הנקרא", 25, 200),
    ObjectCreationFunctions.trainObjectMaker("רכבת צפון", 35, 200),
]
const arrChests = [
    ObjectCreationFunctions.chestObjectMaker("luck", "תיבת מזל", 2),
    ObjectCreationFunctions.chestObjectMaker("luck", "תיבת מזל", 17),
    ObjectCreationFunctions.chestObjectMaker("luck", "תיבת מזל", 33),
    ObjectCreationFunctions.chestObjectMaker("surprise", "הפתעה", 7),
    ObjectCreationFunctions.chestObjectMaker("surprise", "הפתעה", 22),
    ObjectCreationFunctions.chestObjectMaker("surprise", "הפתעה", 36),
]
const arrBasePoint = [
    ObjectCreationFunctions.BasePointObjMaker("דרך צלחה", 0, false, "Start"),
    ObjectCreationFunctions.BasePointObjMaker("כלא", 10, false, "Prison"),
    ObjectCreationFunctions.BasePointObjMaker("חניה חופשית", 20, false, "FreeParking"),
    ObjectCreationFunctions.BasePointObjMaker("לך לכלא", 30, false, "GoToPrison"),
]
const arrPlayers = [
    ObjectCreationFunctions.playerObjectMaker("אבי", "Red", 0, 1500, [], {}, 1, { isTurn: true, diceSum: 0, diceNum: 0, isDubel: false }),
    ObjectCreationFunctions.playerObjectMaker("דוד", "Green", 0, 1500, [], {}, 1, { isTurn: false, diceSum: 0, diceNum: 0, isDubel: false }),
    ObjectCreationFunctions.playerObjectMaker("קורל", "Blue", 0, 1500, [], {}, 1, { isTurn: false, diceSum: 0, diceNum: 0, isDubel: false }),
    ObjectCreationFunctions.playerObjectMaker("שמעון", "Yellow", 0, 1500, [], {}, 1, { isTurn: false, diceSum: 0, diceNum: 0, isDubel: false }),

]
const arrAllPosition = [
    ...arrStreet,
    ...arrTax,
    ...arrCompenys,
    ...arrTrains,
    ...arrChests,
    ...arrBasePoint
]

const MonopolyArrays = {
    arrStreet: arrStreet,
    arrTax: arrTax,
    arrCompenys: arrCompenys,
    arrTrains: arrTrains,
    arrChests: arrChests,
    arrBasePoint: arrBasePoint,
    arrAllPosition: arrAllPosition,
    arrPlayers: arrPlayers,
}