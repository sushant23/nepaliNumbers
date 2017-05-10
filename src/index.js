function zeroFill(num, targetLength, forceSign) {
  const absNumber = '' + Math.abs(num), zerosToFill = targetLength - absNumber.length, sign = num >= 0;
  return (sign ? (forceSign ? '+' : '') : '-') +
    Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

export function devnagariNumerals(digit) {
  if (!digit) return null;
  const nDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    digits = digit.toString().split(''),
    output = [];


  for (let i = 0; i < digits.length; i++) {

    const digit = digits[i];

    if (isNumeric(digit)) {
      output.push(nDigits[parseInt(digit)])
    } else {
      output.push(digit)
    }
  }

  return output.join('');
}

export function getMonthName(digit) {
  const nMonths = ['बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज', 'कार्तिक', 'मङि्सर', 'पुष', 'माघ', 'फागुन', 'चैत'];
  digit = parseInt(digit, 10) - 1;
  let output = '';

  if (digit > 11) {
    output = "Month digit can't be more than 11. Falliing back to 1.";
    digit = 0;
  }

  for (let i = 0; i < nMonths.length; i++) {
    if (i === digit) {
      output = nMonths[i];
      break;
    }
  }
  ;

  return output;
}


export function getWeekName(digit) {
  const nWeeks = ['आइतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'];
  digit = parseInt(digit, 10) - 1,
    output = '';

  if (digit > 6) {
    output = "Week digit can't be more than 7. Falliing back to 1.";
    digit = 0;
  }

  for (let i = 0; i < nWeeks.length; i++) {
    if (i === digit) {
      output = nWeeks[i];
      break;
    }
  }
  ;

  return output;
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


export function translateNumberToNepaliWords(t) {
  if (isNaN(t) || "" == t)return "N/A";
  let n = "", e = 0, s;
  let number_parts;
  let decimal_words;
  let decimal_tens;
  if (-1 != t.indexOf(".") && (number_parts = t.split("."), t = number_parts[0], e = number_parts[1], decimal_tens = e.substring(0, 2).toString(), 1 == decimal_tens.length && (decimal_tens = decimal_tens.toString() + "0"), decimal_words = teens[parseInt(decimal_tens)].toString() + " पैसा"), t.length > 13)return void alert("Number greater than kharab not supported");
  const r = Math.floor(t % 100);
  if (t.toString().length > 2)
    s = t.toString().substring(t.toString().length - 3, t.toString().length - 2);
  let i = Math.floor(t % 1e5);
  i = i.toString(), i = i.substring(0, i.length - 3);
  let a = Math.floor(t % 1e7);
  a = a.toString(), a = a.substring(0, a.length - 5);
  let o = Math.floor(t % 1e9);
  o = o.toString(), o = o.substring(0, o.length - 7);
  let g = Math.floor(t % 1e11);
  g = g.toString(), g = g.substring(0, g.length - 9);
  let l = Math.floor(t % 1e13);
  return l = l.toString(), l = l.substring(0, l.length - 11), l > 0 && (n += teens[l] + " खरब"), g > 0 && (n += " " + teens[g] + " अरब"), o > 0 && (n += " " + teens[o] + " करोड"), a > 0 && (n += " " + teens[a] + " लाख"), i > 0 && (n += " " + teens[i] + " हजार"), s > 0 && (n += " " + units[s] + " सय"), r > 0 && (n += " " + teens[r]), n += " रुपैंया", e > 0 && (n += ", " + decimal_words), n
}
const units = ["सुन्य", "एक", "दुई", "तीन", "चार", "पाँच", "छ", "सात", "आठ", "नौ", "दस"], teens = ["सुन्य", "एक", "दुई", "तीन", "चार", "पाँच", "छ", "सात", "आठ", "नौ", "दस", "एघार", "बाह्र", "तेह्र", "चौध", "पन्ध्र", "सोह्र", "सत्र", "अठाह्र", "उन्नाइस", "बीस", "एकाइस", "बाइस", "तेइस", "चौबीस", "पचीस", "छब्बीस", "सत्ताइस", "अठ्ठाइस", "उनन्तीस", "तीस", "एकतीस", "बतीस", "तेतीस", "चौतीस", "पैतीस", "छतीस", "सरतीस", "अरतीस", "उननचालीस", "चालीस", "एकचालीस", "बयालिस", "तीरचालीस", "चौवालिस", "पैंतालिस", "छयालिस", "सरचालीस", "अरचालीस", "उननचास", "पचास", "एकाउन्न", "बाउन्न", "त्रिपन्न", "चौवन्न", "पच्पन्न", "छपन्न", "सन्ताउन्न", "अन्ठाउँन्न", "उनान्न्साठी ", "साठी", "एकसाठी", "बासाठी", "तीरसाठी", "चौंसाठी", "पैसाठी", "छैसठी", "सत्सठ्ठी", "अर्सठ्ठी", "उनन्सत्तरी", "सतरी", "एकहत्तर", "बहत्तर", "त्रिहत्तर", "चौहत्तर", "पचहत्तर", "छहत्तर", "सत्हत्तर", "अठ्हत्तर", "उनास्सी", "अस्सी", "एकासी", "बयासी", "त्रीयासी", "चौरासी", "पचासी", "छयासी", "सतासी", "अठासी", "उनान्नब्बे", "नब्बे", "एकान्नब्बे", "बयान्नब्बे", "त्रियान्नब्बे", "चौरान्नब्बे", "पंचान्नब्बे", "छयान्नब्बे", "सन्तान्‍नब्बे", "अन्ठान्नब्बे", "उनान्सय"], tens = ["", "दस", "बीस", "तीस", "चालीस", "पचास", "साठी", "सतरी", "अस्सी", "नब्बे"];




