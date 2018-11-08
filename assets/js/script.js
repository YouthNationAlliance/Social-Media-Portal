// Open the main modal
$(window).on('load', function() {
	$('#modal1').modal('show');
});

// Open sharing modal
$('#btn').on('click', function() {
	$('#sharingmodal').modal('show');
});

// Open sharing modal with collapsed button
$('#btn1').on('click', function() {
	$('#sharingmodal').modal('show');
});

// Reload page after closing sharing modal
$('#sharingmodal').on('hidden.bs.modal', function() {
	location.reload();
});

// For loading page animation
function myFunction() {
    var myVar = setTimeout(showPage, 2000);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("logo").style.display = "none";
	document.getElementById("myDiv").style.display = "block";
}