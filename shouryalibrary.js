function isTouching(rect,rect2){
    if (rect.x - rect2.x < rect2.width/2 + rect.width/2
      && rect2.x - rect.x < rect2.width/2 + rect.width/2
      && rect.y - rect2.y < rect2.height/2 + rect.height/2
      && rect2.y - rect.y < rect2.height/2 + rect.height/2) {
    rect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else {
    rect.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  } 