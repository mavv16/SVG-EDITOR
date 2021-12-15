class Rectangle {
  selectieDreptunghi

  #xValue
  #yValue
  #widthValue
  #heightValue

  #sidebarRectangle
  #sidebarComun
  #sidebarEllipse
  #sidebarLine

  constructor() {
    this.selectieDreptunghi = document.getElementById('selectieDrep') //forma care va fi afisata la desenare cu opacitate scazuta, stroke line punctat

    //inputurile cu coordonate din partea dreapta de instrumente
    this.#xValue = document.getElementById('xValue')
    this.#yValue = document.getElementById('yValue')
    this.#widthValue = document.getElementById('widthValue')
    this.#heightValue = document.getElementById('heightValue')

    this.#sidebarComun = document.getElementById('sidebar-comun')
    this.#sidebarRectangle = document.getElementById('sidebar-rectangle')
    this.#sidebarEllipse = document.getElementById('sidebar-ellipse')
    this.#sidebarLine = document.getElementById('sidebar-line')
  }

  //atunci cand selectam o figura din partea stanga cu instrumente
  //trbuie sa ne dam pe celelalte pe invisibil
  displaySideBar() {
    this.#sidebarComun.style.display = 'block'
    this.#sidebarRectangle.style.display = 'block'
    this.#sidebarEllipse.style.display = 'none'
    this.#sidebarLine.style.display = 'none'
  }
  displaySelectie() {
    this.selectieDreptunghi.style.display = 'block'
  }
  hideSelectie() {
    this.selectieDreptunghi.style.display = 'none'
  }
  setColorFill(color) {
    this.selectieDreptunghi.style.fill = color
    this.selectieDreptunghi.style.opacity = '50%'
  }
  setareCoordonate(obiect, x1, y1, x2, y2) {
    obiect.setAttributeNS(null, 'x', Math.min(x1, x2))
    obiect.setAttributeNS(null, 'y', Math.min(y1, y2))
    obiect.setAttributeNS(null, 'width', Math.max(x1, x2) - Math.min(x1, x2))
    obiect.setAttributeNS(null, 'height', Math.max(y1, y2) - Math.min(y1, y2))

    //le resetam in functe de dreptunghiul selectat/desenat
    this.#xValue.value = obiect.getAttribute('x')
    this.#yValue.value = obiect.getAttribute('y')
    this.#widthValue.value = obiect.getAttribute('width')
    this.#heightValue.value = obiect.getAttribute('height')
  }
}

class Ellipse {
  // #svg
  // #svgNameSpace
  selectieElipsa

  #cxValue
  #cyValue
  #rxValue
  #ryValue

  #sidebarRectangle
  #sidebarComun
  #sidebarEllipse
  #sidebarLine

  constructor() {
    this.selectieElipsa = document.getElementById('selectieElipsa')

    this.#cxValue = document.getElementById('cxValue')
    this.#cyValue = document.getElementById('cyValue')
    this.#rxValue = document.getElementById('rxValue')
    this.#ryValue = document.getElementById('ryValue')

    this.#sidebarComun = document.getElementById('sidebar-comun')
    this.#sidebarRectangle = document.getElementById('sidebar-rectangle')
    this.#sidebarEllipse = document.getElementById('sidebar-ellipse')
    this.#sidebarLine = document.getElementById('sidebar-line')
  }

  displaySideBar() {
    this.#sidebarComun.style.display = 'block'
    this.#sidebarRectangle.style.display = 'none'
    this.#sidebarEllipse.style.display = 'block'
    this.#sidebarLine.style.display = 'none'
  }
  displaySelectie() {
    this.selectieElipsa.style.display = 'block'
  }
  hideSelectie() {
    this.selectieElipsa.style.display = 'none'
  }
  setColorFill(color) {
    this.selectieElipsa.style.fill = color
    this.selectieElipsa.style.opacity = '50%'
  }
  setareCoordonate(obiect, x1, y1, x2, y2) {
    obiect.setAttributeNS(null, 'cx', (x1 + x2) / 2)
    obiect.setAttributeNS(null, 'cy', (y1 + y2) / 2)
    obiect.setAttributeNS(null, 'rx', (Math.max(x1, x2) - Math.min(x1, x2)) / 2)
    obiect.setAttributeNS(null, 'ry', (Math.max(y1, y2) - Math.min(y1, y2)) / 2)

    this.#cxValue.value = obiect.getAttribute('cx')
    this.#cyValue.value = obiect.getAttribute('cy')
    this.#rxValue.value = obiect.getAttribute('rx')
    this.#ryValue.value = obiect.getAttribute('ry')
  }
}

