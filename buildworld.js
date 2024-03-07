function buildworld() {
	
	fill(196,164,132);
	stroke(0);
	strokeWeight(windowWidth/900)
	rect(windowWidth/12,windowHeight/12,windowWidth*(5/6),windowHeight*5/6);
	ellipse(windowWidth*0.15,windowHeight/2,windowWidth/12,windowHeight*(4/6))
	ellipse(windowWidth-windowWidth*0.15,windowHeight-windowHeight/2,windowWidth/12,windowHeight*(4/6));

	for (q = 0; q < 6; q++) {
		fill(196,164,132);
		stroke(0);
		circle(0.254*windowWidth+windowWidth/10*q,0.254*windowHeight,windowWidth/12)
		circle(0.254*windowWidth+windowWidth/10*q,windowHeight-0.254*windowHeight,windowWidth/12);

		
		fill(40,27,222);
		stroke(255);
		for (p = 0; p < holes[6-q]; p++) {
			circle(0.254*windowWidth+windowWidth/10*q+randomplaces[p],windowHeight-0.254*windowHeight+randomplaces[p+4],windowWidth/50)
		}
		fill(0);
		stroke(0);
		textSize(20);
		text(holes[6-q],0.254*windowWidth+(windowWidth/10)*q-windowWidth/24,windowHeight-0.254*windowHeight-windowWidth/21);
				
		fill(40,27,222);
		stroke(255);
		for (p = 0; p < holes[q+8]; p++) {
			circle(0.254*windowWidth+windowWidth/10*q+randomplaces[p],0.254*windowHeight+randomplaces[p+4],windowWidth/50)
		}
		fill(0);
		stroke(0);
		textSize(round(windowWidth/60));
		text(holes[q+8],0.254*windowWidth+(windowWidth/10)*q-windowWidth/24,0.254*windowHeight-windowWidth/21);
	}
	
	fill(40,27,222);
	stroke(255);
	for (p = 0; p < holes[7]; p++) {
		circle(windowWidth*0.15+randomplaces[p],windowHeight/2+randomplaces[p+4],windowWidth/50)
	}
	for (p = 0; p < holes[0]; p++) {
		circle(windowWidth-windowWidth*0.15+randomplaces[p],windowHeight-windowHeight/2+randomplaces[p+4],windowWidth/50);
	}
	
	fill(0);
	stroke(0);
	text(holes[0],windowWidth-(windowWidth*0.15)+windowWidth/28,windowHeight*(5/6))
	text(holes[7],windowWidth*0.15-windowWidth/28,0.254*windowHeight-windowWidth/21);

	fill(255);
	stroke(100);
	text("p1wins: " + p1wins + "     p2wins: " + p2wins + "     ties: " + ties,windowWidth/80,windowHeight/20);
	
	
	
	
}
