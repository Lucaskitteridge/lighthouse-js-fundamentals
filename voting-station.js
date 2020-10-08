const stations = [
  ['big air donair', 10, 'restaurant'],
  ['bright lights elementary', 50, 'school'],
  ['moose mountain community centre', 45, 'community centre']
]

const chooseStations = function (stations){
  const goodStations = []
  for(const station of stations){
    const capacity = station[1]

    if (capacity >= 20) {

      const type = station[2]

      if (type === 'school' || type === 'community centre'){
        goodStations.push(station)
      }
    }
  }

  return goodStations
}

console.log(chooseStations(stations))