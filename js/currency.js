let dropdown = $('#baseCurrency');

dropdown.append('<option selected="true" disabled>I have this currency...</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/base_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, value) {
    dropdown.append($('<option></option>').attr('value', value).text(value));
  })
});


let quotedropdown = $('#quoteCurrency');

dropdown.append('<option selected="true" disabled>I would like to have this currency...</option>');
dropdown.prop('selectedIndex', 0);

const quoteurl = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/quote_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(quoteurl, function (data) {
  $.each(data, function (key, quotevalue) {
    quotedropdown.append($('<option></option>').attr('value', quotevalue).text(quotevalue));
  })
});



