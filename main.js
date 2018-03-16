$(document).ready(function () {
    $('#modalhotel').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('textaffich') 
        var modal = $(this)
        modal.find('.modal-title').text(recipient)
      })
});