class Line {
  selectieLinie

  #x1Value
  #y1Value
  #x2Value
  #y2Value

  #sidebarRectangle
  #sidebarComun
  #sidebarEllipse
  #sidebarLine

  constructor() {
    this.selectieLinie = document.getElementById('selectieLinie')

    this.#x1Value = document.getElementById('x1Value')
    this.#y1Value = document.getElementById('y1Value')
    this.#x2Value = document.getElementById('x2Value')
    this.#y2Value = document.getElementById('y2Value')

    this.#sidebarComun = document.getElementById('sidebar-comun')
    this.#sidebarRectangle = document.getElementById('sidebar-rectangle')
    this.#sidebarEllipse = document.getElementById('sidebar-ellipse')
    this.#sidebarLine = document.getElementById('sidebar-line')
  }

  displaySideBar() {
    this.#sidebarComun.style.display = 'block'
    this.#sidebarRectangle.style.display = 'none'
    this.#sidebarEllipse.style.display = 'none'
    this.#sidebarLine.style.display = 'block'
  }
  displaySelectie() {
    this.selectieLinie.style.display = 'block'
  }
  hideSelectie() {
    this.selectieLinie.style.display = 'none'
  }
  setColorStroke(color) {
    this.selectieLinie.style.stroke = color
    this.selectieLinie.style.opacity = '50%'
  }
  setareCoordonate(obiect, x1, y1, x2, y2) {
    obiect.setAttributeNS(null, 'x1', x1)
    obiect.setAttributeNS(null, 'y1', y1)
    obiect.setAttributeNS(null, 'x2', x2)
    obiect.setAttributeNS(null, 'y2', y2)

    this.#x1Value.value = obiect.getAttribute('x1')
    this.#y1Value.value = obiect.getAttribute('y1')
    this.#x2Value.value = obiect.getAttribute('x2')
    this.#y2Value.value = obiect.getAttribute('y2')
  }
}

var x1 = 0 //coordonata mouse down x1
var y1 = 0 //coordonata mouse down y1

var isMoving = false //vb folosita la functia de move

var elementSelectat = null //elementul svg care va fi incarcat cu click dreapta

//OBIECTELE PENTRU SVG SELECTIE ELEMENTE
var dreptunghi = new Rectangle()
var elipsa = new Ellipse()
var linie = new Line()

var figura = ''
//RADIO BUTTONS
var rgBackground = document.getElementById('radioBackground')
var rbStroke = document.getElementById('radioStroke')

// EVENIMENTE PENTRU BUTOANELE CU NUMELE FIGURILOR
document.getElementById('dreptunghi').onclick = function () {
  figura = 'dreptunghi'
  rgBackground.disabled = false
  dreptunghi.displaySideBar()
}
document.getElementById('elipsa').onclick = function () {
  figura = 'elipsa'
  rgBackground.disabled = false
  elipsa.displaySideBar()
}
document.getElementById('linie').onclick = function () {
  figura = 'linie'
  //FIGURA LINIE NU POATE AVEA BACKGROUND COLOR, DECI NU VOM MAI LASA UTILIZATORUL SA POATA APASA BUTONUL
  rgBackground.disabled = true
  rgBackground.checked = false
  rbStroke.checked = true
  linie.displaySideBar()
}

var editor = document.getElementById('editor') //svg - PARTEA GRI DE DESENARE

