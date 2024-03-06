function nonai() {
	if (mouseIsPressed == true) {
		for (q = 0; q < 6; q++) {
			let left = 0.254*windowWidth+(windowWidth/10)*q-windowWidth/24;
			let right = 0.254*windowWidth+(windowWidth/10)*q+windowWidth/24;
			let top = 0.254*windowHeight-windowWidth/24;
			let floor = 0.254*windowHeight+windowWidth/24;
			if (mouseX > left && mouseX < right) {
				movepiece(q+8);
				break;
			}
		}
	}
}
