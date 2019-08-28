const data = {
    "destination_addresses": ["Mysuru, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "144 km",
                        "value": 144329
                    },
                    "duration": {
                        "text": "3 hours 10 mins",
                        "value": 11387
                    },
                    "duration_in_traffic": {
                        "text": "3 hours 14 mins",
                        "value": 11610
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}

//console.log(format(data)) // The distance between Bengaluru and Mysuru is 144 kms and the time taken to travel is 3 hours and 10  mins

function format(data) {
   const str = `The distance between ${data.origin_addresses[0].split(', ')[0]} and ${data.destination_addresses[0].split(', ')[0]} is ${data.rows[0].elements[0].distance.text} and the time time taken to tavel is ${data.rows[0].elements[0].duration_in_traffic.text}`
   return str
}

console.log(format(data))