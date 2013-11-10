
function init(){

var stage = new Kinetic.Stage({
  container: 'container',
  width: 578,
  height: 200
});
var layer = new Kinetic.Layer();

var imageObj = new Image();
imageObj.onload = function() {
  var spaceshipBlue = new Kinetic.Image({
    x: 200,
    y: 50,
    image: imageObj,
    width: 100,
    height: 88
  });

  // add the shape to the layer
  layer.add(spaceshipBlue);

  // add the layer to the stage
  stage.add(layer);
};
imageObj.src = './spaceshipBlue.png';

}