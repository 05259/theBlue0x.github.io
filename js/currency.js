
let basedropdown = $('#baseCurrency');

basedropdown.append('<option selected="true" disabled>I would like to exchange...</option>');
basedropdown.prop('selectedIndex', 0);

const baseurl = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/quote_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(baseurl, function (data) {
  $.each(data, function (key, value) {
    basedropdown.append($('<option></option>').attr('value', value).text(value));
  })
});



