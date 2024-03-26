function nonai(aturn) {
	if (mouseIsPressed == true) {
		for (q = 0; q < 6; q++) {
			let left = 0.254*windowWidth+(windowWidth/10)*q-windowWidth/24;
			let right = 0.254*windowWidth+(windowWidth/10)*q+windowWidth/24;
			let top = 0.254*windowHeight-windowWidth/24 + aturn*(windowHeight-2*0.254*windowHeight);
			let floor = 0.254*windowHeight+windowWidth/24 + aturn*(windowHeight-2*0.254*windowHeight);
			if (mouseX > left && mouseX < right && mouseY > top && mouseY < floor) {
				if (aturn == 0) {
					return q+8;
				}
				else {
					return 6-q;
				}
			}
		}
	}
}
