function shout(string) {
  return string.toUpperCase()
}
// fixed ReferenceError: shout is not defined

function whisper(string) {
  return string.toLowerCase()
}
// fixed ReferenceError: whisper is not defined

function logShout(string) {
//  console.log(string)
}
// fixed ReferenceError: logShout is not defined
// NEW Error: spy was never called with [ 'HELLO' ]

function logWhisper(string) {
//  console.log(string)
}
// fixed ReferenceError: logWhisper is not defined
// NEW Error: spy was never called with [ 'HELLO' ]

function sayHiToGrandma(string) {
//  console.log(string)
}
// fixed ReferenceError: sayHiToGrandma is not defined
// NEW Error: Expected undefined to equal 'I can\'t hear you!'
// NEW Error: Expected undefined to equal 'YES INDEED!'
// NEW Error: Expected undefined to equal 'I love you, too.'

// End of code lines