//MOUSE DOWN
//primul eveniment care se executa cand incepem sa desenam o figura
//in html mi am definit 3 forme(selectieElipsa,selectieLinie)
//pe care le vom seta cu coordonatele mouseului
editor.addEventListener('mousedown', function (e) {
  if (e.button == MOUSE_LEFT && figura != '') {
    //this.getBoundingClientRect().left = 148 inseamna de unde incepe mereu partea gri de desenat (coltul stanga sus)
    //e.pageX inseamna valoarea a intregii pagini web
    //facem diferenta ca sa aflam x-ul raportat la svg editor-ul nostru
    x1 = e.pageX - this.getBoundingClientRect().left
    y1 = e.pageY - this.getBoundingClientRect().top

    // console.log('mousedown') console.log(e.pageX) console.log(this.getBoundingClientRect().left) console.log(x1)

    var color = getCulori()

    switch (figura) {
      case 'dreptunghi':
        dreptunghi.setColorFill(color)
        dreptunghi.displaySelectie() //sa vedem ce s a selectat
        dreptunghi.setareCoordonate(dreptunghi.selectieDreptunghi,x1,y1,x2, y2)
        break;
      case 'elipsa':
        elipsa.setColorFill(color)
        elipsa.displaySelectie()
        elipsa.setareCoordonate(elipsa.selectieElipsa, x1, y1, x1, y1)
        break;
      case 'linie':
        linie.setColorStroke(color)
        linie.displaySelectie()
        linie.setareCoordonate(linie.selectieLinie, x1, y1, x1, y1)
        break;
    }
  }
})

editor.addEventListener('mouseup', function (e) {
  if (e.button == MOUSE_LEFT && figura != '') {
    x2 = e.pageX - this.getBoundingClientRect().left
    y2 = e.pageY - this.getBoundingClientRect().top

    elementnou = null

    switch (figura) {
      case 'dreptunghi':
        dreptunghi.hideSelectie() //ascundem svg selectie
        putElementNou('rect') //pt ca facem un element nou de adaugam la lista de elemente
        dreptunghi.setareCoordonate(elementnou, x1, y1, x2, y2)
        break
      case 'elipsa':
        elipsa.hideSelectie()
        putElementNou('ellipse')
        elipsa.setareCoordonate(elementnou, x1, y1, x2, y2)
        break
      case 'linie':
        linie.hideSelectie()
        putElementNou('line')
        linie.setareCoordonate(elementnou, x1, y1, x2, y2)
        break
    }

    //CONTUR & OPACITY
    elementnou.style.opacity= opacityValue.value/100;
    var stroke = document.getElementById('strokeWidthValue').value
    elementnou.style['stroke-width'] = stroke

    //COROLARE LA DESENARE
    var color = getCulori()
    if (document.getElementById('radioBackground').checked) {//daca este radio button background selectat coloram backgroundul
      elementnou.style.fill = color
    } else if (document.getElementById('radioStroke').checked) {//altfel coloram linia
      elementnou.style.stroke = color
    }

    //EVENIMENT PE SELECTIE ELEMENT
    elementnou.onmousedown = function (e) {
      if (e.button == MOUSE_RIGHT) {
        //pt toate elementele din colectie scoatem clasa 'selectat' si setam doar elementului selectat curent aceasta clasa
        var elemente = document.querySelectorAll('#elemente *')
        elemente.forEach((el) => el.classList.remove('selectat'))
        e.target.classList.add('selectat')
        elementSelectat = e.target

        //cand il selectam trebuie sa se actualizeze si controalele din dreapta
        updateOpacity(elementSelectat)
        updateStrokeWidth(elementSelectat)
        updateColors(elementSelectat)

        console.log(elementSelectat)
      }
    }
    elemente.appendChild(elementnou)
  }
})

