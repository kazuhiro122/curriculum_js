//問1：以下の要件を満たすように「たい焼きクラス」を作成してください。
class Taiyaki {

    constructor(menu) {
        this.menu = menu;
    }

    handOff() {
        console.log(`中身は${this.menu}です`);
    }

}
let anko = new Taiyaki(`あんこ`);
anko.handOff();
let cream = new Taiyaki(`クリーム`);
cream.handOff();
let cheese = new Taiyaki(`チーズ`);
cheese.handOff();