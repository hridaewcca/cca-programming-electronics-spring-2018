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
		// darker as it gets closer to 0
		smoke = smokes[i];
		push();
		fill(smoke.y);
		translate(smoke.x, smoke.y);
		rotate(smoke.r);
		rect(-10, -10, 20, 20);
		pop();

		// up 3 pixels
		smoke.y = smoke.y + smoke.yvel;
		smoke.x = smoke.x + smoke.xvel;

		// rotate 0.05 radians ~= 2.8 degrees per frame
		smoke.r += 0.05;
		print('moving 1 smoke')
	}

	// deletes smoke objects if they are too high on the screen
	smokes = smokes.filter(function(el) {
		return (el.y > -30);
	});
}
