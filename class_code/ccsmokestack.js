var xstart = 210;
var ystart = 290;
var rstart = 0;
var smokes = [];

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	noStroke();

	// draw smokestack
	fill(255);
	rect(195, height, 30, -100);

	// only make smoke a small percentage of the time
	if (random() < .4) {
		var s = {
			x: xstart,
			y: ystart,
			r: rstart,
			xvel: random(-1, 1),
			yvel: -3
		};
		smokes.push(s);
		print('adding smoke')
	}

	
	// runs the function on each element of the array
	for (var i = 0; i < smokes.length; i++) {	
		smoke = smokes[i]; // choose the smoke bubble.
		
		// think of the analogy of the canvas as a piece of paper that is in front of you that you are drawing on
		push();  // this remembers the CURRENT STATE OF THE PAPER AND PEN.
		fill(smoke.y);  // sets the darkness of the ink, making it darker as the square gets closer to 0 - the top of the screen
		translate(smoke.x, smoke.y);  // this moves the drawings "center", think about moving (shifting) a sheet of paper in front of you that you are about to draw on. 
		rotate(smoke.r);  // this spins the canvas around that center, think about spinning a blank sheet of paper before you draw on it
		rect(-10, -10, 20, 20);  // this draws a rectangle on the paper as it has been manipulated so far. 
		pop(); // this resets the paper back to STATE it was in during push(), undoing the spin and shift.
		
		// the reason it wasnt working is because for the drawing to work right 
		// when you "unrotate" the paper, the rectangle has to have 
		// been drawn perfectly centered around that point, that "axis" of rotation.
		// rect(-10, -10, 20, 20) is perfectly centered around (x,y) = (0,0).
		// if you change it to (-30, -10, 20, 20), for example, youll see the squares 
		// rotating in ways you dont want, this is because the rectangle is no longer centered.

		// do the logic that moves the smoke according to a fixed trajectory. 
		smoke.y = smoke.y + smoke.yvel;
		smoke.x = smoke.x + smoke.xvel;

		// increment the amount of spin of the smoke bubble... 
		// rotate 0.05 radians ~= 2.8 degrees per frame  
		smoke.r += 0.05;
		
		print('moving 1 smoke')
	}

	// deletes smoke objects if they are too high on the screen
	smokes = smokes.filter(function(el) {
		return (el.y > -30);
	});
}
