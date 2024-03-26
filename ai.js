function ai(aturn) {

	//if aturn == 1 then returns a value for player 2, if aturn == 0 then player 1
	//note that this plays on turn == 1, returns are from 6-1 from left to right of bottom row, goal is holes[0]
	//returned values are printed
	//nonai plays on turn == 0, returns are 7-12 from left to right of top row, goal is holes[7]
	
	let returnedarr = [];
	
	for (a = 0; a < 6; a++) {
		returnedarr[a] = holes[aturn*7];
	}
	
	for (a = 0; a < pow(6,depth); a++) {
		
		let movelist = [];
		for (b = 0; b < depth; b++) {
			movelist[b] = (a / pow(6,b) - ((a / pow(6,b)) % 1)) % 6;
		}//the most glorious piece of code i have ever written (base converter)
		
		//only checks lowest final values to see if they will be raised in a different case (AB pruning)
		let usra = [];
		for (c = 0; c < 6; c++) {
			usra[c] = returnedarr[c];
		}
		sort(usra);
		if (returnedarr[movelist[0]] > usra[0]) {
			continue;
		}
		/**/
		
		for (b = 0; b < 14; b++) {
			pholes[b] = holes[b];
		}
		let pturn = aturn;
		for (b = 0; b < depth && pwindetect() == false; b++) {
			
			if (pholes[aturn*7] > returnedarr[movelist[0]] && pholes[aturn*7] != holes[aturn*7]) {
				break;
			}//maybe alpha beta pruned??
			let checkingvar;
			if (pturn == 0) {
				checkingvar = pmovepiece(movelist[b]+8);
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
			for (d = 1; d < 7; d++) {
				pholes[0] += pholes[d];
			}
		}//simulates ending for better result
		if (pholes[aturn*7] > returnedarr[movelist[0]]) {
			returnedarr[movelist[0]] = pholes[aturn*7];
		}
		
	}//pov you are a seximal for loop
	
	let usra = [];//unsorted returned array
	for (a = 0; a < 6; a++) {
		usra[a] = returnedarr[a];
	}
	sort(returnedarr);
	for (a = 0; a < 6; a++) {
		for (b = 0; b < 6; b++) {
			if (returnedarr[a] == usra[b] && holes[b+pow(8,1-aturn)] != 0) {
				return b+pow(8,1-aturn);
			}
		}
	}
	
}
