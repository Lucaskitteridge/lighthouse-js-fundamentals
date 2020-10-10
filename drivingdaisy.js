const carPassing = function(cars, speed){
  let newObject = {}
  newObject.time = Date.now()
  newObject.speed = speed
  cars.push(newObject)
  return cars;
};