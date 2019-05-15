
let images_abscess_liver_native = ["imgAbscessLiver/IMG-0005-00117.jpg", "imgAbscessLiver/IMG-0005-00116.jpg", "imgAbscessLiver/IMG-0005-00115.jpg", "imgAbscessLiver/IMG-0005-00114.jpg", "imgAbscessLiver/IMG-0005-00113.jpg", "imgAbscessLiver/IMG-0005-00112.jpg", "imgAbscessLiver/IMG-0005-00111.jpg", "imgAbscessLiver/IMG-0005-00110.jpg", "imgAbscessLiver/IMG-0005-00109.jpg", "imgAbscessLiver/IMG-0005-00108.jpg", "imgAbscessLiver/IMG-0005-00107.jpg", "imgAbscessLiver/IMG-0005-00106.jpg", "imgAbscessLiver/IMG-0005-00105.jpg", "imgAbscessLiver/IMG-0005-00104.jpg", "imgAbscessLiver/IMG-0005-00103.jpg", "imgAbscessLiver/IMG-0005-00102.jpg", "imgAbscessLiver/IMG-0005-00101.jpg", "imgAbscessLiver/IMG-0005-00100.jpg", "imgAbscessLiver/IMG-0005-00099.jpg", "imgAbscessLiver/IMG-0005-00098.jpg", "imgAbscessLiver/IMG-0005-00097.jpg", "imgAbscessLiver/IMG-0005-00096.jpg", "imgAbscessLiver/IMG-0005-00095.jpg", "imgAbscessLiver/IMG-0005-00094.jpg", "imgAbscessLiver/IMG-0005-00093.jpg", "imgAbscessLiver/IMG-0005-00092.jpg", "imgAbscessLiver/IMG-0005-00091.jpg", "imgAbscessLiver/IMG-0005-00090.jpg", "imgAbscessLiver/IMG-0005-00089.jpg", "imgAbscessLiver/IMG-0005-00088.jpg", "imgAbscessLiver/IMG-0005-00087.jpg", "imgAbscessLiver/IMG-0005-00086.jpg", "imgAbscessLiver/IMG-0005-00085.jpg", "imgAbscessLiver/IMG-0005-00084.jpg", "imgAbscessLiver/IMG-0005-00083.jpg", "imgAbscessLiver/IMG-0005-00082.jpg", "imgAbscessLiver/IMG-0005-00081.jpg", "imgAbscessLiver/IMG-0005-00080.jpg", "imgAbscessLiver/IMG-0005-00079.jpg", "imgAbscessLiver/IMG-0005-00078.jpg", "imgAbscessLiver/IMG-0005-00077.jpg", "imgAbscessLiver/IMG-0005-00076.jpg", "imgAbscessLiver/IMG-0005-00075.jpg", "imgAbscessLiver/IMG-0005-00074.jpg", "imgAbscessLiver/IMG-0005-00073.jpg", "imgAbscessLiver/IMG-0005-00072.jpg", "imgAbscessLiver/IMG-0005-00071.jpg", "imgAbscessLiver/IMG-0005-00070.jpg", "imgAbscessLiver/IMG-0005-00069.jpg", "imgAbscessLiver/IMG-0005-00068.jpg", "imgAbscessLiver/IMG-0005-00067.jpg", "imgAbscessLiver/IMG-0005-00066.jpg", "imgAbscessLiver/IMG-0005-00065.jpg", "imgAbscessLiver/IMG-0005-00064.jpg", "imgAbscessLiver/IMG-0005-00063.jpg", "imgAbscessLiver/IMG-0005-00062.jpg", "imgAbscessLiver/IMG-0005-00061.jpg", "imgAbscessLiver/IMG-0005-00060.jpg", "imgAbscessLiver/IMG-0005-00059.jpg", "imgAbscessLiver/IMG-0005-00058.jpg", "imgAbscessLiver/IMG-0005-00057.jpg", "imgAbscessLiver/IMG-0005-00056.jpg", "imgAbscessLiver/IMG-0005-00055.jpg", "imgAbscessLiver/IMG-0005-00054.jpg", "imgAbscessLiver/IMG-0005-00053.jpg", "imgAbscessLiver/IMG-0005-00052.jpg", "imgAbscessLiver/IMG-0005-00051.jpg", "imgAbscessLiver/IMG-0005-00050.jpg", "imgAbscessLiver/IMG-0005-00049.jpg", "imgAbscessLiver/IMG-0005-00048.jpg", "imgAbscessLiver/IMG-0005-00047.jpg", "imgAbscessLiver/IMG-0005-00046.jpg", "imgAbscessLiver/IMG-0005-00045.jpg", "imgAbscessLiver/IMG-0005-00044.jpg", "imgAbscessLiver/IMG-0005-00043.jpg", "imgAbscessLiver/IMG-0005-00042.jpg", "imgAbscessLiver/IMG-0005-00041.jpg", "imgAbscessLiver/IMG-0005-00040.jpg", "imgAbscessLiver/IMG-0005-00039.jpg", "imgAbscessLiver/IMG-0005-00038.jpg", "imgAbscessLiver/IMG-0005-00037.jpg", "imgAbscessLiver/IMG-0005-00036.jpg", "imgAbscessLiver/IMG-0005-00035.jpg", "imgAbscessLiver/IMG-0005-00034.jpg", "imgAbscessLiver/IMG-0005-00033.jpg", "imgAbscessLiver/IMG-0005-00032.jpg", "imgAbscessLiver/IMG-0005-00031.jpg", "imgAbscessLiver/IMG-0005-00030.jpg", "imgAbscessLiver/IMG-0005-00029.jpg", "imgAbscessLiver/IMG-0005-00028.jpg", "imgAbscessLiver/IMG-0005-00027.jpg", "imgAbscessLiver/IMG-0005-00026.jpg", "imgAbscessLiver/IMG-0005-00025.jpg", "imgAbscessLiver/IMG-0005-00024.jpg", "imgAbscessLiver/IMG-0005-00023.jpg", "imgAbscessLiver/IMG-0005-00022.jpg", "imgAbscessLiver/IMG-0005-00021.jpg", "imgAbscessLiver/IMG-0005-00020.jpg", "imgAbscessLiver/IMG-0005-00019.jpg", "imgAbscessLiver/IMG-0005-00018.jpg", "imgAbscessLiver/IMG-0005-00017.jpg", "imgAbscessLiver/IMG-0005-00016.jpg", "imgAbscessLiver/IMG-0005-00015.jpg", "imgAbscessLiver/IMG-0005-00014.jpg", "imgAbscessLiver/IMG-0005-00013.jpg", "imgAbscessLiver/IMG-0005-00012.jpg", "imgAbscessLiver/IMG-0005-00011.jpg"];


