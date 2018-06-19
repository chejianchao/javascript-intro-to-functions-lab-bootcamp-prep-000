function shout(str){
  return str.toUpperCase()
}

function whisper(str){
  return str.toLowerCase()
}

function logShout(str){
  console.log(shout(str))
}

function logWhisper(str){
  console.log(whisper(str))
}

function sayHitoGrandma(str){
  if( str == shout(str))
    return "YES INDEED!"
  
}