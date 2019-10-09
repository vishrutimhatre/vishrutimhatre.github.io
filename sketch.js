var onStartScreen, onRestaurantHomeScreen, onRestaurantDetailsScreen, onRestaurantScheduleScreen, onVolunteerDetailsScreen, onVolunteerHomeScreen, onDonationHeatMapScreen, onVolunteerSelectServiceScreen;

var donateTodayButtonLowerX, donateTodayButtonHigherX, donateTodayButtonLowerY, donateTodayButtonHigherY;
var backButtonLowerX, backButtonHigherX, backButtonLowerY, backButtonHigherY;
var confirmButtonLowerX, confirmButtonHigherX, confirmButtonLowerY, confirmButtonHigherY;
var homeButtonLowerX, homeButtonHigherX, homeButtonLowerY, homeButtonHigherY;
var scheduleButtonLowerX, scheduleButtonHigherX, scheduleButtonLowerY, scheduleButtonHigherY;

var restaurantButtonLowerX, restaurantButtonHigherX, restaurantButtonLowerY, restaurantButtonHigherY;
var volunteerButtonLowerX, volunteerButtonHigherX, volunteerButtonLowerY, volunteerButtonHigherY;

var JonSnowButtonLowerX, JonSnowButtonHigherX, JonSnowButtonLowerY, JonSnowButtonHigherY;

var volunteerMoonButtonLowerX, volunteerMoonButtonHigherX, volunteerMoonButtonLowerY, volunteerMoonButtonHigherY;
var volunteerMapButtonLowerX, volunteerMapButtonHigherX, volunteerMapButtonLowerY, volunteerMapButtonHigherY;


//load before the application launch
function preload() {
  start                  = loadImage('assets/page0.jpg');    
  restaurantHome         = loadImage('assets/page1.jpg');    
  restaurantDetails      = loadImage('assets/page2.jpg');    
  restaurantSchedule     = loadImage('assets/page3.jpg');    
  volunteerDetails       = loadImage('assets/page4.jpg');    
  volunteerHome          = loadImage('assets/page5.jpg');    
  donationHeatMap        = loadImage('assets/page7.jpg');    
  volunteerSelectService = loadImage('assets/page8.jpg');      
}

function setup() {
    createCanvas(480, 764)
    onStartScreen = true;  
    onRestaurantHomeScreen= false;
    onRestaurantDetailsScreen= false;
    onRestaurantScheduleScreen= false;
    onVolunteerDetailsScreen= false;
    onVolunteerHomeScreen= false;
    onDonationHeatMapScreen= false;
    onVolunteerSelectServiceScreen= false;
   
    donateTodayButtonLowerX = 20;
    donateTodayButtonHigherX = 342;
    donateTodayButtonLowerY = 148;
    donateTodayButtonHigherY = 197;
   
    backButtonLowerX = 0;
    backButtonHigherX = 48;
    backButtonLowerY = 26;
    backButtonHigherY =81;
   
    homeButtonLowerX = 0;
    homeButtonHigherX = 89;
    homeButtonLowerY = 616;
    homeButtonHigherY = 667;
   
    scheduleButtonLowerX = 90;
    scheduleButtonHigherX =188;
    scheduleButtonLowerY = 616;
    scheduleButtonHigherY = 667;
   
    restaurantButtonLowerX = 98;
    restaurantButtonHigherX = 262;
    restaurantButtonLowerY = 262;
    restaurantButtonHigherY = 310;
   
    volunteerButtonLowerX = 98;
    volunteerButtonHigherX = 262;
    volunteerButtonLowerY = 357;
    volunteerButtonHigherY = 405;
   
       
    confirmButtonLowerX = 98;
    confirmButtonHigherX = 261;
    confirmButtonLowerY = 469;
    confirmButtonHigherY = 515;
   
    JonSnowButtonLowerX=59;
    JonSnowButtonHigherX=341;
    JonSnowButtonLowerY=156;
    JonSnowButtonHigherY=219;
   
    volunteerMoonButtonLowerX = 19
    volunteerMoonButtonHigherX = 341
    volunteerMoonButtonLowerY = 193
    volunteerMoonButtonHigherY = 282
   
    volunteerMapButtonLowerX = 186
    volunteerMapButtonHigherX = 273
    volunteerMapButtonLowerY = 616
    volunteerMapButtonHigherY = 667
   
    //restaurantHomeScreen()
    startScreen()
}

function draw() {

}

function startScreen(){
    image(start, 0,0)
    onStartScreen = true;
}

function restaurantHomeScreen(){
    image(restaurantHome, 0, 0);
    onRestaurantHomeScreen = true;
}

function restaurantDetailsScreen(){
   
    image(restaurantDetails, 0, 0);
    onRestaurantDetailsScreen = true;
   
}

function restaurantScheduleScreen(){
    image(restaurantSchedule, 0, 0);
    onRestaurantScheduleScreen = true;
   
}

function volunteerDetailsScreen(){
    image(volunteerDetails, 0, 0);
    onVolunteerDetailsScreen = true;
}

function volunteerHomeScreen(){
    image(volunteerHome, 0, 0);
    onVolunteerHomeScreen = true;
}

function donationHeatMapScreen(){
    image(donationHeatMap, 0, 0);
    onDonationHeatMapScreen = true;
}

function volunteerSelectServiceScreen(){
    image(volunteerSelectService, 0, 0);
    onVolunteerSelectServiceScreen = true;
}

