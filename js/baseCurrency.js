dropdown.append('<option selected="true" disabled>I have this currency...</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://raw.githubusercontent.com/theBlue0x/theBlue0x.github.io/master/currencies.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, value) {
    $('#baseCurrency').append($('<option></option>').attr('value', value).text(value));
  })
});

