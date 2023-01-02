function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class CapitalsApi {
  constructor() {
    this.capitals = [
      { country: "Japan", capital: "Tokyo", alta: "Bangkok", altb: "Rangoon" },
      {
        country: "North Korea",
        capital: "Pyongyang",
        alta: "Hanoi",
        altb: "Phnom Penh",
      },
      {
        country: "South Korea",
        capital: "Seoul",
        alta: "Dhaka",
        altb: "Beijing",
      },
      {
        country: "Laos",
        capital: "Vientiane",
        alta: "Thimphu",
        altb: "New Delhi",
      },
      {
        country: "Malaysia",
        capital: "Kuala Lumpur",
        alta: "Rangoon",
        altb: "Jakarta",
      },
      {
        country: "Nepal",
        capital: "Kathmandu",
        alta: "Phnom Penh",
        altb: "Tokyo",
      },
      {
        country: "Pakistan",
        capital: "Islamabad",
        alta: "Beijing",
        altb: "Pyongyang",
      },
      {
        country: "Philippines",
        capital: "Manila",
        alta: "New Delhi",
        altb: "Vientiane",
      },
      {
        country: "Sri Lanka",
        capital: "Colombo",
        alta: "Jakarta",
        altb: "Kuala Lumpur",
      },
      {
        country: "Taiwan",
        capital: "Taipei",
        alta: "Tokyo",
        altb: "Kathmandu",
      },
      {
        country: "Thailand",
        capital: "Bangkok",
        alta: "Pyongyang",
        altb: "Islamabad",
      },
      { country: "Vietnam", capital: "Hanoi", alta: "Seoul", altb: "Colombo" },
    ];
  }

  count() {
    // return this.capitals.length;
    return 5; // om te testen, later vervangen door this.capitals.length;
  }

  all() {
    return this.capitals;
  }

  get(i) {
    return this.capitals[i];
  }

  getAnswers(i) {
    var answers = [
      this.capitals[i].capital,
      this.capitals[i].alta,
      this.capitals[i].altb,
    ];
    return shuffle(answers);
  }
}

export default CapitalsApi;