//eveniment care se apeleaza constant cand miscam mouseul pe partea de desenat (gri)
editor.addEventListener('mousemove', function (e) {
  x2 = e.pageX - this.getBoundingClientRect().left
  y2 = e.pageY - this.getBoundingClientRect().top

  switch (figura) {
    case 'dreptunghi': dreptunghi.setareCoordonate(dreptunghi.selectieDreptunghi, x1, y1, x2, y2); break
    case 'elipsa': elipsa.setareCoordonate(elipsa.selectieElipsa, x1, y1, x2, y2); break
    case 'linie': linie.setareCoordonate(linie.selectieLinie, x1, y1, x2, y2); break
  }

  if (isMoving == true) {
    //TREBUIE RESETATE COORDONATELE CU CELE ALE MOUSE-ULUI DE UNDE PORNESTE DREPTUNGHIUL, DAR CU LUNGIMEA SI LATIMEA ANTERIOARA
    if (figura === 'dreptunghi') {
      var w = elementSelectat.width.animVal.value
      var h = elementSelectat.height.animVal.value

      elementSelectat.setAttributeNS(null, 'x', x2)
      elementSelectat.setAttributeNS(null, 'y', y2)
      elementSelectat.setAttributeNS(null, 'width', w)
      elementSelectat.setAttributeNS(null, 'height', h)
    }
    //TREBUIE RESETATE COORDONATELE CU CELE ALE MOUSE-ULUI DE UNDE PORNESTE ELIPSA, DAR CU RAZA X SI RAZA Y ANTERIOARA
    else if (figura === 'elipsa') {
      var rx = elementSelectat.rx.animVal.value
      var ry = elementSelectat.ry.animVal.value

      elementSelectat.setAttributeNS(null, 'cx', (x1 + x2) / 2)
      elementSelectat.setAttributeNS(null, 'cy', (y1 + y2) / 2)
      elementSelectat.setAttributeNS(null, 'rx', rx)
      elementSelectat.setAttributeNS(null, 'ry', ry)
    }
    //TREBUIE RESETATE COORDONATELE CU CELE ALE MOUSE-ULUI PLUS DISTANTA X2,X1
    else if (figura === 'linie') {
      var elemX2 = elementSelectat.x2.animVal.value
      var elemX1 = elementSelectat.x1.animVal.value

      var elemY2 = elementSelectat.y2.animVal.value
      var elemY1 = elementSelectat.y1.animVal.value

      var d1 = elemX2 - elemX1 //distanta
      var d2 = elemY2 - elemY1

      elementSelectat.setAttributeNS(null, 'x1', x1 + d1)
      elementSelectat.setAttributeNS(null, 'y1', y1 + d2)
      elementSelectat.setAttributeNS(null, 'x2', x2)
      elementSelectat.setAttributeNS(null, 'y2', y2)
    }
  }
})

//OPACITY
var opacityValue = document.getElementById('opacityValue')
opacityValue.addEventListener('change', function () {
  var lb_opacity = document.getElementById('lb_opacity')
  lb_opacity.innerText = '[' + opacityValue.value + ']'

  if (elementSelectat) {
    elementSelectat.style.opacity = opacityValue.value + '%'
  }
})

function updateOpacity(elementSelectat) {
  if (elementSelectat.style.opacity)
    opacityValue.value = elementSelectat.style.opacity * 100//svg are opacitatea intre (0,1) deci trebuie *100
  else opacityValue.value = 100 //daca nu e setata opacitatea by default pun 100
}

//CONTUR
var strokeWidthValue = document.getElementById('strokeWidthValue')
document.getElementById('strokeWidthValue').onchange = function (e) {
  if (elementSelectat) {
    var stroke = document.getElementById('strokeWidthValue').value
    elementSelectat.style['stroke-width'] = stroke
  }
}

function updateStrokeWidth(elementSelectat) {
  var stroke_w = elementSelectat.style['stroke-width']
  if (stroke_w != '') 
    strokeWidthValue.value = stroke_w
  else
    strokeWidthValue.value = 2//default pun 2
}

//CULORI
document.getElementById('colors').onchange = function (e) {
  var color = getCulori() //actualizam culorile din div

  //daca avem deja un obiect il si coloram
  if (elementSelectat) {
    var type = elementSelectat.tagName

    if (type === 'rect' || type === 'ellipse') {
      if (document.getElementById('radioBackground').checked) {
        //daca este radio button background selectata coloram backgroundul
        elementSelectat.style.fill = color
      } else if (document.getElementById('radioStroke').checked) {
        //altfel coloram linia
        elementSelectat.style.stroke = color
      }
    } else if (type === 'line') {
      //linia nu poate avea proprietatea fill
      elementSelectat.style.stroke = color
    }
  }
}

