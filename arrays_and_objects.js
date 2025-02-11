/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
};

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.

console.log(`\nLatitude: ${iss_location.iss_position.latitude}`)
console.log(`Longitude: ${iss_location.iss_position.longitude}`)

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.

// Add CHF and value to rates

rates.CHF = 1.1787

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)

// Set equiv as 100 (amount of euros) * AUD value and log to console

let equiv = 100 * rates.AUD

console.log(`\n100 Euros is equal to ${equiv.toFixed(2)} Australian Dollars.`)

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

// Set maxVal to 0 for comparison and maxRate to an empty string to be filled later

let maxVal = 0
let maxRate = ''

// Compare the value of each rate to maxVal and if that value is higher, reassign maxVal
// Then set maxRate to rate

for (var rate in rates) {
    if (rates[rate] > maxVal) {
        maxVal = rates[rate]
        maxRate = rate
    }
}

// Log to console

console.log(`\nThe highest exchange rate is ${maxRate} at ${maxVal}.`)


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    {name: "Bill Clinton", cat: "Socks"},
    {name: "Gary Oldman", cat: "Soymilk"},
    {name: "Katy Perry", cat: "Kitty Purry"},
    {name: "Snoop Dogg", cat: "Miles Davis"}
];

// TODO print Gary Oldman's cat's name

// Loop each object in the array and log the cat to the console, if name is Gary Oldman,

cats_and_owners.forEach(function (pairing) {
    if (pairing.name == "Gary Oldman") {
        console.log(`\nGary Oldman's cat is named ${pairing.cat}.\n`)
    }
})

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.

// Push a new object to the array cats_and_owners

cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.

// For each object in the array

cats_and_owners.forEach(function (pairing) {
    console.log(`${pairing.name}'s cat is called ${pairing.cat}.`);
})

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


let nobel_prize_winners_2017 = {
    "prizes": [
        {
            "year": "2017",
            "category": "physics",
            "laureates": [
                {
                    "id": "941",
                    "firstname": "Rainer",
                    "surname": "Weiss",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "2"
                },
                {
                    "id": "942",
                    "firstname": "Barry C.",
                    "surname": "Barish",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "4"
                },
                {
                    "id": "943",
                    "firstname": "Kip S.",
                    "surname": "Thorne",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "4"
                }
            ]
        },
        {
            "year": "2017",
            "category": "chemistry",
            "laureates": [
                {
                    "id": "944",
                    "firstname": "Jacques",
                    "surname": "Dubochet",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                },
                {
                    "id": "945",
                    "firstname": "Joachim",
                    "surname": "Frank",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                },
                {
                    "id": "946",
                    "firstname": "Richard",
                    "surname": "Henderson",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                }
            ]
        },
        {
            "year": "2017",
            "category": "medicine",
            "laureates": [
                {
                    "id": "938",
                    "firstname": "Jeffrey C.",
                    "surname": "Hall",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                },
                {
                    "id": "939",
                    "firstname": "Michael",
                    "surname": "Rosbash",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                },
                {
                    "id": "940",
                    "firstname": "Michael W.",
                    "surname": "Young",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                }
            ]
        },
        {
            "year": "2017",
            "category": "literature",
            "laureates": [
                {
                    "id": "947",
                    "firstname": "Kazuo",
                    "surname": "Ishiguro",
                    "motivation": "\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share": "1"
                }
            ]
        },
        {
            "year": "2017",
            "category": "peace",
            "laureates": [
                {
                    "id": "948",
                    "firstname": "International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation": "\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share": "1",
                    "surname": ""
                }
            ]
        },
        {
            "year": "2017",
            "category": "economics",
            "laureates": [
                {
                    "id": "949",
                    "firstname": "Richard H.",
                    "surname": "Thaler",
                    "motivation": "\"for his contributions to behavioural economics\"",
                    "share": "1"
                }
            ]
        }
    ]
};

// TODO print the full name of the Literature Nobel laureate.

// Pull prizes array out of nobel_prize_winners object, will be used many times

let prizes = nobel_prize_winners_2017.prizes


/*
Original that only works if there is one laureate, like with lit

prizes.forEach(function(field) {
    if (field.category == "literature") {
        let litArray = field.laureates
        let litWinner = litArray[0]
        console.log(`\nThe laureate for Literature was ${litWinner.firstname} ${litWinner.surname}.`)
        }
})
 */

/*
Loop each object(field) in the prizes array
If the category is literature, assign the laureates array within the object to variable laureateArray
Loop each object in the laureate array and log the firstname and surname to the console
 */

prizes.forEach(function (field) {
    if (field.category == "literature") {
        let laureateArray = field.laureates
        console.log(`\nThe laureate(s) for Literature:`)
        laureateArray.forEach(function (laureate) {
            console.log(`${laureate.firstname} ${laureate.surname}`)
        })
    }
})

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.

// Small modifications to the above

prizes.forEach(function (field) {
    if (field.category == "physics") {
        let laureateArray = field.laureates
        console.log(`\nThe ids for the laureate(s) for physics:`)
        laureateArray.forEach(function (laureate) {
            console.log(laureate.id)
        })
    }
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).

console.log(`\nThe categories:`)

// loop each object in the prizes array and print the category/field

prizes.forEach(function (field) {
    console.log(field.category)
})

// TODO write code to print the total number of prize categories

// Set accumulator

categoryNumber = 0

// Add one to the accumulator for each field/category

prizes.forEach(function (field) {
    categoryNumber++
})

console.log(`\nThe number of categories is ${categoryNumber}.`)

// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

// Set accumulator

laureateNumber = 0

// Loop for each field/category object in the array, pull out the array of laureates
// Then loop for each of the laureates, adding to the accumulator each time

prizes.forEach(function (field) {
    let laureateArray = field.laureates
    laureateArray.forEach(function (laureate) {
        laureateNumber++
    })
})

console.log(`\nThe total number of laureates is ${laureateNumber}.`)