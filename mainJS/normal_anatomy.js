


let images_brain = ["imgBrain/IMG-0003-00126.jpg", "imgBrain/IMG-0003-00125.jpg", "imgBrain/IMG-0003-00124.jpg", "imgBrain/IMG-0003-00123.jpg", "imgBrain/IMG-0003-00122.jpg", "imgBrain/IMG-0003-00121.jpg", "imgBrain/IMG-0003-00120.jpg", "imgBrain/IMG-0003-00119.jpg", "imgBrain/IMG-0003-00118.jpg", "imgBrain/IMG-0003-00117.jpg", "imgBrain/IMG-0003-00116.jpg", "imgBrain/IMG-0003-00115.jpg", "imgBrain/IMG-0003-00114.jpg", "imgBrain/IMG-0003-00113.jpg", "imgBrain/IMG-0003-00112.jpg", "imgBrain/IMG-0003-00111.jpg", "imgBrain/IMG-0003-00110.jpg", "imgBrain/IMG-0003-00109.jpg", "imgBrain/IMG-0003-00108.jpg", "imgBrain/IMG-0003-00107.jpg", "imgBrain/IMG-0003-00106.jpg", "imgBrain/IMG-0003-00105.jpg", "imgBrain/IMG-0003-00104.jpg", "imgBrain/IMG-0003-00103.jpg", "imgBrain/IMG-0003-00102.jpg", "imgBrain/IMG-0003-00101.jpg", "imgBrain/IMG-0003-00100.jpg", "imgBrain/IMG-0003-00099.jpg", "imgBrain/IMG-0003-00098.jpg", "imgBrain/IMG-0003-00097.jpg", "imgBrain/IMG-0003-00096.jpg", "imgBrain/IMG-0003-00095.jpg", "imgBrain/IMG-0003-00094.jpg", "imgBrain/IMG-0003-00093.jpg", "imgBrain/IMG-0003-00092.jpg", "imgBrain/IMG-0003-00091.jpg", "imgBrain/IMG-0003-00090.jpg", "imgBrain/IMG-0003-00089.jpg", "imgBrain/IMG-0003-00088.jpg", "imgBrain/IMG-0003-00087.jpg", "imgBrain/IMG-0003-00086.jpg", "imgBrain/IMG-0003-00085.jpg", "imgBrain/IMG-0003-00084.jpg", "imgBrain/IMG-0003-00083.jpg", "imgBrain/IMG-0003-00082.jpg", "imgBrain/IMG-0003-00081.jpg", "imgBrain/IMG-0003-00080.jpg", "imgBrain/IMG-0003-00079.jpg", "imgBrain/IMG-0003-00078.jpg", "imgBrain/IMG-0003-00077.jpg", "imgBrain/IMG-0003-00076.jpg", "imgBrain/IMG-0003-00075.jpg", "imgBrain/IMG-0003-00074.jpg", "imgBrain/IMG-0003-00073.jpg", "imgBrain/IMG-0003-00072.jpg", "imgBrain/IMG-0003-00071.jpg", "imgBrain/IMG-0003-00070.jpg", "imgBrain/IMG-0003-00069.jpg", "imgBrain/IMG-0003-00068.jpg", "imgBrain/IMG-0003-00067.jpg", "imgBrain/IMG-0003-00066.jpg", "imgBrain/IMG-0003-00065.jpg", "imgBrain/IMG-0003-00064.jpg", "imgBrain/IMG-0003-00063.jpg", "imgBrain/IMG-0003-00062.jpg", "imgBrain/IMG-0003-00061.jpg", "imgBrain/IMG-0003-00060.jpg", "imgBrain/IMG-0003-00059.jpg", "imgBrain/IMG-0003-00058.jpg", "imgBrain/IMG-0003-00057.jpg", "imgBrain/IMG-0003-00056.jpg", "imgBrain/IMG-0003-00055.jpg", "imgBrain/IMG-0003-00054.jpg", "imgBrain/IMG-0003-00053.jpg", "imgBrain/IMG-0003-00052.jpg", "imgBrain/IMG-0003-00051.jpg", "imgBrain/IMG-0003-00050.jpg", "imgBrain/IMG-0003-00049.jpg", "imgBrain/IMG-0003-00048.jpg", "imgBrain/IMG-0003-00047.jpg", "imgBrain/IMG-0003-00046.jpg", "imgBrain/IMG-0003-00045.jpg", "imgBrain/IMG-0003-00044.jpg", "imgBrain/IMG-0003-00043.jpg", "imgBrain/IMG-0003-00042.jpg", "imgBrain/IMG-0003-00041.jpg", "imgBrain/IMG-0003-00040.jpg", "imgBrain/IMG-0003-00039.jpg", "imgBrain/IMG-0003-00038.jpg", "imgBrain/IMG-0003-00037.jpg", "imgBrain/IMG-0003-00036.jpg", "imgBrain/IMG-0003-00035.jpg", "imgBrain/IMG-0003-00034.jpg", "imgBrain/IMG-0003-00033.jpg", "imgBrain/IMG-0003-00032.jpg", "imgBrain/IMG-0003-00031.jpg", "imgBrain/IMG-0003-00030.jpg", "imgBrain/IMG-0003-00029.jpg", "imgBrain/IMG-0003-00028.jpg", "imgBrain/IMG-0003-00027.jpg", "imgBrain/IMG-0003-00026.jpg", "imgBrain/IMG-0003-00025.jpg", "imgBrain/IMG-0003-00024.jpg", "imgBrain/IMG-0003-00023.jpg", "imgBrain/IMG-0003-00022.jpg", "imgBrain/IMG-0003-00021.jpg", "imgBrain/IMG-0003-00020.jpg", "imgBrain/IMG-0003-00019.jpg", "imgBrain/IMG-0003-00018.jpg", "imgBrain/IMG-0003-00017.jpg", "imgBrain/IMG-0003-00016.jpg", "imgBrain/IMG-0003-00015.jpg", "imgBrain/IMG-0003-00014.jpg", "imgBrain/IMG-0003-00013.jpg", "imgBrain/IMG-0003-00012.jpg", "imgBrain/IMG-0003-00011.jpg", "imgBrain/IMG-0003-00010.jpg", "imgBrain/IMG-0003-00009.jpg", "imgBrain/IMG-0003-00008.jpg", "imgBrain/IMG-0003-00007.jpg", "imgBrain/IMG-0003-00006.jpg", "imgBrain/IMG-0003-00005.jpg", "imgBrain/IMG-0003-00004.jpg", "imgBrain/IMG-0003-00003.jpg", "imgBrain/IMG-0003-00002.jpg", "imgBrain/IMG-0003-00001.jpg" ];


