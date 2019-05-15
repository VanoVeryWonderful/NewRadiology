let images_temporal_right = ["imgTemporal_normal/IMG-0001-00150.jpg", "imgTemporal_normal/IMG-0001-00149.jpg", "imgTemporal_normal/IMG-0001-00148.jpg", "imgTemporal_normal/IMG-0001-00147.jpg", "imgTemporal_normal/IMG-0001-00146.jpg", "imgTemporal_normal/IMG-0001-00145.jpg", "imgTemporal_normal/IMG-0001-00144.jpg", "imgTemporal_normal/IMG-0001-00143.jpg", "imgTemporal_normal/IMG-0001-00142.jpg", "imgTemporal_normal/IMG-0001-00141.jpg", "imgTemporal_normal/IMG-0001-00140.jpg", "imgTemporal_normal/IMG-0001-00139.jpg", "imgTemporal_normal/IMG-0001-00138.jpg", "imgTemporal_normal/IMG-0001-00137.jpg", "imgTemporal_normal/IMG-0001-00136.jpg", "imgTemporal_normal/IMG-0001-00135.jpg", "imgTemporal_normal/IMG-0001-00134.jpg", "imgTemporal_normal/IMG-0001-00133.jpg", "imgTemporal_normal/IMG-0001-00132.jpg", "imgTemporal_normal/IMG-0001-00131.jpg", "imgTemporal_normal/IMG-0001-00130.jpg", "imgTemporal_normal/IMG-0001-00129.jpg", "imgTemporal_normal/IMG-0001-00128.jpg", "imgTemporal_normal/IMG-0001-00127.jpg", "imgTemporal_normal/IMG-0001-00126.jpg", "imgTemporal_normal/IMG-0001-00125.jpg", "imgTemporal_normal/IMG-0001-00124.jpg", "imgTemporal_normal/IMG-0001-00123.jpg", "imgTemporal_normal/IMG-0001-00122.jpg", "imgTemporal_normal/IMG-0001-00121.jpg", "imgTemporal_normal/IMG-0001-00120.jpg", "imgTemporal_normal/IMG-0001-00119.jpg", "imgTemporal_normal/IMG-0001-00118.jpg", "imgTemporal_normal/IMG-0001-00117.jpg", "imgTemporal_normal/IMG-0001-00116.jpg", "imgTemporal_normal/IMG-0001-00115.jpg", "imgTemporal_normal/IMG-0001-00114.jpg", "imgTemporal_normal/IMG-0001-00113.jpg", "imgTemporal_normal/IMG-0001-00112.jpg", "imgTemporal_normal/IMG-0001-00111.jpg", "imgTemporal_normal/IMG-0001-00110.jpg", "imgTemporal_normal/IMG-0001-00109.jpg", "imgTemporal_normal/IMG-0001-00108.jpg", "imgTemporal_normal/IMG-0001-00107.jpg", "imgTemporal_normal/IMG-0001-00106.jpg", "imgTemporal_normal/IMG-0001-00105.jpg", "imgTemporal_normal/IMG-0001-00104.jpg", "imgTemporal_normal/IMG-0001-00103.jpg", "imgTemporal_normal/IMG-0001-00102.jpg", "imgTemporal_normal/IMG-0001-00101.jpg", "imgTemporal_normal/IMG-0001-00100.jpg", "imgTemporal_normal/IMG-0001-00099.jpg", "imgTemporal_normal/IMG-0001-00098.jpg", "imgTemporal_normal/IMG-0001-00097.jpg", "imgTemporal_normal/IMG-0001-00096.jpg", "imgTemporal_normal/IMG-0001-00095.jpg", "imgTemporal_normal/IMG-0001-00094.jpg", "imgTemporal_normal/IMG-0001-00093.jpg", "imgTemporal_normal/IMG-0001-00092.jpg", "imgTemporal_normal/IMG-0001-00091.jpg", "imgTemporal_normal/IMG-0001-00090.jpg", "imgTemporal_normal/IMG-0001-00089.jpg", "imgTemporal_normal/IMG-0001-00088.jpg", "imgTemporal_normal/IMG-0001-00087.jpg", "imgTemporal_normal/IMG-0001-00086.jpg", "imgTemporal_normal/IMG-0001-00085.jpg", "imgTemporal_normal/IMG-0001-00084.jpg", "imgTemporal_normal/IMG-0001-00083.jpg", "imgTemporal_normal/IMG-0001-00082.jpg", "imgTemporal_normal/IMG-0001-00081.jpg", "imgTemporal_normal/IMG-0001-00080.jpg", "imgTemporal_normal/IMG-0001-00079.jpg", "imgTemporal_normal/IMG-0001-00078.jpg", "imgTemporal_normal/IMG-0001-00077.jpg", "imgTemporal_normal/IMG-0001-00076.jpg", "imgTemporal_normal/IMG-0001-00075.jpg", "imgTemporal_normal/IMG-0001-00074.jpg", "imgTemporal_normal/IMG-0001-00073.jpg", "imgTemporal_normal/IMG-0001-00072.jpg", "imgTemporal_normal/IMG-0001-00071.jpg", "imgTemporal_normal/IMG-0001-00070.jpg", "imgTemporal_normal/IMG-0001-00069.jpg", "imgTemporal_normal/IMG-0001-00068.jpg", "imgTemporal_normal/IMG-0001-00067.jpg", "imgTemporal_normal/IMG-0001-00066.jpg", "imgTemporal_normal/IMG-0001-00065.jpg", "imgTemporal_normal/IMG-0001-00064.jpg", "imgTemporal_normal/IMG-0001-00063.jpg", "imgTemporal_normal/IMG-0001-00062.jpg", "imgTemporal_normal/IMG-0001-00061.jpg", "imgTemporal_normal/IMG-0001-00060.jpg", "imgTemporal_normal/IMG-0001-00059.jpg", "imgTemporal_normal/IMG-0001-00058.jpg"];

