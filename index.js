function isPalindrome (strToCheck) {
  // remove spaces from strToCheck and convert to lower case
  const noSpacesStr = strToCheck.replaceAll(' ', '').toLowerCase()

  // split the string into an array (one char per element)
  const charArr = noSpacesStr.split('')

  // create a reversed version of formattedStr
  const reversedArr = charArr.reverse()

  // join the array back together into a string
  const reversedJoinedArr = reversedArr.join('')

  // compare with noSpacesStr

  if (noSpacesStr === reversedJoinedArr) {
    return true
  }
  return false
}

function check (strToCheck, shouldBePalindrome) {
  console.log(isPalindrome(strToCheck) === shouldBePalindrome ? 'pass' : 'fail')
}

  check("abcba", true);
  check("abcde", false);
  check("Mr owl ate my metal worm", true);
  check("Never Odd Or Even", true);
  check("Never Even Or Odd", false);