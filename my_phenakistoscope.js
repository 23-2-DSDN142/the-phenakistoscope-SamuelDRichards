const SLICE_COUNT = 14;

function setup_pScope(pScope){
  //pScope.output_mode(ANIMATED_DISK);
  pScope.output_mode(STATIC_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("frogTest" , "png", 14)
}


//background(119,77,32) brown
//background(179,85,133) pink
//background(27,107,95) blue


function setup_layers(pScope){
  
  

     new PLayer(null, 179,85,133);  //lets us draw the whole circle background, ignoring the boundaries
  
     var layer1 = new PLayer(frogTest);
     layer1.mode(RING)
     layer1.set_boundary( 10, 10 )
  
 }



function frogTest( x, y, animation, pScope) {
  scale(.1558)
  pScope.draw_image_from_sequence("frogTest", 0, -4000, animation.frame)
  
}


function block(x, y, animation, pScope) {
  
}









