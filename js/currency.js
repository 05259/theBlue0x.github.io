let dropdown = $('#baseCurrency');

dropdown.append('<option selected="true" disabled>I have this currency...</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/base_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(url, function(data) {
  $.each(data, function(key, value) {
    dropdown.append($('<option></option>').attr('value', key).text(value));
  })
});

let dropdown2 = $('#quoteCurrency');

dropdown2.append('<option selected="true" disabled>I would like to have this currency...</option>');
dropdown2.prop('selectedIndex', 0);

const url2 = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/quote_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(url2, function(data) {
  $.each(data, function(key2, value2) {
    dropdown2.append($('<option></option>').attr('value', key2).text(value2));
  })
});



