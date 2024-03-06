function pwindetect() {
	
	for (d = 1; d < 7; d++) {
		if (pholes[d] != 0) {
			for (f = 8; f < 14; f++) {
				if (pholes[f] != 0) {
					return false;
				}
			}//checks other side for filled hole
			return true;
		}
	}
	return true;
	
}
