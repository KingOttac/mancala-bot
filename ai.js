function ai() {

	//note that this plays on turn == 1, returns are from 6-1 from left to right of bottom row, goal is holes[0]
	//returned values are printed
	//nonai plays on turn == 0, returns are 7-12 from left to right of top row, goal is holes[7]
	
	let returnedarr = [holes[7],holes[7],holes[7],holes[7],holes[7],holes[7]];
	let depth = 6;//depth > 0
	
	for (a = 0; a < pow(6,depth); a++) {
		
		let movelist = [];
		for (b = 0; b < depth; b++) {
			movelist[b] = (a / pow(6,b) - ((a / pow(6,b)) % 1)) % 6;
		}//the most glorious piece of code i have ever written (base converter)
		
		for (b = 0; b < 14; b++) {
			pholes[b] = holes[b];
		}
		let pturn = 1;
		for (b = 0; b < depth && pwindetect() == false; b++) {
			
			let checkingvar;
			if (pturn == 0) {
				checkingvar = pmovepiece(13-movelist[b]);
			}
			else if (pturn == 1) {
				checkingvar = pmovepiece(movelist[b]+1);
			}
			
			if (checkingvar == -1) {
				break;
			}
			else {
				pturn = checkingvar;
			}
			
		}//pov you are a parallel universe
		
		if (pwindetect() == true) {
			for (d = 8; d < 14; d++) {
				pholes[7] += pholes[d];
			}
		}//simulates ending for better result
		if (pholes[7] > returnedarr[movelist[0]]) {
			returnedarr[movelist[0]] = pholes[7];
		}
		
	}//pov you are a seximal for loop
	
	let usra = [];
	for (a = 0; a < 6; a++) {
		usra[a] = returnedarr[a];
	}
	sort(returnedarr);
	for (a = 0; a < 6; a++) {
		for (b = 0; b < 6; b++) {
			if (returnedarr[a] == usra[b] && holes[b+1] != 0) {
				return b+1;
			}
		}
	}
	
}
