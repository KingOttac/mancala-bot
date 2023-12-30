function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

var turn = 0;
var b = 0;
var empty1s = 0;
var empty2s = 0;
var rcounter = 0;
var turnside = 0;
var aiprint = 0;
var k = 0;
var pturn = turn;
let holes = [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
let pholes = [];


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
			empty1s = 0;
			for (d = 8; d < 14; d++) {
				if (holes[d] != 0) {
					empty2s = 0;
					return 0;
				}
				else {
					empty2s++;
				}
			}
		}
		else {
			empty1s++;
		}
	}
	
	if (empty1s >= 6) {
		for (d = 8; d < 14; d++) {
			holes[7] += holes[d];
		}
	}
	else if (empty2s >= 6) {
		for (d = 1; d < 7; d++) {
			holes[0] += holes[d];
		}
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
	empty1s = 0;
	empty2s = 0;
	rcounter = 0;
	turnside = 0;
	k = 0;
	holes = [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
		
}

function draw() {
	
	buildworld();
	
	if (turn == 0) {
		nonai();
	}//non-ai
	else {
		aiprint = ai();
		print(aiprint);
		movepiece(aiprint);
	}
	
	windetection();
	
}