
let images_cancer_of_maxillary_sinus = [
"imgMaxillary_sinus_cancer/IMG-0016-00048.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00049.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00050.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00051.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00052.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00053.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00054.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00055.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00056.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00057.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00058.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00059.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00060.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00061.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00062.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00063.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00064.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00065.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00066.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00067.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00068.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00069.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00070.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00071.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00072.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00073.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00074.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00075.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00076.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00077.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00078.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00079.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00080.jpg", "imgMaxillary_sinus_cancer/IMG-0016-00081.jpg", 
];

let imageElement_cancer_of_maxillary_sinus = document.getElementById("main_Image_cr_maxillary_sinus");
let currentImageIndex_cancer_of_maxillary_sinus = 0;


document.getElementById("main_Block_for_Img_cr_maxillary_sinus").onwheel = function cancer_of_maxillary_sinus() {
	
	if (event.deltaY < 0 || currentImageIndex_cancer_of_maxillary_sinus === 0) {
		currentImageIndex_cancer_of_maxillary_sinus += 1;
		if (currentImageIndex_cancer_of_maxillary_sinus === images_cancer_of_maxillary_sinus.length){
		currentImageIndex_cancer_of_maxillary_sinus = 0;
	    }
		
	}
	else if (event.deltaY > 0) {
		currentImageIndex_cancer_of_maxillary_sinus -= 1;
		if (currentImageIndex_cancer_of_maxillary_sinus === 0){
		currentImageIndex_cancer_of_maxillary_sinus = images_cancer_of_maxillary_sinus.length -1;
	    }
		
	}
	imageElement_cancer_of_maxillary_sinus.src = images_cancer_of_maxillary_sinus[currentImageIndex_cancer_of_maxillary_sinus];
	
	return false;
}
