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


let qdropdown = $('#quoteCurrency');

qdropdown.append('<option selected="true" disabled>I would like to have this currency...</option>');
qdropdown.prop('selectedIndex', 0);

const qurl = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/quote_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(qurl, function (data) {
  $.each(data, function (key, quote) {
    qdropdown.append($('<option></option>').attr('value', quote).text(quote));
  })
});



