let turn = 0;
let holes = [];//goal 1, clockwise p2 holes, goal 2, clockwise p1 holes, set up position here
let pholes = [];
let randomplaces = [];
let p1wins = 0;
let p2wins = 0;
let ties = 0;

let depth = 5;//depth > 2

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for (i = 1; i < 7; i++) {
		let randomassign = round(random(0.5,6.5));
		holes[7-i] = randomassign;
		holes[14-i] = randomassign;
	}
	holes[0] = 0;
	holes[7] = 0;
	for (a = 0; a < 16; a++) {
		randomplaces[a] = random(-1*windowWidth/120,windowWidth/120) + round(random(-1.5,1.5))*windowWidth/80;
	}
}

function movepiece(hole) {
	
	let turnside;
	if (hole == 0 || hole == 7) {
		return 0;
	}//bug catch
	
	if (hole < 7) {
		turnside = 1;
	}
	else if (hole > 7) {
		turnside = 0;
	}
	
	if (turnside == turn && turn == 0 && holes[hole] != 0) {
		let cycler = 0;
		let k = holes[hole];
		holes[hole] = 0;
		for (g = k; g > 0; g--) {
			cycler++;
			if (cycler > hole) {
				cycler = hole-13;
			}
			if (hole-cycler != 0) {
				holes[hole-cycler]++;
				if (g == 1 && holes[hole-cycler] == 1 && hole-cycler > 7 && holes[14-(hole-cycler)] != 0) {
					holes[7] += 1 + holes[14-(hole-cycler)];
					holes[14-(hole-cycler)] = 0;
					holes[hole-cycler] = 0;
					turn = 1;
					return 0;
				}//captures
				else if (g == 1 && hole-cycler == 7) {
					turn = 0;
					return 0;
				}//free turn
			}
			else {
				g++;
			}
		}
		turn = 1;
	}
	
	else if (turnside == turn && turn == 1 && holes[hole] != 0) {
		let cycler = 0;
		let k = holes[hole];
		holes[hole] = 0;
		for (g = k; g > 0; g--) {
			cycler++;
			if (cycler > hole) {
				cycler = hole-13;
			}
			if (hole-cycler != 7) {
				holes[hole-cycler]++;
				if (g == 1 && holes[hole-cycler] == 1 && hole-cycler != 0 && hole-cycler < 7 && holes[14-(hole-cycler)] != 0) {
					holes[0] += 1 + holes[14-(hole-cycler)];
					holes[14-(hole-cycler)] = 0;
					turn = 0;
					return 0;
				}//captures
				else if (g == 1 && hole-cycler == 0) {
					turn = 1;
					return 0;
				}//free turn
			}
			else {
				g++
			}
		}
		turn = 0;
	}
	
} 

function windetection() {
	
	for (d = 1; d < 7; d++) {
		if (holes[d] != 0) {
			for (f = 8; f < 14; f++) {
				if (holes[f] != 0) {
					return 0;
				}
			}//checks other side for filled hole
		}
	}//ends function if not ended
	
	for (d = 8; d < 14; d++) {
		holes[7] += holes[d];
	}
	for (d = 1; d < 7; d++) {
		holes[0] += holes[d];
	}
	fill(100);
	stroke(100);
	rect(0,0,windowWidth,windowHeight);
	if (holes[0] > holes[7]) {
		p2wins++;
	}
	else if (holes[7] > holes[0]) {
		p1wins++;
	}
	else if (holes[7] == holes[0]) {
		ties++;
	}
	
	turn = 0;
	for (i = 1; i < 7; i++) {
		let randomassign = round(random(0.5,5.5));
		holes[7-i] = randomassign;
		holes[14-i] = randomassign;
	}
	holes[0] = 0;
	holes[7] = 0;
	pholes = [];
	for (a = 0; a < 16; a++) {
		randomplaces[a] = random(-1*windowWidth/120,windowWidth/120) + round(random(-1.5,1.5))*windowWidth/80;
	}
	buildworld();
		
}

function draw() {
	
	/*buildworld();
	
	if (turn == 0) {
		nonai();
		buildworld();
	}//player 1
	else {
		movepiece(ai(1));
		buildworld();
	}//player 2*/
	
	movepiece(ai(turn));
	buildworld();
	
	windetection();
	
}
