var turn = 0;
var b = 0;
var rcounter = 0;
var turnside = 0;
var aiprint = 0;
var k = 0;
var randomassign = 0;
let holes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let pholes = [];
let randomplaces = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for (i = 1; i < 7; i++) {
		randomassign = round(random(0.5,6.5));
		holes[7-i] = randomassign;
		holes[14-i] = randomassign;
	}
	for (a = 0; a < 16; a++) {
		randomplaces[a] = random(-1*windowWidth/120,windowWidth/120) + round(random(-1.5,1.5))*windowWidth/80;
	}
}

function movepiece(hole) {
	
	if (hole == 0 || hole == 7) {
		return 0;
	}
	
	rcounter = 0;
	
	if (hole < 7) {
		turnside = 1;
	}
	else if (hole > 7) {
		turnside = 0;
	}
	
	k = holes[hole];
	
	if (holes[hole] == 0) {
		return 0;
	}
	if (turnside != turn) {
		return 0;
	}
	else if (turnside == turn && turn == 0) {
		holes[hole] = 0;
		for (g = 1; g <= k; g++) {
			if (hole-(g - 14*rcounter) != 0) {
				holes[hole-(g - 14*rcounter)]++;
			}
			else {
				rcounter++;
			}
		}
		
		if (holes[hole-(g - 14*rcounter)+1] == 1 && hole-(g - 14*rcounter)+1 > 7 && holes[14-(hole-(g - 14*rcounter))] != 0 && rcounter > 0) {
			holes[7] += 1 + holes[14-(hole-(g - 14*rcounter))];
			holes[14-(hole-(g - 14*rcounter))] = 0;
			holes[hole-(g - 13*rcounter)] = 0;
			turn = 1;
			return 0;
		}
		else if (holes[hole-(g - 14*rcounter)+1] == 1 && hole-(g - 14*rcounter)+1 > 7 && holes[14-(hole-(g - 14*rcounter)+1)] != 0 && rcounter == 0) {
			holes[7] += 1 + holes[14-(hole-(g - 14*rcounter)+1)];
			holes[14-(hole-(g - 14*rcounter)+1)] = 0;
			holes[hole-(g - 14*rcounter)+1] = 0;
			turn = 1;
			return 0;
		}
		else if (hole-(g - 14*rcounter)+1 == 7) {
			return 0;
		}
		else {
			turn = 1;
		}

		rcounter = 0;

	}
	
	else if (turnside == turn && turn == 1) {
		holes[hole] = 0;
		rcounter = 0;
		for (g = 1; g <= k; g++) {
			if (hole-(g - 14*rcounter) != 0 && hole-(g - 14*rcounter) != 7) {
				holes[hole-(g - 14*rcounter)]++;
			}
			else if (hole-(g - 14*rcounter) == 0) {
				holes[hole-(g - 14*rcounter)]++;
				if (hole == k) {}
				else {
					rcounter++;
				}
			}
		}
		
		if (holes[hole-(g - 14*rcounter)+1] == 1 && hole-(g - 14*rcounter)+1 < 7 && holes[14-(hole-(g - 14*rcounter))] != 0 && hole-(g - 14*rcounter)+1 != 0 && rcounter > 0) {
			holes[0] += 1 + holes[14-(hole-(g - 14*rcounter))];
			holes[14-(hole-(g - 14*rcounter))] = 0;
			holes[hole-(g - 13*rcounter)] = 0;
			turn = 0;
			return 0;
		}
		else if (holes[hole-(g - 14*rcounter)+1] == 1 && hole-(g - 14*rcounter)+1 < 7 && holes[14-(hole-(g - 14*rcounter)+1)] != 0 && hole-(g - 14*rcounter)+1 != 0 && rcounter == 0) {
			holes[0] += 1 + holes[14-(hole-(g - 14*rcounter)+1)];
			holes[14-(hole-(g - 14*rcounter)+1)] = 0;
			holes[hole-(g - 14*rcounter)+1] = 0;
			turn = 0;
			return 0;
		}
		else if (hole-(g - 14*rcounter)+1 == 0) {
			return 0;
		}
		else {
			turn = 0;
		}
		rcounter = 0;
		
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
		print("player2 wins");
	}
	else if (holes[7] > holes[0]) {
		print("player1 wins");
	}
	else if (holes[7] == holes[0]) {
		print("tie");
	}
	
	turn = 0;
	rcounter = 0;
	turnside = 0;
	k = 0;
	for (i = 1; i < 7; i++) {
		randomassign = round(random(0.5,5.5));
		holes[7-i] = randomassign;
		holes[14-i] = randomassign;
	}
	for (a = 0; a < 16; a++) {
		randomplaces[a] = random(-1*windowWidth/120,windowWidth/120) + round(random(-1.5,1.5))*windowWidth/80;
	}
	buildworld();
		
}

function draw() {
	
	buildworld();
	
	if (turn == 0) {
		nonai();
		buildworld();
	}//non-ai
	else {
		movepiece(ai());
		buildworld();
	}
	
	windetection();
	
}