let imageElement_brain = document.getElementById("main_Image_brain");
let currentImageIndex_brain = 0;


document.getElementById("main_Block_for_Img_brain").onwheel = function() {
	
	if (event.deltaY > 0 || currentImageIndex_brain === 0) {
		currentImageIndex_brain += 1;
		if (currentImageIndex_brain === images_brain.length){
		currentImageIndex_brain = 0;
	    }
		
	}
	else if (event.deltaY < 0) {
		currentImageIndex_brain -= 1;
		if (currentImageIndex_brain === 0){
		currentImageIndex_brain = images_brain.length -1;
	    }
		
	}

	imageElement_brain.src = images_brain[currentImageIndex_brain];
	
	return false;
}

let images_chest = ["imgChest/IMG-0002-00138.jpg","imgChest/IMG-0002-00137.jpg","imgChest/IMG-0002-00136.jpg","imgChest/IMG-0002-00135.jpg","imgChest/IMG-0002-00134.jpg","imgChest/IMG-0002-00133.jpg","imgChest/IMG-0002-00132.jpg","imgChest/IMG-0002-00131.jpg","imgChest/IMG-0002-00130.jpg","imgChest/IMG-0002-00129.jpg","imgChest/IMG-0002-00128.jpg","imgChest/IMG-0002-00127.jpg","imgChest/IMG-0002-00126.jpg", "imgChest/IMG-0002-00125.jpg", "imgChest/IMG-0002-00124.jpg", "imgChest/IMG-0002-00123.jpg", "imgChest/IMG-0002-00122.jpg", "imgChest/IMG-0002-00121.jpg", "imgChest/IMG-0002-00120.jpg", "imgChest/IMG-0002-00119.jpg", "imgChest/IMG-0002-00118.jpg", "imgChest/IMG-0002-00117.jpg", "imgChest/IMG-0002-00116.jpg", "imgChest/IMG-0002-00115.jpg", "imgChest/IMG-0002-00114.jpg", "imgChest/IMG-0002-00113.jpg", "imgChest/IMG-0002-00112.jpg", "imgChest/IMG-0002-00111.jpg", "imgChest/IMG-0002-00110.jpg", "imgChest/IMG-0002-00109.jpg", "imgChest/IMG-0002-00108.jpg", "imgChest/IMG-0002-00107.jpg", "imgChest/IMG-0002-00106.jpg", "imgChest/IMG-0002-00105.jpg", "imgChest/IMG-0002-00104.jpg", "imgChest/IMG-0002-00103.jpg", "imgChest/IMG-0002-00102.jpg", "imgChest/IMG-0002-00101.jpg", "imgChest/IMG-0002-00100.jpg", "imgChest/IMG-0002-00099.jpg", "imgChest/IMG-0002-00098.jpg", "imgChest/IMG-0002-00097.jpg", "imgChest/IMG-0002-00096.jpg", "imgChest/IMG-0002-00095.jpg", "imgChest/IMG-0002-00094.jpg", "imgChest/IMG-0002-00093.jpg", "imgChest/IMG-0002-00092.jpg", "imgChest/IMG-0002-00091.jpg", "imgChest/IMG-0002-00090.jpg", "imgChest/IMG-0002-00089.jpg", "imgChest/IMG-0002-00088.jpg", "imgChest/IMG-0002-00087.jpg", "imgChest/IMG-0002-00086.jpg", "imgChest/IMG-0002-00085.jpg", "imgChest/IMG-0002-00084.jpg", "imgChest/IMG-0002-00083.jpg", "imgChest/IMG-0002-00082.jpg", "imgChest/IMG-0002-00081.jpg", "imgChest/IMG-0002-00080.jpg", "imgChest/IMG-0002-00079.jpg", "imgChest/IMG-0002-00078.jpg", "imgChest/IMG-0002-00077.jpg", "imgChest/IMG-0002-00076.jpg", "imgChest/IMG-0002-00075.jpg", "imgChest/IMG-0002-00074.jpg", "imgChest/IMG-0002-00073.jpg", "imgChest/IMG-0002-00072.jpg", "imgChest/IMG-0002-00071.jpg", "imgChest/IMG-0002-00070.jpg", "imgChest/IMG-0002-00069.jpg", "imgChest/IMG-0002-00068.jpg", "imgChest/IMG-0002-00067.jpg", "imgChest/IMG-0002-00066.jpg", "imgChest/IMG-0002-00065.jpg", "imgChest/IMG-0002-00064.jpg", "imgChest/IMG-0002-00063.jpg", "imgChest/IMG-0002-00062.jpg", "imgChest/IMG-0002-00061.jpg", "imgChest/IMG-0002-00060.jpg", "imgChest/IMG-0002-00059.jpg", "imgChest/IMG-0002-00058.jpg", "imgChest/IMG-0002-00057.jpg", "imgChest/IMG-0002-00056.jpg", "imgChest/IMG-0002-00055.jpg", "imgChest/IMG-0002-00054.jpg", "imgChest/IMG-0002-00053.jpg", "imgChest/IMG-0002-00052.jpg", "imgChest/IMG-0002-00051.jpg", "imgChest/IMG-0002-00050.jpg", "imgChest/IMG-0002-00049.jpg", "imgChest/IMG-0002-00048.jpg", "imgChest/IMG-0002-00047.jpg", "imgChest/IMG-0002-00046.jpg", "imgChest/IMG-0002-00045.jpg", "imgChest/IMG-0002-00044.jpg", "imgChest/IMG-0002-00043.jpg", "imgChest/IMG-0002-00042.jpg", "imgChest/IMG-0002-00041.jpg", "imgChest/IMG-0002-00040.jpg", "imgChest/IMG-0002-00039.jpg", "imgChest/IMG-0002-00038.jpg", "imgChest/IMG-0002-00037.jpg", "imgChest/IMG-0002-00036.jpg", "imgChest/IMG-0002-00035.jpg", "imgChest/IMG-0002-00034.jpg", "imgChest/IMG-0002-00033.jpg", "imgChest/IMG-0002-00032.jpg", "imgChest/IMG-0002-00031.jpg", "imgChest/IMG-0002-00030.jpg", "imgChest/IMG-0002-00029.jpg", "imgChest/IMG-0002-00028.jpg", "imgChest/IMG-0002-00027.jpg", "imgChest/IMG-0002-00026.jpg", "imgChest/IMG-0002-00025.jpg", "imgChest/IMG-0002-00024.jpg", "imgChest/IMG-0002-00023.jpg", "imgChest/IMG-0002-00022.jpg", "imgChest/IMG-0002-00021.jpg", "imgChest/IMG-0002-00020.jpg", "imgChest/IMG-0002-00019.jpg", "imgChest/IMG-0002-00018.jpg", "imgChest/IMG-0002-00017.jpg", "imgChest/IMG-0002-00016.jpg", "imgChest/IMG-0002-00015.jpg", "imgChest/IMG-0002-00014.jpg", "imgChest/IMG-0002-00013.jpg", "imgChest/IMG-0002-00012.jpg", "imgChest/IMG-0002-00011.jpg", "imgChest/IMG-0002-00010.jpg", "imgChest/IMG-0002-00009.jpg", "imgChest/IMG-0002-00008.jpg", "imgChest/IMG-0002-00007.jpg", "imgChest/IMG-0002-00006.jpg", "imgChest/IMG-0002-00005.jpg", "imgChest/IMG-0002-00004.jpg", "imgChest/IMG-0002-00003.jpg", "imgChest/IMG-0002-00002.jpg", "imgChest/IMG-0002-00001.jpg" ];

let imageElement_chest = document.getElementById("main_Image_chest");
let currentImageIndex_chest = 0;


document.getElementById("main_Block_for_Img_chest").onwheel = function brain_scroll() {
	
	if (event.deltaY < 0 || currentImageIndex_chest === 0) {
		currentImageIndex_chest += 1;
		if (currentImageIndex_chest === images_chest.length){
		currentImageIndex_chest = 0;
	    }
		
	}
	else if (event.deltaY > 0) {
		currentImageIndex_chest -= 1;
		if (currentImageIndex_chest === 0){
		currentImageIndex_chest = images_chest.length -1;
	    }
		
	}

	imageElement_chest.src = images_chest[currentImageIndex_chest];
	
	return false;
}

