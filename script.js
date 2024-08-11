

$(document).ready(function() {
    $('#keyword').on('keyup', function() {
        alert("wdsawda")
        // const keywordText = $(this).val().toLowerCase();
        // $('#item').each(function() {
        //     const itemText = $(this).data('name').toLowerCase();
        //     if (itemText.includes(keywordText)) {
        //         $(this).show();
        //     } else {
        //         $(this).hide();
        //     }
        // });
    });
});

// document.getElementById('keyword').addEventListener('keyup', function() {
//     var searchText = this.value.toLowerCase();
//     var products = document.querySelectorAll('#item');
//     products.forEach(function(product) {
//         var productName = product.getAttribute('data-name').toLowerCase();
//         if (productName.includes(searchText)) {
//             product.style.display = 'block';
//         } else {
//             product.style.display = 'none';
//         }
//     });
// });