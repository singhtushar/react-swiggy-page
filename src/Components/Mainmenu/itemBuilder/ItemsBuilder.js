function Item (id, Name, Price, isVeg, isBestSeller, description, img) {
    this.id = id;
    this.Name = Name;
    this.isVeg = isVeg;
    this.Price = Price;
    this.isBestSeller = isBestSeller;
    this.description = description;
    this.image = img;
}

let itemBuilder = function () {
    let id = 0;
    let Name = "";
    let isVeg = false;
    let Prices = 0;
    let isBestSeller = false;
    let description = "";
    let image="";

    return {
        SetId: function (id) {
            this.id = id;
            return this;
        },
        SetName: function (name) {
            this.Name = name;
            return this;
        },
        SetPrice: function (price) {
            this.Price = price;
            return this;
        },
        SetIsVeg: function (isVeg) {
            this.isVeg = isVeg;
            return this;
        },
        SetIsBestSeller: function (isBestSeller) {
            this.isBestsell = isBestSeller;
            return this;
        },
        SetDescription: function (description) {
            this.description = description;
            return this;
        },
        SetImage: function(image){
            this.img = image;
            return this;
        },
        build: function () {
            return new Item(this.id, this.Name, this.Price, this.isVeg, this.isBestSeller, this.description, this.img);
        },
    }

}

export default itemBuilder;