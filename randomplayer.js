function randomplayer(aturn) {
	
	let kk = round(random(-0.5,5.5))+pow(8,1-aturn);
	while (holes[kk] == 0) {
		kk = round(random(-0.5,5.5))+pow(8,1-aturn);
	}
	return kk;
	
}