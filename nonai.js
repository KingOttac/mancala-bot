function nonai() {
	if (mouseIsPressed == true) {
		if (mouseX > 2.5*b - 2*sqrt(sq(30)/2) && mouseX < 2.5*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > b/2 + 150 - 2*sqrt(sq(30)/2) && mouseY < b/2 + 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(8,0,holes[8]);
		}
		else if (mouseX > 3.6*b - 2*sqrt(sq(30)/2) && mouseX < 3.6*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > b/2 + 150 - 2*sqrt(sq(30)/2) && mouseY < b/2 + 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(9,0,holes[9]);
		}
		else if (mouseX > 4.7*b - 2*sqrt(sq(30)/2) && mouseX < 4.7*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > b/2 + 150 - 2*sqrt(sq(30)/2) && mouseY < b/2 + 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(10,0,holes[10]);
		}
		else if (mouseX > 5.8*b - 2*sqrt(sq(30)/2) && mouseX < 5.8*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > b/2 + 150 - 2*sqrt(sq(30)/2) && mouseY < b/2 + 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(11,0,holes[11]);
		}
		else if (mouseX > 6.9*b - 2*sqrt(sq(30)/2) && mouseX < 6.9*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > b/2 + 150 - 2*sqrt(sq(30)/2) && mouseY < b/2 + 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(12,0,holes[12]);
		}
		else if (mouseX > 8.0*b - 2*sqrt(sq(30)/2) && mouseX < 8.0*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > b/2 + 150 - 2*sqrt(sq(30)/2) && mouseY < b/2 + 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(13,0,holes[13]);
		}
		
		else if (mouseX > 2.5*b - 2*sqrt(sq(30)/2) && mouseX < 2.5*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) && mouseY < windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(6,1,holes[6]);
		}
		else if (mouseX > 3.6*b - 2*sqrt(sq(30)/2) && mouseX < 3.6*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) && mouseY < windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(5,1,holes[5]);
		}
		else if (mouseX > 4.7*b - 2*sqrt(sq(30)/2) && mouseX < 4.7*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) && mouseY < windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(4,1,holes[4]);
		}
		else if (mouseX > 5.8*b - 2*sqrt(sq(30)/2) && mouseX < 5.8*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) && mouseY < windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(3,1,holes[3]);
		}
		else if (mouseX > 6.9*b - 2*sqrt(sq(30)/2) && mouseX < 6.9*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) && mouseY < windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(2,1,holes[2]);
		}
		else if (mouseX > 8.0*b - 2*sqrt(sq(30)/2) && mouseX < 8.0*b - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2) && mouseY > windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) && mouseY < windowHeight - b/2 - 150 - 2*sqrt(sq(30)/2) + 4*sqrt(sq(30)/2)) {
			movepiece(1,1,holes[1]);
		}
	}
}