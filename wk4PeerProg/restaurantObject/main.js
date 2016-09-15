class foodItem {
    constructor (name, numCalories, isVegan, isGlutenFree, isCitrusFree){
        this.name=name;
        this.numCalories=calories;
        this.isVegan=vegan; //boolean
        this.isGlutenFree=glutenFree //boolean
        this.isCitrusFree=citrusFree //boolean
    }
    myString () {
        connsole.log(this.name+" has "+this.calories+" calories"+" Vegan? "+this.isVegan+" contains Gluten:"+this.isGlutenFree+" Contains Citrus: "+this.isCitrusFree)
    }
}

//menu
class foodMenu {
    constructor ()
}
class drinkMenu {
    constructor (name)
}
//restaurant
class restaurant {
    constructor (dinerName, description, menu){
    this.dinerName=dinerName,
    this.description=description,
    this.menu=menu,
    }
};


//customer
class pickyCustomer {
    constructor (patronName, calLimit, vegan, glutenAlergy, citrus){
        this.patronName=patronName;
        this.calLimit=calLimit
        this.vegan=vegan
        this.glutenAlergy=glutenAlerty
        this.citrus=citrus
    }
}

var Sarah=new pickyCustomer(
    'Sarah',
    600,
    true,
    true,
    false,
);
