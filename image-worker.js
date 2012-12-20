// message receiver
onmessage = function(event) {
	var imageData = event.data.imageData,
		dst = imageData.data;

	/* Image Processing goes here */
	for (var i=0; i < dst.length; i += 4) {
		dst[i] += 70;
	}

	postMessage({
		dstData: imageData
	});
};
