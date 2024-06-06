// loop through first hat
// choose first trait
// loop through second trait
// with first trait fixd, choose second trait
// loop through third hate
// fix first and second, choose third, add bios to bios list

const chickenTraits = ["cowardly", "brave", "smart", "happy", "sad", "funny", "lazy", "emotional", "lonely"];

const bios = [];
for (let index = 0; index < chickenTraits.length; index++) {
  // choose first trait
  // loop through second hat
  for (let secondIndex = 0; secondIndex < chickenTraits.length; secondIndex++) {
    // with first trait fixed, choose second trait
    if (chickenTraits[index] === chickenTraits[secondIndex]) continue;
    // loop through third hat
    for (let thirdIndex = 0; thirdIndex < chickenTraits.length; thirdIndex++)  {
      // fix first and second, choose third, add bio to bios list
      if (chickenTraits[index] === chickenTraits[thirdIndex] || chickenTraits[secondIndex] === chickenTraits[thirdIndex]) continue;
      bios.push(`${chickenTraits[index]}, ${chickenTraits[secondIndex]}, ${chickenTraits[thirdIndex]}`);
    }
  }
}

console.log(bios);

for (const bio of bios) {
  console.log("This is the story of a", bio, "chicken");
}