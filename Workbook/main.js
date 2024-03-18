//Draggable Elements on subject.html
dragElement(document.getElementById("mov-a"));
dragElement(document.getElementById("mov-b"));
dragElement(document.getElementById("mov-c"));
dragElement(document.getElementById("mov-d"));
dragElement(document.getElementById("mov-e"));
dragElement(document.getElementById("mov-f"));
dragElement(document.getElementById("mov-h"));
dragElement(document.getElementById("mov-i"));
dragElement(document.getElementById("mov-j"));
dragElement(document.getElementById("mov-k"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


var data = [
    {
      welcomeType:
        "<span>Media queries allow you to apply CSS styles depending on a device's media type (such as print vs. screen) or other features or characteristics such as screen resolution or orientation, aspect ratio, browser viewport width or height (mobile vs. desktop), user preferences such as preferring reduced motion, data usage, or transparency. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries</span><br/>",
    },
  ];
  
  var allElements = document.getElementsByClassName("welcome-txt");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;
  
    // type code
    var i = 0,
      isTag,
      text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 50);
    })();
  }


  document.getElementById("iframe").contentWindow.location.href;