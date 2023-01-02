class HighscoresApi {
  constructor() {
    this.scores = [];

    if (localStorage.scores) {
      this.scores = JSON.parse(localStorage.scores);
    } else {
      this.scores = [
        { player: "Fred", score: 5 },
        { player: "Dorien", score: 4 },
        { player: "Paul", score: 3 },
        { player: "Els", score: 2 },
        { player: "Wout", score: 1 },
      ];
      this.saveLocalStorage();
    }
  }

  count() {
    return this.scores.length;
  }

  all() {
    return this.scores.sort((b, a) => a.score - b.score);
  }

  add(name, score) {
    this.scores.push({ player: name, score: score });
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.scores = JSON.stringify(this.scores);
  }
}

export default HighscoresApi;
