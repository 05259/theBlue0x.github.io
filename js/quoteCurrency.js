let dropdown = $('#quoteCurrency');

dropdown.empty();

dropdown.append('<option selected="true" disabled>I would like this currency...</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://openexchangerates.org/api/currencies.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, value) {
    dropdown.append($('<option></option>').attr('value', value).text(value));
  })
});
