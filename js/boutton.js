$(document).ready(function() {
    // Ouvrir le pop-up et désactiver le défilement
    $(".button-reserv").on('click', function() {
        $(".custom-model-main").addClass('model-open');
        $("body").addClass('no-scroll'); // Désactiver le défilement
    });

    // Fermer le pop-up et réactiver le défilement
    $(".close-btn, .bg-overlay").click(function() {
        $(".custom-model-main").removeClass('model-open');
        $("body").removeClass('no-scroll'); // Réactiver le défilement
    });
}); 