let imageElement_temporal_right = document.getElementById("main_Image_right_temporal");
let currentImageIndex_temporal_right = 0;


document.getElementById("main_Block_for_Img_right_temporal").onwheel = function() {
	
	if (event.deltaY > 0 || currentImageIndex_temporal_right === 0) {
		currentImageIndex_temporal_right += 1;
		if (currentImageIndex_temporal_right === images_temporal_right.length){
		currentImageIndex_temporal_right = 0;
	    }
		
	}
	else if (event.deltaY < 0) {
		currentImageIndex_temporal_right -= 1;
		if (currentImageIndex_temporal_right === 0){
		currentImageIndex_temporal_right = images_temporal_right.length -1;
	    }
		
	}

	imageElement_temporal_right.src = images_temporal_right[currentImageIndex_temporal_right];
	
	return false;
}

let images_temporal_left = ["imgTemporal_normal/IMG-0002-00150.jpg", "imgTemporal_normal/IMG-0002-00149.jpg", "imgTemporal_normal/IMG-0002-00148.jpg", "imgTemporal_normal/IMG-0002-00147.jpg", "imgTemporal_normal/IMG-0002-00146.jpg", "imgTemporal_normal/IMG-0002-00145.jpg", "imgTemporal_normal/IMG-0002-00144.jpg", "imgTemporal_normal/IMG-0002-00143.jpg", "imgTemporal_normal/IMG-0002-00142.jpg", "imgTemporal_normal/IMG-0002-00141.jpg", "imgTemporal_normal/IMG-0002-00140.jpg", "imgTemporal_normal/IMG-0002-00139.jpg", "imgTemporal_normal/IMG-0002-00138.jpg", "imgTemporal_normal/IMG-0002-00137.jpg", "imgTemporal_normal/IMG-0002-00136.jpg", "imgTemporal_normal/IMG-0002-00135.jpg", "imgTemporal_normal/IMG-0002-00134.jpg", "imgTemporal_normal/IMG-0002-00133.jpg", "imgTemporal_normal/IMG-0002-00132.jpg", "imgTemporal_normal/IMG-0002-00131.jpg", "imgTemporal_normal/IMG-0002-00130.jpg", "imgTemporal_normal/IMG-0002-00129.jpg", "imgTemporal_normal/IMG-0002-00128.jpg", "imgTemporal_normal/IMG-0002-00127.jpg", "imgTemporal_normal/IMG-0002-00126.jpg", "imgTemporal_normal/IMG-0002-00125.jpg", "imgTemporal_normal/IMG-0002-00124.jpg", "imgTemporal_normal/IMG-0002-00123.jpg", "imgTemporal_normal/IMG-0002-00122.jpg", "imgTemporal_normal/IMG-0002-00121.jpg", "imgTemporal_normal/IMG-0002-00120.jpg", "imgTemporal_normal/IMG-0002-00119.jpg", "imgTemporal_normal/IMG-0002-00118.jpg", "imgTemporal_normal/IMG-0002-00117.jpg", "imgTemporal_normal/IMG-0002-00116.jpg", "imgTemporal_normal/IMG-0002-00115.jpg", "imgTemporal_normal/IMG-0002-00114.jpg", "imgTemporal_normal/IMG-0002-00113.jpg", "imgTemporal_normal/IMG-0002-00112.jpg", "imgTemporal_normal/IMG-0002-00111.jpg", "imgTemporal_normal/IMG-0002-00110.jpg", "imgTemporal_normal/IMG-0002-00109.jpg", "imgTemporal_normal/IMG-0002-00108.jpg", "imgTemporal_normal/IMG-0002-00107.jpg", "imgTemporal_normal/IMG-0002-00106.jpg", "imgTemporal_normal/IMG-0002-00105.jpg", "imgTemporal_normal/IMG-0002-00104.jpg", "imgTemporal_normal/IMG-0002-00103.jpg", "imgTemporal_normal/IMG-0002-00102.jpg", "imgTemporal_normal/IMG-0002-00101.jpg", "imgTemporal_normal/IMG-0002-00100.jpg", "imgTemporal_normal/IMG-0002-00099.jpg", "imgTemporal_normal/IMG-0002-00098.jpg", "imgTemporal_normal/IMG-0002-00097.jpg", "imgTemporal_normal/IMG-0002-00096.jpg", "imgTemporal_normal/IMG-0002-00095.jpg", "imgTemporal_normal/IMG-0002-00094.jpg", "imgTemporal_normal/IMG-0002-00093.jpg", "imgTemporal_normal/IMG-0002-00092.jpg", "imgTemporal_normal/IMG-0002-00091.jpg", "imgTemporal_normal/IMG-0002-00090.jpg", "imgTemporal_normal/IMG-0002-00089.jpg", "imgTemporal_normal/IMG-0002-00088.jpg", "imgTemporal_normal/IMG-0002-00087.jpg", "imgTemporal_normal/IMG-0002-00086.jpg", "imgTemporal_normal/IMG-0002-00085.jpg", "imgTemporal_normal/IMG-0002-00084.jpg", "imgTemporal_normal/IMG-0002-00083.jpg", "imgTemporal_normal/IMG-0002-00082.jpg", "imgTemporal_normal/IMG-0002-00081.jpg", "imgTemporal_normal/IMG-0002-00080.jpg", "imgTemporal_normal/IMG-0002-00079.jpg", "imgTemporal_normal/IMG-0002-00078.jpg", "imgTemporal_normal/IMG-0002-00077.jpg", "imgTemporal_normal/IMG-0002-00076.jpg", "imgTemporal_normal/IMG-0002-00075.jpg", "imgTemporal_normal/IMG-0002-00074.jpg", "imgTemporal_normal/IMG-0002-00073.jpg", "imgTemporal_normal/IMG-0002-00072.jpg", "imgTemporal_normal/IMG-0002-00071.jpg", "imgTemporal_normal/IMG-0002-00070.jpg", "imgTemporal_normal/IMG-0002-00069.jpg", "imgTemporal_normal/IMG-0002-00068.jpg", "imgTemporal_normal/IMG-0002-00067.jpg", "imgTemporal_normal/IMG-0002-00066.jpg", "imgTemporal_normal/IMG-0002-00065.jpg", "imgTemporal_normal/IMG-0002-00064.jpg", "imgTemporal_normal/IMG-0002-00063.jpg", "imgTemporal_normal/IMG-0002-00062.jpg", "imgTemporal_normal/IMG-0002-00061.jpg", "imgTemporal_normal/IMG-0002-00060.jpg", "imgTemporal_normal/IMG-0002-00059.jpg", "imgTemporal_normal/IMG-0002-00058.jpg", "imgTemporal_normal/IMG-0002-00057.jpg", "imgTemporal_normal/IMG-0002-00056.jpg", "imgTemporal_normal/IMG-0002-00055.jpg", "imgTemporal_normal/IMG-0002-00054.jpg"];

let imageElement_temporal_left = document.getElementById("main_Image_left_temporal");
let currentImageIndex_temporal_left = 0;


document.getElementById("main_Block_for_Img_left_temporal").onwheel = function() {
	
	if (event.deltaY > 0 || currentImageIndex_temporal_left === 0) {
		currentImageIndex_temporal_left += 1;
		if (currentImageIndex_temporal_left === images_temporal_left.length){
		currentImageIndex_temporal_left = 0;
	    }
		
	}
	else if (event.deltaY < 0) {
		currentImageIndex_temporal_left -= 1;
		if (currentImageIndex_temporal_left === 0){
		currentImageIndex_temporal_left = images_temporal_left.length -1;
	    }
		
	}

	imageElement_temporal_left.src = images_temporal_left[currentImageIndex_temporal_left];
	
	return false;
}
