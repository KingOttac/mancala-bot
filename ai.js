function ai() {

	var tomove = 0;
	var depth = 10;
	var highest = 0;
	var lowestopp = 0;
	var returned = -1;
	var firstmove = 0;
	var impmoves = 0;
	
	pturn = turn;
	for (i = 0; i < 14; i++) {
		pholes[i] = holes[i];
	}
	
	for (q = 0; q < 5000; q++) {
		
		for (y = 0; y < depth && pwindetection() == false; y++) {
			if (pturn == 0) {
				tomove = round(random(7.5,13.5));
				while (pholes[tomove] == 0) {
					tomove = round(random(7.5,13.5));
				}
				if (pmovepiece(tomove) == 1) {
					pturn = 1;
				}
				else {
					pturn = 0;
				}
			}
			else {
				tomove = round(random(0.5,6.5));
				while (pholes[tomove] == 0) {
					tomove = round(random(0.5,6.5));
				}
				if (y == 0) {
					firstmove = tomove;
				}
				if (pmovepiece(tomove) == 1) {
					pturn = 1;
				}
				else {
					pturn = 0;
				}
			}
		}
		
		if (pholes[0] > highest && pholes[7] < lowestopp/(q+1)) {
			highest = pholes[0];
			returned = firstmove;
		}
		lowestopp += pholes[7];
		for (i = 0; i < 14; i++) {
			pholes[i] = holes[i];
		}
		pturn = 1;
		
	}
	
	if (returned == -1) {
		for (i = 1; i < 7; i++) {
			if (pholes[i] != 0) {
				returned = i;
			}
		}
	}
	
	return returned;
	
}