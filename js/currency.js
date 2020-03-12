let basedropdown = $('#baseCurrency');

basedropdown.append('<option selected="true" disabled>I have this currency...</option>');
basedropdown.prop('selectedIndex', 0);

const baseurl = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/base_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(baseurl, function (data) {
  $.each(data, function (key, value) {
    basedropdown.append($('<option></option>').attr('value', value).text(value));
  })
})

let quotedropdown = $('#quoteCurrency');

quotedropdown.append('<option selected="true" disabled>I would like to have this currency...</option>');
quotedropdown.prop('selectedIndex', 0);

const quoteurl = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/quote_currencies.json';

// Populate dropdown with list of provinces
$.getJSON(quoteurl, function (data) {
  $.each(data, function (key, value) {
    quotedropdown.append($('<option></option>').attr('value', quotevalue).text(quotevalue));
  })
});
;