function updateColors(elementSelectat) {
  if (document.getElementById('radioBackground').checked) {
    if (elementSelectat.style.fill) {
      var culoare = elementSelectat.style.fill //LUAM CULOARE ELEMENTULUI SELECTAT
      //FACEM UN VECTOR DE STRING CU CELE 3 VALORI DE PIXELI ROSU, VERDE ,ALBASTRU
      culoareArr = culoare
        .substring(4, culoare.length - 1)
        .replace(/ /g, '')
        .split(',')

      setCulori(culoareArr[0], culoareArr[1], culoareArr[2]) //SETAM CULOAREA CU VALORILE GASITE IN ELEMENT
    } else {
      setCulori(255, 255, 255) // transparent/alb PT DIV CULOARE CURENTA
    }
  } else if (document.getElementById('radioStroke').checked) {
    if (elementSelectat.style.stroke) {
      var culoare = elementSelectat.style.stroke
      culoareArr = culoare
        .substring(4, culoare.length - 1)
        .replace(/ /g, '')
        .split(',')

      setCulori(culoareArr[0], culoareArr[1], culoareArr[2])
    } else {
      setCulori(0, 0, 0) //transparent/alb PT DIV CULOARE CURENTA
    }
  }
}
function getCulori() {
  var r = document.getElementById('r').value
  var g = document.getElementById('g').value
  var b = document.getElementById('b').value
  var color = document.getElementById('color')

  var culoare = 'rgb(' + r + ',' + g + ',' + b + ')'
  color.style.background = culoare

  return culoare
}
function setCulori(c1, c2, c3) {
  document.getElementById('r').value = c1
  document.getElementById('g').value = c2
  document.getElementById('b').value = c3

  color.style.background = 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')'
}

function putElementNou(type) {
  elementnou = document.createElementNS('http://www.w3.org/2000/svg', type)
}

//MOVE AN ELEMENT
document.getElementById('move').addEventListener('click', function moveFunc(e) {
  if (elementSelectat) {
    if (move.innerText === 'Move' && !isMoving) {
      isMoving = true
      move.innerText = 'Stay'
    } else {
      isMoving = false
      move.innerText = 'Move'
    }
  } else {
    alert('You have not select anything')
  }
})

//UNDO OPERATION
var arrayHistoryUNDO = [['element', 'valAnterioara', 'valCurenta']]

document.getElementById('undo').addEventListener('click', function undoFunc(e) {
  if (arrayHistoryUNDO.length > 1) {
    var ultimulElement = arrayHistoryUNDO.length - 1
    var lastOp = arrayHistoryUNDO[ultimulElement]

    arrayHistoryUNDO.pop() //scoatem ultimul element salvat

    //punem la history redo
    arrayHistoryREDO.push([
      lastOp[0], //butonul
      lastOp[0].value, //val anterioara
      lastOp[1], //val cu care va fi schimbat din trecut
    ])

    lastOp[0].value = lastOp[1] //last[0] -buton  last[1]-val anterioara

    //TRIGGER EVENTs
    document.getElementById('colors').dispatchEvent(new Event('change')) 
    document.getElementById('opacityValue').dispatchEvent(new Event('change'))
    document.getElementById('strokeWidthValue').dispatchEvent(new Event('change')) 
  } else {
    alert('You have not anything to redo')
  }
})

//REDO OPERATION
var arrayHistoryREDO = [['element', 'valAnterioara', 'valCurenta']]

document.getElementById('redo').addEventListener('click', function redoFunc() {
  if (arrayHistoryREDO.length > 1) {
    var ultimulElement = arrayHistoryREDO.length - 1
    var lastOp = arrayHistoryREDO[ultimulElement]

    arrayHistoryREDO.pop() //scoatem ultimul element salvat

    //punem la history redo
    arrayHistoryUNDO.push([
      lastOp[0], //butonul
      lastOp[0].value, //val anterioara
      lastOp[1], //val cu care va fi schimbat din trecut
    ])

    lastOp[0].value = lastOp[1] //last[0] -buton  last[1]-val anterioara

    //TRIGGER EVENTs
    document.getElementById('colors').dispatchEvent(new Event('change')) 
    document.getElementById('opacityValue').dispatchEvent(new Event('change')) 
    document.getElementById('strokeWidthValue').dispatchEvent(new Event('change')) 
  } else {
    alert('You have not anything to redo')
  }
})

// ADD ON HISTORY FOR UNDO & REDO
window.addEventListener('focusin', function (e) {
  if (e.target.value != '' && e.target.value != null) {
    arrayHistoryUNDO.push([
      e.target, //butonul
      e.target.value, //val anterioara
    ])
  }
})

