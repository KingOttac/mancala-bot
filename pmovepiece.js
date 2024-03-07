function pmovepiece(hole) {
		
	let turnside;
	if (pholes[hole] == 0) {
		return -1;
	}//bug catch
	
	if (hole < 7) {
		turnside = 1;
	}
	else if (hole > 7) {
		turnside = 0;
	}
		
	if (turnside == 0) {
		let cycler = 0;
		let k = pholes[hole];
		pholes[hole] = 0;
		for (g = k; g > 0; g--) {
			cycler++;
			if (cycler > hole) {
				cycler = hole-13;
			}
			if (hole-cycler != 0) {
				pholes[hole-cycler]++;
				if (g == 1 && pholes[hole-cycler] == 1 && hole-cycler > 7 && pholes[14-(hole-cycler)] != 0) {
					pholes[7] += 1 + pholes[14-(hole-cycler)];
					pholes[14-(hole-cycler)] = 0;
					pholes[hole-cycler] = 0;
					return 1;
				}//captures
				else if (g == 1 && hole-cycler == 7) {
					return 0;
				}//free turn
			}
		}
		return 1;
	}
	
	else if (turnside == 1) {
		let cycler = 0;
		let k = pholes[hole];
		pholes[hole] = 0;
		for (g = k; g > 0; g--) {
			cycler++;
			if (cycler > hole) {
				cycler = hole-13;
			}
			if (hole-cycler != 7) {
				pholes[hole-cycler]++;
				if (g == 1 && pholes[hole-cycler] == 1 && hole-cycler < 7 && pholes[14-(hole-cycler)] != 0) {
					pholes[0] += 1 + pholes[14-(hole-cycler)];
					pholes[14-(hole-cycler)] = 0;
					return 0;
				}//captures
				else if (g == 1 && hole-cycler == 0) {
					return 1;
				}//free turn
			}
		}
		return 0;
	}
	
}
