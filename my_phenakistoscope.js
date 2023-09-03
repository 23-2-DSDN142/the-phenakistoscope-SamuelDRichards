const SLICE_COUNT = 14;

function setup_pScope(pScope){
  //pScope.output_mode(ANIMATED_DISK);
  pScope.output_mode(STATIC_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("frogTest" , "png", 14)
  angleMode(DEGREES);
}


//background(119,77,32) brown
//background(179,85,133) pink
//background(27,107,95) blue


function setup_layers(pScope){
  
  

     new PLayer(null, 179,85,133);  //lets us draw the whole circle background, ignoring the boundaries

    

     var layer1 = new PLayer(frogTest);
     layer1.mode(RING)
     layer1.set_boundary( 10, 10 )

     var layer2 = new PLayer(lilypad);
     layer2.mode(RING)
  
 }



function frogTest( x, y, animation, pScope) {
  scale(.1558)
  pScope.draw_image_from_sequence("frogTest", 0, -4000, animation.frame)
  
}


function lilypad( x, y, animation, pScope) {
  
  strokeWeight(0);
  fill(10,77,1)
  arc(x,y, 400, 400, 0, 360)

  fill(179,85,133) //background pink
  triangle(10, 10, 160, 130, 130, 160 )
  
}


function reeds(x, y, animation, pScopeams) {


  
}