function mousePressed(){
    //on start screen
    if(onStartScreen && mouseX >= restaurantButtonLowerX && mouseX <= restaurantButtonHigherX && mouseY >=restaurantButtonLowerY && mouseY<= restaurantButtonHigherY){
        clear();
        onStartScreen = false;
        restaurantHomeScreen()
    }
   
    if(onStartScreen && mouseX >= volunteerButtonLowerX && mouseX <= volunteerButtonHigherX && mouseY >=volunteerButtonLowerY && mouseY<= volunteerButtonHigherY){
        clear();
        onStartScreen = false;
        volunteerHomeScreen()
    }
   
    //on restaurantHomeScreen
    if(onRestaurantHomeScreen && mouseX >= donateTodayButtonLowerX && mouseX <= donateTodayButtonHigherX && mouseY >=donateTodayButtonLowerY && mouseY<= donateTodayButtonHigherY){
        clear();
        onRestaurantHomeScreen = false;
        restaurantDetailsScreen()
    }
   
    if(onRestaurantHomeScreen && mouseX >= scheduleButtonLowerX && mouseX <= scheduleButtonHigherX && mouseY >=scheduleButtonLowerY && mouseY<= scheduleButtonHigherY){
        clear();
        onRestaurantDetailsScreen = false;
        restaurantScheduleScreen()
    }
   
    //on restaurantDetailsScreen
    if(onRestaurantDetailsScreen && mouseX >= backButtonLowerX && mouseX <= backButtonHigherX && mouseY >=backButtonLowerY && mouseY<= backButtonHigherY){
        clear();
        onRestaurantDetailsScreen = false;
        restaurantHomeScreen()
    }
   
    if(onRestaurantDetailsScreen && mouseX >= homeButtonLowerX && mouseX <= homeButtonHigherX && mouseY >=homeButtonLowerY && mouseY<= homeButtonHigherY){
        clear();
        onRestaurantDetailsScreen = false;
        restaurantHomeScreen()
    }
   
    if(onRestaurantDetailsScreen && mouseX >= confirmButtonLowerX && mouseX <= confirmButtonHigherX && mouseY >=confirmButtonLowerY && mouseY<= confirmButtonHigherY){
        clear();
        onRestaurantDetailsScreen = false;
        restaurantHomeScreen()
    }
   
    if(onRestaurantDetailsScreen && mouseX >= scheduleButtonLowerX && mouseX <= scheduleButtonHigherX && mouseY >=scheduleButtonLowerY && mouseY<= scheduleButtonHigherY){
        clear();
        onRestaurantDetailsScreen = false;
        restaurantScheduleScreen()
    }
   
    //on restaurantScheduleScreen
    if(onRestaurantScheduleScreen && mouseX >= homeButtonLowerX && mouseX <= homeButtonHigherX && mouseY >=homeButtonLowerY && mouseY<= homeButtonHigherY){
        clear();
        onRestaurantScheduleScreen = false;
        restaurantHomeScreen()
    }
   
    if(onRestaurantScheduleScreen && mouseX >= JonSnowButtonLowerX && mouseX <= JonSnowButtonHigherX && mouseY >=JonSnowButtonLowerY && mouseY<= JonSnowButtonHigherY){
        clear();
        onRestaurantScheduleScreen = false;
        volunteerDetailsScreen()
    }
   
    //on volunteerDetails
    if(onVolunteerDetailsScreen && mouseX >= backButtonLowerX && mouseX <= backButtonHigherX && mouseY >=backButtonLowerY && mouseY<= backButtonHigherY){
        clear();
        onVolunteerDetailsScreen = false;
        restaurantScheduleScreen()
    }
   
    if(onVolunteerDetailsScreen && mouseX >= homeButtonLowerX && mouseX <= homeButtonHigherX && mouseY >=homeButtonLowerY && mouseY<= homeButtonHigherY){
        clear();
        onVolunteerDetailsScreen = false;
        restaurantHomeScreen()
    }
   
   
    //------------------------------------------
   
   
    //on volunteerHomeScreen
    if(onVolunteerHomeScreen && mouseX >= volunteerMoonButtonLowerX && mouseX <= volunteerMoonButtonHigherX && mouseY >=volunteerMoonButtonLowerY && mouseY<= volunteerMoonButtonHigherX){
        clear();
        onVolunteerHomeScreen = false;
        volunteerSelectServiceScreen()
    }
   
    if(onVolunteerHomeScreen && mouseX >= volunteerMapButtonLowerX && mouseX <= volunteerMapButtonHigherX && mouseY >=volunteerMapButtonLowerY && mouseY<= volunteerMapButtonHigherY){
        clear();
        onVolunteerHomeScreen = false;
        donationHeatMapScreen()
    }
   
    //on donationHeatMapScreen
    if(onDonationHeatMapScreen && mouseX >= homeButtonLowerX && mouseX <= homeButtonHigherX && mouseY >=homeButtonLowerY && mouseY<= homeButtonHigherY){
        clear();
        onDonationHeatMapScreen = false;
        volunteerHomeScreen()
    }
   
    //on volunteerSelectServiceScreen
    if(onVolunteerSelectServiceScreen && mouseX >= homeButtonLowerX && mouseX <= homeButtonHigherX && mouseY >=homeButtonLowerY && mouseY<= homeButtonHigherY){
        clear();
        onVolunteerSelectServiceScreen = false;
        volunteerHomeScreen()
    }
   
    if(onVolunteerSelectServiceScreen && mouseX >= backButtonLowerX && mouseX <= backButtonHigherX && mouseY >=backButtonLowerY && mouseY<= backButtonHigherY){
        clear();
        onVolunteerSelectServiceScreen = false;
        volunteerHomeScreen()
    }
   
    if(onVolunteerSelectServiceScreen && mouseX >= volunteerMapButtonLowerX && mouseX <= volunteerMapButtonHigherX && mouseY >=volunteerMapButtonLowerY && mouseY<= volunteerMapButtonHigherY){
        clear();
        onVolunteerSelectServiceScreen = false;
        donationHeatMapScreen()
    }
   
}