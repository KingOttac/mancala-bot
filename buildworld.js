function buildworld() {
	
	b = (windowWidth-590)/6;
	
	fill(196,164,132);
	rect(100,100,windowWidth-200,windowHeight-200);
	ellipse(180,windowHeight-355,100,windowHeight-220);
	ellipse(windowWidth-180,windowHeight-355,100,windowHeight-220);
	
	circle(2.5*b,b/2 + 150,b);
	circle(3.6*b,b/2 + 150,b);
	circle(4.7*b,b/2 + 150,b);
	circle(5.8*b,b/2 + 150,b);
	circle(6.9*b,b/2 + 150,b);
	circle(8.0*b,b/2 + 150,b);
	
	circle(2.5*b,windowHeight - b/2 - 150,b);
	circle(3.6*b,windowHeight - b/2 - 150,b);
	circle(4.7*b,windowHeight - b/2 - 150,b);
	circle(5.8*b,windowHeight - b/2 - 150,b);
	circle(6.9*b,windowHeight - b/2 - 150,b);
	circle(8.0*b,windowHeight - b/2 - 150,b);
	
	
	textSize(30);
	stroke(0);
	fill(0);
	text(holes[7],b,b/2 + 200-b);
	text(holes[8],2.5*b,b/2 + 200-b);
	text(holes[9],3.6*b,b/2 + 200-b);
	text(holes[10],4.7*b,b/2 + 200-b);
	text(holes[11],5.8*b,b/2 + 200-b);
	text(holes[12],6.9*b,b/2 + 200-b);
	text(holes[13],8.0*b,b/2 + 200-b);
	
	text(holes[6],2.5*b,windowHeight - b/2 - 180+b);
	text(holes[5],3.6*b,windowHeight - b/2 - 180+b);
	text(holes[4],4.7*b,windowHeight - b/2 - 180+b);
	text(holes[3],5.8*b,windowHeight - b/2 - 180+b);
	text(holes[2],6.9*b,windowHeight - b/2 - 180+b);
	text(holes[1],8.0*b,windowHeight - b/2 - 180+b);
	text(holes[0],windowWidth-1.1*b,windowHeight - b/2 - 180+b);
	//setup
	
	for (c = 0; c < 6; c++) {
		for (a = 0; a < holes[c+8]; a++) {
			fill(0,0,255);
			if (a == 0) {
				circle((2.5 + 1.1*c)*b,b/2 + 150,30);
			}
			else if (a % 8 == 0 && a != 0) {
				circle((2.5 + 1.1*c)*b - 10,b/2 + 150 - 20,30);
			}
			else if (a % 8 == 7) {
				circle((2.5 + 1.1*c)*b + 10,b/2 + 150 - 20,30);
			}
			else if (a % 8 == 3) {
				circle((2.5 + 1.1*c)*b + 20,b/2 + 150 - 10,30);
			}
			else if (a % 8 == 2) {
				circle((2.5 + 1.1*c)*b + 20,b/2 + 150 + 10,30);
			}
			else if (a % 8 == 6) {
				circle((2.5 + 1.1*c)*b + 10,b/2 + 150 + 20,30);
			}
			else if (a % 8 == 5) {
				circle((2.5 + 1.1*c)*b - 10,b/2 + 150 + 20,30);
			}
			else if (a % 8 == 4) {
				circle((2.5 + 1.1*c)*b - 20,b/2 + 150 + 10,30);
			}
			else if (a % 8 == 1) {
				circle((2.5 + 1.1*c)*b - 20,b/2 + 150 - 10,30);
			}
		}
	}//top pieces
	
	for (a = 0; a < holes[7]; a++) {
			fill(0,0,255);
			if (a == 0) {
				circle(180,windowHeight-340,30);
			}
			else if (a % 8 == 0 && a != 0) {
				circle(180 - 10,windowHeight-340 - 20,30);
			}
			else if (a % 8 == 7) {
				circle(180 + 10,windowHeight-340 - 20,30);
			}
			else if (a % 8 == 3) {
				circle(180 + 20,windowHeight-340 - 10,30);
			}
			else if (a % 8 == 2) {
				circle(180 + 20,windowHeight-340 + 10,30);
			}
			else if (a % 8 == 6) {
				circle(180 + 10,windowHeight-340 + 20,30);
			}
			else if (a % 8 == 5) {
				circle(180 - 10,windowHeight-340 + 20,30);
			}
			else if (a % 8 == 4) {
				circle(180 - 20,windowHeight-340 + 10,30);
			}
			else if (a % 8 == 1) {
				circle(180 - 20,windowHeight-340 - 10,30);
			}
		}//left goal
	
	for (c = 0; c < 6; c++) {
		for (a = 0; a < holes[6-c]; a++) {
			fill(0,0,255);
			if (a == 0) {
				circle((2.5 + 1.1*c)*b,windowHeight - b/2 - 150,30);
			}
			else if (a % 8 == 0 && a != 0) {
				circle((2.5 + 1.1*c)*b - 10,windowHeight - b/2 - 150 - 20,30);
			}
			else if (a % 8 == 7) {
				circle((2.5 + 1.1*c)*b + 10,windowHeight - b/2 - 150 - 20,30);
			}
			else if (a % 8 == 3) {
				circle((2.5 + 1.1*c)*b + 20,windowHeight - b/2 - 150 - 10,30);
			}
			else if (a % 8 == 2) {
				circle((2.5 + 1.1*c)*b + 20,windowHeight - b/2 - 150 + 10,30);
			}
			else if (a % 8 == 6) {
				circle((2.5 + 1.1*c)*b + 10,windowHeight - b/2 - 150 + 20,30);
			}
			else if (a % 8 == 5) {
				circle((2.5 + 1.1*c)*b - 10,windowHeight - b/2 - 150 + 20,30);
			}
			else if (a % 8 == 4) {
				circle((2.5 + 1.1*c)*b - 20,windowHeight - b/2 - 150 + 10,30);
			}
			else if (a % 8 == 1) {
				circle((2.5 + 1.1*c)*b - 20,windowHeight - b/2 - 150 - 10,30);
			}
		}
	}//bottom pieces
	
	for (a = 0; a < holes[0]; a++) {
			fill(0,0,255);
			if (a == 0) {
				circle(windowWidth - 180,windowHeight-340,30);
			}
			else if (a % 8 == 0 && a != 0) {
				circle(windowWidth - 180 - 10,windowHeight-340 - 20,30);
			}
			else if (a % 8 == 7) {
				circle(windowWidth - 180 + 10,windowHeight-340 - 20,30);
			}
			else if (a % 8 == 3) {
				circle(windowWidth - 180 + 20,windowHeight-340 - 10,30);
			}
			else if (a % 8 == 2) {
				circle(windowWidth - 180 + 20,windowHeight-340 + 10,30);
			}
			else if (a % 8 == 6) {
				circle(windowWidth - 180 + 10,windowHeight-340 + 20,30);
			}
			else if (a % 8 == 5) {
				circle(windowWidth - 180 - 10,windowHeight-340 + 20,30);
			}
			else if (a % 8 == 4) {
				circle(windowWidth - 180 - 20,windowHeight-340 + 10,30);
			}
			else if (a % 8 == 1) {
				circle(windowWidth - 180 - 20,windowHeight-340 - 10,30);
			}
		}//right goal
	}