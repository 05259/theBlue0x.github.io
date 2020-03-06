let dropdown = $('#baseCurrency');

dropdown.append('<option selected="true" disabled>I have this currency...</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/currencies.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, value) {
    dropdown.append($('<option></option>').attr('value', value).text(value));
  })
});

let dropdown2 = $('#quoteCurrency');

dropdown2.append('<option selected="true" disabled>I would like this currency...</option>');
dropdown2.prop('selectedIndex', 0);

const url2 = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/currencies.json';

// Populate dropdown with list of provinces
$.getJSON(url2, function (data) {
  $.each(data, function (key, value2) {
    dropdown2.append($('<option></option>').attr('value', value2).text(value2));
  })
});



