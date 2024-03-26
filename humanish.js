function humanish(aturn) {
	
	for (a = 0; a < 6; a++) {
		for (b = 0; b < 14; b++) {
			pholes[b] = holes[b];
		}
		pturn = aturn;
		if (pmovepiece(a+pow(8,1-aturn)) == 0) {
			return a+pow(8,1-aturn);
		}
	}//get free turns
	for (a = 0; a < 6; a++) {
		for (b = 0; b < 14; b++) {
			pholes[b] = holes[b];
		}
		let holder = pholes[aturn*7];
		pmovepiece(a+pow(8,aturn));
		if (pholes[aturn*7] > holder+1) {
			for (b = 0; b < 6; b++) {
				if (pholes[b+pow(8,1-aturn)] == 0 && pholes[b+pow(8,aturn)] == 0 && holes[b+pow(8,1-aturn)] != 0) {
					return b+pow(8,1-aturn);
				}
			}
		}
	}//dont lose to captures
	for (a = 0; a < 6; a++) {
		for (b = 0; b < 14; b++) {
			pholes[b] = holes[b];
		}
		pmovepiece(a+pow(8,1-aturn));
		if (pholes[aturn*7] > holes[aturn*7]+1) {
			for (b = 0; b < 6; b++) {
				if (pholes[b+pow(8,1-aturn)] == 0 && pholes[b+pow(8,aturn)] == 0 && holes[b+pow(8,1-aturn)] != 0) {
					return b+pow(8,1-aturn);
				}
			}
		}
	}//capture other pieces
	return round(random(-0.5,5.5))+pow(8,1-aturn);//return random
	
}