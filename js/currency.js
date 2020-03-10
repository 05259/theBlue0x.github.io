
let dropdown = $('#quoteCurrency');

dropdown.append('<option selected="true" disabled>I would like to exchange...</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/quote_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, value2) {
    dropdown.append($('<option></option>').attr('value', value2).text(value2));
  })
});



