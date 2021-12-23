class AddressBook  //--UC1 Ability to create a Address Book
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(firstName,lastName,address,city,state,zip,phone,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phone=phone;
        this.email=email;
    }
    get firstName(){return this._firstName;}
    set(firstName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(firstName))
        this._firstName=firstName;
        else throw 'Firstname is invalid';
    }
    get lastName(){return this._lastName;}
    set (lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(lastName))
        this._lastName=lastName;
        else throw 'Lastname is invalid';
    }
    get address(){return this._address;}
    set(address)
    {
        let adRegex= RegExp('^[A-Z]{1}[a-z0-9]{3,}');
        if(adRegex.test(address))
        this._address = address;
        else throw 'Address is invalid';
    }
    get city(){ return this._city;}
    set(city)
    {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(cityRegex.test(city))
        this._city=city;
        else throw 'City name is invalid';
    }
    get state(){return this._state;}
    set(state)
    {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(stateRegex.test(state))
        this._state=state;
        else throw 'State name is invalid';
    }
    get zip(){return this._zip;}
    set(zip)
    {
        let zipRegex = RegExp('^[0-9 ]{6}');
        if(zipRegex.test(zip))
        this._zip=zip;
        else throw 'Zip is invalid';
    }
    get phone(){return this._phone;}
    set(phone)
    {
        let phoneRegex = RegExp('^[0-9]{10}');
        if(phoneRegex.test(phone))
        this._phone=phone;
        else throw 'Phone number is invalid';
    }
    get email(){return this._email;}
    set(email)
    {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
        if(emailRegex.test(email))
        this._email=email;
        else throw 'Email pattern not valid';
    }

    toString()
    {
        return "\nFirstName:"+this.firstName+" ,LastName:"+this.lastName+" ,Address:"+this.address+" ,City:"+this.city+" ,State:"+this.state+" Zip:"+this.zip+" ,Phone:"+this.phone+",Email:"+this.email;
    }
}
try
{
    let address = new AddressBook("Aaryan","Shekhar","Saket","Delhi","New Delhi",110062,8447831498,"aaryan.shekhar@gmail.com");
    console.log(address);
}
catch(e){
    console.error(e);
}

//UC-3


let addressArr = new Array();
try
{
    let address1 = new AddressBook("Ram","Singh","MH79","Pune","Maharashtra",838666,8483932090,"Ram@gmail.com");
    let address2= new AddressBook("Rahul","Gandhi","GJ66","Surat","Gujarat",718302,6654205303,"Rahul@gmail.com");
    let address3= new AddressBook("Ramesh","Sarkar","UK17","DehraDun","UK",513302,8992705303,"Ramesh@gmail.com");
    let address4= new AddressBook("Divya","Singh","JK59","Katra","Jammu",714302,9876505303,"Divya@gmail.com");

    addressArr.push(address1);
    addressArr.push(address2);
    addressArr.push(address3);
    addressArr.push(address4);
    console.log(addressArr);
}
catch(e)
{
    console.error(e);
}

//UC-4

// function SearchName(addressbook)
// {
//     if(addressbook.firstName=="Rahul") return addressbook;
// }
// let searchResult =addressArr.find(SearchName);
// console.log("Result after searching "+searchResult);

//UC5-Delete an element using the firstname
// function DeleteAddress(addressbook){
//     let resultAddress = SearchName(addressbook);
//     var index= addressArr.indexOf(resultAddress);
//     return index;
// }
// let deleteIndex=addressArr.find(DeleteAddress);
// console.log(addressArr.splice(deleteIndex,3)+" is deleted")


//  let n=0;      //UC6
// function GetTotal(a){
//    if(a!=null){
//        ++n;
//    }
//    return n;
// }
// console.log("Total count of addresses "+addressArr.reduce(GetTotal,0));

// //UC7
// function CheckDuplicate(a)
// {
//     if(a.lastName.includes("Singh"))
//     ++n;
// return n;
// }
// let count = addressArr.filter(CheckDuplicate);
// if(count=1)
// {
//     console.log("There is no duplicate entry for the name");
// }
// else if(count>1)
// {
//     console.log("There is duplicate entry for the given name")
// }    

//UC8
let peopleFromCity=addressArr.filter(a=>a.city.includes("Pune"));
console.log("People from the given city are: "+peopleFromCity);
