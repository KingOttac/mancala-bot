function pmovepiece(hole) {
		
	rcounter = 0;
	
	if (hole < 7) {
		turnside = 1;
	}
	else if (hole > 7) {
		turnside = 0;
	}
	
	k = pholes[hole];
	
	if (turnside == 0) {
		pholes[hole] = 0;
		for (g = 1; g <= k; g++) {
			if (hole-(g - 14*rcounter) != 0) {
				pholes[hole-(g - 14*rcounter)]++;
			}
			else {
				rcounter++;
			}
		}
		
		if (pholes[hole-(g - 14*rcounter)+1] == 1 && hole-(g - 14*rcounter)+1 > 7 && pholes[14-(hole-(g - 14*rcounter)+1)] != 0) {
			pholes[7] += 1 + pholes[14-(hole-(g - 14*rcounter)+1)];
			pholes[14-(hole-(g - 14*rcounter)+1)] = 0;
			pholes[hole-(g - 14*rcounter)+1] = 0;
			pturn = 1;
			return pturn;
		}
		else if (hole-(g - 14*rcounter)+1 == 7) {
			pturn = 0;
			return pturn;
		}
		else {
			pturn = 1;
			return pturn;
		}

		rcounter = 0;

	}
	else if (turnside == 1) {
		pholes[hole] = 0;
		rcounter = 0;
		for (g = 1; g <= k; g++) {
			if (hole-(g - 14*rcounter) != 0 && hole-(g - 14*rcounter) != 7) {
				pholes[hole-(g - 14*rcounter)]++;
			}
			else if (hole-(g - 14*rcounter) == 0) {
				pholes[hole-(g - 14*rcounter)]++;
				if (hole == k) {}
				else {
					rcounter++;
				}
			}
		}
		
		if (pholes[hole-(g - 14*rcounter)+1] == 1 && hole-(g - 14*rcounter)+1 < 7 && pholes[14-(hole-(g - 14*rcounter)+1)] != 0 && hole-(g - 14*rcounter)+1 != 0) {
			pholes[0] += 1 + pholes[14-(hole-(g - 14*rcounter)+1)];
			pholes[14-(hole-(g - 14*rcounter)+1)] = 0;
			pholes[hole-(g - 14*rcounter)+1] = 0;
			pturn = 0;
			return pturn;
		}
		else if (hole-(g - 14*rcounter)+1 == 0) {
			pturn = 0;
			return pturn;
		}
		else {
			pturn = 0;
			return pturn
		}
		rcounter = 0;
		
	}
}