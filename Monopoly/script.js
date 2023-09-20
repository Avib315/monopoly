const nis = `₪`
const ObjectCreationFunctions = {

    streetObjectMaker: (cityName, name, position, color, price, cardInfo, id, idOfPlace, numInSet = 3) => {
        const streetObj = {
            cityName: cityName,
            name: name,
            position: position,
            color: color,
            price: price,
            cardInfo: cardInfo,
            isMorgtage: false,
            id: id,
            idOfPlace: idOfPlace,
            numInSet: numInSet,
            html: `
            <div class="housesContainer"> </div>
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
            idOfPlace: 9000,
            numInSet: 4,
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
            numInSet: 2,
            idOfPlace: 1228,
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
            <div id="inPrisonId" class="basePointImag ${typeOfBase}-img img"> </div>
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
            turn: turn ? turn : {},
            inPrison: false
        };
        return Player
    },
    LuckyObjectMaker: (name, Text, type, price) => {
        const Player = {
            name: name,
            Text: Text,
            type: type,
            price: price
        };
        return Player
    }
}
const OnStartOfTheGameFunction = {
    DoPositionOnGameBordRows: () => {
        const bottomRow = document.getElementById("pg-bottom")
        const leftRow = document.getElementById("pg-left")
        const topRow = document.getElementById("pg-top")
        const rightRow = document.getElementById("pg-right")
        const bordGame = document.getElementById("GameBord")
        for (let index = 0; index <= 39; index++) {
            const squar = Utils.CreatElements("div", "sqPos-" + index, "box_row")

            if (index <= 9 && index > 0) {
                bottomRow.appendChild(squar)
            }

            else if (index <= 19 && index > 10) {
                leftRow.appendChild(squar)
            }
            else if (index <= 29 && index > 20) {
                topRow.appendChild(squar)
            }
            else if (index <= 39 && index > 30) {
                rightRow.appendChild(squar)
            }
            else {
                const basePoints = Utils.CreatElements("div", "sqPos-" + index, "box_base_points")
                bordGame.appendChild(basePoints)
            }

        }

    },
    MakeSquarOnBordHtml: () => {

        MonopolyArrays.arrAllPosition.forEach((e) => {
            const div = Utils.CreatElements("div", false, "sqInfo sq_" + e.type, e.html)
            document.getElementById("sqPos-" + e.position).appendChild(div)

        })
    },
    MakePlayersSideInfo: () => {
        const PlayersInfoDiv = document.getElementById("PlayersInfo")
        MonopolyArrays.arrPlayers.map((playerObj) => {
            let playerDiv = Utils.CreatElements("div", false, "singelPlayerInfoDiv")
            playerDiv.innerHTML = `
           <div class="playerName"> ${playerObj.name} <div class="playerColor bc-${playerObj.color}"> </div> </div>
           <div class="playerMoney">${playerObj.money} ${nis} </div>
           `
            playerObj.playerInfoElement = playerDiv
            PlayersInfoDiv.appendChild(playerDiv)
        })
    },
    MakePlayersHtml: () => {
        MonopolyArrays.arrPlayers.map((playerObj) => {
            const PlayerHtmlElement = Utils.CreatElements("div", "player-" + playerObj.color, "PlayerAvatar img")
            playerObj.playerHtmlElement = PlayerHtmlElement;
            document.getElementById("card_point-" + playerObj.position).appendChild(PlayerHtmlElement)
        })
    },
    StartTheGame: () => {
        OnStartOfTheGameFunction.MakePlayersSideInfo();
        OnStartOfTheGameFunction.DoPositionOnGameBordRows();
        OnStartOfTheGameFunction.MakeSquarOnBordHtml();
        OnStartOfTheGameFunction.MakePlayersHtml();
    }
}
const arrLuckyChest = [
    ObjectCreationFunctions.LuckyObjectMaker(`ביטוח בריאות`, `עברת טיפולי בריאות, שלם 50 ש"ח`, "pay", 50),
    ObjectCreationFunctions.LuckyObjectMaker(`דו"ח מהירות`, `עברת מעל המהירות המותרת, שלם 150 ש"ח`, "pay", 150),
    ObjectCreationFunctions.LuckyObjectMaker(`יום האהבה`, `הלכתם למסעדה ביום האהבה, שלם 200 ש"ח`, "pay", 200),
    ObjectCreationFunctions.LuckyObjectMaker(`שיפוצים`, `עשית שיפוצים בבית, שלם 70 ש"ח`, "pay", 70),
    ObjectCreationFunctions.LuckyObjectMaker(`רפואת שיניים`, `עשית טיפולי שיניים, שלם 25 ש"ח`, "pay", 25),
    ObjectCreationFunctions.LuckyObjectMaker(`פנסיה`, `מצאו לך את קרן הפנסיה, קבל 100 ש"ח`, "get", 100),
    ObjectCreationFunctions.LuckyObjectMaker(`מלכת היופי`, `נבחרת לסגנית מלכת היופי! קבל 50 ש"ח`, "get", 50),
    ObjectCreationFunctions.LuckyObjectMaker(`התנהגות טובה`, `עזרת לקשישה לחצות את הכביש, קבל 75 ש"ח`, "get", 75),
    ObjectCreationFunctions.LuckyObjectMaker(`לוטו`, `זכית בלוטו, קבל 200 ש"ח`, "get", 200),
    ObjectCreationFunctions.LuckyObjectMaker(`מניה צמחה`, `המניה שלך צמחה, קבל 150 ש"ח`, "get", 150),
    ObjectCreationFunctions.LuckyObjectMaker(`יום הולדת שמח `, `מזל טוב ליום הולדתך, קבל 25 ש"ח`, "get", 25),
    ObjectCreationFunctions.LuckyObjectMaker(`ירושה`, `דודך מאמריקה הוריש לך כסף. קבל 70 ש"ח`, "get", 70),
]
const arrStreet = [
    ObjectCreationFunctions.streetObjectMaker("אילת", `שד' תמרים`, 1, "#9e4d31", 60, ObjectCreationFunctions.HousesForStreetObjMaker(60, 30, 2, 4, 10, 30, 90, 160, 250, 50, 50 + (50 * 4)), 1001, 1000, 2),
    ObjectCreationFunctions.streetObjectMaker("אילת", `רח' האילות`, 3, "#9e4d31", 60, ObjectCreationFunctions.HousesForStreetObjMaker(60, 30, 4, 8, 20, 60, 180, 320, 450, 50, 50 + (50 * 4)), 1002, 1000, 2),
    ObjectCreationFunctions.streetObjectMaker("טבריה", `רח' הירדן`, 6, "#2cbbe5", 100, ObjectCreationFunctions.HousesForStreetObjMaker(100, 50, 6, 12, 30, 90, 270, 400, 550, 50, 50 + (50 * 4)), 2001, 2000),
    ObjectCreationFunctions.streetObjectMaker("טבריה", `רח' העצמאות`, 8, "#2cbbe5", 100, ObjectCreationFunctions.HousesForStreetObjMaker(100, 50, 6, 12, 30, 90, 270, 400, 550, 50, 50 + (50 * 4)), 2002, 2000),
    ObjectCreationFunctions.streetObjectMaker("טבריה", `רח' הגליל`, 9, "#2cbbe5", 120, ObjectCreationFunctions.HousesForStreetObjMaker(120, 60, 8, 16, 40, 100, 300, 450, 600, 50, 50 + (50 * 4)), 2003, 2000),
    ObjectCreationFunctions.streetObjectMaker("באר שבע", `שד' שז"ר`, 11, "#ff7cd8", 140, ObjectCreationFunctions.HousesForStreetObjMaker(140, 70, 10, 20, 50, 150, 450, 625, 750, 100, 100 + (100 * 4)), 3001, 3000),
    ObjectCreationFunctions.streetObjectMaker("באר שבע", `שד' הנשיאים`, 13, "#ff7cd8", 140, ObjectCreationFunctions.HousesForStreetObjMaker(140, 70, 10, 20, 50, 150, 450, 625, 750, 100, 100 + (100 * 4)), 3002, 3000),
    ObjectCreationFunctions.streetObjectMaker("באר שבע", `דרך אילת`, 14, "#ff7cd8", 160, ObjectCreationFunctions.HousesForStreetObjMaker(160, 80, 12, 24, 60, 180, 500, 700, 900, 100, 100 + (100 * 4)), 3003, 3000),
    ObjectCreationFunctions.streetObjectMaker("נתניה", `שד' בינימין`, 16, "#e98320", 180, ObjectCreationFunctions.HousesForStreetObjMaker(180, 90, 14, 28, 70, 200, 550, 750, 950, 100, 100 + (100 * 4)), 4001, 4000),
    ObjectCreationFunctions.streetObjectMaker("נתניה", `שד' ויצמן`, 18, "#e98320", 180, ObjectCreationFunctions.HousesForStreetObjMaker(180, 90, 14, 28, 70, 200, 550, 750, 950, 100, 100 + (100 * 4)), 4002, 4000),
    ObjectCreationFunctions.streetObjectMaker("נתניה", `רח' הרצל `, 19, "#e98320", 200,
        ObjectCreationFunctions.HousesForStreetObjMaker(200, 100, 16, 32, 80, 220, 600, 800, 1000, 100, 100 + (100 * 4)), 4003, 4000),
    ObjectCreationFunctions.streetObjectMaker("רמת גן", `רח' אבא הלל`, 21, "#eb0c17", 220, ObjectCreationFunctions.HousesForStreetObjMaker(220, 110, 18, 36, 90, 250, 700, 875, 1050, 150, 150 + (4 * 150)), 5001, 5000),
    ObjectCreationFunctions.streetObjectMaker("רמת גן", `רח' זבוטינסקי`, 23, "#eb0c17", 220, ObjectCreationFunctions.HousesForStreetObjMaker(220, 110, 18, 36, 90, 250, 700, 875, 1050, 150, 150 + (4 * 150)), 5002, 5000),
    ObjectCreationFunctions.streetObjectMaker("רמת גן", `רח' ביאליק`, 24, "#eb0c17", 240, ObjectCreationFunctions.HousesForStreetObjMaker(240, 120, 20, 40, 100, 300, 750, 925, 1100, 150, 150 + (4 * 150)), 5003, 5000),
    ObjectCreationFunctions.streetObjectMaker("ירושלים", `רח' יפו`, 26, "#ffd23c", 260, ObjectCreationFunctions.HousesForStreetObjMaker(260, 130, 22, 44, 110, 330, 800, 975, 1150, 150, 150 + (4 * 150)), 6001, 6000),
    ObjectCreationFunctions.streetObjectMaker("ירושלים", `רח' בן יהודה`, 27, "#ffd23c", 260, ObjectCreationFunctions.HousesForStreetObjMaker(260, 130, 22, 44, 110, 330, 800, 975, 1150, 150, 150 + (4 * 150)), 6002, 6000),
    ObjectCreationFunctions.streetObjectMaker("ירושלים", `רח' קינג גורג`, 29, "#ffd23c", 280, ObjectCreationFunctions.HousesForStreetObjMaker(280, 140, 24, 48, 120, 360, 850, 1025, 1200, 150, 150 + (4 * 150)), 6003, 6000),
    ObjectCreationFunctions.streetObjectMaker("חיפה", `רח' העצמאות`, 31, "#12840d", 300, ObjectCreationFunctions.HousesForStreetObjMaker(300, 150, 26, 52, 130, 390, 900, 1100, 1275, 200, 200 + (4 * 200)), 7001, 7000),
    ObjectCreationFunctions.streetObjectMaker("חיפה", `רח' החלוץ`, 32, "#12840d", 300, ObjectCreationFunctions.HousesForStreetObjMaker(300, 150, 26, 52, 130, 390, 900, 1100, 1275, 200, 200 + (4 * 200)), 7002, 7000),
    ObjectCreationFunctions.streetObjectMaker("חיפה", `רח' מוריה`, 34, "#12840d", 320, ObjectCreationFunctions.HousesForStreetObjMaker(320, 160, 28, 56, 150, 450, 1000, 1200, 1400, 200, 200 + (4 * 200)), 7003, 7000),
    ObjectCreationFunctions.streetObjectMaker("תל אביב", `רח' אלנבי`, 37, "#230fff", 350, ObjectCreationFunctions.HousesForStreetObjMaker(350, 175, 35, 70, 175, 500, 1100, 1300, 1500, 200, 200 + (4 * 200)), 8001, 8000, 2),
    ObjectCreationFunctions.streetObjectMaker("תל אביב", `רח' דזינגוף`, 39, "#230fff", 400, ObjectCreationFunctions.HousesForStreetObjMaker(400, 200, 50, 100, 200, 600, 1400, 1700, 2000, 200, 200 + (4 * 200)), 8002, 8000, 2),
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
    ObjectCreationFunctions.playerObjectMaker("נתי", "Blue", 0, 1500, [], {}, 1, { isTurn: false, diceSum: 0, diceNum: 0, isDubel: false }),
    // ObjectCreationFunctions.playerObjectMaker("דוד", "Green", 0, 1500, [], {}, 1, { isTurn: false, diceSum: 0, diceNum: 0, isDubel: false }),
    // ObjectCreationFunctions.playerObjectMaker("שמעון", "Yellow", 0, 1500, [], {}, 1, { isTurn: false, diceSum: 0, diceNum: 0, isDubel: false }),

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
const Utils = {
    CreatElements: (ElemntType = "div", ElementId, ElmentClassName, ElementInnerHtml, ElemntTypeFunc, ElementFunc) => {
        const element = document.createElement(ElemntType);
        ElementId ? element.id = ElementId : null;
        ElmentClassName ? element.className = ElmentClassName : null;
        ElementInnerHtml ? element.innerHTML = ElementInnerHtml : null;
        if (ElementFunc && ElemntTypeFunc) {
            element.addEventListener(ElemntTypeFunc, ElementFunc)
        }
        return element
    },
    MakeCoverDiv: (div) => {
        const body = document.getElementsByTagName("body")[0]
        const coverDiv = Utils.CreatElements("div", "coverDiv")
        body.appendChild(coverDiv);
        body.insertBefore(coverDiv, body.firstChild);
        if (!div) {
            div = Utils.CreatElements("div", "coverInnerBox")
        }
        body.insertBefore(div, body.firstChild);
        return [() => { div.remove(); coverDiv.remove() }, div]
    },
    MakePlayersPosition: (playerObj) => {
        const pp = playerObj.position;
        let bordPosition = document.getElementById("card_point-" + pp)
        bordPosition.appendChild(playerObj.playerHtmlElement)
    },
    GetRandomCubeNumber: (num = 6) => {
        let rand = Math.floor(Math.random() * num)
        if (rand == 0 && num == 6) {
            rand = Utils.GetRandomCubeNumber(num)
        }
        return rand
    }

}


const PayMoneyLogicAndHtml = (index, moneyPay) => {
    let i = moneyPay;
    const PlayerObjPay = MonopolyArrays.arrPlayers[index]
    let timeInterval = setInterval(() => {
        PlayerObjPay.playerInfoElement.innerHTML = `
        <div class="playerName"> ${PlayerObjPay.name} <div class="playerColor bc-${PlayerObjPay.color}"> </div> </div>

        <div class="playerMoney">${PlayerObjPay.money} ${nis} </div>

        `
        if (i > 0) {

            PlayerObjPay.money -= 1
            i--
        }
        else {
            MonopolyArrays.arrPlayers[index] = PlayerObjPay
            clearInterval(timeInterval)
        }
    }, 10)
}
const GetMoneyLogicAndsHtml = (index, moneyGet) => {
    let i = 0;
    const PlayerObjPay = MonopolyArrays.arrPlayers[index]
    let timeInterval = setInterval(() => {
        PlayerObjPay.playerInfoElement.innerHTML = `
        <div class="playerName"> ${PlayerObjPay.name} <div class="playerColor bc-${PlayerObjPay.color}"> </div> </div>

        <div class="playerMoney">${PlayerObjPay.money} ${nis} </div>

        `
        if (i < moneyGet) {

            PlayerObjPay.money += 1
            i++
        }
        else {
            MonopolyArrays.arrPlayers[index] = PlayerObjPay
            clearInterval(timeInterval)
        }
    }, 10)
}
const CheckPosition = (position, playerObj) => {
    let isFreeToBuy = true;
    let isNeedToPay = false;
    let playerOwnerIndex = false;
    MonopolyArrays.arrPlayers.forEach((player, index) => {
        player.property.forEach((prop) => {
            if (prop.position == position) {

                isFreeToBuy = false
                if (playerObj != player && !prop.isMorgtage) {
                    isNeedToPay = true
                    playerOwnerIndex = index
                }

            }
        })
    })
    return {
        isFreeToBuy: isFreeToBuy,
        isNeedToPay: isNeedToPay,
        playerOwnerIndex: playerOwnerIndex
    }
}
const PayToPlayerLogic = (playerOwner, playerPayingIndex, landPosition) => {

    const [containerDiv, removeFunc] = MakeCardApperInHtml()
    let cardOfProp = {}
    const html = `
    <div class="youNeedToPayTo">המקום שייך ל${arrPlayers[playerOwner].name} שלם לו שכירות  </div>
    `
    const payToDiv = Utils.CreatElements("div", false, "youNeedToPayToContainer", html)
    const [needToPay, howMuchForHtml] = CheckHowMuchNeedToPay(landPosition, playerOwner, playerPayingIndex)
    if (landPosition.type == "Street") {
        cardOfProp = MakeStreetCardHtml(landPosition, howMuchForHtml)
    }
    else if (landPosition.type == "Train") {
        cardOfProp = MakeTrainCardHtml(landPosition, howMuchForHtml)
    }
    else if (landPosition.type == "Compenys") {
        cardOfProp = MakeCompenysCardHtml(landPosition)
    }
    const btnPay = Utils.CreatElements("button", false, "btns", "שלם")
    btnPay.onclick = () => {
        PayMoneyLogicAndHtml(playerPayingIndex, needToPay)
        GetMoneyLogicAndsHtml(playerOwner, needToPay)
        removeFunc()
    }
    containerDiv.appendChild(payToDiv)
    containerDiv.appendChild(cardOfProp)
    containerDiv.appendChild(btnPay)
}
const CheckHowMuchNeedToPay = (landPosition, playerOwner, playerPayingIndex) => {
    let needToPay = 0;
    let howMuchForHtml = {
        BasicRent: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        fullSet: "full",
        hotel: "hotel"
    }
    let returnValueForHtml = 0

    const [isHaveSet, numHave] = CheckIfPlayerHaveSet(landPosition, playerOwner,)
    if (landPosition.type == "Street") {
        if (isHaveSet) {

            const housesNum = CheckIfPlayerHaveHouses(landPosition, playerOwner)
            if (housesNum) {
                needToPay = landPosition.cardInfo.housRentInfo[housesNum]
                returnValueForHtml = howMuchForHtml[housesNum]

            }
            else {

                needToPay = landPosition.cardInfo.basicWithSet
                returnValueForHtml = howMuchForHtml.fullSet
            }
        }
        else {
            returnValueForHtml = howMuchForHtml.BasicRent
            needToPay = landPosition.cardInfo.basicWithSet
        }
    }
    else if (landPosition.type == "Train") {

        returnValueForHtml = howMuchForHtml[numHave]
        needToPay = landPosition.cardInfo.trainInfo[numHave]
    }
    else if (landPosition.type == "Compenys") {
        console.log(arrPlayers[playerPayingIndex])
        needToPay = landPosition.cardInfo.compenyRentInfo[1]
    }
    return [needToPay, returnValueForHtml]
}
const CheckIfPlayerHaveSet = (landPosition, playerOwner) => {
    let numInSet = landPosition.numInSet;
    let PlaceId = landPosition.idOfPlace;

    let i = 0
    const player = arrPlayers[playerOwner]
    player.property.forEach((e) => {
        if (e.idOfPlace == PlaceId) {
            i++
        }
    })

    return [numInSet == i, i]


}
const CheckIfPlayerHaveHouses = (landPosition, playerOwner) => {
    let housesNum = 0
    const player = arrPlayers[playerOwner]
    player.property.forEach((e) => {
        if (e.position == landPosition.position) {
            housesNum = e.houses

        }
    })

    return housesNum

}
const BuyANewPropertyLogic = (playerbuyIndex, landPosition, btnBuy) => {
    if (MonopolyArrays.arrPlayers[playerbuyIndex].money - landPosition.cardInfo.price < 0) {
        alert("אין לך מספיק כסף")
        return;
    }
    const newProperty = {
        position: landPosition.position,
        morgtagPrice: landPosition.cardInfo.morgtagPrice,
        cardInfo: landPosition.cardInfo,
        rentValue: landPosition.cardInfo.basicRent,
        idOfPlace: landPosition.idOfPlace,
        numInSet: landPosition.numInSet,
        isHaveSet: false,
        houses: 0,
        hotel: 0
    }
    MonopolyArrays.arrPlayers[playerbuyIndex].property.push(newProperty)
    const [isHaveSet] = CheckIfPlayerHaveSet(landPosition, playerbuyIndex)
    if (isHaveSet) {
        console.log("יש לך סט שלם!");
        arrPlayers[playerbuyIndex].property.map((e) => {
            if (landPosition.idOfPlace == e.idOfPlace) {
                e.isHaveSet = true
            }
        })
        MakePlayerCanBuyHousesBtnHtml(landPosition, playerbuyIndex)
    }
    PayMoneyLogicAndHtml(playerbuyIndex, landPosition.cardInfo.price)
    MakePropOwnerHtml(landPosition, arrPlayers[playerbuyIndex])
    btnBuy.remove()
}
const MakePropOwnerHtml = (landPosition, playerObj) => {

    const divOfPlace = document.getElementById("sqPos-" + landPosition.position)
    const propFlag = Utils.CreatElements("div", false, "propFlag bc-" + playerObj.color)
    divOfPlace.appendChild(propFlag)
}
const onBuyANewPropFunctions = (landPosition, playerbuyIndex,) => {
    const [ContainerBtnAndCard, removeDivsFunction] = MakeCardApperInHtml();
    const containerBtn = Utils.CreatElements("div", false, "containerBtns");
    const removeBtn = Utils.CreatElements("button", false, "removeDivsBtn btnsOnOpenCard", "סיום");
    const buyBtn = CreatBuyBtn(playerbuyIndex, landPosition, removeDivsFunction)
    removeBtn.onclick = () => {
        removeDivsFunction()
    }
    let cardOfProp = {}
    containerBtn.appendChild(buyBtn)
    containerBtn.appendChild(removeBtn)
    if (landPosition.type == "Street") {
        cardOfProp = MakeStreetCardHtml(landPosition)
    }
    else if (landPosition.type == "Train") {
        cardOfProp = MakeTrainCardHtml(landPosition)
    }
    else if (landPosition.type == "Compenys") {
        cardOfProp = MakeCompenysCardHtml(landPosition)

    }
    else {

    }
    ContainerBtnAndCard.appendChild(cardOfProp)
    ContainerBtnAndCard.appendChild(containerBtn)
}
const MakeCardApperInHtml = (div) => {
    const coverDiv = Utils.CreatElements("div", "coverDiv",)
    const body = document.getElementsByTagName("body")[0]
    const openCardLending = Utils.CreatElements("div", false, "buyContainerDiv",)
    body.appendChild(coverDiv)
    body.appendChild(openCardLending)

    let s = -100
    div ? openCardLending.appendChild(div) : null
    let openDivOnTime = setInterval(() => {
        if (s == 20) {
            clearInterval(openDivOnTime)
        }
        else {
            openCardLending.style.bottom = s + "%"
        }
        s++
    }, 5)
    return [openCardLending, () => { openCardLending.remove(), coverDiv.remove() }]
}
const MakeStreetCardHtml = (landPosition, howMuchToPay, markHousePrice, markHotelPrice) => {
    const chekWhereToFontWhight = (place) => {
        if (howMuchToPay === false || howMuchToPay === undefined) {
            return ""
        }
        if (howMuchToPay === place) {
            return " markThis"
        }
        else {
            return ""
        }
    }
    let doHighTenshous = {
        BasicRent: chekWhereToFontWhight(0),
        1: chekWhereToFontWhight(1),
        2: chekWhereToFontWhight(2),
        3: chekWhereToFontWhight(3),
        4: chekWhereToFontWhight(4),
        fullSet: chekWhereToFontWhight("full"),
        hotel: chekWhereToFontWhight("hotel")
    }

    let priceOfHouseMark = markHousePrice ? " markThis" : ""
    let priceOfHotelMark = markHotelPrice ? " markThis" : ""

    let html = `
    <div class="cityCardName" style="background:${landPosition.color};">${landPosition.name}  </div>
    <div class="morgtage_and_price_container_div">
    <p class="title_price_and_morgtage"> מחיר:</p> 
    <p class="price_and_morgtage">${landPosition.cardInfo.price}${nis} </p>
    </div>
           <div class="morgtage_and_price_container_div">
            <p class="title_price_and_morgtage">למשכן: </p> 
            <p class="price_and_morgtage">${landPosition.cardInfo.morgtagePrice}${nis} </p>
            </div>
            <div class="line_between" > </div>
            <div class="morgtage_and_price_container_div${doHighTenshous.BasicRent}">
            <p class="title_basic_rent_p ">שכירות: </p> 
            <p class="basic_rent_p">${landPosition.cardInfo.basicRent}${nis} </p>
            </div>
            <div class="morgtage_and_price_container_div${doHighTenshous.fullSet}">
            <p class="title_basic_rent_p"> שכירות עם סט מלא: </p> 
            <p class="basic_rent_p">${landPosition.cardInfo.basicWithSet}${nis} </p>
            </div>`
    for (let i in landPosition.cardInfo.housRentInfo) {
        html += ` <div class="container_house_and_hotel${doHighTenshous[i]}">
                <p class="title_basic_rent_p">עבור בית: </p> 
                <div class="house_img img" > ${i}</div> 
                <p class="basic_rent_p">${landPosition.cardInfo.housRentInfo[i]}${nis} </p>
                </div>`
    }
    html += ` <div class="container_house_and_hotel${doHighTenshous.hotel}" >
            <p class="title_basic_rent_p"> עבור מלון: </p> 
            <div class="hotel_img img"> 1</div> 
            <p class="basic_rent_p">${landPosition.cardInfo.rentHotel}${nis} </p>
            </div>
            <div class="line_between" > </div>
            <div class="morgtage_and_price_container_div ${priceOfHouseMark}">
            <p class="title_basic_rent_p"> מחיר בית:</p> 
            <p class="basic_rent_p">${landPosition.cardInfo.housPrice}${nis} </p>
            </div>
            <div class="morgtage_and_price_container_div${priceOfHotelMark}">
            <p class="title_basic_rent_p"> מחיר מלון:</p> 
            <p class="basic_rent_p">${landPosition.cardInfo.hotelPrice}${nis} </p>
            </div>`
    const cardOpen = Utils.CreatElements("div", false, 'openCardOfLending', html)
    return cardOpen
}
const MakeTrainCardHtml = (landPosition, howMuchToPay) => {
    landPosition = landPosition ? landPosition : MonopolyArrays.arrTrains[1]
    const chekWhereToFontWhight = (place) => {
        if (howMuchToPay === place) {
            return " markThis"
        }
        else {
            return ""
        }
    }

    let doHighTenshous = {
        1: chekWhereToFontWhight(1),
        2: chekWhereToFontWhight(2),
        3: chekWhereToFontWhight(3),
        4: chekWhereToFontWhight(4),

    }
    let html = `
    <div class="nameOfCard">${landPosition.name}  </div>
    <div class="Train_img card-open-img img"> </div>
    <div class="morgtage_and_price_container_div">
    <p class="title_price_and_morgtage"> מחיר:</p> 
    <p class="price_and_morgtage">${landPosition.cardInfo.price}${nis} </p>
    </div>
           <div class="morgtage_and_price_container_div">
            <p class="title_price_and_morgtage">למשכן: </p> 
            <p class="price_and_morgtage">${landPosition.cardInfo.morgtagePrice}${nis} </p>
            </div>
            <div class="line_between" > </div>`
    for (let i in landPosition.cardInfo.trainInfo) {
        html += ` <div class="container_house_and_hotel${doHighTenshous[i]}">
                <p class="title_basic_rent_p">עבור רכבת: </p> 
                <div class="num_of_Places"> ${i}</div> 
                <p class="basic_rent_p">${landPosition.cardInfo.trainInfo[i]}${nis} </p>
                </div>`
    }

    const cardOpen = Utils.CreatElements("div", false, 'openCardOfLending', html)
    return cardOpen
}
const MakeCompenysCardHtml = (landPosition) => {
    landPosition = landPosition ? landPosition : MonopolyArrays.arrCompenys[1]
    let html = `
    <div class="nameOfCard">${landPosition.name}  </div>
    <div class="${landPosition.compenyType}-img card-open-img img"> </div>
    <div class="morgtage_and_price_container_div">
    <p class="title_price_and_morgtage"> מחיר:</p> 
    <p class="price_and_morgtage">${landPosition.cardInfo.price}${nis} </p>
    </div>
           <div class="morgtage_and_price_container_div">
            <p class="title_price_and_morgtage">למשכן: </p> 
            <p class="price_and_morgtage">${landPosition.cardInfo.morgtagePrice}${nis} </p>
            </div>

            <div class="gameInfoOncard">עבור כל חברה ברשותך. יוטלו קוביות והמספר יוכפל כפי שמוצג למטה </div>
            <div class="line_between" > </div>`
    for (let i in landPosition.cardInfo.compenyRentInfo) {
        html += ` <div class="container_house_and_hotel">
                <p class="title_basic_rent_p">עבור חברה: </p> 
                <div class="num_of_Places"> ${i}</div> 
                <p class="basic_rent_p"> X ${landPosition.cardInfo.compenyRentInfo[i]} </p>
                </div>`
    }

    const cardOpen = Utils.CreatElements("div", false, 'openCardOfLending', html)
    return cardOpen
}
const MakeTaxCardHtml = (landPosition) => {
    landPosition = landPosition ? landPosition : MonopolyArrays.arrTax[0]
    let html = `
    <div class="sadMonoplyMen-img img"> </div>
    <div class="payTaxCardName">${landPosition.name} </div>
    <div class="payTaxinfo">שלם ${landPosition.price}${nis} </div>
            `
    const cardOpen = Utils.CreatElements("div", false, 'openCardPayTax', html)
    return cardOpen
}
const MakeLuckyChestCardHtml = (lockyObj) => {
    let typeOfImg = lockyObj.type == "pay" ? "payToMonopolyMan" : "getPriceFromMonopolyMan"
    let html = `
    <div class="${typeOfImg}-img monopolyMenPopUp monopolyManImg img"> </div>
    <div class="luckyCardName">${lockyObj.name} </div>
    <div class="luckyCardText">${lockyObj.Text} </div>
            `
    const cardOpen = Utils.CreatElements("div", false, 'openCardLuckyChest', html)
    return cardOpen
}
const OpenLuckyCardLogic = (playerIndex) => {
    const lockyObj = arrLuckyChest[Utils.GetRandomCubeNumber(arrLuckyChest.length - 2) + 1]
    const btnAction = Utils.CreatElements("button", false, "btns btnGetAndPay",)


    const divOfLucky = MakeLuckyChestCardHtml(lockyObj)
    const [containerDiv, removeFunc] = MakeCardApperInHtml()
    containerDiv.appendChild(divOfLucky)
    if (lockyObj.type == "pay") {
        btnAction.innerText = "שלם"
        btnAction.onclick = () => {
            PayMoneyLogicAndHtml(playerIndex, lockyObj.price)
            removeFunc()
        }
    }
    if (lockyObj.type == "get") {
        btnAction.innerText = "קבל"
        btnAction.onclick = () => {
            GetMoneyLogicAndsHtml(playerIndex, lockyObj.price)
            removeFunc()
        }
    }
    containerDiv.appendChild(btnAction)
}
const CreatBuyBtn = (playerObjIndex, propIndex, removeFunc) => {
    const buyThePropBtn = Utils.CreatElements("button", false, "buyLandBtn btnsOnOpenCard", "קנה")
    buyThePropBtn.onclick = (e) => {
        BuyANewPropertyLogic(playerObjIndex, propIndex, e.target)
        removeFunc()
    }
    return buyThePropBtn
}
const OnLandingOnTaxFunction = (landPosition, playerObjIndex) => {
    const cradOfTaxHtml = MakeTaxCardHtml(landPosition);
    const [ContainerBtnAndCard, removeDivsFunction] = MakeCardApperInHtml();
    const payBtn = Utils.CreatElements("button", false, "payTaxBtn btnsOnOpenCard", "שלם");
    const conBtn = Utils.CreatElements("div", false, "containerBtns",);
    ContainerBtnAndCard.appendChild(cradOfTaxHtml)
    conBtn.appendChild(payBtn)
    ContainerBtnAndCard.appendChild(conBtn)
    payBtn.onclick = () => {
        removeDivsFunction()
        PayMoneyLogicAndHtml(playerObjIndex, landPosition.price)
    }
}
const OnLandingLogic = (playerIndex) => {
    const playerObj = MonopolyArrays.arrPlayers[playerIndex]
    let landPosition = MonopolyArrays.arrAllPosition.find((e) => {
        return e.position == playerObj.position
    })
    CloseAndOpenActionTab(true, playerIndex)
    if (landPosition.type == "Street" || landPosition.type == "Train" || landPosition.type == "Compenys") {
        let checkingObj = CheckPosition(landPosition.position, playerObj);
        if (checkingObj.isNeedToPay) {
            PayToPlayerLogic(checkingObj.playerOwnerIndex, playerIndex, landPosition)
        }
        else if (checkingObj.isFreeToBuy) {
            onBuyANewPropFunctions(landPosition, playerIndex,)
        }
        else {
            if (landPosition.type == "Street") {

                MakePlayerCanBuyHousesBtnHtml(landPosition, playerIndex)
            }
        }
    }
    else if (landPosition.type == "Tax") {
        OnLandingOnTaxFunction(landPosition, playerIndex)
    }
    else if (landPosition.type == "basePoints") {

        if (landPosition.typeOfBase == "GoToPrison") {
            GoToPrisonLogic(playerIndex)
        }
    }
    else if (landPosition.type == "surprise") {

    }
    else if (landPosition.type == "luck") {
        OpenLuckyCardLogic(playerIndex)
    }
    else {
        console.error("undefind")
    }
}
const GoToPrisonLogic = (playerIndex) => {

    const PlayerElem = arrPlayers[playerIndex].playerHtmlElement
    arrPlayers[playerIndex].inPrison = 0
    let sec = 0
    MakeGoToPrisonHtmlPopUp(false)
    const time = setInterval(() => {
        if (sec == 5) {
            document.getElementById("inPrisonId").appendChild(PlayerElem)
            clearInterval(time)
        }
        else {
            sec++
        }
    }, 500)
}
const MakeGoToPrisonHtmlPopUp = (times) => {
    let goOrIn = times === false ? "לך לכלא"  : `בכלא 3/${times}`;
    let doAnimation = times === false ? " doAnimationGoToPrison" :  ""


    const body = document.getElementsByTagName("body")[0]
    const html = `
<div class="goToPrisonPopUp-img img"> </div>
<p> ${goOrIn} </p>
`
    const goToPrisonPopUp = Utils.CreatElements("div", false, `popupGoToPrison${doAnimation}`, html)
    const [removeFunc, div] = Utils.MakeCoverDiv(goToPrisonPopUp)

    let sec = 0
    const time = setInterval(() => {
        if (sec == 4) {
            removeFunc()
            clearInterval(time)
        }
        else {
            sec++
        }
    }, 500)
}
const MakePlayerTurnHtml = (arrIndex) => {
    MonopolyArrays.arrPlayers.map((playerObject, index) => {
        playerObject.playerInfoElement.classList.remove("isPlayerTurn")
    })
    MonopolyArrays.arrPlayers[arrIndex].playerInfoElement.classList.add("isPlayerTurn")
}
const MakeSlowPlayerTravel = (numInDices, playerIndexInArr, func) => {

    const player = MonopolyArrays.arrPlayers[playerIndexInArr]
    let playerPosNow = player.position
    const travelTime = setInterval(() => {
        if (numInDices == 0) {
            OnLandingLogic(playerIndexInArr)
            clearInterval(travelTime)
        }
        else {
            playerPosNow++
            if (playerPosNow == 40) {
                MakePlayerGoThrowStartPoint(playerIndexInArr)
                playerPosNow = 0
            }
            player.position = playerPosNow
            MonopolyArrays.arrPlayers[playerIndexInArr] = player
            Utils.MakePlayersPosition(arrPlayers[playerIndexInArr])
            numInDices--
        }
    }, 500)

}
const MakePlayerGoThrowStartPoint = (playerIndexInArr) => {
    GetMoneyLogicAndsHtml(playerIndexInArr, 200)
    const html = `
    <div class="monopoloyManGoStart-img img"> </div>
    <div class="startGothrowText"> עברת בדרך צלחה קבל 200 שח</div>
    `

    const body = document.getElementsByTagName("body")[0]
    const divGetMonyFromSatrt = Utils.CreatElements("div", false, "getMoneyFromStartPoint", html)
    body.appendChild(divGetMonyFromSatrt)
    body.insertBefore(divGetMonyFromSatrt, body.firstChild);

    let sec = 0
    let time = setInterval(() => {

        if (sec == 100) {
            divGetMonyFromSatrt.remove()
            clearInterval(time)
        }
        sec++
    }, 100)


}
const GetNumOnDiceAndThrowDiceHtml = (func, playerIndex) => {
    let s = 2;
    let diceA = Utils.GetRandomCubeNumber(6);
    let diceB = Utils.GetRandomCubeNumber(6);
    let isDubel = diceB == diceA
    const diceDiv = document.getElementById("DicesContainer")
    diceDiv.innerHTML = `
    <div class="dices dice_rolling_animation img">  </div>
    <div class="dices dice_rolling_animation2 img">  </div>
    `
    const watingTime = setInterval(() => {
        if (s == 0) {


            diceDiv.innerHTML = `
            <div class="dices dice-${diceA} img">  </div>
            <div class="dices dice-${diceB} img">  </div>
            `
            clearInterval(watingTime)

            func ? func() : null
            // MakeSlowPlayerTravel(diceA + diceB, 0) // num of dice and player location in PlayerArr
        }
        else {
            s--
        }
    }, 500)
    return [diceA, diceB, isDubel]
}
const MakeActionTabOnPlayerTurnHtml = (indexOfPlayer) => {
    const cardAndAction = document.getElementById("CardsAndActions");
    cardAndAction.innerHTML = ''
    const endTurn = Utils.CreatElements("button", false, "btns", "סיים תור");
    cardAndAction.appendChild(endTurn)
    endTurn.onclick = () => {
        CloseAndOpenActionTab(false)
        if (arrPlayers[indexOfPlayer].turn.isDubel) {

            arrPlayers[indexOfPlayer].turn.isDubel = false
            OnPlayerTurnFunc(indexOfPlayer)
        }
        else {
            MakeNextPlayerTurnLogic()
        }
    }

}
const MakeDubelAnotherTurnHtml = () => {
    const body = document.getElementsByTagName("body")[0]
    const html = `
    <span> דאבל</span>
    <p> קבלת עוד תור</p>
    `
    const dubelDiv = Utils.CreatElements("div", 0, "dubelDiv", html)
    body.appendChild(dubelDiv)
    body.insertBefore(dubelDiv, body.firstChild)
    let sec = 0
    let timingFunc = setInterval(() => {
        if (sec == 3) {
            dubelDiv.remove()
            clearInterval(timingFunc)
        }
        sec++
    }, 1000)
}
const MakePlayerCanBuyHousesBtnHtml = (landPosition, indexOfPlayer) => {

    if (arrPlayers[indexOfPlayer].property.find((e) => { return e.isHaveSet })) {
        const html = `<div class="popupFromBtn">הוסף בית <div>`
        const divConBtn = Utils.CreatElements("div", false, "containerHousesBtn")
        const btnAddHouses = Utils.CreatElements("button", false, "addHousesBtn img", html)
        divConBtn.appendChild(btnAddHouses)
        divConBtn.onclick = () => {
            AddNewHouseToPositionActionTabHtml(landPosition, indexOfPlayer, divConBtn)
        }
        document.getElementById("CardsAndActions").appendChild(divConBtn)
    }
}
const AddNewHouseToPositionActionTabHtml = (landPosition, indexOfPlayer, addHousButton) => {
    const [divElemnt, funcRemoveDiv] = MakeCardApperInHtml()
    const cardDiv = MakeStreetCardHtml(landPosition, false, true)
    const btnAddAnewHouse = Utils.CreatElements("button", false, "btnAddAnewHouse", "הוסף בית")
    divElemnt.appendChild(cardDiv)
    divElemnt.appendChild(btnAddAnewHouse)
    btnAddAnewHouse.onclick = () => {
        AddNewHouseLogic(landPosition, indexOfPlayer)
        funcRemoveDiv()
        addHousButton.remove()
    }
}
const AddNewHouseLogic = (landPosition, indexOfPlayer,) => {

    arrPlayers[indexOfPlayer].property.map((e) => {

        if (landPosition.position == e.position) {
            if (e.houses < 4) {
                e.houses += 1
                if (arrPlayers[indexOfPlayer].money > e.cardInfo.housPrice) {

                    PayMoneyLogicAndHtml(indexOfPlayer, e.cardInfo.housPrice)
                    MakeHouseOnBordHtml(e.position)
                }
                else {
                    alert("אין לך מספיק כסף")
                }
            }
            else if (e.hotel == 0) {
                e.hotel += 1
                PayMoneyLogicAndHtml(indexOfPlayer, e.cardInfo.hotelPrice)
            }
            else {
                console.log("no more");
            }
        }

    })

}
const MakeHouseOnBordHtml = (landPositionNum) => {
    const sqPos = document.getElementById("sqPos-" + landPositionNum)
    const houseDivContainer = sqPos.firstElementChild.firstElementChild
    const houseHtml = Utils.CreatElements("div", false, "houseDivOnBord img")
    houseDivContainer ? houseDivContainer.appendChild(houseHtml) : null

}
const CloseAndOpenActionTab = (toOpen) => {
    const cardAndAction = document.getElementById("CardsAndActions");
    let ms = 25
    if (toOpen) {
        let s = 0
        cardAndAction.style.display = "flex"
        let time = setInterval(() => {
            if (s == 13) {
                clearInterval(time)
            }
            else {
                cardAndAction.style.width = s + "%"
                s++
            }
        }, ms)
    }
    else {

        let s = 13
        let time = setInterval(() => {
            if (s == 0) {
                cardAndAction.style.display = "none"
                clearInterval(time)
            }
            else {
                cardAndAction.style.width = s + "%"
                s--
            }
        }, ms)
    }
}
const OnPlayerTurnFunc = (indexOfPlayer) => {
    const Player = MonopolyArrays.arrPlayers[indexOfPlayer]
    MakePlayerTurnHtml(indexOfPlayer)
    const thowDiceBtn = Utils.CreatElements("button", false, "btnThrowDice", "זרוק קוביות")
    const diceCon = document.getElementById("DicesContainer")

    MakeActionTabOnPlayerTurnHtml(indexOfPlayer)
    diceCon.appendChild(thowDiceBtn)
    thowDiceBtn.onclick = (e) => {

        e.target.remove()
        let s = 0
        let diceA;
        let diceB;
        let isDubel;
        const setTime = setInterval(() => {
            if (s == 3) {
                clearInterval(setTime)
                arrPlayers[indexOfPlayer].turn = { isTurn: true, diceSum: diceA + diceB, dubelNum: 0, isDubel: isDubel }
                if (arrPlayers[indexOfPlayer].inPrison === false) {
                    MakeSlowPlayerTravel(diceA + diceB, indexOfPlayer)
                    isDubel ? MakeDubelAnotherTurnHtml() : ""
                }
                else {
                    // makeHtmlInPrisonPopUp
                    if (isDubel || arrPlayers[indexOfPlayer].inPrison === 3) {
                        arrPlayers[indexOfPlayer].position = 10
                        arrPlayers[indexOfPlayer].inPrison = false
                        MakeSlowPlayerTravel(diceA + diceB, indexOfPlayer)
                    }
                    else{
                        
                        arrPlayers[indexOfPlayer].inPrison++
                        MakeGoToPrisonHtmlPopUp(arrPlayers[indexOfPlayer].inPrison)
                        CloseAndOpenActionTab(true)
                        MakeActionTabOnPlayerTurnHtml(indexOfPlayer)
                    }
                }

            }
            if (s == 0) {

                [diceA, diceB, isDubel] = GetNumOnDiceAndThrowDiceHtml()

            }
            s++
        }, 500)
    }
}

const MakeNextPlayerTurnLogic = () => {

    let indexOfThePlayer = 0;
    let isDubel = false
    arrPlayers.forEach((e, i) => {
        if (e.turn.isTurn) {
            indexOfThePlayer = i

            return
        }
    })
    arrPlayers[indexOfThePlayer].turn.isTurn = false
    if (indexOfThePlayer == arrPlayers.length - 1) {
        arrPlayers[0].turn.isTurn = true
        OnPlayerTurnFunc(0)
    }
    else {
        arrPlayers[indexOfThePlayer + 1].turn.isTurn = true
        OnPlayerTurnFunc(indexOfThePlayer + 1)
    }

}
const Deme = (position, player = 0) => {
    arrPlayers[player].position = position
    OnLandingLogic(player)
}
const Deme2 = (num) => {
    MakePlayerGoThrowStartPoint(0)
}
const getAFullSetDeme = (player, a = 1, b = 3, c) => {
    arrPlayers[player].position = a
    OnLandingLogic(player)
    document.querySelector("body > div.buyContainerDiv > div.containerBtns > button.buyLandBtn.btnsOnOpenCard").click()
    arrPlayers[player].position = b
    OnLandingLogic(player)
    document.querySelector("body > div.buyContainerDiv > div.containerBtns > button.buyLandBtn.btnsOnOpenCard").click()
    if (c) {

        arrPlayers[player].position = c
        OnLandingLogic(player)
        document.querySelector("body > div.buyContainerDiv > div.containerBtns > button.buyLandBtn.btnsOnOpenCard").click()
    }
}
const PlayersBuyThirProp = () => {
    getAFullSetDeme(0, 21, 23, 24)
    getAFullSetDeme(1, 31, 32, 34)
    getAFullSetDeme(2, 37, 39)
    getAFullSetDeme(3, 26, 27, 29)
}
OnStartOfTheGameFunction.StartTheGame()
OnPlayerTurnFunc(0)

