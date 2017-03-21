console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (land) {
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })
  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2
var theShire = document.querySelector('article:first-child')
function makeHobbits () {
  var unorderedList = document.createElement('ul')
  hobbits.forEach(function (eachHobbit) {
    var ulArticle = document.createElement('li')
    ulArticle.textContent = eachHobbit
    unorderedList.appendChild(ulArticle)
    ulArticle.className = 'hobbit'
  })

  theShire.appendChild(unorderedList)
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe () {
  var theRing = document.createElement('div')
  var theRing = document.createElement('div')
  theRing.setAttribute('id', 'the-ring')
  theRing.setAttribute('class', 'magic-imbued-jewelry')
  theRing.addEventListener('click', nazgulScreech)
  var frodo = document.querySelector('li:first-child')
  frodo.appendChild(theRing)
}
keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  var aside = document.createElement('aside')
  var unorderedList = document.createElement('ul')
  var ulArticle = document.createElement('li')
  var unorderedList = document.createElement('ul')

  buddies.forEach(function (eachBuddy) {
    unorderedList.id = 'buddyList'
    var ulArticle = document.createElement('li')
    ulArticle.textContent = eachBuddy
    unorderedList.appendChild(ulArticle)
  })
  aside.appendChild(unorderedList)
  var rivendell = document.querySelector('article:nth-child(2)')
  rivendell.appendChild(aside)
}

makeBuddies()
// Part 5

function beautifulStranger () {
  strider.textContent = 'Aragon'
}

beautifulStranger()

// Part 6

function leaveTheShire () {
  var hobbits = document.querySelectorAll('.hobbit')
  var rivendell = document.querySelector('article:nth-child(2)')
  hobbits.forEach(function (hobbit) {
    rivendell.appendChild(hobbit)
  })
}

leaveTheShire()

// Part 7
var rivendell = document.querySelector('article:nth-child(2)')
var rivendellPeople = document.querySelectorAll('li')
function forgeTheFellowShip () {
  var theFellowship = document.createElement('div')
  theFellowship.id = 'theFellowship'
  theFellowship.textContent = 'the-fellowship'
  rivendell.appendChild(theFellowship)

  rivendellPeople.forEach(function (ppl) {
    theFellowship.appendChild(ppl)
    alert(ppl.textContent + ' has been added to the party!')
  })
}

forgeTheFellowShip()
// Part 8

function theBalrog () {
  var gandalf = rivendellPeople[0]
  gandalf.textContent = 'Gandalf the White'
  gandalf.style.border = '1px grey solid'
  gandalf.style.border = '1px grey solid'
}

theBalrog()
// Part 9

function hornOfGondor () {
  alert('the horn of gondor has been blown')
  var boromir = rivendellPeople[4]
  boromir.style.textDecoration = 'line-through'
  boromir.parentNode.removeChild(boromir)
}

hornOfGondor()
// Part 10
var mordor = document.querySelector('article:nth-child(3)')
var frodo = rivendellPeople[5]
var sam = rivendellPeople[6]
function itsDangerousToGoAlone () {
  mordor.appendChild(frodo)
  mordor.appendChild(sam)
  var mountDoom = document.createElement('div')
  mountDoom.setAttribute('id', 'mount-doom')
  mordor.appendChild(mountDoom)
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt () {
  var gollum = document.createElement('div')
  gollum.setAttribute('id', 'gollum')
  mordor.appendChild(gollum)

  var theRing = document.querySelector('#the-ring')
  gollum.appendChild(theRing)

  var mountDoom = document.querySelector('#mount-doom')
  mountDoom.appendChild(gollum)
}
weWantsIt()
// Part 12

function thereAndBackAgain () {
}

thereAndBackAgain()
