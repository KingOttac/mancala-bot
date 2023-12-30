function pwindetection() {
	
	var gameover = false;
	
	for (d = 1; d < 7; d++) {
		if (pholes[d] != 0) {
			empty1s = 0;
			for (d = 8; d < 14; d++) {
				if (pholes[d] != 0) {
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
			pholes[7] += pholes[d];
			gameover = true;
		}
	}
	else if (empty2s >= 6) {
		for (d = 1; d < 7; d++) {
			pholes[0] += pholes[d];
			gameover = true;
		}
	}
	
	empty1s = 0;
	empty2s = 0;
	
	return gameover;
	
}