window.addEventListener('focusout', function (e) {
  var ultimulElement = arrayHistoryUNDO.length - 1
  var lastOp = arrayHistoryUNDO[ultimulElement]

  if (lastOp.length != 3) { 
    //daca nu are 3 inseamna ca a fost indeplinit eventul de change
    //si trebuie sa stergem din istoric
    arrayHistoryUNDO.pop()
  }
})

window.addEventListener('change', function (e) {
  if (e.target.value != '' && e.target.value != null) {
    var int = e.target.value //val actualizata/curenta
    var ultimulElement = arrayHistoryUNDO.length - 1
    var lastOp = arrayHistoryUNDO[ultimulElement]
    lastOp.push(int)

    console.log(arrayHistoryUNDO)
  }
})

// DELETE AN ELEMENT
document.getElementById('delete').onclick = function (e) {
  if (elementSelectat) {
    elementSelectat.remove()
  } else {
    alert('You have not selected anything')
  }
}
//DELETE ALL ELEMENTS
document.getElementById('clear').onclick = function (e) {
  var elemente = document.getElementById('elemente')
  elemente.innerHTML = ''
}
//CAND AVEM UN ELEMENT SELECTAT SI VREM SA NU MAI FIE SELECTAT
document.getElementById('deselect').onclick = function (e) {
  if (elementSelectat) {
    elementSelectat.classList.remove('selectat')
    elementSelectat = null
  } else {
    alert('You have not selected anything')
  }
}

// DOWNLOAD
document.getElementById('downloadJPEG').onclick = function (e) {
  download('image/jpeg', 'desen.jpeg')
}
document.getElementById('downloadPNG').onclick = function (e) {
  download('image/png', 'desen.png')
}
function download(type, filename) {
  var svgElement = document.getElementById('elemente')
  var svgText = new XMLSerializer().serializeToString(svgElement) //serializam codul din element

  var domUrl = window.URL || window.webkitURL || window //ne trebuie un url pt blob
  console.log(domUrl)
  if (!domUrl) {
    console.log('nu e bun')
  }

  var blob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' }) //serializam ca blob imutabil ca sa putem transfera datele
  var url = domUrl.createObjectURL(blob) //facem un url pt image

  var canvas = document.createElement('canvas')
  canvas.width = editor.width.animVal.value
  canvas.height = editor.height.animVal.value
  var ctx = canvas.getContext('2d')

  //ne luam o imagine si facem onload
  var img = new Image()
  img.onload = function () {
    // fundal
    ctx.fillStyle = '#4f6272'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(img, 0, 0) //desenam intr- un canvas
    domUrl.revokeObjectURL(url)

    //returnam continutul din canvas intr un url
    const dataUrl = canvas.toDataURL(type, 1) //1 is the quality (0,1) default is 0.92

    //facem un link de download
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = filename
    a.click()
  }
  img.src = url
}

// BUTON DE HELP PT SHORTCUTS
document.getElementById('help').addEventListener('click', function () {
  var string =
    'Move/Stay - key M\n' +
    'Delete - key Q\n' +
    'Clear All - key A \n' +
    'Draw - mouse left\n' +
    'Select - mouse right\n' +
    'Delect - key D\n' +
    'Undo - key Z' +
    'Redo - key Y'
  alert(string)
})

//SHORTCUTS
//KEYS CODE
var KEY_M = 77, KEY_D = 68, MOUSE_LEFT = 0, MOUSE_RIGHT = 2, KEY_Q = 81, KEY_A = 65, KEY_Z = 90, KEY_Y = 89;

document.onkeydown = function (e) {
  if (elementSelectat) {
    switch (e.keyCode) {
      case KEY_M: document.getElementById('move').dispatchEvent(new Event('click')); break;
      case KEY_D: document.getElementById('deselect').dispatchEvent(new Event('click')); break;
      case KEY_Q: document.getElementById('delete').dispatchEvent(new Event('click')); break;
      case KEY_A: document.getElementById('clear').dispatchEvent(new Event('click')); break;
      case KEY_Z: document.getElementById('undo').dispatchEvent(new Event('click')); break;
      case KEY_Y: document.getElementById('redo').dispatchEvent(new Event('click')); break;
    }
  }
}

//PT A NU MAI APAREA CONTEXT MENU
editor.oncontextmenu = function (e) {
  return false
}
