const smartGarbage = function (trash, bins){
  let newObject = bins
  if(trash === 'waste'){
    newObject.waste += 1
  } else if (trash === 'recycling'){
    newObject.recycling += 1
  } else if (trash === 'compost'){
    newObject.compost += 1
  }
  return newObject
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })