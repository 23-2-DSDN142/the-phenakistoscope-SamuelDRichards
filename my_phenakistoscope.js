const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("frogTest" , "png", 10)
}




function setup_layers(pScope){

     new PLayer(null, 255);  //lets us draw the whole circle background, ignoring the boundaries
  
     var layer1 = new PLayer(frogTest);
     layer1.mode(RING)
     layer1.set_boundary( 4000, 4000 )
  
 }



function frogTest( x, y, animation, pScope) {
  scale(.1)
  pScope.draw_image_from_sequence("frogTest", 0, -7000, animation.frame)
  
}