let imageElement_abscess_liver_native = document.getElementById("main_Image_abscess_liver_native");
let currentImageIndex_abscess_liver_native = 0;


document.getElementById("main_Block_for_Img_abscess_liver_native").onwheel = function mts_abscess_nativ() {
	
	if (event.deltaY < 0 || currentImageIndex_abscess_liver_native === 0) {
		currentImageIndex_abscess_liver_native += 1;
		if (currentImageIndex_abscess_liver_native === images_abscess_liver_native.length){
		currentImageIndex_abscess_liver_native = 0;
	    }
		
	}
	else if (event.deltaY > 0) {
		currentImageIndex_abscess_liver_native -= 1;
		if (currentImageIndex_abscess_liver_native === 0){
		currentImageIndex_abscess_liver_native = images_abscess_liver_native.length -1;
	    }
		
	}
	imageElement_abscess_liver_native.src = images_abscess_liver_native[currentImageIndex_abscess_liver_native];
	
	return false;
}

let images_abscess_liver_portal = ["imgAbscessLiver/IMG-0007-00096.jpg", "imgAbscessLiver/IMG-0007-00095.jpg", "imgAbscessLiver/IMG-0007-00094.jpg", "imgAbscessLiver/IMG-0007-00093.jpg", "imgAbscessLiver/IMG-0007-00092.jpg", "imgAbscessLiver/IMG-0007-00091.jpg", "imgAbscessLiver/IMG-0007-00090.jpg", "imgAbscessLiver/IMG-0007-00089.jpg", "imgAbscessLiver/IMG-0007-00088.jpg", "imgAbscessLiver/IMG-0007-00087.jpg", "imgAbscessLiver/IMG-0007-00086.jpg", "imgAbscessLiver/IMG-0007-00085.jpg", "imgAbscessLiver/IMG-0007-00084.jpg", "imgAbscessLiver/IMG-0007-00083.jpg", "imgAbscessLiver/IMG-0007-00082.jpg", "imgAbscessLiver/IMG-0007-00081.jpg", "imgAbscessLiver/IMG-0007-00080.jpg", "imgAbscessLiver/IMG-0007-00079.jpg", "imgAbscessLiver/IMG-0007-00078.jpg", "imgAbscessLiver/IMG-0007-00077.jpg", "imgAbscessLiver/IMG-0007-00076.jpg", "imgAbscessLiver/IMG-0007-00075.jpg", "imgAbscessLiver/IMG-0007-00074.jpg", "imgAbscessLiver/IMG-0007-00073.jpg", "imgAbscessLiver/IMG-0007-00072.jpg", "imgAbscessLiver/IMG-0007-00071.jpg", "imgAbscessLiver/IMG-0007-00070.jpg", "imgAbscessLiver/IMG-0007-00069.jpg", "imgAbscessLiver/IMG-0007-00068.jpg", "imgAbscessLiver/IMG-0007-00067.jpg", "imgAbscessLiver/IMG-0007-00066.jpg", "imgAbscessLiver/IMG-0007-00065.jpg", "imgAbscessLiver/IMG-0007-00064.jpg", "imgAbscessLiver/IMG-0007-00063.jpg", "imgAbscessLiver/IMG-0007-00062.jpg", "imgAbscessLiver/IMG-0007-00061.jpg", "imgAbscessLiver/IMG-0007-00060.jpg", "imgAbscessLiver/IMG-0007-00059.jpg", "imgAbscessLiver/IMG-0007-00058.jpg", "imgAbscessLiver/IMG-0007-00057.jpg", "imgAbscessLiver/IMG-0007-00056.jpg", "imgAbscessLiver/IMG-0007-00055.jpg", "imgAbscessLiver/IMG-0007-00054.jpg", "imgAbscessLiver/IMG-0007-00053.jpg", "imgAbscessLiver/IMG-0007-00052.jpg", "imgAbscessLiver/IMG-0007-00051.jpg", "imgAbscessLiver/IMG-0007-00050.jpg", "imgAbscessLiver/IMG-0007-00049.jpg", "imgAbscessLiver/IMG-0007-00048.jpg", "imgAbscessLiver/IMG-0007-00047.jpg", "imgAbscessLiver/IMG-0007-00046.jpg", "imgAbscessLiver/IMG-0007-00045.jpg", "imgAbscessLiver/IMG-0007-00044.jpg", "imgAbscessLiver/IMG-0007-00043.jpg", "imgAbscessLiver/IMG-0007-00042.jpg", "imgAbscessLiver/IMG-0007-00041.jpg", "imgAbscessLiver/IMG-0007-00040.jpg", "imgAbscessLiver/IMG-0007-00039.jpg", "imgAbscessLiver/IMG-0007-00038.jpg", "imgAbscessLiver/IMG-0007-00037.jpg", "imgAbscessLiver/IMG-0007-00036.jpg", "imgAbscessLiver/IMG-0007-00035.jpg", "imgAbscessLiver/IMG-0007-00034.jpg", "imgAbscessLiver/IMG-0007-00033.jpg", "imgAbscessLiver/IMG-0007-00032.jpg", "imgAbscessLiver/IMG-0007-00031.jpg", "imgAbscessLiver/IMG-0007-00030.jpg", "imgAbscessLiver/IMG-0007-00029.jpg", "imgAbscessLiver/IMG-0007-00028.jpg", "imgAbscessLiver/IMG-0007-00027.jpg", "imgAbscessLiver/IMG-0007-00026.jpg", "imgAbscessLiver/IMG-0007-00025.jpg", "imgAbscessLiver/IMG-0007-00024.jpg", "imgAbscessLiver/IMG-0007-00023.jpg", "imgAbscessLiver/IMG-0007-00022.jpg", "imgAbscessLiver/IMG-0007-00021.jpg", "imgAbscessLiver/IMG-0007-00020.jpg", "imgAbscessLiver/IMG-0007-00019.jpg", "imgAbscessLiver/IMG-0007-00018.jpg", "imgAbscessLiver/IMG-0007-00017.jpg", "imgAbscessLiver/IMG-0007-00016.jpg", "imgAbscessLiver/IMG-0007-00015.jpg", "imgAbscessLiver/IMG-0007-00014.jpg", "imgAbscessLiver/IMG-0007-00013.jpg", "imgAbscessLiver/IMG-0007-00012.jpg", "imgAbscessLiver/IMG-0007-00011.jpg"];

let imageElement_abscess_liver_portal = document.getElementById("main_Image_abscess_liver_portal");
let currentImageIndex_abscess_liver_portal = 0;


document.getElementById("main_Block_for_Img_abscess_liver_portal").onwheel = function mts_abscess_portal() {
	
	if (event.deltaY < 0 || currentImageIndex_abscess_liver_portal === 0) {
		currentImageIndex_abscess_liver_portal += 1;
		if (currentImageIndex_abscess_liver_portal === images_abscess_liver_portal.length){
		currentImageIndex_abscess_liver_portal = 0;
	    }
		
	}
	else if (event.deltaY > 0) {
		currentImageIndex_abscess_liver_portal -= 1;
		if (currentImageIndex_abscess_liver_portal === 0){
		currentImageIndex_abscess_liver_portal = images_abscess_liver_portal.length -1;
	    }
		
	}
	imageElement_abscess_liver_portal.src = images_abscess_liver_portal[currentImageIndex_abscess_liver_portal];
	
	return false;
}