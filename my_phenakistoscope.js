const SLICE_COUNT = 14;

function setup_pScope(pScope){
  //pScope.output_mode(ANIMATED_DISK);
  pScope.output_mode(STATIC_DISK);
  //pScope.output_mode(STATIC_FRAME)
  //pScope.output_mode(OUTPUT_GIF(1000))
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("frogTest" , "png", 14)
  pScope.load_image("flower" , "png");
  pScope.load_image("reed_1" , "png");
  pScope.load_image("reed_2" , "png");
  angleMode(DEGREES);
}


//background(119,77,32) brown
//background(179,85,133) pink
//background(27,107,95) blue


function setup_layers(pScope){
  
  

     new PLayer(null, 179,85,133);  //lets us draw the whole circle background, ignoring the boundaries

    
    
     var layer4 = new PLayer(water);
     layer4.mode(RING)
     layer4.set_boundary( 0, 370 )

     var layer4 = new PLayer(reeds);
     layer4.mode(RING)

     var layer1 = new PLayer(frogTest);
     layer1.mode(RING)
     layer1.set_boundary( 0, 1000 )


     var layer2 = new PLayer(lilypad);
     layer2.mode(RING)


     var layer3 = new PLayer(flowers);
      layer3.mode(RING)

    

  
    
    
 }



function frogTest( x, y, animation, pScope) {
  scale(.1558)
  pScope.draw_image_from_sequence("frogTest", 0, -4000, animation.frame)
  
}



function flowers( x, y, animation, pScope) {
  scale(.029)
  if(animation.frame == 0){
    pScope.draw_image("flower",-1800,-2500);
  }

}






function lilypad( x, y, animation, pScope) {


  scale(1)
   strokeWeight(5);
   stroke(6, 46, 0) //dark green for edge of lily pad
   fill(10,77,1) //green
  

  if(animation.frame == 0){
  beginShape();
  curveVertex(10, -120);
  curveVertex(100, -100);
  curveVertex(70, -10);
  curveVertex(130, -60);
  curveVertex(145, -10);
  curveVertex(140, 30);
  curveVertex(100, 100);
  curveVertex(60, 180);
  curveVertex(-100, 100);
  curveVertex(-100, -100);
  endShape(CLOSE);


  fill(6, 46, 0) //dark green 
  strokeWeight(4)

  line(10, 20, 90, 30) //lilypad lines
  line(10, 20, 0, 150)
  line(10, 20, 90, -90)
  line(10, 20, -70, -40)
  line(10, 20, -100, 30)
  line(10, 20, -5, -100)
  circle(10, 20, 10)
  }

  
}



function reeds(x, y, animation, pScope) {
scale(.05)

  if(animation.frame == 0){
    push()
    rotate(180)
    pScope.draw_image("reed_1", -3000, -5000);
    pop()

    push()
    rotate(350)
    pScope.draw_image("reed_1", -7000, -9000);
    pop()

    pScope.draw_image("reed_1", -1000, -15000);

    push()
    rotate(290)
    pScope.draw_image("reed_2", -1000, -5000);
    pop()

  }

  
  
}



function water(x, y, animation, pScope) {
  pScope.fill_background(27,107,95);
  
  
}








